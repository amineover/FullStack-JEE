package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.SituationDemande;


@RepositoryRestResource(excerptProjection = SituationDemandeProjection.class)
public interface SituationDemandeRepository extends JpaRepository<SituationDemande, Long> {
 
}
