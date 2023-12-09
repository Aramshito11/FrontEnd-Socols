import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  implements OnInit {
  private socket: any;
  public videos: any[] = [];
  private serverData: string | undefined;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  conexio() {
    this.socket = io('http://localhost:3080', {transports: ['websocket']});

    this.socket.on('listaVideos', (videos: any[]) => {
      this.videos = videos.map((video, index) => {
        const key = Object.keys(video)[0];
        return {key, value: video[key]};
      });
    });

  }

  generarCodi() {
    this.socket = io('http://localhost:3080', {transports: ['websocket']});

    this.socket.on('codeFromServer', (data: any) => {
      console.log('Código del servidor:', data.code);
      this.serverData = data.code;
    });

    setTimeout(()=> {
      alert('Código recibido del servidor: ' + this.serverData);
    }, 1000)

  }
}
