package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Fonction;



@Projection(
		  name = "fonctionProjection", 
		  types = { Fonction.class }) 
public interface FonctionProjection {
	public String getCode();
	public String getFonction();
	public SalarierProjectionKey getSalarier();
  public long getId();
}
