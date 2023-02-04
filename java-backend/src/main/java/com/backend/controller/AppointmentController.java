package com.backend.controller;

import com.backend.dto.CreateAppointmentDto;
import com.backend.dto.DeleteAppointmentDto;
import com.backend.dto.GetAppointmentByDonationCall;
import com.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/appointment")
@CrossOrigin
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create")
    public ResponseEntity creteAppointmnet(@RequestBody CreateAppointmentDto createAppointmentDto){
        return ResponseEntity.status(HttpStatus.OK).body(appointmentService.create(createAppointmentDto));
    }

    @PostMapping("/getAllByDonationCall")
    public ResponseEntity getAllByDonationCall(@RequestBody GetAppointmentByDonationCall getAppointmentByDonationCall){
        return ResponseEntity.status(HttpStatus.OK).body(appointmentService.getAllAppointmentsByDonationCall(getAppointmentByDonationCall));
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteAppointment(@RequestParam long id){
        appointmentService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body("true");
    }
}
