package com.softplan.people.manager.controller;

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

import static org.junit.jupiter.api.Assertions.assertEquals;

@AutoConfigureMockMvc
@SpringBootTest
@RunWith(SpringRunner.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mvc;

    // authenticate

    @Test
    public void should_return_success_on_correct_credentials() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/auth").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("admin:admin".getBytes()));
        ;

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(200, result.getResponse().getStatus());
    }

    @Test
    public void should_return_unauthorized_on_wrong_credentials() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/auth").header(HttpHeaders.AUTHORIZATION,
                "Basic " + Base64Utils.encodeToString("wrong_admin:wrong_admin".getBytes()));
        ;

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals(401, result.getResponse().getStatus());
    }

}