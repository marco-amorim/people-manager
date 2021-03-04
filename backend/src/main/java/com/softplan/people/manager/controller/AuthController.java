package com.softplan.people.manager.controller;

import com.softplan.people.manager.auth.AuthenticationBean;
import com.softplan.people.manager.interfaces.IAuthController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController implements IAuthController {

    @GetMapping(path = "/auth")
    public ResponseEntity<AuthenticationBean> authenticate() {
        AuthenticationBean authenticated = new AuthenticationBean("You are authenticated");
        return ResponseEntity.status(200).body(authenticated);
    }
}

