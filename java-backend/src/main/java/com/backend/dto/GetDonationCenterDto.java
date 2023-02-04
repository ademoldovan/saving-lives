package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class GetDonationCenterDto {
    private Long id;
    private String name;
    private String address;
    private String city;
}
