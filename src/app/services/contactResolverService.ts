import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
import { ContactService } from './contactService';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    return this.contactService.getContactById(id)
  }
}
