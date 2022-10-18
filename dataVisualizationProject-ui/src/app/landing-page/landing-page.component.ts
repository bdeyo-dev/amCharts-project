import { Component, OnInit } from '@angular/core';
import { RawgService } from '../api-service/rawg.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.rawgService.getGameDetails(1).subscribe((data) => {
      console.log(data);
    })
  }

}
