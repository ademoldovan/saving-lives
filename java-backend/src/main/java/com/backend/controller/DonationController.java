package com.backend.controller;

import com.backend.dto.CreateDonationDto;
import com.backend.dto.GetNumberOfDaysDto;
import com.backend.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/donation")
@CrossOrigin
public class DonationController {
    @Autowired
    private DonationService donationService;

    @PostMapping("/create")
    public ResponseEntity createDonation(@RequestBody CreateDonationDto createDonationDto) {
        return ResponseEntity.status(HttpStatus.OK).body(donationService.createDonation(createDonationDto));
    }

    @GetMapping("/cityDonations")
    public ResponseEntity getDonationsPerCity() {
        return ResponseEntity.status(HttpStatus.OK).body(donationService.donationsPerCity());
    }

    @GetMapping("/bloodTypeDonations")
    public ResponseEntity getDonationsPerBloodType() {
        return ResponseEntity.status(HttpStatus.OK).body(donationService.donationsPerBloodType());
    }

    @GetMapping("/numberOfDaysUntilNextDonation")
    public ResponseEntity getNumberOfDaysUntilNextDonation(@RequestParam Long id){
        return ResponseEntity.status(HttpStatus.OK).body(donationService.getDaysUntilNextDonation(id));
    }

    @PostMapping("/donationsHistory")
    public ResponseEntity viewDonationHistory(@RequestBody GetNumberOfDaysDto getNumberOfDays){
        return ResponseEntity.status(HttpStatus.OK).body(donationService.getUserDonations(getNumberOfDays));
    }

}
