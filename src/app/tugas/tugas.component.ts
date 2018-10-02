import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada username baru yang telah dibuat!!';
  serverName='';

  constructor() {
    // () => {} adalah arrow function atau lamda --> fitur ES6 javascript
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreationStatus(){
    this.serverCreationStatus='username telah dibuat!!';
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}