package com.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SalarierDiplome {
	public @Id @GeneratedValue Long id;
	public String dateObtention;
	
	
	 
	private int salarier;
	
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST )
	private Diplome diplome;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDateObtention() {
		return dateObtention;
	}
	public void setDateObtention(String dateObtention) {
		this.dateObtention = dateObtention;
	}
	public int getSalarier() {
		return salarier;
	}
	public void setSalarier(int salarier) {
		this.salarier = salarier;
	}
	public Diplome getDiplome() {
		return diplome;
	}
	public void setDiplome(Diplome diplome) {
		this.diplome = diplome;
	}
	

}
