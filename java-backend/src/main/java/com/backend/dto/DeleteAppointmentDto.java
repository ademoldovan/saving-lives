package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeleteAppointmentDto {
    private Long id;

    public DeleteAppointmentDto() {
    }

    public DeleteAppointmentDto(Long id) {
        this.id = id;
    }
}
