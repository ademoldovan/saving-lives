package com.backend.controller;

import com.backend.dto.UpdateRequirementsDto;
import com.backend.service.RequirementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/requirement")
@CrossOrigin
public class RequirementController {
    @Autowired
    private RequirementService requirementService;

    @PostMapping("/update")
    private ResponseEntity updateRequirements(@RequestBody UpdateRequirementsDto updateRequirementsDto) {
        return ResponseEntity.status(HttpStatus.OK).body(requirementService.updateRequirements(updateRequirementsDto));
    }

    @GetMapping("/get")
    private ResponseEntity getRequirements() {
        return ResponseEntity.status(HttpStatus.OK).body(requirementService.getRequirements());
    }


}
