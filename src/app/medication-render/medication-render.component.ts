import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import Patient = fhir.Patient;
// @ts-ignore
import Medication = fhir.Medication;
import {IMedication} from "@ahryman40k/ts-fhir-types/lib/R4";



@Component({
  selector: 'app-medication-render',
  templateUrl: './medication-render.component.html',
  styleUrls: ['./medication-render.component.scss']
})
export class MedicationRenderComponent implements OnInit {

  editorLanguage: string = 'json';

    @Input()

  resource : Medication;

  constructor() { }

  ngOnInit(): void {

  }

}
