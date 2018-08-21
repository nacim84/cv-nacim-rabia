import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { CompetencesComponent } from './competences/competences.component';
import { OthersComponent } from './others/others.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { DataTableComponent } from './data-table/data-table.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'datatable', component: DataTableComponent},
  {path: 'others', component: OthersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperiencesComponent,
    FormationsComponent,
    CompetencesComponent,
    OthersComponent,
    MainNavComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
