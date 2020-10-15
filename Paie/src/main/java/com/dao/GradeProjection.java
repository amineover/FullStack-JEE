package com.dao;

import org.springframework.data.rest.core.config.Projection;

import com.model.Grade; 

@Projection(
		  name = "GradeProjection", 
		  types = { Grade.class }) 
public interface GradeProjection {

	    public String getCode();
	    public String getGrade();
	    public long getId();
	    
}