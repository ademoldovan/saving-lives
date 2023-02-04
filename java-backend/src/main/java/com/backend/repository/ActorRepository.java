package com.backend.repository;

import com.backend.model.Actor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Long> {
    Actor save(Actor actor);

    Actor findActorByEmailAndPassword(String email, String password);

    Actor findActorById(Long id);

    Actor findActorByEmail(String email);

    List<Actor> findAll();
}
