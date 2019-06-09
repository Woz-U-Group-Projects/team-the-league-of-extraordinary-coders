//package com.example.LOEC;
//
//public class ContactsController {
//
//}


package com.example.LOEC;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@Controller("/contacts")
@CrossOrigin(origins="http://localhost:4200")
public class ContactsController {
	
	
	List<Contacts> contacts;
	
	public ContactsController() {
		contacts = new ArrayList<Contacts>();
	}
	
	
	@GetMapping("/contacts") // localhost:8080/contacts
	public List<Contacts> getContacts(){
		return contacts;
	}
	
	@PostMapping()
	public Contacts addContact(@RequestBody Contacts contact) {
		contacts.add(contact);
		return contact;
	}

}

class Contacts {
	
	private String contactName;
	private String contactEmail;
	private String contactPhone;
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String cxname) {
		this.contactName = cxname;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String cxemail) {
		this.contactEmail = cxemail;
	}
	public String getContactPhone() {
		return contactPhone;
	}
	public void setContactPhone(String cxphone) {
		this.contactPhone = cxphone;
	}
	
}