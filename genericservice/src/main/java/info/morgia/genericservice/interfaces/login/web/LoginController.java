package info.morgia.genericservice.interfaces.login.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @RequestMapping(path ="/login", method = RequestMethod.GET, produces = "application/json")
    public LoginResponse Login(@RequestParam() String username,@RequestParam() String password){
        if ( username.equals("admin") && password.equals("admin")) {
        	return new LoginResponse("OK_2");
        } else {
        	throw new CustomResponseException("Cannot find a user with provided username and/or password");
        }
    	
    }
}