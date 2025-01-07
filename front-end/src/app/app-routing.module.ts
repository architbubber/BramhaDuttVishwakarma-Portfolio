import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { CareerComponent } from './views/career/career.component';
import { TeamComponent } from './views/team/team.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { SiteEditorComponent } from './views/devModeOnly/site-editor/site-editor.component';
import { environment } from 'src/environments/environment';



const isDevMode = !environment.production;

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'BramhaDuttVishwakarma-Portfolio',component: HomepageComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'career',component:CareerComponent},
  {path:'team',component:TeamComponent},
  {path:'publications',component:PublicationsComponent},
  {path:'blogs',component:BlogsComponent},
  {
    path: 'edit-site',
    component: SiteEditorComponent
    // loadChildren: () =>
    //   isDevMode
    //     ? import('./views/devModeOnly/site-editor/site-editor.module').then(m => m.SiteEditorModule)
    //     : import('./views/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
