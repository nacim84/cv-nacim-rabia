import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  lien: string;
}

@Component({
  selector: 'cv-app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {

  tiles: Tile[] = [
    {text: 'One', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: '#f1000d'},
    {text: 'Five', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: '#f1b7b9'},
    {text: 'Six', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: '#8bdbf1'},
    {text: 'Seven', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: '#63f15d'},
    {text: 'Hight', lien: 'https://www.youtube.com/watch?v=ao-nY-9biWs', cols: 2, rows: 1, color: '#556ff1'},
  ];

}
