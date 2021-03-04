package com.softplan.people.manager.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;

@AutoConfigureMockMvc
@SpringBootTest
@RunWith(SpringRunner.class)
public class SourceCodeControllerTest {

    @Autowired
    private MockMvc mvc;

    // getSourceCodeLink

    @Test
    public void should_return_repository_link_for_unauthenticated_request() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/source");

        MvcResult result = mvc.perform(request).andReturn();

        assertEquals("{\"repository\":\"https://github.com/marco-amorim/people-manager\"}", result.getResponse().getContentAsString());
    }
}