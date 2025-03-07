import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
]
