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
import {CodeSystem_PropertyTypeKind, IMedicinalProduct, RTTI_Coding} from "@ahryman40k/ts-fhir-types/lib/R4";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  searchInput;

  dataSource: MedicationDataSource;

  medication : Medication = undefined;

  product : any = undefined;
  //medicationProduct : IMedicinalProduct = undefined;

  displayedColumns = [ 'display', 'code'];

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
            console.log('Stuff Returned');
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
      this.medication.code.coding = [
          {
              "system" : medication.system,
              "code" : medication.code,
              "display": medication.display
          } ];

  }

}
