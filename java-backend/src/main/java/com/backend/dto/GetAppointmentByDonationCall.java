package com.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetAppointmentByDonationCall {
    private Long idDonationCall;

    public GetAppointmentByDonationCall() {
    }

    public GetAppointmentByDonationCall(Long idDonationCall) {
        this.idDonationCall = idDonationCall;
    }
}
