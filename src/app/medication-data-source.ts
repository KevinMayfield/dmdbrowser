import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';
// @ts-ignore
import ValueSetExpansionContains = fhir.ValueSetExpansionContains;


export class MedicationDataSource extends DataSource<any> {
  constructor(
              public contains: ValueSetExpansionContains[]
  ) {
    super();
  }

  private dataStore: {
    contains: ValueSetExpansionContains[]
  };

  connect(): Observable<ValueSetExpansionContains[]> {

  //  console.log('contains DataSource connect '+this.patientId);

    const _contains: BehaviorSubject<ValueSetExpansionContains[]> =<BehaviorSubject<ValueSetExpansionContains[]>>new BehaviorSubject([]);

    this.dataStore = { contains: [] };


    if (this.contains !== []) {
      for (const questionnaire of this.contains) {
        this.dataStore.contains.push(<ValueSetExpansionContains> questionnaire);
      }
      _contains.next(Object.assign({}, this.dataStore).contains);
    }
   return _contains.asObservable();
  }

  disconnect() {}
}
