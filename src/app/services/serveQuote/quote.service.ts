import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Quote } from 'src/app/classes/ClassQuote/quote';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quote:Quote | any;

  constructor(private http:HttpClient) { 

    this.quote = new Quote('', '', 0)

   }

   quoteRequest(){

    interface ApiResp{
      quote:string,
      author:string,
      id:number,
    }

    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResp>(environment.APIurl).toPromise().then(response=>{
        this.quote.quote = response?.quote,
        this.quote.author = response?.author,
        this.quote.id = response?.id

        resolve()
      },

      error=>{
        this.quote.quote = "Never ever give up yoh!",
        this.quote.author = "Victor Shaviya",
        this.quote.id = 1

        reject(error)
      })
    })

    return promise

   }
}
