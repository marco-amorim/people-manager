package com.softplan.people.manager.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.softplan.people.manager.controller.form.PersonForm;
import com.softplan.people.manager.exception.ResourceNotFoundException;
import com.softplan.people.manager.model.Person;
import com.softplan.people.manager.types.Gender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.Base64Utils;

import java.net.HttpURLConnection;
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
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_success_status_code_for_authenticated_request() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(HttpURLConnection.HTTP_OK, result.getResponse().getStatus());
    }

    // Unauthenticated Requests

    @Test
    public void should_return_unauthorized_status_code_for_not_logged_request() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(HttpURLConnection.HTTP_UNAUTHORIZED, result.getResponse().getStatus());
    }

    // getPersonById

    @Test
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_notfound_status_code_for_getting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people/-1");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(HttpURLConnection.HTTP_NOT_FOUND, result.getResponse().getStatus());
    }

    @Test
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_custom_exception_for_getting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/v1/people/-1");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(ResourceNotFoundException.class, result.getResolvedException().getClass());
    }

    // deletePerson

    @Test
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_notfound_status_code_for_deleting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.delete("/api/v1/people/-1");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(HttpURLConnection.HTTP_NOT_FOUND, result.getResponse().getStatus());
    }

    @Test
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_custom_exception_for_deleting_invalid_person_id() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.delete("/api/v1/people/-1");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(ResourceNotFoundException.class, result.getResolvedException().getClass());
    }

    // updatePerson

    @Test
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_bad_request_status_code_for_updating_invalid_person_id() throws Exception {
        Person mockPerson = new Person("Name", "email@email.com", "Florianopolis", "Brazilian", "073.028.567.82", new Date(), Gender.MALE);

        RequestBuilder request = MockMvcRequestBuilders.put("/api/v1/people/-1", mockPerson);

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(HttpURLConnection.HTTP_BAD_REQUEST, result.getResponse().getStatus());
    }

    // createPerson

    @Test
    @WithMockUser(username = "admin", password = "admin")
    public void should_return_bad_request_status_code_on_person_missing_required_fields() throws Exception {
        // missing fields: CPF, Birth Date and Name
        PersonForm mockPersonForm = new PersonForm();
        mockPersonForm.setNativeFrom("Florianopolis");
        mockPersonForm.setNationality("Brazilian");
        mockPersonForm.setGender(Gender.MALE);
        mockPersonForm.setEmail("marcoamorim95@hotmail.com");

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(mockPersonForm);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders.post("/api/v1/people");

        MvcResult result = mvc.perform(request
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)
                .characterEncoding("utf-8"))
                .andReturn();

        assertEquals(HttpURLConnection.HTTP_BAD_REQUEST, result.getResponse().getStatus());
    }

}