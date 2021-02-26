import { Component, OnInit } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {

  previousPage: number = 9;

  constructor(private pageHandlerService: PageHandlerService) { 
    this.pageHandlerService.previousPage.subscribe(value => {
      this.previousPage = value;
    })
  }

  ngOnInit() {
  }

  previousPageClickHandler() {
    if (this.previousPage > 0) {
      this.previousPage = this.previousPage-1;
      this.pageHandlerService.currentPage.next(this.previousPage+1);
      this.pageHandlerService.nextPage.next(this.previousPage+2);
    }
  }
}
