import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { data } from '../../../../../../assets/data/home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Include ReactiveFormsModule here
  templateUrl: './home-editor.component.html',
  styleUrls: ['./home-editor.component.scss']  // Correct styleUrls (plural)
})
export class HomeEditorComponent {
  data = data; // The data object you're managing

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      topBannerImgSrc: [this.data.topBanner.imgSrc, Validators.required],
      aboutInfo: [this.data.about.info, Validators.required],
      aboutImgSrc: [this.data.about.imageSrc, Validators.required],
      latestPublicationTitle: [this.data.latestPublication.title, Validators.required],
      latestPublicationDescription: [this.data.latestPublication.description, Validators.required],
      latestPublicationBlogLink: [this.data.latestPublication.blogLink, Validators.required],
      latestPublicationArticleLink: [this.data.latestPublication.articleLink, Validators.required],
      latestPublicationImgSrc: [this.data.latestPublication.imageSrc, Validators.required]
    });

    // Add team and blog posts dynamically
    this.addTeamForm();
  }

  // Form submission to update the data
  onSubmit(): void {
    if (this.form.valid) {
      // Update the main `data` object with the form values
      this.data.topBanner.imgSrc = this.form.value.topBannerImgSrc;
      this.data.about.info = this.form.value.aboutInfo;
      this.data.about.imageSrc = this.form.value.aboutImgSrc;
      this.data.latestPublication.title = this.form.value.latestPublicationTitle;
      this.data.latestPublication.description = this.form.value.latestPublicationDescription;
      this.data.latestPublication.blogLink = this.form.value.latestPublicationBlogLink;
      this.data.latestPublication.articleLink = this.form.value.latestPublicationArticleLink;
      this.data.latestPublication.imageSrc = this.form.value.latestPublicationImgSrc;

      alert('Data Updated Successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  }

  // Dynamically generate team and blog sections
  addTeamForm() {
    this.data.team.forEach((member, index) => {
      const teamMemberGroup = this.fb.group({
        name: [member.name, Validators.required],
        role: [member.role, Validators.required],
        imageSrc: [member.imageSrc, Validators.required]
      });
      this.form.addControl(`teamMember${index}`, teamMemberGroup);
    });
  }
}
