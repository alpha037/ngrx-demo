import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveDemo } from '../store/actions/demo.actions';
import { Demo } from '../store/models/demo.model';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  demos$: Observable<Demo[]>;

  constructor(private store: Store<AppState>) {
    this.demos$ = store.select('demo');
  }

  log(value: Demo) {
    value ? console.log(value) : console.error(value);
  }

  removeDemo(index: number) {
    this.store.dispatch(new RemoveDemo(index));
  }

  ngOnInit(): void {}
}
