package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetNumberOfDaysDto {
    private Long idUser;

    public GetNumberOfDaysDto() {
    }

    public GetNumberOfDaysDto(Long idUser) {
        this.idUser = idUser;
    }
}
