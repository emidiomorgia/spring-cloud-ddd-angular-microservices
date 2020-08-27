package info.morgia.counters.countersservice.interfaces.web.home;

import java.net.InetAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class HomeController {
    @Autowired
    Environment environment;

    @GetMapping("/getValue")
    public String getValue() {
        String res="ERROR";
        try {
            // Port
            String port= environment.getProperty("server.port");
            // Local address
            String localAddress=InetAddress.getLocalHost().getHostAddress();
            localAddress += " " + InetAddress.getLocalHost().getHostName();

            // Remote address
            String remoteAddress = InetAddress.getLoopbackAddress().getHostAddress();
            remoteAddress += " " + InetAddress.getLoopbackAddress().getHostName();

            res = "ADDR: " + localAddress +", " + remoteAddress + ": " + port;
        } catch (Exception e) {
            
            res="ERROR";
        }
        

        return res;
    }
}