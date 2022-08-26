import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorrentsService {


 /*https://github.com/Ryuk-me/Torrents-Api*/ 
providers = {
  yify:{"api":"https://yts.torrentbay.to/api/v2/list_movies.json"},
  localhost:{
    "api":"http://localhost:8080/api/",
    "providers":[
      "1337x",
      "NyaaSi",
      "YTS",
      "PirateBay",
      "Torlock",
      "EzTvio",
      "TorrentGalaxy",
      "Rarbg",
      "Zooqle",
      "KickAss",
      "Bitsearch",
      "Glodls",
      "MagnetDL",
      "Limetorrent",
      "TorrentFunk",
      "TorrentProject"
    ]
  }
}

  constructor() { }

searchOn(searchString:String,providers = ["YTS"]){
  var promises:any = []
  providers.forEach(element => {
    if (searchString.length>0) searchString = element + "/" + searchString 
    console.log(this.providers.localhost.api+searchString)
    promises.push(fetch(this.providers.localhost.api+searchString))
  });
  return promises
}

searchInYify(searchString:string){
  if (searchString.length>0) searchString = "&query_term="+searchString
  return fetch(this.providers.yify.api+searchString)
}

}
