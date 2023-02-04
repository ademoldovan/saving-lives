package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class BloodTypeDonationDto {
    private String bloodType;
    private int numberOfDonations;
}
