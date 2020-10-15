package com.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Salarier;


@RepositoryRestResource(excerptProjection = SalarierProjection.class)
public interface SalarierRepository extends JpaRepository<Salarier, Long> {
  

	//Salarier findByEmailAndPassword(String getemail, String getpassword);

	Salarier findByEmailAndPassword(String email, String password);
	
	

	
	
	
}