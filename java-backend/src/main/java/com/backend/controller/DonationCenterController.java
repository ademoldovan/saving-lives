package com.backend.controller;

import com.backend.dto.CreateDonationCenterDto;
import com.backend.dto.DeleteDonationCenterDto;
import com.backend.service.DonationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/donationCenter")
@CrossOrigin
public class DonationCenterController {
    @Autowired
    private DonationCenterService donationCenterService;

    @PostMapping("/create")
    public ResponseEntity createDonationCenter(@RequestBody CreateDonationCenterDto createDonationCenter) {
        return ResponseEntity.status(HttpStatus.OK).body(donationCenterService.createDonationCenter(createDonationCenter));
    }

    @GetMapping("/getAll")
    public ResponseEntity getDonationCenters() {
        return ResponseEntity.status(HttpStatus.OK).body(donationCenterService.getDonationCenters());
    }

    @GetMapping("/getAllCityNames")
    public ResponseEntity getDonationCentersCityNames() {
        return ResponseEntity.status(HttpStatus.OK).body(donationCenterService.getDonationCentersByCityName());
    }

    @GetMapping("/getByCityName")
    public ResponseEntity getDonationCenterByCityName(@RequestParam String cityName) {
        return ResponseEntity.status(HttpStatus.OK).body(donationCenterService.getDonationCenterCityName(cityName));
    }

    @PostMapping("/deleteById")
    public ResponseEntity deleteDonationCenter(@RequestBody DeleteDonationCenterDto deleteDonationCenterDto) {
        donationCenterService.deleteDonationCenter(deleteDonationCenterDto);
        return ResponseEntity.status(HttpStatus.OK).body("true");
    }
}
