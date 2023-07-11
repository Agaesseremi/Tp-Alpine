import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeImage } from 'src/app/action/main.action';
import { AlpineState } from 'src/app/reducer/reducer';

@Component({
  selector: 'app-button-choice',
  templateUrl: './button-choice.component.html',
  styleUrls: ['./button-choice.component.scss']
})
export class ButtonChoiceComponent {

  constructor(private store: Store<{ alpine: AlpineState }>) {

  }

  onClick() {
    this.store.dispatch(changeImage({ selectedImage: "pure" }))
  }
}
