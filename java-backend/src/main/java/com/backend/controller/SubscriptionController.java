package com.backend.controller;

import com.backend.dto.CreateSubscriptionDto;
import com.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/subscription")
@CrossOrigin
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/create")
    public ResponseEntity createSubscription(@RequestBody CreateSubscriptionDto createSubscriptionDto) {
        return ResponseEntity.status(HttpStatus.OK).body(subscriptionService.create(createSubscriptionDto));
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteSubscription(@RequestParam Long id) {
        subscriptionService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body("true");
    }

    @GetMapping("/checkSubscription")
    public ResponseEntity checkSubscription(@RequestParam Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(subscriptionService.checkSubscription(id));
    }

    @GetMapping("/getUserSubscription")
    public ResponseEntity getUserSubscription(@RequestParam Long id){
        return ResponseEntity.status(HttpStatus.OK).body(subscriptionService.getUserSubscription(id));
    }
}
