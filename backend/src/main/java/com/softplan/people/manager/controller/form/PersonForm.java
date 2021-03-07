package com.softplan.people.manager.controller.form;

import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.types.Gender;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

public class PersonForm {

    @NotBlank(message = "{name.not.blank}")
    @NotNull(message = "{name.not.null}")
    private String name;

    @Email
    private String email;
    private String nationality;
    private String nativeFrom;

    @NotBlank(message = "{cpf.not.blank}")
    @NotNull(message = "{cpf.not.null}")
    @CPF(message = "{cpf.not.valid}")
    @Size(min = 14, message = "{cpf.size}")
    private String cpf;
    private Gender gender;

    @NotNull(message = "{birthDate.not.null}")
    private Date birthDate;

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

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getNativeFrom() {
        return nativeFrom;
    }

    public void setNativeFrom(String nativeFrom) {
        this.nativeFrom = nativeFrom;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public Person convertToPerson() {
        return new Person(name, email, nativeFrom, nationality, cpf, birthDate, gender);
    }
}
