package com.backend.service;

import com.backend.dto.*;
import com.backend.model.Actor;
import com.backend.model.Donation;
import com.backend.model.DonationCenter;
import com.backend.repository.ActorRepository;
import com.backend.repository.DonationCenterRepository;
import com.backend.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonationService {
    @Autowired
    private DonationRepository donationRepository;
    @Autowired
    private ActorRepository actorRepository;
    @Autowired
    private DonationCenterRepository donationCenterRepository;

    public boolean createDonation(CreateDonationDto createDonationDto) {
        Actor actor = actorRepository.findActorById(createDonationDto.getUserId());
        DonationCenter donationCenter = donationCenterRepository.findDonationCenterById(createDonationDto.getDonationCenterId());
        return donationRepository.save(new Donation(actor, createDonationDto.getDate(), createDonationDto.getBloodType(), donationCenter)) != null;
    }

    public List<CityDonationDto> donationsPerCity() {
        List<CityDonationDto> cityDonationDtos = new ArrayList<>();
        List<DonationCenter> donationCenters = donationCenterRepository.findAll();
        for (DonationCenter donationCenter : donationCenters) {
            List<Donation> donations = donationRepository.getAllByDonationCenter(donationCenter);
            cityDonationDtos.add(new CityDonationDto(donationCenter.getCity(), donations.size()));
        }
        return cityDonationDtos;
    }

    public List<BloodTypeDonationDto> donationsPerBloodType() {
        List<BloodTypeDonationDto> bloodTypeDonations = new ArrayList<>();
        bloodTypeDonations.add(new BloodTypeDonationDto("0-", donationRepository.getAllByBloodType("0-").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("A-", donationRepository.getAllByBloodType("A-").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("B-", donationRepository.getAllByBloodType("B-").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("AB-", donationRepository.getAllByBloodType("AB-").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("0+", donationRepository.getAllByBloodType("0+").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("A+", donationRepository.getAllByBloodType("A+").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("B+", donationRepository.getAllByBloodType("B+").size()));
        bloodTypeDonations.add(new BloodTypeDonationDto("AB+", donationRepository.getAllByBloodType("AB+").size()));
        return bloodTypeDonations;
    }

    public long getDaysUntilNextDonation(Long id) {
        long noOfDaysBetween = 0;
        Actor actor = actorRepository.findActorById(id);
        List<Donation> donationList = donationRepository.getAllByUser(actor);
        if (!donationList.isEmpty()) {
            Donation recentDonation = new Donation();
            int maxYear = 0;
            int maxMonth = 0;
            for (Donation donation : donationList) {
                String visibleUntil = donation.getDate();
                String[] values = visibleUntil.split("/");
                if (Integer.parseInt(values[1]) >= maxMonth && Integer.parseInt(values[2]) >= maxYear) {
                    maxYear = Integer.parseInt(values[2]);
                    maxMonth = Integer.parseInt(values[1]);
                    recentDonation = donation;
                }
            }
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/M/yyyy");
            if(recentDonation.getDate().length() == 10){
                dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            }
            String recentDate = recentDonation.getDate();
            LocalDateTime myDateObj = LocalDateTime.now();
            DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            String formattedDate = myDateObj.format(myFormatObj);
            LocalDate date1 = LocalDate.parse(recentDate, dtf);
            LocalDate date2 = LocalDate.parse(formattedDate, myFormatObj);
            noOfDaysBetween = ChronoUnit.DAYS.between(date1, date2);
        }else{
            return 0;
        }
        return 150 - noOfDaysBetween;
    }

    public List<GetDonationDto> getUserDonations(GetNumberOfDaysDto getNumberOfDaysDto) {
        Actor actor = actorRepository.findActorById(getNumberOfDaysDto.getIdUser());
        List<Donation> donations = donationRepository.getAllByUser(actor);
        return donations.stream().map(donation ->
                new GetDonationDto(
                        donation.getDate(),
                        donation.getDonationCenter().getName(),
                        donation.getDonationCenter().getCity()
                )).collect(Collectors.toList());
    }
}
