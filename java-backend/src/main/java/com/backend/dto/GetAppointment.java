package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetAppointment {
    private Long id;
    private Long idUser;
    private String name;
    private String bloodType;
    private float weight;
    private String birthDate;
    private String phoneNumber;

    public GetAppointment(Long id,Long idUser, String name, String bloodType, float weight, String birthDate, String phoneNumber) {
        this.id = id;
        this.idUser = idUser;
        this.name = name;
        this.bloodType = bloodType;
        this.weight = weight;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
    }
}
