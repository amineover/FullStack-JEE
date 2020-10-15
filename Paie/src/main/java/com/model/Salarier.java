package com.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Salarier {

	public @Id @GeneratedValue Long id;
	public  String code;
	public  String Nom;
	public  String Prenom;
	public final  double tarif = 200;
	public String email;
	public String password;
	public String role;
	
/*	
	@OneToMany(cascade = javax.persistence.CascadeType.ALL) 
    @JoinColumn(name="salarier_id", referencedColumnName = "id")
    private Set<LigneSalarierClassification> listLigneSalarierClassification = new HashSet<LigneSalarierClassification>();
*/
	
	public Salarier(){};
	@JsonIgnore 
	@OneToMany(cascade = javax.persistence.CascadeType.ALL) 
    @JoinColumn(name="salarier", referencedColumnName = "id")
    private Set<Indisponibilite> listAbsence = new HashSet<Indisponibilite>();
	@JsonIgnore 
	@OneToMany(cascade = javax.persistence.CascadeType.ALL) 
    @JoinColumn(name="salarier", referencedColumnName = "id")
    private Set<Demande> listDemandeConges = new HashSet<Demande>();

	
 
 
	private int grade;

	public Set<Indisponibilite> getListAbsence() {
		return listAbsence;
	}
	public void setListAbsence(Set<Indisponibilite> listAbsence) {
		this.listAbsence = listAbsence;
	}
	public Set<Demande> getListDemandeConges() {
		return listDemandeConges;
	}
	public void setListDemandeConges(Set<Demande> listDemandeConges) {
		this.listDemandeConges = listDemandeConges;
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
	
	
	
	public String getNom() {
		return Nom;
	}
	public void setNom(String nom) {
		Nom = nom;
	}
	public String getPrenom() {
		return Prenom;
	}
	public void setPrenom(String prenom) {
		Prenom = prenom;
	}
	public String getemail() {
		return email;
	}
	public void setemail(String email) {
		this.email = email;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}
	public void setId(String role) {
		this.role = role;
	}
	public int getGrade() {
		return grade;
	}
	public void setGrade(int grade) {
		this.grade = grade;
	}
	 

	 
	
	
}