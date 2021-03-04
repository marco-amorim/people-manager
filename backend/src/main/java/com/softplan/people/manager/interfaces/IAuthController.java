package com.softplan.people.manager.interfaces;

import com.softplan.people.manager.auth.AuthenticationBean;
import org.springframework.http.ResponseEntity;

public interface IAuthController {
    ResponseEntity<AuthenticationBean> authenticate();
}
