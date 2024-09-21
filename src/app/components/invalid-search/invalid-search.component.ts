import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-search',
  templateUrl: './invalid-search.component.html',
  styleUrls: ['./invalid-search.component.css'],
})
export class InvalidSearchComponent {
  constructor(private router: Router) {}

  buttonClicked() {
    this.router.navigate(['']);
  }
}
