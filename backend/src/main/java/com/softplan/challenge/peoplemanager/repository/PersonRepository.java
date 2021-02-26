package com.softplan.challenge.peoplemanager.repository;

import com.softplan.challenge.peoplemanager.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}
