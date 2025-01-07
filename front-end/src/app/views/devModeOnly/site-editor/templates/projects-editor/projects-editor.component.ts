import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service'; // Adjust the path based on your project structure
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  heading: string;
  imgSrc: string;
  text: string;
}

@Component({
  selector: 'projects-editor',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add any necessary Angular modules
  templateUrl: './projects-editor.component.html',
  styleUrls: ['./projects-editor.component.scss']
})
export class ProjectsEditorComponent implements OnInit {

  projects: Project[] = [];
  currentProject: Project = { title: '', heading: '', imgSrc: '', text: '' };
  editIndex: number | null = null;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  // Fetch all projects from the backend
  loadProjects(): void {
    this.httpService.get('/data?page=projects').subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error loading projects', error);
      }
    );
  }

  // Save or update a project
  saveProject(): void {
    if (this.editIndex !== null) {
      // Update the existing project
      this.projects[this.editIndex] = { ...this.currentProject };
    } else {
      // Add a new project
      this.projects.push({ ...this.currentProject });
    }
    this.saveProjectsToFile();
    this.clearForm();
  }

  // Save projects list to backend (i.e., update the file)
  saveProjectsToFile(): void {
    this.httpService.post(`/data`, { page: 'projects', updatedData: this.projects }).subscribe(
      (response) => {
        console.log('Projects saved successfully', response);
      },
      (error) => {
        console.error('Error saving projects', error);
      }
    );
  }

  // Edit a project
  editProject(index: number): void {
    this.currentProject = { ...this.projects[index] };
    this.editIndex = index;
  }

  // Delete a project
  deleteProject(index: number): void {
    this.projects.splice(index, 1);
    this.saveProjectsToFile();
  }

  // Clear form data
  clearForm(): void {
    this.currentProject = { title: '', heading: '', imgSrc: '', text: '' };
    this.editIndex = null;
  }
}
