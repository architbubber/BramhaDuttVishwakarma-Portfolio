import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(!$('#navbarId').hasClass('collapse')){
          $('#navbarId').toggleClass('collapse');
        }
      }

    });
  }
  openNavForMobile(){
    $('#navbarId').toggleClass('collapse');
  }
}
