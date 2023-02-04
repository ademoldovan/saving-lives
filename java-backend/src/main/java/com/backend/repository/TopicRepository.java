package com.backend.repository;

import com.backend.model.Topic;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicRepository extends CrudRepository<Topic, String> {
    Topic save(Topic topic);

    List<Topic> findAll();
}
