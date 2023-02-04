package com.backend.controller;

import com.backend.dto.CreateUserDto;
import com.backend.dto.LoginDto;
import com.backend.dto.UpdateUserDto;
import com.backend.service.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
@CrossOrigin
public class ActorController {
    @Autowired
    private ActorService actorService;

    @PostMapping("/createUser")
    public ResponseEntity createUser(@RequestBody CreateUserDto user) {
        return ResponseEntity.status(HttpStatus.OK).body(actorService.createActor(user));
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDto user) {
        return ResponseEntity.status(HttpStatus.OK).body(actorService.findActorByUsernameAndPassword(user));
    }

    @PutMapping("/updateUser")
    public ResponseEntity updateUser(@RequestBody UpdateUserDto user) {
        return ResponseEntity.status(HttpStatus.OK).body(actorService.updateActor(user));
    }

    @GetMapping("/getAll")
    public ResponseEntity getAllUsers(){
        return ResponseEntity.status(HttpStatus.OK).body(actorService.getAllUsers());
    }

    @GetMapping("/getUserById")
    public ResponseEntity getUserById(@RequestParam Long id){
        return ResponseEntity.status(HttpStatus.OK).body(actorService.getUserById(id));
    }
}
