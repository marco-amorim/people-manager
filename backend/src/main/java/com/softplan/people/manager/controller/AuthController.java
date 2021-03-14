package com.softplan.people.manager.controller;

import com.softplan.people.manager.auth.AuthenticationBean;
import com.softplan.people.manager.interfaces.IAuthController;
import com.softplan.people.manager.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.HttpURLConnection;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController implements IAuthController {

    @GetMapping(path = "/auth")
    public ResponseEntity<AuthenticationBean> authenticate() {
        AuthService authService = new AuthService();
        
        AuthenticationBean response = authService.signIn();

        return ResponseEntity.status(HttpURLConnection.HTTP_OK).body(response);
    }
}
