import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  maxWidth:number = 0;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(!$('#navbarId').hasClass('collapse')){
          $('#navbarId').toggleClass('collapse');
        }
      }

    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.maxWidth = window.innerWidth;
  }
  openNavForMobile(){
    $('#navbarId').toggleClass('collapse');
  }
}
