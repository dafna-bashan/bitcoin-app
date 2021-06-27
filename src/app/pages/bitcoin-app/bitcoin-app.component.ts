import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoinService';
import { UserService } from 'src/app/services/userService';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'bitcoin-app',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss']
})
export class BitcoinAppComponent implements OnInit {
  userSubscription: Subscription
  user: User
  rate: any

  constructor(private userService: UserService, private bitcoinService: BitcoinService, private router: Router) { }

  ngOnInit(): void {
    // this.user = this.userService.getLoggedinUser() || null
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user
    })
    this.userService.getLoggedinUser()
    if (!this.user) this.router.navigateByUrl('/signup')
  }

  async ngAfterViewInit() {
    this.rate = await this.bitcoinService.getRate()
  }


}
