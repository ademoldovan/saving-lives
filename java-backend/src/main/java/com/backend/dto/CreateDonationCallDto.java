package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CreateDonationCallDto {
    private String bloodType;
    private String registerDate;
    private String visibleUntil;
    private String city;
    private Long idUser;
}
