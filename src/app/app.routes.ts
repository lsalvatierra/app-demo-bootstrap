import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormImcComponent } from './form-imc/form-imc.component';
import { FormSumaComponent } from './form-suma/form-suma.component';
import { FormListaComponent } from './form-lista/form-lista.component';
import { FormPipesComponent } from './form-pipes/form-pipes.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'imc', component: FormImcComponent},
    {path: 'suma', component: FormSumaComponent},
    {path: 'lista', component: FormListaComponent},
    {path: 'pipes', component: FormPipesComponent}
];
