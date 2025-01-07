import { Component } from '@angular/core';
import {data} from '../../../assets/data/teams'
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  data = data
}
