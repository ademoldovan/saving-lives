package com.backend.service;

import com.backend.dto.CreateDonationCenterDto;
import com.backend.dto.DeleteDonationCenterDto;
import com.backend.dto.GetDonationCenterByCityNameDto;
import com.backend.model.DonationCenter;
import com.backend.repository.DonationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DonationCenterService {
    @Autowired
    private DonationCenterRepository donationCenterRepository;

    public boolean createDonationCenter(CreateDonationCenterDto donationCenter) {
        return donationCenterRepository.save(new DonationCenter(donationCenter.getName(), donationCenter.getAddress(), donationCenter.getCity())) != null;
    }

    public List<DonationCenter> getDonationCenters() {
        return donationCenterRepository.findAll();
    }

    public List<GetDonationCenterByCityNameDto> getDonationCentersByCityName() {
        List<DonationCenter> donationCenters = donationCenterRepository.findAll();
        List<GetDonationCenterByCityNameDto> donationCentersByName = new ArrayList<>();
        for(DonationCenter donationCenter: donationCenters){
            donationCentersByName.add(new GetDonationCenterByCityNameDto(donationCenter.getCity()));
        }
        return donationCentersByName;
    }

    public void deleteDonationCenter(DeleteDonationCenterDto deleteDonationCenterDto) {
        donationCenterRepository.deleteById(deleteDonationCenterDto.getId());
    }

    public Long getDonationCenterCityName(String cityName) {
        DonationCenter donationCenter = donationCenterRepository.findDonationCenterByCity(cityName);
        return donationCenter.getId();
    }
}
