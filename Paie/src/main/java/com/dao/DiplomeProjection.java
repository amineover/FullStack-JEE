package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Diplome;



@Projection(
		  name = "DiplomeProjection", 
		  types = { Diplome.class }) 
public interface DiplomeProjection {
	public String getCode();
	public String getDiplome();
    public long getId();
}
