import { Component, Output } from '@angular/core';
import { alpineConfigJson } from '../../alpine-config/alpine-config.module';

interface Options {
  [key: string]: { photoId: string; name: string; subcategories?: { photoId: string; name: string; basePrice: number }[] }[];
}

@Component({
  selector: 'app-choice-bar',
  templateUrl: './choice-bar.component.html',
  styleUrls: ['./choice-bar.component.scss']
})
export class ChoiceBarComponent {
  options: string[] = Object.keys(alpineConfigJson);
  optionsToDisplay: Options = alpineConfigJson;
  choiceToDisplay!: string;
  displayCard!: any[];

  ngOnInit() {
   
  }

  cardDisplay(test: string) {
    this.choiceToDisplay = test;
    this.displayCard = this.optionsToDisplay[this.choiceToDisplay];
    
    console.log(this);
  }
}