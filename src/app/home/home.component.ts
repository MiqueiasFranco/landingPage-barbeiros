import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('servicos')
  areaServicos!: ElementRef; 
  descer(){
    this.areaServicos.nativeElement.scrollIntoView({behavior: 'smooth' })
  }

}
