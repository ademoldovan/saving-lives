package com.backend.controller;

import com.backend.dto.CreateDonationCallDto;
import com.backend.dto.GetDonationCallByBloodType;
import com.backend.dto.GetDonationCallByBloodTypeAndCityDto;
import com.backend.service.DonationCallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/donationCall")
@CrossOrigin
public class DonationCallController {

    @Autowired
    private DonationCallService donationCallService;

    @PostMapping("/create")
    public ResponseEntity createDonationCall(@RequestBody CreateDonationCallDto createDonationCallDto) {
        return ResponseEntity.status(HttpStatus.OK).body(donationCallService.createDonationCall(createDonationCallDto));
    }

    @GetMapping("/getAll")
    public ResponseEntity getAllDonationCalls() {
        return ResponseEntity.status(HttpStatus.OK).body(donationCallService.getDonationCalls());
    }

    @PostMapping("/getAllByBloodTypeAndCity")
    public ResponseEntity getAllByBloodTypeAndCity(@RequestBody GetDonationCallByBloodTypeAndCityDto getDonationCallByBloodTypeAndCityDto){
        return ResponseEntity.status(HttpStatus.OK).body(donationCallService.getAllDonationCallsByBloodTypeAndCity(getDonationCallByBloodTypeAndCityDto));
    }

    @PostMapping("/getAllByBloodType")
    public ResponseEntity getAllByBloodType(@RequestBody GetDonationCallByBloodType getDonationCallByBloodType){
        return ResponseEntity.status(HttpStatus.OK).body(donationCallService.getAllDonationCallsByBloodType(getDonationCallByBloodType));
    }

}
