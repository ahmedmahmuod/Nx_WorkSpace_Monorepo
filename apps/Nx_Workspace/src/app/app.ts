import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  constructor() {
    interval(1000).pipe(takeUntilDestroyed()).subscribe(value => {
      console.log('Value:', value);
    });
  }

}
