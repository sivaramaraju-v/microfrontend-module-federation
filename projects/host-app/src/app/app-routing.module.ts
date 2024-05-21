import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = 'http://localhost:4300/remoteEntry.js';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'sites',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: 'mfeApp',
        exposedModule: './SitesModule',
      })
        .then((m) => m.SitesModule)
        .catch((err) => console.log(err));
    },
  },
  {
    path: 'products',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: 'mfeApp',
        exposedModule: './ProductsModule',
      })
        .then((m) => m.ProductsModule)
        .catch((err) => console.log(err));
    },
  },
  {
    path: 'opportunities',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: 'mfeApp',
        exposedModule: './OpportunitiesModule',
      })
        .then((m) => m.OpportunitiesModule)
        .catch((err) => console.log(err));
    },
  },
];
// opportunities

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
