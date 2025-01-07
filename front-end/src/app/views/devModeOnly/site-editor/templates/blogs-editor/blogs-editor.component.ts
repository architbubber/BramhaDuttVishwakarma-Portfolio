import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service'; // Adjust the path as necessary
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Blog {
  id: number;
  date: string;
  title: string;
  imgSrc: string;
  description: string;
}

@Component({
  selector: 'blogs-editor',
  standalone: true,
  imports: [CommonModule,FormsModule], // Add any necessary Angular modules
  templateUrl: './blogs-editor.component.html',
  styleUrls: ['./blogs-editor.component.scss']
})
export class BlogsEditorComponent implements OnInit {

  blogs: Blog[] = [];
  currentBlog: Blog = { id: 0, date: '', title: '', imgSrc: '', description: '' };
  editIndex: number | null = null;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  // Fetch all blogs from the backend
  loadBlogs(): void {
    this.httpService.get('/data?page=blogs').subscribe(
      (data) => {
        this.blogs = data;
      },
      (error) => {
        console.error('Error loading blogs', error);
      }
    );
  }

  // Save or update a blog post
  saveBlog(): void {
    if (this.editIndex !== null) {
      // Update the existing blog
      this.blogs[this.editIndex] = { ...this.currentBlog };
    } else {
      // Add a new blog
      this.currentBlog.id = this.blogs.length + 1; // Generate a new ID for new blog
      this.blogs.push({ ...this.currentBlog });
    }
    this.saveBlogsToFile();
    this.clearForm();
  }

  // Save blog data to backend (i.e., update the file)
  saveBlogsToFile(): void {
    this.httpService.post(`/data`, { page: 'blogs', updatedData: this.blogs }).subscribe(
      (response) => {
        console.log('Blogs saved successfully', response);
      },
      (error) => {
        console.error('Error saving blogs', error);
      }
    );
  }

  // Edit a blog post
  editBlog(index: number): void {
    this.currentBlog = { ...this.blogs[index] };
    this.editIndex = index;
  }

  // Delete a blog post
  deleteBlog(index: number): void {
    this.blogs.splice(index, 1);
    this.saveBlogsToFile();
  }

  // Clear form data
  clearForm(): void {
    this.currentBlog = { id: 0, date: '', title: '', imgSrc: '', description: '' };
    this.editIndex = null;
  }
}
