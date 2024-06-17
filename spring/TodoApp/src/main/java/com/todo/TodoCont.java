package com.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class TodoCont {
	
	TodoService tService;
	
	@GetMapping("/")
	public String getTodos(Model model) {
		for(TodoEntity tEntity:tService.getTodos()) {
			System.out.println(tEntity);
		}
		return "todos";
	}
	
}
