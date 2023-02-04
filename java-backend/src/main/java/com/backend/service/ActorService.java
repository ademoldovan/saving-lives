package com.backend.service;

import com.backend.dto.CreateUserDto;
import com.backend.dto.LoginDto;
import com.backend.dto.UpdateUserDto;
import com.backend.model.Actor;
import com.backend.repository.ActorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActorService {
    @Autowired
    private ActorRepository actorRepository;

    public UpdateUserDto createActor(CreateUserDto user) {
        Actor actor = actorRepository.save(new Actor(user.getName(), user.getEmail(), user.getPassword(), user.getPhoneNumber(), user.getBirthdate(), "NULL", 0, "user"));
        return new UpdateUserDto(actor.getId(), actor.getName(), actor.getEmail(), actor.getPassword(), actor.getBloodType(), actor.getPhoneNumber(), actor.getWeight(), actor.getBirthdate(), actor.getRole());
    }

    public UpdateUserDto findActorByUsernameAndPassword(LoginDto loginDto) {
        Actor actor = actorRepository.findActorByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        return new UpdateUserDto(actor.getId(), actor.getName(), actor.getEmail(), actor.getPassword(), actor.getBloodType(), actor.getPhoneNumber(), actor.getWeight(), actor.getBirthdate(), actor.getRole());
    }

    public UpdateUserDto updateActor(UpdateUserDto user) {
        Actor actor = actorRepository.save(new Actor(user.getId(), user.getName(), user.getEmail(), user.getPassword(), user.getPhoneNumber(), user.getBirthdate(), user.getBloodType(), user.getWeight(), user.getRole()));
        return new UpdateUserDto(actor.getId(), actor.getName(), actor.getEmail(), actor.getPassword(), actor.getBloodType(), actor.getPhoneNumber(), actor.getWeight(), actor.getBirthdate(), actor.getRole());
    }

    public List<UpdateUserDto> getAllUsers() {
        List<Actor> actors = actorRepository.findAll();
        List<UpdateUserDto> readUsersDto = actors.stream().map(actor ->
                new UpdateUserDto(
                        actor.getId(),
                        actor.getName(),
                        actor.getEmail(),
                        actor.getPassword(),
                        actor.getBloodType(),
                        actor.getPhoneNumber(),
                        actor.getWeight(),
                        actor.getBirthdate(),
                        actor.getRole()
                )).collect(Collectors.toList());
        return readUsersDto;
    }

    public UpdateUserDto getUserById(Long id){
        Actor actor = actorRepository.findActorById(id);
        return new UpdateUserDto(actor.getId(), actor.getName(), actor.getEmail(), actor.getPassword(), actor.getBloodType(), actor.getPhoneNumber(), actor.getWeight(), actor.getBirthdate(), actor.getRole());
    }
}
