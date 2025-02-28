import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [RouterModule, CommonModule, TopNavComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
