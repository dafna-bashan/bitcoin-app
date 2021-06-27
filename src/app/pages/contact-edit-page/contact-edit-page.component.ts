import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contactService';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  contact: Contact
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onBack() {
    this.router.navigateByUrl(this.contact._id ? `/contact/${this.contact._id}` : '/contact')
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact).toPromise()
    this.router.navigateByUrl(this.contact._id ? `/contact/${this.contact._id}` : '/contact')
  }

}
