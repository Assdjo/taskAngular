import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  standalone: false,
  
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

    inscriptionForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmMotDePass: new FormControl('', [Validators.required]),
  });
  
  constructor(private userService:UserService, private route:Router) {}

  onSubmit() {
    if (!this.inscriptionForm.invalid) {
      this.userService.addUser(this.inscriptionForm.value).subscribe(Response=>{
        console.log(Response);
      });
      this.route.navigate([''])
    } else {
      console.log("formulaire invalide !");
    }
  }
}
