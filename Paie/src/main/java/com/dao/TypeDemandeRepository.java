package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.TypeDemande;



@RepositoryRestResource(excerptProjection = TypeDemandeProjection.class)
public interface TypeDemandeRepository extends JpaRepository<TypeDemande, Long> {
 
}