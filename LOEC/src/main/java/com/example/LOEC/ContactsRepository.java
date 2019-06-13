package com.example.LOEC;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactsRepository extends MongoRepository<Contacts,String> {

}
