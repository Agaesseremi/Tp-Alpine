import { Component, Output } from '@angular/core';
import { alpineConfigJson } from '../../alpine-config/alpine-config.module';
import { Store } from '@ngrx/store';
import { IAlpineOptions, IAlpineState } from 'src/app/reducer/reducer';



@Component({
  selector: 'app-choice-bar',
  templateUrl: './choice-bar.component.html',
  styleUrls: ['./choice-bar.component.scss']
})
export class ChoiceBarComponent {
  json: any = alpineConfigJson;
  car!: IAlpineOptions;
  displayCard!: any;

  constructor(private store: Store<{ alpine: IAlpineState }>) {

  }

  ngOnInit() {
    this.store.select(state => state.alpine).subscribe((state) => {
      this.car = state.car;
    });
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
        this.displayCard = this.car.id == 1 ? this.json.legendeRims : this.json.pureRims;
        break;
      case 'interior':
        this.displayCard = this.car.id == 1 ? this.json.legendeInteriors : this.json.pureInteriors;
        break;
    }
    
    console.log(this);
  }
}