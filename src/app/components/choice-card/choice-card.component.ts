import { Component, Input, OnInit } from '@angular/core';
import { alpineConfigJson } from '../../alpine-config/alpine-config.module';

@Component({
  selector: 'app-choice-card',
  templateUrl: './choice-card.component.html',
  styleUrls: ['./choice-card.component.scss']
})

export class ChoiceCardComponent {

  @Input() displayCard?: any[];

}

