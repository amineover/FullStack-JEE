package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Formation {

	public @Id @GeneratedValue Long id;
	public String code;
	public String formation;

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

	public String getFormation() {
		return formation;
	}

	public void setFormation(String formation) {
		this.formation = formation;
	}


	
	
	

}
