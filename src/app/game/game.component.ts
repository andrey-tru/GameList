import { Component, Input } from '@angular/core';
import { ListService } from '../list/list.service';

@Component({
  selector: 'gl-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent{

  @Input()  item;

  constructor(private listService: ListService) {}
  
  isMarked = false;

  onClick() {
    if (this.isMarked == false){
      this.isMarked = true;
      this.listService.list.splice(this.item.id, 1);
    } else {
      this.isMarked = false;
    }
  }
}
