package com.softplan.people.manager.repository;

import com.softplan.people.manager.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PersonRepository extends JpaRepository<Person, Long> {

    @Query(value = "SELECT COUNT(*) FROM people WHERE cpf = ?1", nativeQuery = true)
    Integer getCpfCount(String cpf);
}
