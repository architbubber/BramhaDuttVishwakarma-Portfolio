import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BramhaDuttVishwakarma';
  ngOnInit(): void {
    var nav = Number($('app-header').innerHeight());
    var totalHeight = window.innerHeight;
    $('router-outlet').css('min-height',totalHeight-nav);
  }
}
