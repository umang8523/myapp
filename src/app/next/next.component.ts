import { Component, OnInit } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  nextPage: number = 11;

  constructor(private pageHandlerService: PageHandlerService) { 
    this.pageHandlerService.nextPage.subscribe(value => {
      this.nextPage = value;
    })
  }
  
  ngOnInit() {
  }

  nextPageClickHandler() {
    this.pageHandlerService.currentPage.next(this.nextPage);
    this.pageHandlerService.previousPage.next(this.nextPage-1);
    this.nextPage = this.nextPage+1;
  }

}
