import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {SponsorService} from "../../services/sponsor.service";

@Component({
  selector: 'app-sponsor-section',
  templateUrl: './sponsor-section.component.html',
  styleUrls: ['./sponsor-section.component.scss']
})
export class SponsorSectionComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  cores: Observable<any>;
  organizers: Observable<any>;
  golds: Observable<any>;
  regulars: Observable<any>;
  supporters: Observable<any>;
  constructor(private breakpointObserver: BreakpointObserver, private sponsorServices: SponsorService) { }

  ngOnInit(): void {
    this.organizers = this.sponsorServices.getCompanies('Organizer');
    this.cores = this.sponsorServices.getCompanies('core');
    this.golds = this.sponsorServices.getCompanies('gold');
    this.regulars = this.sponsorServices.getCompanies('regular');
    this.supporters = this.sponsorServices.getCompanies('supporter');
  }

}
