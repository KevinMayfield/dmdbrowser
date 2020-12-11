import { Component, OnInit } from '@angular/core';
import {MedicationDataSource} from "../medication-data-source";
import {TerminologyService} from "../terminology.service";
// @ts-ignore
import ValueSet = fhir.ValueSet;
// @ts-ignore
import ValueSetExpansionContains = fhir.ValueSetExpansionContains;
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private terminologyService: TerminologyService,
              private router: Router,
              private route: ActivatedRoute) { }

  searchInput;

  dataSource: MedicationDataSource;

  displayedColumns = [ 'display'];


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
    this.router.navigate([ medication.code ], {relativeTo: this.route});
  }

}
