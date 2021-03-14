package com.softplan.people.manager.model;

import com.softplan.people.manager.types.Gender;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "people")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @CreationTimestamp
    @Column(name = "created_At", updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "last_Updated")
    private Date lastUpdated;

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

    @Column(name = "cpf", unique = true)
    @NotBlank(message = "{cpf.not.blank}")
    @NotNull(message = "{cpf.not.null}")
    @CPF(message = "{cpf.not.valid}")
    @Size(min = 14, message = "{cpf.size}")
    private String cpf;

    @Column(name = "birth_date")
    @NotNull(message = "{birthDate.not.null}")
    private Date birthDate;

    @Column(name = "gender")
    private Gender gender;

    public Person() {
    }

    public Person(String name, String email, String nativeFrom, String nationality, String cpf, Date birthDate, Gender gender) {
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

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
