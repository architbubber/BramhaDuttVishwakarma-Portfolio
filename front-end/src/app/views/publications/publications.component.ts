import { Component } from '@angular/core';
import {data} from '../../../assets/data/publications'
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
data = data
}
