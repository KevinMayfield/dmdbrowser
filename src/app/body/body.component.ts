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
import {
    CodeSystem_PropertyTypeKind,
    IMedicinalProduct,
    IParameters,
    RTTI_Coding
} from "@ahryman40k/ts-fhir-types/lib/R4";

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

  searchInput;

  dataSource: MedicationDataSource;

  childDataSource: MedicationDataSource;

    parentCodes: CodeElement[] = [
    ];

    parentDataSource : any[] = [];
  medication : Medication = undefined;

  product : any = undefined;
  //medicationProduct : IMedicinalProduct = undefined;

  displayedColumns = [ 'display'];

  childDisplayedColumns = [ 'display'];

  constructor(private terminologyService: TerminologyService,

              private router: Router,
              private route: ActivatedRoute) { }

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
      console.log(medication);
      this.medication = {
          code: {}
      };
      this.product = {};
      this.medication.code.coding = [
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
  processProducts(parameters : IParameters ) {
      this.parentCodes =[  ];
      for ( const parameter of parameters.parameter) {
          //console.log(parameter.name);
          if (parameter.name === 'property' && parameter.part.length > 1) {
              var propertyType = parameter.part[0].valueCode;
              var propertyValue = parameter.part[1].valueCode;
              console.log(propertyType + ' - '+ propertyValue);
              if (propertyType === 'parent') {
                    this.addParent( propertyValue);
              }

          }
      }
  }

  addParent(parentCode : string) {
        switch (parentCode) {
            case '30450011000036109': // Medicinal Product
            case '30560011000036108' : // Trade Product
            case '30513011000036104': // medicinal product pack
            case '30425011000036101': // - trade product unit of use
                break;
            default: {
                const url = '/CodeSystem/$lookup?code='+ parentCode +'&system=http%3A%2F%2Fsnomed.info%2Fsct&version=http%3A%2F%2Fsnomed.info%2Fsct%2F32506021000036107%2Fversion%2F20201130&property=*';
                this.terminologyService.getResource(url).subscribe(
                    result => {
                        console.log(parentCode);
                        //console.log(result);
                        for ( const parameter of result.parameter) {
                            //console.log(parameter.name);
                            if (parameter.name === 'display' ) {
                                console.log(parentCode +' - '+ parameter.valueString);
                            }
                        }
                    }
                );
            }
        }
  }

}
