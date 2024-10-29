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
    window.open(this.link, '_blank');
  }
  showVid = false;
  vidPlaying = false;
  link = 'http://51.15.23.9:8964/';

  ngOnInit(): void {
    let params = new URL(document.location.toString()).searchParams;
    this.showVid = params.get('showvid') === 'true';
  }
  title() {
    return this.showVid
      ? 'سيتم تدشين مبنى اتمام الذكي'
      : 'سيتم تدشين منصة اداره المباني والمرافق';
  }
}
