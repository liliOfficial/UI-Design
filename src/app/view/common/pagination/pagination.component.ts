import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  constructor() {
    this.paginationInit(this.currentPage, this.totalPage);
  }

  currentPage = 9;
  totalPage = 1;
  startNo = 1;
  endNo = 32;
  totalNo = 567;
  perPage = 100;

  pageOption = [25, 50, 100, 200, 300];
  pageNos;

  paginationInit(totalPage, currentPage) {
    const pageArr = [];
    if (totalPage <= 5) {
      for (let i = 0; i < totalPage; i++) {
        pageArr.push(i + 1);
      }
    } else if (currentPage < 3) {
      for (let i = 0; i < 5; i++) {
        pageArr.push(i + 1);
      }
    } else if (totalPage - currentPage < 2) {
      for (let i = 0; i < 5; i++) {
        pageArr.push(totalPage - 4 + i);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        pageArr.push(currentPage - 2 + i);
      }
    }
    this.pageNos = pageArr;
    this.currentPage = currentPage;
    this.totalPage = totalPage;
  }


  ngOnInit() {
  }

}
