package com.softplan.people.manager.repository;

import com.softplan.people.manager.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
