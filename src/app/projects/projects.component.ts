import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  seeMoreGuarida() {
    console.log('Hello Guarida');
  }

  seeMoreBiologyDogma() {
    console.log('Hello Biology Dogma');
  }
}
