import { Component, OnInit } from '@angular/core';

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
  searchInput;

  notes : string[] = [];

  dataSource: MedicationDataSource;

  childDataSource: MedicationDataSource;

    parentCodes: CodeElement[] = [
    ];
    parentDataSource: MatTableDataSource<CodeElement>;

  medication : Medication = undefined;

  codeableConcept : CodeableConcept = undefined;

  product : any = undefined;
  //medicationProduct : IMedicinalProduct = undefined;

  displayedColumns = [ 'display'];

  childDisplayedColumns = [ 'display'];

  constructor(private terminologyService: TerminologyService,

              private router: Router,
              private route: ActivatedRoute) {
      this.parentDataSource = new MatTableDataSource<CodeElement>();
  }

  ngOnInit(): void {

  }

  search(name) {

    if (name != undefined) {
      const url = '/ValueSet/$expand?_format=json&url=https%3A%2F%2Fhealthterminologies.gov.au%2Ffhir%2FValueSet%2Faustralian-medication-1&filter='+name+'&includeDesignations=true&count=100&elements=expansion.contains.code,expansion.contains.display,expansion.contains.fullySpecifiedName,expansion.contains.active';
      //const url = '/ValueSet/$expand?_format=json&url=http%3A%2F%2Fsnomed.info%2Fsct%2F32506021000036107%3Ffhir_vs&filter=Clobazam&includeDesignations=true&count=100&elements=expansion.contains.code,expansion.contains.display,expansion.contains.fullySpecifiedName,expansion.contains.active'
      this.terminologyService.get(url).subscribe(
          result => {
            const valueSet = <ValueSet>result;

            if (valueSet.expansion != undefined )
            this.dataSource = new MedicationDataSource(valueSet.expansion.contains);
          }
      );
    }
  }

  select(medication: ValueSetExpansionContains) {

      this.medication = {
          code: {}
      };
      this.product = {};
      this.vmp = false;
      this.amp = false;
      this.ampp = false;
      this.vmpp= false;
      this.vtm= false;
      this.notes = [];
      this.medication.code.coding = [
          {
              "system" : medication.system,
              "code" : medication.code,
              "display": medication.display
          } ];
      this.codeableConcept = {};
      this.codeableConcept.coding = [
          {
              "system" : medication.system,
              "code" : medication.code,
              "display": medication.display
          } ];

      const url = '/CodeSystem/$lookup?code='+ medication.code +'&system=http%3A%2F%2Fsnomed.info%2Fsct&version=http%3A%2F%2Fsnomed.info%2Fsct%2F32506021000036107%2Fversion%2F20201130&property=*';
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
                                            "value": medication.code
                                        }
                                    ],
                                    "version": 'http://snomed.info/sct/32506021000036107/version/20201130'
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
              if (valueSet.expansion != undefined )
                  this.childDataSource = new MedicationDataSource(valueSet.expansion.contains);
          }
      );

  }

    processProducts(parameters : Parameters ) {
        this.parentCodes =[  ];
        this.processParameter(parameters.parameter);
    }

  processParameter(params : ParametersParameter[] ) {

      if (params.length>0 && params[0].name === 'code' && params[0].valueCode != undefined && params[0].valueCode === 'parent' ) {
          this.getParents(params);
      }

      for ( const parameter of params) {
          // Process parent codes first .... not robust as second call could in theory beat first call
          if (parameter.valueCode != undefined) {
              this.getDisplay(parameter);
          }
          if (parameter.part !== undefined && parameter.part.length> 0) {
              this.processParameter(parameter.part);
          }
      }

  }


  getDisplay(param : ParametersParameter) {

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
              case '30513011000036104': // medicinal product pack
                  this.vmpp = true;
                  param.valueCode = 'medicinal product pack (30513011000036104)';
                  break;
              case '30425011000036101': // - trade product unit of use
                  this.ampp = true;
                  param.valueCode = 'trade product unit of use (30425011000036101)';
                  break;
              case '30497011000036103':
                  this.vtm = true;
                  param.valueCod= 'moiety (30497011000036103)';
                  break;
              default:
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
                                  // This is a bodge
                                  param.valueCode = valueString;
                                  // This should be the answer
                                  param.valueCoding = coding;
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
                    break;
                  default: {
                      const url = '/CodeSystem/$lookup?code=' + parentCode + '&system=http%3A%2F%2Fsnomed.info%2Fsct&version=http%3A%2F%2Fsnomed.info%2Fsct%2F32506021000036107%2Fversion%2F20201130&property=*';
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
