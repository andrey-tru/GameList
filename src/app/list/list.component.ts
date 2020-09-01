import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'gl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService]
})

export class ListComponent {

  public page: number;

  public collectionSize: number;

  public itemsPerPage: number;
  
  game;
  gameStr;
  //

  searchStr = '';

  qualStr = '6';
  
  list = [];


  constructor(private listService: ListService) {}
 
  ngOnInit() {
    this.page = 1;
    this.itemsPerPage = Number(this.qualStr);
    this.loadPage();
  }
  
  onPageChanged(pageNumber){
    this.loadPage();
  }

  private loadPage() {
    var startIndex = this.itemsPerPage * (this.page - 1);
    this.collectionSize = this.listService.list.length;
    this.list = this.listService.list.slice(startIndex, startIndex + this.itemsPerPage);
    this.game = this.collectionSize;
  }
}
