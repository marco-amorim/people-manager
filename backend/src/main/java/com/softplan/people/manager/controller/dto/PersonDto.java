package com.softplan.people.manager.controller.dto;

import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.types.Gender;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class PersonDto {

    private Long id;
    private String name;
    private String email;
    private String nationality;
    private String nativeFrom;
    private String cpf;
    private Gender gender;
    private Date birthDate;

    public PersonDto(Person person) {
        this.id = person.getId();
        this.name = person.getName();
        this.email = person.getEmail();
        this.nationality = person.getNationality();
        this.nativeFrom = person.getNativeFrom();
        this.cpf = person.getCpf();
        this.gender = person.getGender();
        this.birthDate = person.getBirthDate();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getNationality() {
        return nationality;
    }

    public String getNativeFrom() {
        return nativeFrom;
    }

    public String getCpf() {
        return cpf;
    }

    public Gender getGender() {
        return gender;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public static List<PersonDto> convertToPersonDtoList(List<Person> people) {
        return people.stream().map(PersonDto::new).collect(Collectors.toList());
    }

    public static PersonDto convertToPersonDto(Person person) {
        return new PersonDto(person);
    }
}
