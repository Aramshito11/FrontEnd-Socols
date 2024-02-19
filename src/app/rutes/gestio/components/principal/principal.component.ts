import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { io } from 'socket.io-client';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  implements OnInit {
  private socket: any;
  serverResponse: any;
  showvideo: any;
  videoUrl: any;

  @ViewChild('videoContainer') videoContainer: ElementRef | any;


  public videos: any[] = [];
  private serverData: string | undefined;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  conexio() {
    this.socket = io('http://192.168.176.1:7777', {transports: ['websocket']});

    this.socket.on('listaVideos', (videos: any[]) => {
      this.videos = videos.map((video, index) => {
        const key = Object.keys(video)[0];
        return {key, value: video[key]};
      });
    });
  }

  generarCodi(nomVideo: any) {
    this.socket = io('http://192.168.176.1:7777', {transports: ['websocket']});

    this.socket.on('codeFromServer', (data: any) => {
      console.log('Código del servidor:', data.code);
      this.serverData = data.code;
    });

    this.socket.emit('videoEscollit', {video: nomVideo})

    setTimeout(()=> {
      alert('Código recibido del servidor: ' + this.serverData);
    }, 1000)

  }

  video(){
    this.socket = io('http://192.168.176.1:7777', {transports: ['websocket']});
    this.socket.on('serverResponse', (response: any) => {
      if (response.status === 'correcte') {
        this.serverResponse = response;
        this.playVideo();
        console.log("reproducion")
      } else {
        console.error('Error en el servidor.');
      }
    });
  }

  playVideo() {
    const videoBlob = new Blob([this.serverResponse.video], { type: 'video/mp4' });
    this.videoUrl = URL.createObjectURL(videoBlob);
    this.showvideo = true;

    const video = document.createElement('video');
    video.width = 640;
    video.height = 360;
    video.controls = true;

    const source = document.createElement('source');
    source.src = this.videoUrl;
    source.type = 'video/mp4';

    video.appendChild(source);

    this.videoContainer.nativeElement.innerHTML = '';
    this.videoContainer.nativeElement.appendChild(video);

    video.play();
  }
}
