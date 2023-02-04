package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class GetDonationCallByBloodTypeAndCityDto {
    private String bloodType;
    private String city;
}
