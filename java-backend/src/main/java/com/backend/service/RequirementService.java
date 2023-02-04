package com.backend.service;

import com.backend.dto.UpdateRequirementsDto;
import com.backend.model.Requirement;
import com.backend.repository.RequirementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequirementService {
    @Autowired
    private RequirementRepository requirementRepository;

    public boolean updateRequirements(UpdateRequirementsDto updateRequirementsDto) {
        return requirementRepository.save(new Requirement(updateRequirementsDto.getId(), updateRequirementsDto.getAge(), updateRequirementsDto.getWeight())) != null;
    }

    public List<Requirement> getRequirements() {
        return requirementRepository.findAll();
    }
}
