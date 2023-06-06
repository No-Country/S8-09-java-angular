import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Creacion_CuentaComponent } from './auth/register/Creacion_Cuenta/Creacion_Cuenta.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { Primer_EmailComponent } from './auth/register/Primer_Email/Primer_Email.component';
import { Verificar_EmailComponent } from './auth/register/Verificar_Email/Verificar_Email.component';
import { Frente_DNIComponent } from './auth/register/Frente_DNI/Frente_DNI.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ClientDashboardComponent } from './Components/Cliente/client-dashboard/client-dashboard.component';
import { Verificar_TelefonoComponent } from './auth/register/Verificar_Telefono/Verificar_Telefono.component';
import { Datos_PersonalesComponent } from './auth/register/Datos_Personales/Datos_Personales.component';
import { Dorso_DNIComponent } from './auth/register/Dorso_DNI/Dorso_DNI.component';
import { Selfie_DNIComponent } from './auth/register/Selfie_DNI/Selfie_DNI.component';
import { Verificar_Telefono_P2Component } from './auth/register/Verificar_Telefono_P2/Verificar_Telefono_P2.component';
import { Recuperar_ContraseñaComponent } from './auth/login/Recuperar_Contraseña/Recuperar_Contraseña.component';
import { Visar_ComponenteComponent } from './auth/login/Visar_Componente/Visar_Componente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: RegisterComponent },
  { path: 'register/1', component: Creacion_CuentaComponent },
  { path: 'register/2', component: Creacion_CuentaComponent },
  { path: 'register/3', component: Primer_EmailComponent },
  { path: 'register/4', component: Verificar_EmailComponent },
  { path: 'register/5', component: Datos_PersonalesComponent },
  { path: 'register/6', component: Frente_DNIComponent },
  { path: 'register/7', component: Dorso_DNIComponent },
  { path: 'register/8', component: Verificar_TelefonoComponent },
  { path: 'register/9', component: Verificar_Telefono_P2Component },
  { path: 'forgot', component: ForgotPasswordComponent },
  {path: 'login/2', component:Visar_ComponenteComponent},
  {
    path: 'cliente',
    loadChildren: () =>
      import('./Components/Cliente/cliente.module').then(
        (m) => m.ClienteModule
      ),
  },
  {
    path: 'dash',
    component: ClientDashboardComponent,
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
