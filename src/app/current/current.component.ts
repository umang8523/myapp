import { Component, OnInit } from '@angular/core';
import { PageHandlerService } from '../page-handler.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  currentPage: number = 10;

  constructor(private pageHandlerService: PageHandlerService) { 
    this.pageHandlerService.currentPage.subscribe(value => {
      this.currentPage = value;
    })
  }

  ngOnInit() {
  }

}
