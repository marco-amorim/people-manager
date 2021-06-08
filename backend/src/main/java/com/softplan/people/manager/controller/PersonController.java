package com.softplan.people.manager.controller;

import com.softplan.people.manager.controller.dto.PersonDto;
import com.softplan.people.manager.controller.form.PersonForm;
import com.softplan.people.manager.interfaces.IPersonController;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private PersonService personService;

    @GetMapping("/people")
    public List<PersonDto> getPeople() {
        List<Person> people = personService.getAll();

        return PersonDto.convertToPersonDtoList(people);
    }

    @PostMapping("/people")
    public ResponseEntity<Map<String, String>> createPerson(@Valid @RequestBody PersonForm personForm) {

        Map<String, String> response = new HashMap<>();

        try {
            Person person = personForm.convertToPerson();

            personService.add(person);

            response.put("success", "Person created successfully");

            return ResponseEntity.status(HttpURLConnection.HTTP_CREATED).body(response);

        } catch (Exception ex) {
            response.put("error", ex.getMessage());

            return ResponseEntity.status(HttpURLConnection.HTTP_BAD_REQUEST).body(response);
        }
    }

    @PutMapping("/people/{id}")
    public ResponseEntity<Map<String, String>> updatePerson(@PathVariable Long id, @Valid @RequestBody PersonForm personForm) {

        Map<String, String> response = new HashMap<>();

        try {
            Person newPerson = personForm.convertToPerson();
            
            personService.update(id, newPerson);

            response.put("success", "Person updated successfully");

            return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(response);

        } catch (Exception ex) {
            response.put("error", ex.getMessage());

            return ResponseEntity.status(HttpURLConnection.HTTP_BAD_REQUEST).body(response);
        }

    }

    @GetMapping("/people/{id}")
    public ResponseEntity<PersonDto> getPersonById(@PathVariable Long id) {
        Person person = personService.getById(id);
        PersonDto personDto = PersonDto.convertToPersonDto(person);
        return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(personDto);
    }

    @DeleteMapping("/people/{id}")
    public ResponseEntity<Map<String, String>> deletePerson(@PathVariable Long id) {

        personService.delete(id);
        Map<String, String> response = new HashMap<>();
        response.put("success", "Person deleted successfully");
        return ResponseEntity.status(HttpURLConnection.HTTP_ACCEPTED).body(response);
    }

    @GetMapping("/exist-cpf/{cpf}")
    public ResponseEntity<Boolean> isCpfAlreadyRegistered(@PathVariable String cpf) {

        Boolean response = personService.isCpfRegistered(cpf);

        return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(response);
    }

}
