package com.softplan.people.manager.model;

import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "people")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    @NotBlank(message = "{name.not.blank}")
    @NotNull(message = "{name.not.null}")
    private String name;

    @Column(name = "email")
    @Email
    private String email;

    @Column(name = "native_from")
    private String nativeFrom;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "cpf")
    @NotBlank(message = "{cpf.not.blank}")
    @NotNull(message = "{cpf.not.null}")
    @CPF(message = "{cpf.not.valid}")
    private String cpf;

    @Column(name = "birth_date")
    @NotNull(message = "{birthDate.not.null}")
    private Date birthDate;

    @Column(name = "gender")
    private String gender;

    public Person() {
    }

    public Person(String name, String email, String nativeFrom, String nationality, String cpf, Date birthDate, String gender) {
        super();
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
