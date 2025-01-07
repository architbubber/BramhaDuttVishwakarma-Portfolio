import { Component } from '@angular/core';

@Component({
  selector: 'app-site-editor',
  templateUrl: './site-editor.component.html',
  styleUrl: './site-editor.component.scss'
})

export class SiteEditorComponent {
// Track which content should be displayed
activeContent: string = 'home';  // Default content

ngOnInit(): void {
    // Get the navbar element
    const navbar = document.getElementsByTagName('nav')[0];
    // Get the sidebar element
    const sidebar = document.getElementById('sidebar');

    // Get the height of the navbar (this will be dynamic)
    const navbarHeight = navbar.offsetHeight;

    // Calculate the height for the sidebar (100vh - navbarHeight)
    const sidebarHeight = window.innerHeight - navbarHeight;

    // Set the sidebar height dynamically
    (<any>sidebar).style.height = sidebarHeight + 'px';
  // }

}

// Set the active content dynamically
setActiveContent(content: string) {
  this.activeContent = content;
}


}
