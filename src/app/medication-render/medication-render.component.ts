import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import Patient = fhir.Patient;
// @ts-ignore
import Medication = fhir.Medication;
import {IMedication} from "@ahryman40k/ts-fhir-types/lib/R4";
// @ts-ignore
import CodeableConcept = fhir.CodeableConcept;



@Component({
  selector: 'app-medication-render',
  templateUrl: './medication-render.component.html',
  styleUrls: ['./medication-render.component.scss']
})
export class MedicationRenderComponent implements OnInit {

  editorLanguage: string = 'json';

  @Input()
  medication : Medication;

  @Input()
  codeableConcept : CodeableConcept;

  constructor() { }

  ngOnInit(): void {

  }

}
