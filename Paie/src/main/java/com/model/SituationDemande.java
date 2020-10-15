package com.model;
 
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class SituationDemande {

	public @Id @GeneratedValue Long id;
	public  String code;
	public  String dateEtat;
	public  String Etat;
	
    /*@JsonIgnore 
	@OneToMany(cascade = javax.persistence.CascadeType.ALL) 
    @JoinColumn(name="situation_demande_id", referencedColumnName = "id")
    private Set<Demande> listDemandes = new HashSet<Demande>();

	public Set<Demande> getListDemandesConges() {
		return listDemandes;
	}
	public void setListDemandesConges(Set<Demande> listDemandes) {
		this.listDemandes = listDemandes;
	}*/
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
	public String getDateEtat() {
		return dateEtat;
	}
	public void setDateEtat(String dateEtat) {
		this.dateEtat = dateEtat;
	}
	public String getEtat() {
		return Etat;
	}
	public void setEtat(String etat) {
		Etat = etat;
	}
	/*public Set<Demande> getListDemandes() {
		return listDemandes;
	}
	public void setListDemandes(Set<Demande> listDemandes) {
		this.listDemandes = listDemandes;
	}*/
	
		
}