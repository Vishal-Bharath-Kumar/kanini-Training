import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
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
