import { Component, OnInit } from '@angular/core';
import { ContactsDataService } from '../services/contacts-data.service';
import { Contacts } from '../models/contacts';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactDetails: Contacts;
  id: number;

  constructor(
    private contactsData: ContactsDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.contactsData.getContact(this.id).subscribe(c => (this.contactDetails = c));
    });
  }

}
