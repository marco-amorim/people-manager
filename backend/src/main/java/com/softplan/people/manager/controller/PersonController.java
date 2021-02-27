package com.softplan.people.manager.controller;

import com.softplan.people.manager.exception.ResourceNotFoundException;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<Map<String, String>> createPerson(@Valid @RequestBody Person person) {
        try {
            personRepository.save(person);
            Map<String, String> response = new HashMap<>();
            response.put("info", "Person created successfully");
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException ex) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "This CPF already exists in our database");
            return ResponseEntity.ok(response);
        }
    }

    @GetMapping("/people/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Employee does not exist with id: " + id)));
        return ResponseEntity.ok(person);
    }

}
