import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: any) {
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: any) {
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: any){
    this.userService.deleteUser(id).subscribe( data => {
      // console.log(data);
      this.getUsers();
    })
  }
}
