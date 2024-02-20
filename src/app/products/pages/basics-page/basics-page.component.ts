import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

    nameLower: string = 'carlos'
    nameUpper: string = 'CARLOS'
    fullName: string = 'cArLoS cAsTrO'

    customDate: Date = new Date()
}
