package com.softplan.people.manager.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.softplan.people.manager.auth.jwt.JwtTokenRequest;
import net.minidev.json.annotate.JsonIgnore;
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

import static org.junit.jupiter.api.Assertions.assertEquals;

@AutoConfigureMockMvc
@SpringBootTest
@RunWith(SpringRunner.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mvc;

    // authenticate

    JwtTokenRequest loginFormCorrectCredentials = new JwtTokenRequest("admin", "admin");

    JwtTokenRequest loginFormBadCredentials = new JwtTokenRequest("wrong_admin", "wrong_admin");

    @Test
    public void should_return_success_on_correct_credentials() throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(loginFormCorrectCredentials);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders.post("/authenticate");

        MvcResult result = mvc.perform(request
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)
                .characterEncoding("utf-8"))
                .andReturn();

        assertEquals(HttpURLConnection.HTTP_OK, result.getResponse().getStatus());
    }

    @Test
    public void should_return_unauthorized_on_wrong_credentials() throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(loginFormBadCredentials);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders.post("/authenticate");

        MvcResult result = mvc.perform(request
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)
                .characterEncoding("utf-8"))
                .andReturn();


        assertEquals(HttpURLConnection.HTTP_UNAUTHORIZED, result.getResponse().getStatus());
    }

}