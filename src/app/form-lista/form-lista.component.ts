import { Component } from '@angular/core';

@Component({
  selector: 'app-form-lista',
  standalone: true,
  imports: [],
  templateUrl: './form-lista.component.html',
  styleUrl: './form-lista.component.scss'
})
export class FormListaComponent {
  lstAlumnos = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
}
