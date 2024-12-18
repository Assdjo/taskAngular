import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-affiche-liste-languages',
  standalone: false,
  
  templateUrl: './affiche-liste-languages.component.html',
  styleUrl: './affiche-liste-languages.component.css'
})
export class AfficheListeLanguagesComponent {
  @Input() listeslanguages!:string[];
  @Output() dataToparent: EventEmitter<string> = new EventEmitter<string>();
  @Output() colorToparent: EventEmitter<string> = new EventEmitter<string>();


  selectedLanguage: string = ""
  bgcolor: string = "#E6E6FA"

  onLanguageClick(language: string) {
    this.selectedLanguage = language
    this.dataToparent.emit(this.selectedLanguage )
    this.colorToparent.emit(this.bgcolor)
    switch (language) {
     case 'TypeScript':
       this.bgcolor= "#2c3e50"
       break;
     case 'Swift':
       this.bgcolor= "#2ecc71"
       break;
     case 'Kotlin':
       this.bgcolor= "#ff6f61"
       break;
     case 'Go (Golang)':
       this.bgcolor= "#673ab7"
       break;
     case 'Ruby':
       this.bgcolor= "#87ceeb"
       break;
     case 'PHP':
       this.bgcolor= "#ff6f91"
       break;
     case 'C++':
       this.bgcolor= "#b57edc"
       break;
     case 'Java':
       this.bgcolor= "#008080"
       break;
     case 'Python':
       this.bgcolor= "#ff7f50"
       break;
     case 'Python':
       this.bgcolor= "#0f52ba"
       break;
     case 'JavaScript':
       this.bgcolor= "#0f52ba"
       break;
    
     default:
       this.bgcolor= "#E6E6FA"
       break;
    } 
   }
}
