package com.model;
 
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Demande {

	public @Id @GeneratedValue Long id;
	public String code;
	public boolean etat;
	public String datedebut;
	public String datefin;
	public String motifrejet;
	//@JsonIgnore 
	//@ManyToOne(fetch = FetchType.LAZY)
	private int salarier;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private TypeDemande typeDemande;
	

	public String situationDemande;
	
	public boolean isEtat() {
		return etat;
	}
	public void setEtat(boolean etat) {
		this.etat = etat;
	}
	
	public int getSalarier() {
		return salarier;
	}
	public void setSalarier(int salarier) {
		this.salarier = salarier;
	}
	
	public TypeDemande getTypeDemande() {
		return typeDemande;
	}
	public void setSalarier(TypeDemande typeDemande) {
		this.typeDemande = typeDemande;
	}
	
	public String getSituationDemande() {
		return situationDemande;
	}
	public void setSalarier(String situationDemande) {
		this.situationDemande = situationDemande;
	}
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
	public String getDatedebut() {
		return datedebut;
	}
	public void setDatedebut(String datedebut) {
		this.datedebut = datedebut;
	}
	public String getDatefin() {
		return datefin;
	}
	public void setDatefin(String datefin) {
		this.datefin = datefin;
	}
	public String getmotifrejet() {
		return motifrejet;
	}
	public void setmotifrejet(String motifrejet) {
		this.motifrejet = motifrejet;
	}	
}