package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Fonction {
	
	public @Id @GeneratedValue Long id;
	public String code;
	public String fonction;
	
	private int salarier;

	
 
	
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

	public String getFonction() {
		return fonction;
	}

	public void setFonction(String fonction) {
		this.fonction = fonction;
	}

	public int getSalarier() {
		return salarier;
	}

	public void setSalarier(int salarier) {
		this.salarier = salarier;
	}
	
	

}
