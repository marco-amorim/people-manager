package com.softplan.people.manager.controller;

import com.softplan.people.manager.exception.ResourceNotFoundException;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
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
            return ResponseEntity.status(201).body(response);
        } catch (DataIntegrityViolationException ex) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "This CPF already exists in our database");
            return ResponseEntity.status(409).body(response);
        }
    }

    @GetMapping("/people/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Person does not exist with id: " + id)));
        return ResponseEntity.status(200).body(person);
    }

    @DeleteMapping("/people/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Long id) {
        Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Person does not exist with id: " + id)));

        personRepository.delete(person);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.status(202).body(response);
    }

}
