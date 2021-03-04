package com.softplan.people.manager.controller;

import com.softplan.people.manager.exception.ResourceNotFoundException;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.types.Gender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.Base64Utils;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;


@AutoConfigureMockMvc
@SpringBootTest
@RunWith(SpringRunner.class)
public class PersonControllerTest {

    @Autowired
    private MockMvc mvc;

    // Authenticated Requests

    @Test
    public void should_return_success_for_authenticated_request() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(200, result.getResponse().getStatus());
    }

    // Unauthenticated Requests

    @Test
    public void should_block_unauthenticated_request() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(401, result.getResponse().getStatus());
    }

    // getPersonById

    @Test
    public void should_return_not_found_for_getting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people/-1").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(404, result.getResponse().getStatus());
    }

    @Test
    public void should_return_custom_exception_for_getting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people/-1").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(ResourceNotFoundException.class, result.getResolvedException().getClass());
    }

    // deletePerson

    @Test
    public void should_return_not_found_for_deleting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.delete("/api/v1/people/-1").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(404, result.getResponse().getStatus());
    }

    @Test
    public void should_return_custom_exception_for_deleting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.delete("/api/v1/people/-1").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(ResourceNotFoundException.class, result.getResolvedException().getClass());
    }

    // updatePerson

    @Test
    public void should_return_bad_request_for_updating_invalid_person_id() throws Exception {
        Person mockPerson = new Person("Name", "email@email.com", "Florianopolis", "Brazilian", "073.028.567.82", new Date(), Gender.MALE);

        RequestBuilder request = MockMvcRequestBuilders.put("/api/v1/people/-1", mockPerson).header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(400, result.getResponse().getStatus());
    }

}