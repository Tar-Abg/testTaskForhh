import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalSize: number = 0;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  totalPages = 0;
  currentPage  = 1;
  pageIndex = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalPages = Math.ceil(this.totalSize / 5);
  }

  prev(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.changePage.emit(this.currentPage);
    }
  }

  next(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.changePage.emit( this.currentPage);
    }
  }

  onChangePage(pageIndex: number): void {
    if (pageIndex > 0 && pageIndex <= this.totalPages) {
      this.currentPage = this.totalPages;
      console.log(pageIndex)
      this.changePage.emit(pageIndex);
    }

  }
}
