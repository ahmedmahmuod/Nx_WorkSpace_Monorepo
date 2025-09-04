import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from '@nx-workspace/ui';

@Component({
  standalone: true,
  imports: [RouterModule, TestComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
