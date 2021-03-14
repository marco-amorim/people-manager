package com.softplan.people.manager.interfaces;

import com.softplan.people.manager.auth.jwt.JwtTokenRequest;
import com.softplan.people.manager.exception.AuthenticationException;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;

public interface IAuthController {
    ResponseEntity<?> createAuthenticationToken(JwtTokenRequest authenticationRequest);

    ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request);

    ResponseEntity<String> handleAuthenticationException(AuthenticationException e);

    void authenticate(String username, String password);


}
