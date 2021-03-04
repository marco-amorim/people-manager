package com.softplan.people.manager.controller;

import com.softplan.people.manager.interfaces.ISourceCodeController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SourceCodeController implements ISourceCodeController {

    @GetMapping("/source")
    public Map<String, String> getSourceCodeLink() {
        Map<String, String> response = new HashMap<>();

        response.put("repository", "https://github.com/marco-amorim/people-manager");

        return response;
    }
}
