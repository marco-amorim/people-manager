package com.softplan.people.manager.services;

import com.softplan.people.manager.auth.AuthenticationBean;
import com.softplan.people.manager.interfaces.IAuthService;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IAuthService {

    public AuthenticationBean signIn() {
        AuthenticationBean response = new AuthenticationBean("You are authenticated");
        return response;
    }
}
