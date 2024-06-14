package com.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//@Component - @Controller @Repository @Service
@Controller
@RequestMapping(value="/thymeleaf")
public class ThymeleafExController {
	@GetMapping("/ex01")
	public String thymeleafExample01(Model model) {
		return "tlEx01";
	}
}
