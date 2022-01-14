import { Component, OnInit } from '@angular/core';


import { Quote } from 'src/app/classes/ClassQuote/quote';
import { QuoteService } from 'src/app/services/serveQuote/quote.service';

@Component({
  selector: 'app-comp-quotes',
  templateUrl: './comp-quotes.component.html',
  styleUrls: ['./comp-quotes.component.css']
})
export class CompQuotesComponent implements OnInit {

  quote:Quote |any;

  constructor( private quoteService:QuoteService ) { 

   }

  ngOnInit(): void {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote

  }

}
