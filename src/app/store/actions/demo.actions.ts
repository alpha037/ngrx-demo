import { Action } from '@ngrx/store';
import { Demo } from '../models/demo.model';

export const ADD_DEMO = '[DEMO] Add';
export const REMOVE_DEMO = '[DEMO] Remove';

export class AddDemo implements Action {
  readonly type: string = ADD_DEMO;

  constructor(public payload: Demo) {}
}

export class RemoveDemo implements Action {
  readonly type: string = REMOVE_DEMO;

  constructor(public payload: number) {}
}

export type Actions = AddDemo | RemoveDemo;
