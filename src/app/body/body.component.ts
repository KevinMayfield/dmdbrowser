import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
// @ts-ignore
import ValueSet = fhir.ValueSet;
import {TerminologyService} from "../terminology.service";
import {MedicationDataSource} from "../medication-data-source";
// @ts-ignore
import ValueSetExpansionContains = fhir.ValueSetExpansionContains;
// @ts-ignore
import Medication = fhir.Medication;
import {MatTableDataSource} from "@angular/material/table";
// @ts-ignore
import ParametersParameter = fhir.ParametersParameter;
// @ts-ignore
import Parameters = fhir.Parameters;
// @ts-ignore
import CodeableConcept = fhir.CodeableConcept;
// @ts-ignore
import Coding = fhir.Coding;

export class CodeElement {
    code: string;
    display: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

    vmp = false;
    amp = false;
    ampp = false;
    vmpp= false;
    vtm= false;


  notes : string[] = [];

  queryCnt = 0;

  conceptid : string= undefined;

  display : string = undefined;

  codeSystem : "http://snomed.info/sct";

  childDataSource: MedicationDataSource;

    parentCodes: CodeElement[] = [
    ];
    parentDataSource: MatTableDataSource<CodeElement>;

  medication : Medication = undefined;

  workerMedication : Medication = undefined;

  codeableConcept : CodeableConcept = undefined;

  product : any = undefined;
    productDisplay : any = undefined;
  //medicationProduct : IMedicinalProduct = undefined;


  childDisplayedColumns = [ 'display'];

  constructor(private terminologyService: TerminologyService,

              private router: Router,
              private route: ActivatedRoute) {
      this.parentDataSource = new MatTableDataSource<CodeElement>();
  }

  ngOnInit(): void {
      this.doSetup();

      this.route.url.subscribe( url => {
        this.doSetup();
      });
  }

    doSetup() {

        const tempid = this.route.snapshot.paramMap.get('conceptid');
        if (this.conceptid !== tempid) {
            this.conceptid = tempid;
            if (this.conceptid != undefined) {
                this.setup(this.conceptid);
            }

        }
    }

    select(medication: ValueSetExpansionContains) {
        this.router.navigate([ medication.code ] );
    }

