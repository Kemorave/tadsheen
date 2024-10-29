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
    let i = setTimeout(() => {
      this.hiddendiv = false;
      let ins = setInterval(() => {
        this.runJob();
        clearInterval(ins);
      }, 1000);
    }, 1000);
  }
  showVid = false;
  vidPlaying = false;
  link = 'http://51.15.23.9:8986/buildings';

  ngOnInit(): void {
    let params = new URL(document.location.toString()).searchParams;
    this.showVid = params.get('showvid') === 'true';

    if (this.showVid) {this.clik()};
  }
  counterHTML: any;
  hiddendiv = true;
  timeleft = 5;
  runJob() {
    let icon = document.getElementById('checkicon');

    let downloadTimer: any = null;

    this.counterHTML = this.timeleft;
    downloadTimer = setInterval(() => {
      this.timeleft--;
      this.counterHTML = this.timeleft;
      if (this.timeleft <= 0) {
        this.counterHTML = `
            
            `;
        clearInterval(downloadTimer);
      }
    }, 1000);
  }
  title() {
    return 'سيتم إسقاط مؤشر إستطلاع مشاريع البنية التحتية';
  }
}
