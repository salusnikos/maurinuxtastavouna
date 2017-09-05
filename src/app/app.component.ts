import {Component} from '@angular/core';
import {DataService} from './data.service';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('myAnime', [
    state('small', style({transform: 'scale(1)'})),
    state('large', style({transform: 'scale(1.2)'})),
    transition('small <=> large', animate('500ms ease-in',keyframes([
      style({opacity:0, transform: 'translateY(-75%)',offset:0 }),
      style({opacity:0.5, transform: 'translateY(105px)',offset:0.2 }),
      style({opacity:1, transform: 'translateY(0)',offset:1 })
    ])) )
  ])
  ]
})

export class AppComponent {

  constructor(private dataService: DataService) {


  }

  state: string = "small";

  startAnime(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
