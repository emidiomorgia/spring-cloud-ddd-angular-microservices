package info.morgia.counters.countersservice.interfaces.web.home;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class HomeController {
    
    @GetMapping("/getValue")
    public String getValue() {
        return new Date().toString();
    }
}