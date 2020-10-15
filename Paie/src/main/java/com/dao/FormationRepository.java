package com.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Formation;



@RepositoryRestResource(excerptProjection = FormationProjection.class)
public interface FormationRepository extends JpaRepository<Formation, Long> {
	@Query("select c  from Formation c ")
	Set<FormationProjection> getFormation();
 
}
