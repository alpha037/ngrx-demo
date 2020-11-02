import { Actions, ADD_DEMO, REMOVE_DEMO } from '../actions/demo.actions';
import { Demo } from '../models/demo.model';

const initialState: Demo = {
  name: '@ngrx/store',
  url: 'https://www.npmjs.com/package/@ngrx/store',
};

export function DemoReducer(state: Demo[] = [initialState], action: Actions) {
  switch (action.type) {
    case ADD_DEMO:
      return [...state, action.payload];

    case REMOVE_DEMO:
      return state.filter((element, index) => index !== action.payload);

    default:
      return state;
  }
}
