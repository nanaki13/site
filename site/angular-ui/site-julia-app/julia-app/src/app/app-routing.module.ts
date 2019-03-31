import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';


/* import { ThemeListComponent } from './theme-list/theme-list.component';
import { OeuvreListComponent } from './oeuvre-list/oeuvre-list.component'; */

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {  path: 'content/:id/:name', component: ContentComponent }, {  path: 'menu/:id/:name', component: SubMenuComponent }
  /*{ path: 'oeurvre', component: OeuvreListComponent },
  { path: 'theme', component: ThemeListComponent },*/
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
