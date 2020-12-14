package com.employee.dashboard.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime; // Third API
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

  @Column(
    name = "salary",
    nullable = false,
    columnDefinition = "varchar(255) default '190850'"
  )
  private int salary;

  @Column(
    name = "createdat",
    nullable = false,
    updatable = false, // pattern = "yyyy-MM-dd HH:mm:ss",
    insertable = false,
    columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
  )
  private Date createdat;

  @Column(
    name = "updatedat",
    nullable = false)
  @JsonFormat(
    locale = "zh",
    timezone = "GMT+8",// nullable = false,
    pattern = "yyyy-MM-dd | ' BRNO-TIME ' | HH:mm:ss"
  )
  private LocalDateTime updatedat= LocalDateTime.now();

  public Muntu(
    String name,
    String post,
    String dept,
    int salary,
    Date createdat,
    LocalDateTime updatedat
  ) {
    this.name = name;
    this.post = post;
    this.dept = dept;
    this.salary = salary;
    this.createdat = createdat;
    this.updatedat = updatedat;
  }

  public Muntu() {}

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDept() {
    return dept;
  }

  public void setDept(String dept) {
    this.dept = dept;
  }

  public String getPost() {
    return post;
  }

  public void setPost(String post) {
    this.post = post;
  }

  public int getSalary() {
    return salary;
  }

  public void setSalary(int salary) {
    this.salary = salary;
  }

  public Date getCreatedat() {
    return new Date();
  }

  public void setCreatedat(Date createdat) {
    this.createdat = new Date();
  }

  public LocalDateTime getUpdatedat() {
    return LocalDateTime.now();
  }

  public void setUpdatedat(LocalDateTime updatedat) {
    this.updatedat = LocalDateTime.now();
  }
}
