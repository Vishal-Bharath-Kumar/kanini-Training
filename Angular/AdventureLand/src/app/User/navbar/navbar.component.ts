import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Place the JavaScript code here
    const bars: HTMLElement | null = document.getElementById("nav-action");
    const nav: HTMLElement | null = document.getElementById("nav");

    // Setting up the listener
    bars?.addEventListener("click", barClicked, false);

    // Setting up the clicked effect
    function barClicked(): void {
      bars?.classList.toggle('active');
      nav?.classList.toggle('visible');
    }
  }
}

