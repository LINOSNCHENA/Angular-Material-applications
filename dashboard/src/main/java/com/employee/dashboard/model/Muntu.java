package com.employee.dashboard.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BACKSPRING")
public class Muntu {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name") 
	private String name;
	@Column(name = "post")
	private String post;
	@Column(name = "dept")
	private String dept;

	@Column(name = "salary", nullable = false, 
	columnDefinition = "varchar(255) default '190850'")
	private int salary;

	@Column(name = "createdat", nullable = false, updatable = false,
	 insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date createdat;

	public Muntu(String name, String post, String dept, 
	int salary,  
	Date createdat) {
		this.name = name;
		this.post = post;
		this.dept = dept;
		this.salary = salary;
	//	this.status = status;
		this.createdat = createdat;
	}

	public Muntu() {}
	
public int getId()		 		    {	return id;			}
public void setId(int id) 		    {	this.id = id;		}

public String getName()  		    {	return name;		}
public void setName(String name)    {   this.name = name;	}

public String getDept()  		  {	return dept;			}
public void setDept(String dept)  {	this.dept = dept;		}
public String getPost()  		  {	return post;			}
public void setPost(String post)  {	this.post = post;		}

public int getSalary()          		 {	return salary;		 	 }
public void setSalary(int salary)		 {	this.salary = salary;	 }

public Date getCreatedat()  		    {	return new Date();		    }
public void setCreatedt(Date createdat) {	this.createdat = new Date(); }

// public void setCreated_at(Date created_at) {
// 	this.created_at = new Date();
// }

// public Date getCreated_at() {
// 	return new Date();
// }

}