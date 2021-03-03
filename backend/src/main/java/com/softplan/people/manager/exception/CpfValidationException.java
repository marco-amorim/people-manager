package com.softplan.people.manager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CpfValidationException extends Exception {
    public CpfValidationException() {
        super("Invalid CPF");
    }
}
