import { Component, OnInit } from '@angular/core';

const json = '{\n' +
    '    "resourceType": "Medication",\n' +
    '    "id": "vtm-amoxicillin",\n' +
    '    "code": {\n' +
    '        "coding":  [\n' +
    '            {\n' +
    '                "system": "http://snomed.info/sct",\n' +
    '                "code": "27658006",\n' +
    '                "display": "Amoxicillin"\n' +
    '            }\n' +
    '        ]\n' +
    '    },\n' +
    '    "form": {\n' +
    '        "coding":  [\n' +
    '            {\n' +
    '                "system": "http://snomed.info/sct",\n' +
    '                "code": "385049006",\n' +
    '                "display": "Capsule"\n' +
    '            }\n' +
    '        ]\n' +
    '    }\n' +
    '}';



@Component({
  selector: 'app-resource-render',
  templateUrl: './resource-render.component.html',
  styleUrls: ['./resource-render.component.scss']
})
export class ResourceRenderComponent implements OnInit {

  editorLanguage: string = 'json';
  editorVal: string = json;

  constructor() { }

  ngOnInit(): void {
  }

}
