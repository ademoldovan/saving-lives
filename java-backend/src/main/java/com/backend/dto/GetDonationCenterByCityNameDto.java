package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetDonationCenterByCityNameDto {
    private String city;

    public GetDonationCenterByCityNameDto(String city) {
        this.city = city;
    }
}
