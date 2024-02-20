import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

    // i18n Select
    name = "Carlos"
    gender: 'male' | 'female' = 'male'
    invitationMap = {
      male: 'conocerlo',
      female: 'conocerla'
    }

    changeClient() {
        this.name = 'Ana'
        this.gender = 'female'
    }

    // i18n Plural
    clients = ['Carlos', 'Ana', 'Pedro', 'Maria']
    clientsMap = {
      '=0': 'no tenemos ningún cliente esperando',
      '=1': 'tenemos un cliente esperando',
      other: 'tenemos # clientes esperando'
    }

    deleteClient() {
      this.clients.pop()
    }

    // Keyvalue Pipe
    person = {
      name: 'Carlos',
      age: 23,
      address: 'Calle 123'
    }

    // Async Pipe
    myObservable = interval(2000)
      .pipe(
        tap(value => console.log('tap', value))
      )

      promiseValue: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Tenemos data de promesa')
        }, 3500)
      })

}
