package com.todo;

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
	//get방식 요청: 주소창에 데이터가 노출 
	//post방식 요청: 주소창에 데이터가 노출 안됨
	@PostMapping("/put")
//	public String putTodo(@RequestParam TodoEntity tEntity) {
	public String putTodo(TodoEntity tEntity) {
//		System.out.println(tEntity);
		tEntity.setCompleted(false);
		tService.putTodo(tEntity);
		return "redirect:/";
	}
	
}






