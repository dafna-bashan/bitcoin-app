import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contactService';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  selectedContactId: string = null
  contacts$: Observable<Contact[]>
  filterBy = { term: '' }

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    this.contactService.loadContacts()
  }

  onSelectContact(contactId) {
    this.selectedContactId = contactId
  }

  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
  }

}
