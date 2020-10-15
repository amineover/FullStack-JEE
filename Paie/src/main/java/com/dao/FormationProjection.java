package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Formation;

@Projection(
		  name = "formationProjection", 
		  types = { Formation.class }) 
public interface FormationProjection {
	public String getCode();
	public String getFonction();
	public SalarierProjectionKey getSalarier();
public long getId();
}
