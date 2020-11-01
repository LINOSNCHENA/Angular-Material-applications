package com.presly.marvin.controller;

import java.util.List;	
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.presly.marvin.view.Reposit;
import com.presly.marvin.model.Muntu;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
// @RequestMapping("full")

public class Controller {
@Autowired  	Reposit participantx;

// http://8080/full/employees
@PostMapping(path = "employees")											// POST #1
	public Muntu addItem(@RequestBody Muntu presentX)
		 { return participantx.save(presentX); }
 
// http://8080/full/employees/:[id]	
@GetMapping(path = "employees/{id}")										// GET #2
	public Muntu getItem(@PathVariable("id") int id)
		{ return participantx.findById(id).orElse(null);}
@GetMapping(path = "employees")
	public List<Muntu> getItems()
		 { return participantx.findAll();	}					    	// GET #3
		
// http://8080/full/account/:[id]			SECOND OPTION			   // UPDATE #4
@PutMapping(path = "employees")
	public Muntu saveOrUpdateItem(@RequestBody Muntu presentY) 
			  { return participantx.save(presentY);	}	

// http://8080/full/employees/:[id]           OPTION ONE		          // UPDATING #5
@PutMapping(path = "employees/{id}")									
	public Muntu updateItemById(@PathVariable int id, 
	@Valid @RequestBody Muntu promotedX) {
		Muntu promotedCopy = participantx.findById(id).orElse(null);
		promotedCopy.setName(promotedX.getName());		
		promotedCopy.setDept(promotedX.getDept());		
		promotedCopy.setPost(promotedX.getPost());
		promotedCopy.setSalary(promotedX.getSalary());
		promotedCopy.setStatus(promotedX.getStatus());
		Muntu updatedItem = participantx.save(promotedCopy);		
		return updatedItem;	}

// http://8080/full/employees/:[id]                                  // PATCH (#6P)
@PatchMapping(path = "employees/{id}")									
	public Muntu patchUpdateItemById(@PathVariable int id, 
	@Valid @RequestBody Muntu demotedx) {
		Muntu demotedCopy = participantx.findById(id).orElse(null);
		demotedCopy.setName(demotedx.getName());
		demotedCopy.setDept(demotedx.getDept());		
		demotedCopy.setPost(demotedx.getPost());
		demotedCopy.setSalary(demotedx.getSalary());
		demotedCopy.setStatus(demotedx.getStatus());
		Muntu updatedItem = participantx.save(demotedCopy);
		return updatedItem; 
	}
// http://8080/full/employees/:[id]									 // DELETING #7
@DeleteMapping(path = "employees/{id}")							        
	public String deleteItem(@PathVariable int id)
	 {	participantx.deleteById(id);		
		return "participants' record erased successfully";
	}

// http://8080/full/employees				EVERYTHING  			 // DELETE-#8p
 @DeleteMapping(path = "employees")								        
	public void deleteAllItems(Muntu firedx) 
		{	participantx.deleteAll();	}
}
