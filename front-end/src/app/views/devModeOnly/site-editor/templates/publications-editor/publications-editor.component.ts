import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {data} from '../../../../../../assets/data/publications'
import { HttpService } from '../../../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'publications-editor',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './publications-editor.component.html',
  styleUrl: './publications-editor.component.scss'
})
export class PublicationsEditorComponent {
  papers: any[] = [];
  errorMessage: string = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadPapers();
  }

  currentPaper = { title: '', link: '' };
  isEditMode = false;
  editingIndex = -1;

  // Save new paper or update existing paper
  savePaper() {
    if (this.isEditMode) {
      this.papers[this.editingIndex] = { ...this.currentPaper }; // Update existing paper
    } else {
      this.papers.push({ ...this.currentPaper }); // Add new paper
    }

    this.httpService.post('/data?page=publications', this.papers).subscribe(
      (data) => {
        alert('Paper saved successfully!');
        this.loadPapers(); // Reload papers after saving
      },
      (error) => {
        console.error('Error saving paper!', error);
      }
    );
    this.resetForm();
  }

  // Edit an existing paper
  editPaper(index: number) {
    this.isEditMode = true;
    this.editingIndex = index;
    this.currentPaper = { ...this.papers[index] };
  }

  // Delete a paper
  deletePaper(index: number) {
    this.papers.splice(index, 1);
  }

  // Reset the form for adding new papers
  resetForm() {
    this.currentPaper = { title: '', link: '' };
    this.isEditMode = false;
    this.editingIndex = -1;
  }

  loadPapers(): void {
    console.log('called')
    this.httpService.get('/data?page=publications').subscribe(
      (data) => {
        this.papers = data;
      },
      (error) => {
        this.errorMessage = 'Error loading papers!';
      }
    );
  }

  // savePaper(paper: any): void {
  //   this.httpService.post('/papers', paper).subscribe(
  //     (data) => {
  //       console.log('Paper saved successfully!', data);
  //       this.loadPapers(); // Reload papers after saving
  //     },
  //     (error) => {
  //       console.error('Error saving paper!', error);
  //     }
  //   );
  // }

  // deletePaper(id: number): void {
  //   this.httpService.delete(`/papers/${id}`).subscribe(
  //     (data) => {
  //       console.log('Paper deleted successfully!', data);
  //       this.loadPapers(); // Reload papers after deleting
  //     },
  //     (error) => {
  //       console.error('Error deleting paper!', error);
  //     }
  //   );
  // }
}
