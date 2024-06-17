package com.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
	
	@Autowired
	TodoRepo tRepo;
	
	public List<TodoEntity> getTodos(){
		return tRepo.findAll();
	}

}
