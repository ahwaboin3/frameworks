package com.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TodoCont {
	
	@Autowired
	TodoService tService;
	
//	@GetMapping("/")
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String getTodos(Model model) {
//		for(TodoEntity tEntity:tService.getTodos()) {
//			System.out.println(tEntity);
//		}
//		List<TodoEntity> todos=tService.getTodos();
//		model.addAttribute("todos",todos);
		model.addAttribute("todos",tService.getTodos());
		return "todos";
	}
	
	@PostMapping("/put")
//	public String putTodo(String content) {
	public String putTodo(TodoEntity tEntity) {
//		System.out.println(content);
		System.out.println(tEntity);
		return "redirect:/";
	}
	
}
