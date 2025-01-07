import { Component, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BramhaDuttVishwakarma';
  isDevMode = !environment.production;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    let redirectTo = this.route.snapshot.queryParamMap.get('route');
    if (redirectTo != null) {
      this.router.navigate([redirectTo]);
    }
  }
}
