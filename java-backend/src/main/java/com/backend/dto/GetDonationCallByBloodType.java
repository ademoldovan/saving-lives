package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetDonationCallByBloodType {
    private String bloodType;

    public GetDonationCallByBloodType() {
    }

    public GetDonationCallByBloodType(String bloodType) {
        this.bloodType = bloodType;
    }
}
