package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetDonationDto {
    private String date;
    private String donationCenter;
    private String city;

    public GetDonationDto(String date, String donationCenter, String city) {
        this.date = date;
        this.donationCenter = donationCenter;
        this.city = city;
    }
}
