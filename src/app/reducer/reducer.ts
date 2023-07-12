import { createReducer, on } from '@ngrx/store';
import { changeImage } from '../action/main.action';

export interface AlpineState {
    viewImage: string;
}

export const initialState: AlpineState = {
    viewImage: "pngwing.com_1"
};

// Create a new reducer that handles the action and updates the state
export const Reducer = createReducer(
    initialState,

    on(changeImage, (state, { selectedImage }) => ({
        ...state,
        viewImage: selectedImage
    })),
);