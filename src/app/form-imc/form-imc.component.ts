import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrl: './form-imc.component.scss'
})
export class FormImcComponent {
  frmImc = {
    nombre: null,
    peso: null,
    talla: null, 
    resultado: 0
  };
  mostrarResultado = false;

  lstPacientes: Paciente = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  calcularSuma(){
    this.frmImc.resultado = Number(this.frmImc.peso)  + Number(this.frmImc.talla);
    this.mostrarResultado = true;
    this.lstPacientes.push({id: 1, nombre: String(this.frmImc.nombre), imc: this.frmImc.resultado });
  }
}
type Paciente = Array<{ id: number; nombre: string, imc: number }>;