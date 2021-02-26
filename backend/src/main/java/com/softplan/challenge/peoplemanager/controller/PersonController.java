package com.softplan.challenge.peoplemanager.controller;

import com.softplan.challenge.peoplemanager.model.Person;
import com.softplan.challenge.peoplemanager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/people")
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @PostMapping("/people")
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

}
