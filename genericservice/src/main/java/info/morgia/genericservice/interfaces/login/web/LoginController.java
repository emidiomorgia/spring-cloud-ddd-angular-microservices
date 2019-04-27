package info.morgia.genericservice.interfaces.login.web;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @GetMapping("/login")
    public String Login(@RequestParam() String username,@RequestParam() String password){
        return "OK_2";
    }
}