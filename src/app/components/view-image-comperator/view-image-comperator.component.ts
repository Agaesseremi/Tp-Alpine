import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAlpineState } from 'src/app/reducer/reducer';

@Component({
  selector: 'app-view-image-comperator',
  templateUrl: './view-image-comperator.component.html',
  styleUrls: ['./view-image-comperator.component.scss']
})
export class ViewImageComperatorComponent implements OnInit {
  viewImage = "";

  constructor(private store: Store<{ alpine: IAlpineState }>) { }

  ngOnInit(): void {
    this.store.select(state => state.alpine).subscribe((alpinestate: IAlpineState) => {

      this.viewImage = alpinestate.viewImage;

    });
  }


}
