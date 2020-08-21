import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository.model';
import { HttpClient } from '@angular/common/http';
import { SearchReposService } from 'src/app/Services/searchrepos.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {

  searchRep: string = ''; //the repository that the client is looking for
  
  repositoriesLst: Repository[];
  constructor(private searchReposSvs: SearchReposService){}

  error = null;

  isSearching: boolean = false;

  ngOnInit(): void {

  }

  onSearchClicked(){
    this.repositoriesLst = []; //clear the repositories array to show clean screen while searching
    this.error = null;
    this.isSearching = true;
    this.searchReposSvs.getRepositories(this.searchRep).subscribe(
      data => {
        this.isSearching = false;
        this.repositoriesLst = data;
        console.log(this.repositoriesLst); //log to console for self test
      },
      error => {
        this.isSearching = false;
        console.log(error); //log to console for self test
        this.error = "Something went wrong, please try again!";
      }
    );
  }


}
