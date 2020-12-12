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
import {CodingDataSource} from "../coding-data-source";
import { R4 } from  '@ahryman40k/ts-fhir-types';


export class CodeElement {
    code: string;
    system? : string;
    display: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

drugType : string = undefined;
unavailable: string = undefined;
unavailableSub = 'VMP non-availability indicator';
    discontinued :string = undefined;


  notes : string[] = [];

  queryCnt = 0;

  conceptid : string= undefined;

  display : string = undefined;

  scheduled : string = undefined;

  codeSystem : "http://snomed.info/sct";

  childDataSource: MedicationDataSource;

  productPharm : R4.IMedicinalProductPharmaceutical = undefined;

  pharmaceuticalProduct : R4.IMedicinalProductPharmaceutical = {
      resourceType : 'MedicinalProductPharmaceutical',
      administrableDoseForm : {},
      ingredient : [],
      routeOfAdministration : []
  };

    medicinalProduct : R4.IMedicinalProduct = undefined;

    medicinal : R4.IMedicinalProduct = {
        resourceType : 'MedicinalProduct',
        name : undefined
    };

  ampDataSource: MatTableDataSource<CodeElement>;

    parentCodes: CodeElement[] = [
    ];
    parentDataSource: MatTableDataSource<CodeElement>;
  ampCodes : CodeElement[] = [];
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
      this.ampDataSource = new MatTableDataSource<CodeElement>();
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


    clear() {

        this.product = {};
        this.drugType = undefined;
        this.discontinued = undefined;
        this.notes = [];
        this.ampCodes = [];

        this.workerMedication = {
            code: {}
        };

        this.productPharm  = undefined;
        this.pharmaceuticalProduct = {
            resourceType : 'MedicinalProductPharmaceutical',
            administrableDoseForm : {},
            ingredient : [],
            routeOfAdministration : []
        };

        this.parentCodes =[  ];
        this.ampCodes = [];
        this.unavailable = undefined;
        this.ampDataSource.data = this.ampCodes;

        this.scheduled = undefined;

        this.codeableConcept = {};
        this.codeableConcept.coding = [
            this.getCoding() ];
        this.queryCnt=0;
    }

  setup(medication: string) {

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

        this.clear();
        // Don't know name of concept at this point
        for ( const parameter of parameters.parameter) {
            if (parameter.name === 'display') {
                this.display = parameter.valueString;
            }
            if (parameter.name === 'system') {
                this.codeSystem = parameter.valueString;
            }
        }
        this.workerMedication.code.coding = [
            this.getCoding()  ];
        this.medication = {
            "code" : this.workerMedication.code
        };
        this.codeableConcept = {};
        this.codeableConcept.coding = [
            this.getCoding() ];

        this.pharmaceuticalProduct.identifier = [];
        this.pharmaceuticalProduct.identifier.push(
            {
                "system": this.getCoding().system,
                "value": this.getCoding().code
            }
        )

        this.processParameter(parameters.parameter);

    }

  processParameter(params : ParametersParameter[] ) {
      var manfacturedForm = false;
      var unit = false;
      var unitOfUse = false;
      var ingredient = false;
      var scheduled = false;
      var synonym = false;
      var prescribingStatus= false;
      var amp =false;
      var unavailable = false;
      var discont = false;
      var route = false;
      if (params.length>0 && params[0].name === 'code' && params[0].valueCode != undefined && params[0].valueCode === 'parent' ) {
          this.getParents(params);
      }

      for ( const parameter of params) {
          // Process parent codes first .... not robust as second call could in theory beat first call
          if (parameter.valueCode != undefined) {
              this.getDisplay(parameter, manfacturedForm, unit, unitOfUse, ingredient,scheduled,synonym,prescribingStatus, amp, unavailable,discont, route);
              if (parameter.valueCode == '30523011000036108' ||
                  parameter.valueCode == '732947008' ||
              parameter.valueCode == '10362901000001105') manfacturedForm = true;

              if (parameter.valueCode == '700000081000036101' ||
                  parameter.valueCode == '127489000'
              || parameter.valueCode == '10362801000001104') ingredient = true;
              if (parameter.valueCode == '177631000036102'
              || parameter.valueCode == '732945000') unit = true;
              if (parameter.valueCode == '30548011000036101') unitOfUse = true;
              if (parameter.valueCode == '13089101000001102') scheduled = true;
              if (parameter.valueCode == '900000000000013009') synonym = true;
              if (parameter.valueCode == '8940001000001105') prescribingStatus= true;
              if (parameter.valueCode == '10362701000001108') amp = true;
              if (parameter.valueCode == '8940601000001102') unavailable = true;
              if (parameter.valueCode == '8941901000001101') discont = true;
              if (parameter.valueCode == '13088401000001104') route= true;
          }
          if (parameter.part !== undefined && parameter.part.length> 0) {
              this.processParameter(parameter.part);
          }
      }



  }


