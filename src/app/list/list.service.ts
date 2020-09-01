import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ListService {


  list = [
      {img: '../assets/img/game1.jpg', text: 'game1', url: '1', id: '1'},
      {img: '../assets/img/game2.jpg', text: 'game2', url: '2', id: '2'},
      {img: '../assets/img/game3.jpg', text: 'game', url: '3', id: '3'},
      {img: '../assets/img/game4.jpg', text: 'game4', url: '4', id: '4'},
      {img: '../assets/img/game5.jpg', text: 'game5', url: '5', id: '5'},
      {img: '../assets/img/game1.jpg', text: 'game6', url: '6', id: '6'},
      {img: '../assets/img/game2.jpg', text: 'game7', url: '7', id: '7'},
      {img: '../assets/img/game3.jpg', text: 'game8', url: '8', id: '8'},
      {img: '../assets/img/game4.jpg', text: 'game9', url: '9', id: '9'},
      {img: '../assets/img/game5.jpg', text: 'game10', url: '10', id: '10'},
      {img: '../assets/img/game1.jpg', text: 'game11', url: '11', id: '11'},
      {img: '../assets/img/game2.jpg', text: 'game12', url: '12', id: '12'},
      {img: '../assets/img/game3.jpg', text: 'game13', url: '13', id: '13'},
      {img: '../assets/img/game4.jpg', text: 'game14', url: '14', id: '14'},
      {img: '../assets/img/game5.jpg', text: 'game15', url: '15', id: '15'},
  ].sort((prev, next) => {
    if ( prev.text < next.text ) return -1;
    if ( prev.text < next.text ) return 1;
  });
}
