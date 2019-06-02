package com.employees.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.employees.models.Person;

@Controller
@RequestMapping({ "/", "/home" })
public class LeagueController {
	 
	@GetMapping("/")
	    public String index(Model model) {
		
		model.addAttribute("person", new Person());
	        return "index";
	    }
	@PostMapping("/person")
    public String personSubmit(@ModelAttribute Person person) {
        return "result";
	}
}
	
