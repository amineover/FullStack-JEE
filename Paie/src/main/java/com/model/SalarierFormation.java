package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SalarierFormation {
	public @Id @GeneratedValue Long id;
    public String dateDebutFormation;
    public String dateFinFormation;
    public String descriptionFormation;
	
	private int salarier;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private Formation formation;
	public String getDateDebutFormation() {
		return dateDebutFormation;
	}
	public void setDateDebutFormation(String dateDebutFormation) {
		this.dateDebutFormation = dateDebutFormation;
	}
	public String getDateFinFormation() {
		return dateFinFormation;
	}
	public void setDateFinFormation(String dateFinFormation) {
		this.dateFinFormation = dateFinFormation;
	}
	public String getDescriptionFormation() {
		return descriptionFormation;
	}
	public void setDescriptionFormation(String descriptionFormation) {
		this.descriptionFormation = descriptionFormation;
	}
	public int getSalarier() {
		return salarier;
	}
	public void setSalarier(int salarier) {
		this.salarier = salarier;
	}
	public Formation getFormation() {
		return formation;
	}
	public void setFormation(Formation formation) {
		this.formation = formation;
	}
	
	
}
