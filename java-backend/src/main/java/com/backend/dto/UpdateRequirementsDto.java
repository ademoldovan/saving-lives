package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UpdateRequirementsDto {
    private Long id;
    private int age;
    private float weight;
}
