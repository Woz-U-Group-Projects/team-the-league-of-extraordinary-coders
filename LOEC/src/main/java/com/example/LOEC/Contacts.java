package com.example.LOEC;

import org.springframework.data.annotation.Id;

public class Contacts {
	
	@Id
	private String id;
	
	private String contactName;
	private String contactEmail;
	private String contactPhone;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
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
