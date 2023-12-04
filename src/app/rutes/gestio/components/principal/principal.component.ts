import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  implements OnInit {
  private socket: any;
  public videos: any[] = [];

  ngOnInit() {
  }

  conexio(){
    this.socket = io('http://localhost:3080' , { transports : ['websocket']});

    this.socket.on('listaVideos', (videos: any[]) => {
      this.videos = videos.map((video, index) => {
        const key = Object.keys(video)[0];
        return { key, value: video[key] };
      });
    });
  }
}