  setup(medication: string) {


      this.product = {};
      this.vmp = false;
      this.amp = false;
      this.ampp = false;
      this.vmpp= false;
      this.vtm= false;
      this.notes = [];

      this.codeableConcept = {};
      this.codeableConcept.coding = [
         this.getCoding() ];

      const url = '/CodeSystem/$lookup?code='+ medication +'&system=http%3A%2F%2Fsnomed.info%2Fsct&version='+this.terminologyService.getSNOMEDVersion()+'&property=*';
      this.terminologyService.getResource(url).subscribe(
          result => {
              this.processProducts(result);
              this.product = result.parameter;

          }
      );
        const parameters = {
            "resourceType": "Parameters",
            "parameter": [
                {
                    "name": "valueSet",
                    "resource": {
                        "resourceType": "ValueSet",
                        "compose": {
                            "include": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "filter": [
                                        {
                                            "property": "parent",
                                            "op": "=",
                                            "value": medication
                                        }
                                    ],
                                    "version": this.terminologyService.getSNOMEDVersionRaw()
                                }
                            ]
                        }
                    }
                },
                {
                    "name": "count",
                    "valueInteger": 10000
                }
            ]
        };
      this.terminologyService.post('/ValueSet/$expand?_format=json&elements=expansion.contains.total,expansion.contains.contains',parameters).subscribe(
          result => {
              //this.product = result.parameter;

              const valueSet = <ValueSet>result;
              if (valueSet.expansion != undefined ) {
                  this.childDataSource = new MedicationDataSource(valueSet.expansion.contains);
              }
          },
          err => console.error('Observer got an error: ' + err),
           () => {

           },

      );

  }

  getCoding() {
      return  {
          "system" : this.codeSystem,
          "code" : this.conceptid,
          "display": this.display
      }
  }
    processProducts(parameters : Parameters ) {
        this.parentCodes =[  ];
        // Don't know name of concept at this point
        for ( const parameter of parameters.parameter) {
            if (parameter.name === 'display') {
                this.display = parameter.valueString;
            }
            if (parameter.name === 'system') {
                this.codeSystem = parameter.valueString;
            }
        }
        this.workerMedication = {
            code: {}
        };
        this.workerMedication = {
            "code" : {}
        };
        this.workerMedication.code.coding = [
            this.getCoding()  ];
        this.medication = {
            "code" : this.workerMedication.code
        };

        this.codeableConcept = {};
        this.codeableConcept.coding = [
            this.getCoding() ];
        this.queryCnt=0;
        this.processParameter(parameters.parameter);

    }

  processParameter(params : ParametersParameter[] ) {
      var manfacturedForm = false;
      var unit = false;
      var unitOfUse = false;
      var ingredient = false;
      var scheduled = false;
      if (params.length>0 && params[0].name === 'code' && params[0].valueCode != undefined && params[0].valueCode === 'parent' ) {
          this.getParents(params);
      }

      for ( const parameter of params) {
          // Process parent codes first .... not robust as second call could in theory beat first call
          if (parameter.valueCode != undefined) {
              this.getDisplay(parameter, manfacturedForm, unit, unitOfUse, ingredient,scheduled);
              if (parameter.valueCode == '30523011000036108') manfacturedForm = true;
              if (parameter.valueCode == '700000081000036101') ingredient = true;
              if (parameter.valueCode == '177631000036102') unit = true;
              if (parameter.valueCode == '30548011000036101') unitOfUse = true;
              if (parameter.valueCode == '13089101000001102') scheduled = true;

          }
          if (parameter.part !== undefined && parameter.part.length> 0) {
              this.processParameter(parameter.part);
          }
      }



  }


  getDisplay(param : ParametersParameter, manfacturedForm,unit, unitOfUse, ingredient, scheduled) {

      if (this.isNumber(param.valueCode)) {

          switch (param.valueCode) {
              case '30450011000036109': // Medicinal Product
                  this.vmp = true;
                  param.valueCode = 'Medicinal Product (30450011000036109)';
                  break;
              case '30560011000036108' : // Trade Product
                  this.amp = true;
                  param.valueCode = 'Trade Product (30560011000036108)';
                  break;
              case '30404011000036106':
                  param.valueCode = 'trade product pack';
                  this.ampp = true;
                  break;
              case '30513011000036104': // medicinal product pack
                  this.vmpp = true;
                  param.valueCode = 'medicinal product pack (30513011000036104)';
                  break;
              case '30425011000036101': // - trade product unit of use
                  this.ampp = true;
                  param.valueCode = 'trade product unit of use (30425011000036101)';
                  break;
           /* AU  case '30497011000036103':
                  this.vtm = true;
                  param.valueCod= 'moiety (30497011000036103)';
                  break; */
              case '10363701000001104':
                  this.vtm = true;
                  param.valueCod= 'Virtual Therapeutic Moiety (10363701000001104)';
                  break;
              default:
                  this.queryCnt++;
                  this.terminologyService.getResource('/CodeSystem/$lookup?code=' + param.valueCode + '&system=http%3A%2F%2Fsnomed.info%2Fsct&property=display').subscribe(
                      result => {

                          for (const parameter of result.parameter) {

                              if (parameter.name === 'display') {

                                  var valueString: string = parameter.valueString + ' (' + param.valueCode + ')';
                                  var coding: Coding = {};
                                  coding = {
                                      "system": "http://snomed.info/sct",
                                      "code" : param.valueCode,
                                      "display": parameter.valueString
                                  };
                                  if (manfacturedForm) {

                                      this.workerMedication.form=  {
                                          "coding": [ ]
                                      };
                                      this.workerMedication.form.coding.push(coding);
                                      this.medication = {
                                          "code" : this.workerMedication.code,
                                          "form" : this.workerMedication.form
                                      };
                                      // Above is not displaying
                                      this.notes.push('Form: '+parameter.valueString)
                                  }
                                  if (unitOfUse) {
                                      this.notes.push('Unit Of Use: '+parameter.valueString)
                                  }
                                  if (ingredient) {
                                      this.notes.push('Active Ingredient: '+parameter.valueString)
                                  }
                                  if (unit) {
                                      this.notes.push('Unit: '+parameter.valueString)
                                  }
                                  if (scheduled){
                                      this.notes.push('Scheduled: '+parameter.valueString)
                                  }
                                  // This is a bodge
                                  delete param.valueCode;// = undefined;
                                  // This should be the answer
                                  param.valueCoding = coding;
                              }
                          }
                         // console.log(this.queryCnt);

                      },
                      error => {
                          console.log('err qry' + this.queryCnt);
                          this.queryCnt--;
                          if (this.queryCnt == 0) {
                              //   console.log("clone");
                              //var clone = Object.assign({}, this.product);
                              this.productDisplay = this.product;
                          }
                          console.log(error);
                      },
                      () => {
                          console.log('complete qry '+this.queryCnt);
                          this.queryCnt--;
                          if (this.queryCnt == 0) {
                              //   console.log("clone");
                              //var clone = Object.assign({}, this.product);
                              this.productDisplay = this.product;
                          }
                      }
                  );
          }
      }
  }

  getParents(params : ParametersParameter[] ) {
      for (const parameter of params) {
          if (parameter.valueCode != 'parent' && parameter.name === 'value') {
              var parentCode = parameter.valueCode;
              switch (parentCode) {
                  case '30450011000036109': // Medicinal Product
                  case '30560011000036108' : // Trade Product
                  case '30513011000036104': // medicinal product pack
                  case '30425011000036101': // - trade product unit of use
                  case '30497011000036103':
                  case '30404011000036106':
                  case '10363701000001104': //vtm
                    break;
                  default: {
                      const url = '/CodeSystem/$lookup?code=' + parentCode + '&system=http%3A%2F%2Fsnomed.info%2Fsct&version='+this.terminologyService.getSNOMEDVersion()+'&property=*';
                      this.terminologyService.getResource(url).subscribe(
                          result => {
                              for (const parameter of result.parameter) {
                                  if (parameter.name === 'display') {
                                      this.parentCodes.push({
                                          'code': parentCode,
                                          'display': parameter.valueString
                                      })
                                      this.parentDataSource.data = this.parentCodes;
                                  }
                              }
                          }
                      );
                  }
              }
          }
      }
  }



    isNumber(value: string | number): boolean
    {
        return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
    }

}
