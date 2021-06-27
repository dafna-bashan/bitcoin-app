import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Move } from '../models/move';
import { User } from '../models/user';
import { storageService } from './asyncStorageService';
import { utilService } from './utilService';

const user: User = {
  _id: "5a5664025f6ae9aa24a99fde",
  name: "Hallie Mclean",
  coins: 100,
  moves: []
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User>(null)
  public user$ = this._user$.asObservable()

  // private _usersDb: User[] = JSON.parse(localStorage.getItem('users')) || [user];

  // getUser() {
  //   return user
  // }

  signup(username: string) {
    const newUser = { _id: utilService.makeId(), name: username, coins: 100, moves: [] }
    // this._usersDb.push(newUser)
    // this._saveToStorage(this._usersDb)
    return this._saveLocalUser(newUser)
  }
  logout() {
    sessionStorage.clear()
  }

  getLoggedinUser() {
    let user = JSON.parse(sessionStorage.getItem('loggedinUser'));
    this._user$.next(user)
    return user;
  }

  private _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user));
    return user;
  }

  // private _saveToStorage(contacts) {
  //   localStorage.setItem('users', JSON.stringify(contacts))
  // }

  transferCoins(contact, amount) {
    console.log('transfer');
    const user = this.getLoggedinUser()
    user.coins -= amount
    const newMove: Move = { toId: contact._id, to: contact.name, at: Date.now(), amount }
    user.moves.unshift(newMove)
    const newUser = {...user}
    this._saveLocalUser(newUser)
    this._user$.next(newUser)
  }

}

