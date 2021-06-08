package com.softplan.people.manager.services;

import com.softplan.people.manager.exception.ResourceNotFoundException;
import com.softplan.people.manager.interfaces.IPersonService;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService implements IPersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public void add(Person person) {
        isCpfRegistered(person.getCpf());

        personRepository.save(person);
    }

    public void update(Long id, Person newPerson) {
        Person person = getById(id);

        if (!person.getCpf().equals(newPerson.getCpf())) {
            isCpfRegistered(newPerson.getCpf());
        }

        newPerson.setId(person.getId());

        personRepository.save(newPerson);
    }

    public void delete(Long id) {
        Person person = getById(id);
        personRepository.delete(person);
    }

    public Person getById(Long id) {
        return personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("Person does not exist with id: " + id)));
    }

    public Boolean isCpfRegistered(String cpf) {
        return personRepository.existsByCpf(cpf);
    }

}
