import { createAction, props } from '@ngrx/store';

export const changeImage = createAction('[main] change image according to the choice', props<{ selectedImage: string }>());
