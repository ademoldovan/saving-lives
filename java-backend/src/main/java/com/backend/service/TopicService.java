package com.backend.service;

import com.backend.dto.CreateTopicDto;
import com.backend.model.Topic;
import com.backend.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired
    private TopicRepository topicRepository;

    public boolean createTopic(CreateTopicDto createTopicDto) {
        return topicRepository.save(new Topic(createTopicDto.getTitle(), createTopicDto.getDescription(), createTopicDto.getDateAdded())) != null;
    }

    public List<Topic> getTopics() {
        return topicRepository.findAll();
    }

}
