import { Component, OnInit } from '@angular/core';
import { TorrentsService } from '../torrents.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items:[] = []
  searchString:string = ""

  constructor(private searchtorrensts:TorrentsService) { }

  ngOnInit(): void {
  }

  perform_searchs(){
    this.searchtorrensts.searchInYify(this.searchString)
    .then(res => console.log(res))
    //.then(res=>console.log(res))
  }

}
