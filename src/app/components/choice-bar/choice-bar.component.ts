import { Component, Output } from '@angular/core';
import { alpineConfigJson } from '../../alpine-config/alpine-config.module';



@Component({
  selector: 'app-choice-bar',
  templateUrl: './choice-bar.component.html',
  styleUrls: ['./choice-bar.component.scss']
})
export class ChoiceBarComponent {
  json: any = alpineConfigJson;
  displayCard!: any;

  ngOnInit() {
   
  }

  cardDisplay(test: string) {
    switch(test){
      case 'models':
        this.displayCard = this.json.models;
        break;
      case 'colors':
        this.displayCard = this.json.colors;
        break;
      case 'rim':
        this.displayCard = this.json.legendeRims;
        break;
      case 'interior':
        this.displayCard = this.json.legendeInteriors;
        break;
    }
    
    console.log(this);
  }
}