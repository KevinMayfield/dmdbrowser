import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';
// @ts-ignore
import Coding = fhir.Coding;


export class CodingDataSource extends DataSource<any> {
  constructor(
              public contains: Coding[]
  ) {
    super();
  }

  private dataStore: {
    contains: Coding[]
  };

  connect(): Observable<Coding[]> {

  //  console.log('contains DataSource connect '+this.patientId);

    const _contains: BehaviorSubject<Coding[]> =<BehaviorSubject<Coding[]>>new BehaviorSubject([]);

    this.dataStore = { contains: [] };


   // console.log(this.contains);
    if (this.contains !== [] && this.contains != undefined) {
      for (const questionnaire of this.contains) {
        this.dataStore.contains.push(<Coding> questionnaire);
      }
      _contains.next(Object.assign({}, this.dataStore).contains);
    }
   return _contains.asObservable();
  }

  disconnect() {}
}