  getDisplay(param : ParametersParameter, manfacturedForm,unit, unitOfUse, ingredient, scheduled, synonym,prescribingStatus, amp, unavailable,discont, route) {

      if (this.isNumber(param.valueCode)) {

          switch (param.valueCode) {
              case '30450011000036109': // Medicinal Product
              case '10364001000001104':
              case '10363801000001108':
                  this.drugType = 'VMP';
                  param.valueCode = 'Medicinal Product ('+param.valueCode +')';
                  break;
              case '30560011000036108' : // Trade Product
              case "9191801000001103":
              case '10363901000001102':
                  this.drugType = 'AMP';
                  param.valueCode = 'Trade Product ('+param.valueCode +')';
                  break;
              case '30404011000036106':
              case '30425011000036101': // - trade product unit of use
                  param.valueCode = 'trade product pack ('+param.valueCode +')';
                  this.drugType = 'AMPP';
                  break;
              case '30513011000036104': // medicinal product pack
              case '8653601000001108':
                  this.drugType = 'VMPP';
                  param.valueCode = 'medicinal product pack ('+param.valueCode +')';
                  break;

           /* AU  case '30497011000036103':
                  this.vtm = true;
                  param.valueCod= 'moiety (30497011000036103)';
                  break; */
              case '10363701000001104':
                  this.drugType = 'VTM';
                  param.valueCode= 'Virtual Therapeutic Moiety ('+param.valueCode +')';
                  break;
              default:
                  this.queryCnt++;
                  const url = '/CodeSystem/$lookup?code='+ param.valueCode +'&system=http%3A%2F%2Fsnomed.info%2Fsct&version='+this.terminologyService.getSNOMEDVersion()+'&property=display';
                  this.terminologyService.getResource(url).subscribe(
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
                                      this.pharmaceuticalProduct.administrableDoseForm = this.workerMedication.form;
                                      // Above is not displaying
                                      this.notes.push('Form: '+parameter.valueString)

                                  }
                                  if (unitOfUse) {
                                      this.notes.push('Unit Of Use: '+parameter.valueString)
                                  }
                                  if (ingredient) {
                                      this.notes.push('Ingredient: '+parameter.valueString);
                                      this.pharmaceuticalProduct.ingredient.push({
                                          "identifier" : {

                                                      "system": "http://snomed.info/sct",
                                                      "value" : param.valueCode
                                          },
                                          "display": parameter.valueString
                                      });
                                  }
                                  if (unit) {
                                      this.notes.push('Unit: '+parameter.valueString)
                                  }
                                  if (scheduled){
                                      this.notes.push('Scheduled: '+parameter.valueString);
                                      if (!(parameter.valueString.indexOf('No Cont')==0)) this.scheduled = parameter.valueString;
                                  }
                                  if (synonym){
                                      this.notes.push('Synonym: '+parameter.valueString)
                                  }
                                  if (prescribingStatus) {
                                      this.notes.push('Prescribing Status: '+parameter.valueString)
                                  }
                                  if (amp) {
                                      this.ampCodes.push(coding);
                                      this.ampDataSource.data = this.ampCodes;
                                  }
                                  if (unavailable) {
                                      if (!(parameter.valueString.startsWith("Available"))) this.unavailable =parameter.valueString;
                                  }
                                  if (discont) {
                                      this.discontinued= parameter.valueString;
                                  }
                                  if (route) {
                                      this.notes.push('Route: '+parameter.valueString);

                                        this.pharmaceuticalProduct.routeOfAdministration = [];
                                          this.pharmaceuticalProduct.routeOfAdministration.push({
                                              "code" : {
                                                  coding : [
                                                      {
                                                          "system": "http://snomed.info/sct",
                                                          "code" : param.valueCode,
                                                          "display": parameter.valueString
                                                      }
                                                  ]
                                              }
                                          });

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

                          this.queryCnt--;
                          if (this.queryCnt == 0) {
                              //   console.log("clone");
                              //var clone = Object.assign({}, this.product);
                              this.productDisplay = this.product;
                          }
                          console.log(error);
                      },
                      () => {

                          this.queryCnt--;
                          if (this.queryCnt == 0) {
                              //   console.log("clone");
                              //var clone = Object.assign({}, this.product);
                              this.productDisplay = this.product;
                              if (this.pharmaceuticalProduct.routeOfAdministration.length>0 ) {
                                  this.productPharm = this.pharmaceuticalProduct;
                              }
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
                  case "9191801000001103": //trade family
                  case '350295000': // oral form dose
                  case '440131009':
                  case '10364001000001104' : // 'ampp'
                  case '8653601000001108':
                  case '10363901000001102':
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
