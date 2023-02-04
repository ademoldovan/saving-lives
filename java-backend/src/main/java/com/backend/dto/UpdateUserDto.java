package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UpdateUserDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String bloodType;
    private String phoneNumber;
    private float weight;
    private String birthdate;
    private String role;
}
