package com.backend.repository;

import com.backend.model.Actor;
import com.backend.model.Subscription;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends CrudRepository<Subscription, Long > {
    Subscription save(Subscription subscription);

    void deleteById(Long id);

    Subscription findByUser(Actor actor);
}
