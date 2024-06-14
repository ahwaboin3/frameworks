package com.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

//@Component - @Controller @Repository @Service
@Controller
@RequestMapping(value="/thymeleaf")
public class ThymeleafExController {
	@GetMapping("/ex01")
	public String thymeleafExample01(Model model) {
		model.addAttribute("data","타임리프 예제 입니다.");
		System.out.println("devtools test");
		return "tlEx01";
	}
	
	@GetMapping("/ex02")
	public String thymeleafExample02(Model model) {
		return "tl/tlEx02";
	}
}
