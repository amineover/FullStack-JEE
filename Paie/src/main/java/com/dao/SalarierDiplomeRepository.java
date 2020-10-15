package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Diplome;
import com.model.Salarier;
import com.model.SalarierDiplome;


@RepositoryRestResource(excerptProjection = SalarierDiplomeProjection.class)
public interface SalarierDiplomeRepository extends JpaRepository<SalarierDiplome, Long> {
	List<SalarierDiplome> findBySalarier(int id);
}