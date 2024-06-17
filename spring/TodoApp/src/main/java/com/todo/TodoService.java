package com.todo;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {
	
	TodoRepo tRepo;
	
//	@Autowired
//	public TodoService(TodoRepo tRepo) {
//		this.tRepo = tRepo;
//	}
	
	public List<TodoEntity> getTodos(){
		return tRepo.findAll();
	}

}
