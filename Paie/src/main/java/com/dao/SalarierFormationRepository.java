package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Formation;
import com.model.SalarierDiplome;
import com.model.SalarierFormation;



@RepositoryRestResource(excerptProjection = SalarierFormationProjection.class)
public interface SalarierFormationRepository extends JpaRepository<SalarierFormation, Long> {
	List<SalarierFormation> findBySalarier(int id);
}
