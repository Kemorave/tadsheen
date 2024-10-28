import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  clik() {
    this.vidPlaying = true;
  }
  showVid = false;
  vidPlaying = false;
  link =
    'https://app.powerbi.com/view?r=eyJrIjoiMWM1YjQ5NWYtMWQwZi00ZmRhLWFkNmMtZGYyMzJhOTk1NmZiIiwidCI6IjBkOTg0NzYxLTZlODYtNDVjMy1hNjBhLWExYWFlOWY2MjNlZSIsImMiOjl9';

  ngOnInit(): void {
    let params = new URL(document.location.toString()).searchParams;
    this.showVid = params.get('showvid') === 'true';
  }
  title() {
    return 'تم اطلاق بدء مخيمات حائل الشتوية';
  }
}
