import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/userService';


@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  // user: User
  @Input() contact
  @Input() user
  contactMovesArr = []
  filteredUserMoves = []
  ngOnInit(): void {
    console.log(this.user);
    if (!this.contact) this.filteredUserMoves = this.user.moves.filter((move, idx) => idx <= 2)
    // this.user = this.userService.getLoggedinUser()
    // if (this.contact) this.contactMovesArr = this.user.moves.filter(move => move.toId === this.contact._id)
    // else this.filteredUserMoves = this.user?.moves.filter((move, idx) => idx <= 2)
  }
  
  ngOnchanges(){
    // if (this.contact) this.contactMovesArr = this.user.moves.filter(move => move.toId === this.contact._id)
    // else this.filteredUserMoves = this.user.moves.filter((move, idx) => idx <= 2)
  }

  get contactMoves() {
    console.log(this.user);
    return this.user.moves.filter(move => move.toId === this.contact._id)
  }
}
