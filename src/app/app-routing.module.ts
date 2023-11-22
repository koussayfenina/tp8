import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueursComponent } from './add-joueurs/add-joueurs.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';

const routes: Routes = [
  {path: "joueurs", component : JoueursComponent},
  {path:"add-joueurs",component:AddJoueursComponent,canActivate:[ProduitGuard]},
  {path: "updatejoueur/:id", component: UpdateJoueurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
