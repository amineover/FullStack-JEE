package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Formation;

@Projection(
		  name = "SalarierFormationProjection", 
		  types = { SalarierFormationProjection.class }) 
public interface SalarierFormationProjection {
	public String getCode();
	public FormationProjection getFormation();
	public SalarierProjectionKey getSalarier();
public long getId();
}
