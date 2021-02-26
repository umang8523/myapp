import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PageHandlerService {

    previousPage: Subject<number> = new Subject();

    currentPage: Subject<number> = new Subject();

    nextPage: Subject<number> = new Subject();

    constructor() {

    }
}