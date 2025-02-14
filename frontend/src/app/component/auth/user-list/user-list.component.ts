import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
users: any[] = [];
constructor(private userService:UserService) {}

ngOnInit(): void {
  this.userService.getUsers().subscribe(data => {
    this.users = data;
    console.log(this.users);
  })
}

updateUser(id:number){

}
deleteUser(id:number){

}
}
