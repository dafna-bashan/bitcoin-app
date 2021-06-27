import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contactService';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/userService';
import { User } from 'src/app/models/user';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']

})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private userService: UserService) { }

  user$: User
  contact$: Contact
  subscription: Subscription
  userSubscription: Subscription
  amount: number | string = 0

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.contact$ = data.contact
    })
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user$ = user
    })
    this.userService.getLoggedinUser()
  }

  async onRemoveContact() {
    await this.contactService.deleteContact(this.contact$._id).toPromise()
    this.router.navigateByUrl('/contact')
  }

  onTransferCoins(amount) {
    console.log(amount);

    this.userService.transferCoins(this.contact$, amount)
    this.amount = ''
    // this.contactService.saveContact({...this.contact})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.userSubscription.unsubscribe()
  }
}
