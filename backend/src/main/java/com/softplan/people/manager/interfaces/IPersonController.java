package com.softplan.people.manager.interfaces;

import com.softplan.people.manager.model.Person;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IPersonController {

    List<Person> getPeople();

    ResponseEntity<Map<String, String>> createPerson(Person person);

    ResponseEntity<Map<String, String>> updatePerson(Long id, Person newPerson);

    ResponseEntity<Person> getPersonById(Long id);

    ResponseEntity<Map<String, Boolean>> deletePerson(Long id);

    Boolean isCpfAlreadyRegistered(String cpf);

}
