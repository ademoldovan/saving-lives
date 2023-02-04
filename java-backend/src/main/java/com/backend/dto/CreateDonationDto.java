package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor

public class CreateDonationDto {
    private Long userId;
    private String date;
    private String bloodType;
    private Long donationCenterId;
}
