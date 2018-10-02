import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`.lima{
    color: white;
  }`]
})
export class Tugas3Component implements OnInit {
  kalimat;
  status;
  log=[];
  panjang=this.log.length;


  constructor() {
  }

  ngOnInit() {
  }

  onClickMe(){
    this.log.push(this.log.length+1);
    if(this.status === false){  
      this.kalimat = 'POLITEKNIK NEGERI MALANG';
      this.status = true;
    }
    else{
      
      this.kalimat = '';
      this.status = false;
    }
  }
}