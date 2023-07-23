import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <h1>Kredi Hesaplama Formu</h1>
  <div>
    <label>Kredi Tutarı</label>
    <input [(ngModel)]="krediTutari">
  </div>
  <div>
    <label>Taksit Tutarı</label>
    <select #taksitTutari>
      <option>1</option>
      <option>6</option>
      <option>12</option>
    </select>
  </div>
  <div>
    <button (click)="hesapla()">Hesapla</button> 
  </div>
  <hr>
  <div>
    <h4>Aylık Taksit Tutarı :{{aylikTaksitTutari}}</h4>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kredihesaplama';
  krediTutari:number=10000;
  aylikTaksitTutari:number=0;
 // taksitTutari:number=12;
 //viewchild
 @ViewChild("taksitTutari") taksitTutari:ElementRef<HTMLSelectElement>;
  hesapla(){
    this.aylikTaksitTutari=this.krediTutari/ + this.taksitTutari.nativeElement.value;
  }
}
