import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  ngOnInit(): void {
    var minHeight = window.innerHeight - (Number($('nav').height()) + Number($('footer').height()));
    $('#main').attr('style','min-height:'+minHeight+'px !important');
  }

}
