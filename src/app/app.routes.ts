import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';
import { PostsComponent } from './pages/posts/posts.component';
import { CurriculosComponent } from './pages/curriculos/curriculos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { VagasComponent } from './pages/vagas/vagas.component';

export const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
    },
    {
      path: 'signup',
      component: SignUpComponent,
    },
    {
      path: 'posts',
      component: PostsComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'curriculos',
      component: CurriculosComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'sobre',
      component: SobreComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'vagas',
      component: VagasComponent,
      canActivate: [AuthGuard],
    },
  ];
  
