package info.morgia.genericservice.interfaces.login.web;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CustomResponseException extends RuntimeException {
	public CustomResponseException(String message) {
		super(message);
	}
}
