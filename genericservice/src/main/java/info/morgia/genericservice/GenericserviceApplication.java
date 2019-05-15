package info.morgia.genericservice;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class GenericserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GenericserviceApplication.class, args);
	}

}
