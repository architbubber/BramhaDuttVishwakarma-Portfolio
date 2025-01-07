import { Component } from '@angular/core';
import {data} from '../../../assets/data/home'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  data = data
}
