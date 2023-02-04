package com.backend.service;

import com.backend.dto.CreateSubscriptionDto;
import com.backend.model.Actor;
import com.backend.model.Subscription;
import com.backend.repository.ActorRepository;
import com.backend.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    private ActorRepository actorRepository;

    public boolean create(CreateSubscriptionDto createSubscriptionDto){
        Actor actor = actorRepository.findActorById(createSubscriptionDto.getIdUser());
        return subscriptionRepository.save(new Subscription(actor, createSubscriptionDto.getCity(), actor.getBloodType())) != null;
    }

    public void delete(Long id){
        Actor actor = actorRepository.findActorById(id);
        Subscription subscription = subscriptionRepository.findByUser(actor);
        subscriptionRepository.deleteById(subscription.getId());
    }

    public boolean checkSubscription(Long id){
        Actor actor = actorRepository.findActorById(id);
        return subscriptionRepository.findByUser(actor) != null;
    }

    public String getUserSubscription(Long id){
        Actor actor = actorRepository.findActorById(id);
        Subscription subscription = subscriptionRepository.findByUser(actor);
        if(subscription != null){
            return subscription.getCity();
        }
        return null;
    }

}
