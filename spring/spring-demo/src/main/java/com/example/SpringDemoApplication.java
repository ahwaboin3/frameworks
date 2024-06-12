package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class SpringDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringDemoApplication.class, args);
	}
	
	@GetMapping(value="/")
	public String HelloWorld() {
		return "Hello World!";
	}
	
	//우측 클릭 > run as > spring boot app
	//localhost:8080 브라우저 주소창에서 접속

}
