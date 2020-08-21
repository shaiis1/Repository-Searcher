import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoriesListComponent } from './repositories/repositories-list/repositories-list.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarksListComponent } from './bookmarks/bookmarks-list/bookmarks-list.component';
import { RepositoryItemComponent } from './repositories/repositories-list/repository-item/repository-item.component';
import { HttpClientModule } from '@angular/common/http'
import { SearchReposService } from './Services/searchrepos.service';
import { FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  { path: 'home', component: AppComponent},
  { path: 'search', component: RepositoriesComponent},
  { path:'bookmarks', component: BookmarksComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoriesComponent,
    RepositoriesListComponent,
    BookmarksComponent,
    BookmarksListComponent,
    RepositoryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
