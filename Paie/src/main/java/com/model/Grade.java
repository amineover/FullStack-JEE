package com.model;
 
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Grade {

	public @Id @GeneratedValue Long id;
	public  String code;
	public String grade;
	 

	/*@OneToMany(cascade = javax.persistence.CascadeType.ALL) 
    @JoinColumn(name="classification_id", referencedColumnName = "id")
    private Set<LigneSalarierClassification> listLigneSalarierClassification = new HashSet<LigneSalarierClassification>();
*/
	 
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	/*
	public Set<LigneSalarierClassification> getListLigneSalarierClassification() {
		return listLigneSalarierClassification;
	}
	public void setListLigneSalarierClassification(Set<LigneSalarierClassification> listLigneSalarierClassification) {
		this.listLigneSalarierClassification = listLigneSalarierClassification;
	}
	*/
	
	
		
}