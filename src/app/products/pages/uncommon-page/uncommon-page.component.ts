import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  // i18n Select
  public name: string = 'Santiago';
  public gender: 'female' | 'male' = 'male';
  public invitationMap = {
    'female': 'Invitarla',
    'male': 'Invitarlo'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }


  // i18nPlural

  public clients:string[] = ['Santiago','Melissa','Juan','Carlos','Pepito','Ramón','Chavo'];
  public clientsMap={
    '=0': 'no tenemos clientes esperando.',
    '=1': 'Tenemos 1 cliente esperando.',
    'other': 'Tenemos # clientes esperando.'
  }
  deletClient():void{
    this.clients.shift();
  }


  //KeyValue pipe

  public person = {
    name: 'Santiago',
    age: 30,
    address:'Bogotá, Colombia'
  }

  //Async Pipe

  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value)),
  );

  public promiseValue : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 2000);
  })

}
