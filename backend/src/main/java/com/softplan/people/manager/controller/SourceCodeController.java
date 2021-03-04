package com.softplan.people.manager.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SourceCodeController {

    @GetMapping("/source")
    public Map<String, String> getSourceCodeLink() {
        Map<String, String> response = new HashMap<>();

        response.put("repository", "https://github.com/marco-amorim/people-manager");

        return response;
    }
}
