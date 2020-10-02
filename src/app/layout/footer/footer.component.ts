import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
  footerMenu: any;
  contactDetails: any;
  constructor(public menuService: MenuService) {
    this.footerMenu = menuService.footerMenu;
  }

}
