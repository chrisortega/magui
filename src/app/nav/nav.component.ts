import { Component, OnInit } from '@angular/core';
import { TorrentsService } from '../torrents.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchString:String = ""
  results:any
  constructor(private torrent:TorrentsService) { }

  searchOn(){
    var promises = this.torrent.searchOn(this.searchString)
    promises.forEach( (element: Promise<any>) => {
      element
      .then(res=>res.json())
      .then(res=>console.log(this.results = res))
      
    });
    
  }
  ngOnInit(): void {
  }

}
