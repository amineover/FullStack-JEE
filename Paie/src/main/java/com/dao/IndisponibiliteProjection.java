package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Indisponibilite; 

@Projection(
		  name = "IndisponibiliteProjection", 
		  types = { Indisponibilite.class }) 
public interface IndisponibiliteProjection {

	    public String getCode();
	    public long getId();
	    
}
