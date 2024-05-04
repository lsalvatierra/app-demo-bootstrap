import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-suma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-suma.component.html',
  styleUrl: './form-suma.component.scss'
})
export class FormSumaComponent {
  frmSuma = {
    numero1: null,
    numero2: null, 
    resultado: 0
  };
  mostrarResultado = false;

  calcularSuma(){
    this.frmSuma.resultado = Number(this.frmSuma.numero1)  + Number(this.frmSuma.numero2);
    this.mostrarResultado = true;
  }
}
