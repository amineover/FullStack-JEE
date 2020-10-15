package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Diplome;
import com.model.SalarierDiplome;



@Projection(
		  name = "salarierdiplomeProjection", 
		  types = { SalarierDiplome.class }) 
public interface SalarierDiplomeProjection {
	public String getCode();
	public String getdiplome();
	public SalarierProjectionKey getSalarier();
    public long getId();
}
