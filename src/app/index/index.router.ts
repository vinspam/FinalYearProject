import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
        {
            path:'',
            loadChildren:() => import('../pages/welcome/welcome.module').then(m => m.WelcomePageModule)
        }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IndexRouter {}