package com.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Grade;


@RepositoryRestResource(excerptProjection = GradeProjection.class)
public interface GradeRepository extends JpaRepository<Grade, Long> {
		@Query("select c  from Grade c ")
		Set<GradeProjection> getGrade();
 
}
