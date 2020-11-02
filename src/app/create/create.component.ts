import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddDemo } from '../store/actions/demo.actions';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addDemo(name: string, url: string) {
    this.store.dispatch(new AddDemo({ name, url }));
    console.log(
      `New Action:
        Name: ${name}
        Url: ${url}`
    );
  }

  ngOnInit(): void {}
}
