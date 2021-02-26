package com.softplan.challenge.peoplemanager.model;

import java.util.Date;

public class Person {
    private String name;
    private String email;
    private String nativeFrom;
    private String nationality;
    private String cpf;
    private Date birthDate;
    private String gender;

    public Person() {
    }

    public Person(String name, String email, String nativeFrom, String nationality, String cpf, Date birthDate, String gender) {
        this.name = name;
        this.email = email;
        this.nativeFrom = nativeFrom;
        this.nationality = nationality;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNativeFrom() {
        return nativeFrom;
    }

    public void setNativeFrom(String nativeFrom) {
        this.nativeFrom = nativeFrom;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
