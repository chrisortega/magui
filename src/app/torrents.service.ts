import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorrentsService {

providers = {
  yify:{"api":"https://yts.mx/api/list_movies.json?query_term="}
}

  constructor() { }

searchInYify(searchString:string){
  return fetch(this.providers.yify.api+=searchString)
}

}
