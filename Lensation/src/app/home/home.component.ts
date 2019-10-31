import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  current_year;
  constructor(private _router: Router) { 
    var year = new Date()
    this.current_year = year.getFullYear()
  }

  ngOnInit() {
  }

  getinTouch($event)
  {
    this._router.navigate(['/contact'])
  }
}
