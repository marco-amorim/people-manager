package com.softplan.people.manager.interfaces;

import com.softplan.people.manager.controller.form.PersonForm;
import com.softplan.people.manager.model.Person;

import java.util.List;

public interface IPersonService {

    List<Person> getAll();

    void add(Person person);

    void update(Long id, PersonForm personForm);

    void delete(Long id);

    Person getById(Long id);

    Boolean isCpfRegistered(String cpf);

}
