import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service'; // Adjust the path as necessary
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  designation: string;
  name: string;
  bio: string;
  imageSrc: string;
}

@Component({
  selector: 'team-editor',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add any necessary Angular modules
  templateUrl: './team-editor.component.html',
  styleUrls: ['./team-editor.component.scss']
})
export class TeamEditorComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  currentMember: TeamMember = { designation: '', name: '', bio: '', imageSrc: '' };
  editIndex: number | null = null;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadTeamMembers();
  }

  // Fetch all team members from the backend
  loadTeamMembers(): void {
    this.httpService.get('/data?page=teams').subscribe(
      (data) => {
        this.teamMembers = data;
      },
      (error) => {
        console.error('Error loading team members', error);
      }
    );
  }

  // Save or update a team member
  saveMember(): void {
    if (this.editIndex !== null) {
      // Update the existing team member
      this.teamMembers[this.editIndex] = { ...this.currentMember };
    } else {
      // Add a new team member
      this.teamMembers.push({ ...this.currentMember });
    }
    this.saveTeamToFile();
    this.clearForm();
  }

  // Save team data to backend (i.e., update the file)
  saveTeamToFile(): void {
    this.httpService.post(`/data`, { page: 'teams', updatedData: this.teamMembers }).subscribe(
      (response) => {
        console.log('Team members saved successfully', response);
      },
      (error) => {
        console.error('Error saving team members', error);
      }
    );
  }

  // Edit a team member
  editMember(index: number): void {
    this.currentMember = { ...this.teamMembers[index] };
    this.editIndex = index;
  }

  // Delete a team member
  deleteMember(index: number): void {
    this.teamMembers.splice(index, 1);
    this.saveTeamToFile();
  }

  // Clear form data
  clearForm(): void {
    this.currentMember = { designation: '', name: '', bio: '', imageSrc: '' };
    this.editIndex = null;
  }
}
