package com.softplan.people.manager.interfaces;

import com.softplan.people.manager.controller.dto.PersonDto;
import com.softplan.people.manager.controller.form.PersonForm;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IPersonController {

    List<PersonDto> getPeople();

    ResponseEntity<Map<String, String>> createPerson(PersonForm personForm);

    ResponseEntity<Map<String, String>> updatePerson(Long id, PersonForm personForm);

    ResponseEntity<PersonDto> getPersonById(Long id);

    ResponseEntity<Map<String, Boolean>> deletePerson(Long id);

    Boolean isCpfAlreadyRegistered(String cpf);

}
