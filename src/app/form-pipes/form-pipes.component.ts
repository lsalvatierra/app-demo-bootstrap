import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [DatePipe, TitleCasePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.scss'
})
export class FormPipesComponent {
  activeSection = 0;
  alumnos = [
    { nombre: 'Luis Angel'},
    { nombre: 'Jesus Pedro'},
    { nombre: 'Wily'},
    { nombre: 'Luis Gabriel'}
  ];

  cursos = [
    { nombre: 'Desarrollo avanzado de aplicaciones II', precio: 8000 },
    { nombre: 'Base de datos II', precio: 1500 },
    { nombre: 'Proyecto certificador II', precio: 800 },
    { nombre: 'Inglés Técnico II', precio: 300 },
  ];
  currentDate = new Date();



  mostrarAlumnos(): void {
    console.log('displayProducts...');
    this.activeSection = 0;
  }

  mostrarCursos(): void {
    console.log('displayClients...');
    this.activeSection = 1;
  }
}
