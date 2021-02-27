package com.softplan.people.manager.controller;

import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public Person createPerson(@Valid @RequestBody Person person) {
        return personRepository.save(person);
    }

}
