import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isLightTheme: Observable<boolean>;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isLightTheme = this.themeService.isLightTheme;
    this.themeService.setLightTheme(true);
  }
  toggleLightTheme(checked: boolean): any {
    this.themeService.setLightTheme(checked);
  }

}
