import { Component, OnInit } from '@angular/core';
import {MedicationDataSource} from "../medication-data-source";
import {TerminologyService} from "../service/terminology.service";
// @ts-ignore
import ValueSet = fhir.ValueSet;
// @ts-ignore
import ValueSetExpansionContains = fhir.ValueSetExpansionContains;
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private terminologyService: TerminologyService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  searchInput;

  drugName = '';

  dataSource: MedicationDataSource;

  displayedColumns = [ 'display'];


  ngOnInit(): void {
    this.authService.doAuthenticate();

    this.terminologyService.getDrugNameChange().subscribe(name => {
      this.drugName = name;
    })
  }

  search(name) {

    if (name != undefined) {
      const url = '/ValueSet/$expand?_format=json&url='+this.terminologyService.getMedicationValueSet()+'&filter='+encodeURI(name)+'&includeDesignations=true&count=100&elements=expansion.contains.code,expansion.contains.display,expansion.contains.fullySpecifiedName,expansion.contains.active';
      //const url = '/ValueSet/$expand?_format=json&url=https%3A%2F%2Fhealthterminologies.gov.au%2Ffhir%2FValueSet%2Faustralian-medication-1&filter='+name+'&includeDesignations=true&count=100&elements=expansion.contains.code,expansion.contains.display,expansion.contains.fullySpecifiedName,expansion.contains.active';
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

  getType(contains : ValueSetExpansionContains) {
    for (const desingation of contains.designation) {
      var splitted = desingation.value.split("(");
      if (splitted.length > 1) {
        return splitted[splitted.length-1].replace(')','');
      }
    }
    return '';
  }

}
