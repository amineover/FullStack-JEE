package com.dao;

import java.util.Set;

import org.springframework.data.rest.core.config.Projection;

import com.model.Demande;


@Projection(
		  name = "situationDemandeProjection", 
		  types = { SituationDemandeProjection.class }) 
public interface SituationDemandeProjection {
	public String getCode();
	public String getDateEtat();
	public String getEtat();
	public Set<Demande> getListDemandes();
	public SalarierProjectionKey getSalarier();
public long getId();
}
