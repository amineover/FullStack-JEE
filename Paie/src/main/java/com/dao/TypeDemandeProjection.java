package com.dao;
import org.springframework.data.rest.core.config.Projection;

import com.model.TypeDemande;
import com.model.TypeDemande; 

@Projection(
		  name = "TypeDemandeProjection", 
		  types = { TypeDemande.class }) 
public interface TypeDemandeProjection {
	

	 public String getCode();
	 public String getType();
	    public long getId();

}
