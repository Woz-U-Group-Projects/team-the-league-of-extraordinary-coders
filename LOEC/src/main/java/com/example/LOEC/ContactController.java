package com.contact.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ContactController {
	
	List<Contact>contacts;
	
	public ContactController() {
		contacts =new ArrayList<Contact>();
	}
	
	@GetMapping()
    public List<Contact> getContacts(){
		return contacts;
	}
	
	@PostMapping()
	public Contact addContact(@RequestBody Contact contact) {
		contacts.add(contact);
		return contact;
	}
	
}

class Employee {
	private String contactName;
	private String contactEmail;
	private String contactPhone;
	
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String name) {
		this.contactName = name;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String email) {
		this.contactEmail = email;
	}
	public String getContactPhone() {
		return contactPhone;
	}
	public void setEmployeePhone(String phone) {
		this.contactPhone = phone;
	}
}