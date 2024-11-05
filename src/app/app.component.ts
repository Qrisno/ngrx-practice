import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { testActionGroup } from './state/test.actions';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers:[Store],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ngrx-practice';
  store = inject(Store)


  ngOnInit(): void {
    this.store.dispatch(testActionGroup.bayayi({bayayi: 1}))
    setTimeout(() => {
      
      this.store.dispatch(testActionGroup.init({init: 'init'}))
    }, 3000);
    console.log('here')
    this.store.select('test').subscribe(console.log)
  }
}
