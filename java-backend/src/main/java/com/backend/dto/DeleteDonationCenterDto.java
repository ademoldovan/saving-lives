package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeleteDonationCenterDto {
    private Long id;

    public DeleteDonationCenterDto() {
    }

    public DeleteDonationCenterDto(Long id) {
        this.id = id;
    }
}
