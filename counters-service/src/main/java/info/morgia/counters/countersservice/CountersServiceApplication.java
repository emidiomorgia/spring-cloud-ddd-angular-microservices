package info.morgia.counters.countersservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CountersServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CountersServiceApplication.class, args);
	}

}
