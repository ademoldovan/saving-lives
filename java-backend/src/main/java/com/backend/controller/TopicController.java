package com.backend.controller;

import com.backend.dto.CreateTopicDto;
import com.backend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/topic")
@CrossOrigin
public class TopicController {
    @Autowired
    private TopicService topicService;

    @PostMapping("/create")
    public ResponseEntity createTopic(@RequestBody CreateTopicDto createTopicDto) {
        return ResponseEntity.status(HttpStatus.OK).body(topicService.createTopic(createTopicDto));
    }

    @GetMapping("/getAll")
    public ResponseEntity getAllTopics() {
        return ResponseEntity.status(HttpStatus.OK).body(topicService.getTopics());
    }
}
