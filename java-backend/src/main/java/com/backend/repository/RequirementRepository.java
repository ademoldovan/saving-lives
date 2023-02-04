package com.backend.repository;

import com.backend.model.Requirement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequirementRepository extends CrudRepository<Requirement, Long> {
    Requirement save(Requirement requirement);

    List<Requirement> findAll();

    Requirement findRequirementById(Long id);
}
