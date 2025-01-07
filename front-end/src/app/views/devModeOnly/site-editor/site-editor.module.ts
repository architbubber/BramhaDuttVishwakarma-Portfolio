import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteEditorComponent } from './site-editor.component';
import { BlogsEditorComponent } from './templates/blogs-editor/blogs-editor.component';
import { ProjectsEditorComponent } from "./templates/projects-editor/projects-editor.component";
import { TeamEditorComponent } from "./templates/team-editor/team-editor.component";
import { PublicationsEditorComponent } from "./templates/publications-editor/publications-editor.component";
import { FormsModule } from '@angular/forms';
import { SaveAndCommitComponent } from './templates/save-and-commit/save-and-commit.component';
import { HomeEditorComponent } from "./templates/home-editor/home-editor.component";


@NgModule({
  declarations: [SiteEditorComponent],
  imports: [
    CommonModule,
    BlogsEditorComponent,
    ProjectsEditorComponent,
    TeamEditorComponent,
    PublicationsEditorComponent,
    SaveAndCommitComponent,
    FormsModule,
    HomeEditorComponent
],
  exports: [SiteEditorComponent]
})
export class SiteEditorModule { }
