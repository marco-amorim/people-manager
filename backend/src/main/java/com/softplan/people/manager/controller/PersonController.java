package com.softplan.people.manager.controller;

import com.softplan.people.manager.controller.dto.PersonDto;
import com.softplan.people.manager.controller.form.PersonForm;
import com.softplan.people.manager.exception.ResourceNotFoundException;
import com.softplan.people.manager.interfaces.IPersonController;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.HttpURLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PersonController implements IPersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/people")
    public List<PersonDto> getPeople() {
        List<Person> people = personRepository.findAll();

        return PersonDto.convertToPersonDtoList(people);
    }

    @PostMapping("/people")
    public ResponseEntity<Map<String, String>> createPerson(@Valid @RequestBody PersonForm personForm) {
        try {
            Person person = personForm.convertToPerson();
            personRepository.save(person);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Person created successfully");
            return ResponseEntity.status(HttpURLConnection.HTTP_CREATED).body(response);
        } catch (DataIntegrityViolationException ex) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "This CPF already exists in our database");
            return ResponseEntity.status(HttpURLConnection.HTTP_CONFLICT).body(response);
        }
    }

    @PutMapping("/people/{id}")
    public ResponseEntity<Map<String, String>> updatePerson(@PathVariable Long id, @Valid @RequestBody PersonForm personForm) {
        Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Person does not exist with id: " + id)));

        try {
            Person newPerson = personForm.convertToPerson();

            newPerson.setId(person.getId());

            personRepository.save(newPerson);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Person updated successfully");
            return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(response);
        } catch (DataIntegrityViolationException ex) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "This CPF already exists in our database");
            return ResponseEntity.status(HttpURLConnection.HTTP_CONFLICT).body(response);
        }


    }

    @GetMapping("/people/{id}")
    public ResponseEntity<PersonDto> getPersonById(@PathVariable Long id) {
        Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Person does not exist with id: " + id)));
        PersonDto personDto = PersonDto.convertToPersonDto(person);
        return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(personDto);
    }

    @DeleteMapping("/people/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Long id) {
        Person person = personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Person does not exist with id: " + id)));

        personRepository.delete(person);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.status(HttpURLConnection.HTTP_ACCEPTED).body(response);
    }

    @GetMapping("/exist-cpf/{cpf}")
    public ResponseEntity<Boolean> checkCpfAlreadyRegistered(@PathVariable String cpf) {

        return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(isCpfAlreadyRegistered(cpf));
    }

    @Override
    public Boolean isCpfAlreadyRegistered(String cpf) {
        return personRepository.getCpfCount(cpf) > 0;
    }

}
