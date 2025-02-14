import { NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  standalone: false,
  
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
  export class TestsComponent {

    selectedLanguage : string ="";
    bgcolor:string = "";

    receiveData(data: string) {
      this.selectedLanguage = data;
    }
    receiveColor(color: string) {
      this.bgcolor = color;
    }

    languages: string[] =[
      "TypeScript", 
      "Swift",
      "Kotlin",
      "Go (Golang)",
      "Ruby",
      "PHP",
      "C++",
      "Java",
      "Python",
      "JavaScript"
    ];
  
  showLanguages: boolean = true

 
}
