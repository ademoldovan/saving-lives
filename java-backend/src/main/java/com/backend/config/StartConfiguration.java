package com.backend.config;

import com.backend.model.Actor;
import com.backend.model.Requirement;
import com.backend.repository.ActorRepository;
import com.backend.repository.RequirementRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class StartConfiguration implements ApplicationListener<ApplicationReadyEvent> {

    private final ActorRepository actorRepository;
    private final RequirementRepository requirementRepository;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
        Actor actor = actorRepository.findActorByEmail("admin@admin.admin");
        if (actor == null) {
            actorRepository.save(new Actor("admin", "admin@admin.admin", "admin", "0754678354", "12/12/1989", "NULL", 0, "admin"));
        }
        List<Requirement> requirement = requirementRepository.findAll();
        if (requirement.isEmpty()){
            requirementRepository.save(new Requirement(18, 60));
        }
    }


}