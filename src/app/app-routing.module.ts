import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component'; // Create this component

const routes: Routes = [
  {path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled', // Enables scrolling to anchors
    scrollPositionRestoration: 'enabled' // Restores scroll position on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
