package eu.morgia.coreservice.interfaces.login;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @RequestMapping("/")
    public String login(){
        return "Login";
    }
}