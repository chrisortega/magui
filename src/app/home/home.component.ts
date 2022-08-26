import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../pubsub.service';
import { TorrentsService } from '../torrents.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  magneturl:string = ""
  movies:[] = []
  constructor(private pubsub:PubsubService,private torrents:TorrentsService) { }

  sendMagnet(){    
    this.pubsub.cloud_publisher_function(this.magneturl)  
  }
  
  ngOnInit(): void {
  }

}
