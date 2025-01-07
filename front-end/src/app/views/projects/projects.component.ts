import { Component } from '@angular/core';
import {data} from '../../../assets/data/projects'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
data = data;
}
