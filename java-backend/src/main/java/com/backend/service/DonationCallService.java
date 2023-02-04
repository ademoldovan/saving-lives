package com.backend.service;

import com.backend.dto.CreateDonationCallDto;
import com.backend.dto.GetDonationCallByBloodType;
import com.backend.dto.GetDonationCallByBloodTypeAndCityDto;
import com.backend.dto.GetDonationCallDto;
import com.backend.model.Actor;
import com.backend.model.DonationCall;
import com.backend.repository.ActorRepository;
import com.backend.repository.DonationCallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.TimeZone;
import java.util.stream.Collectors;

@Service
public class DonationCallService {
    @Autowired
    private DonationCallRepository donationCallRepository;
    @Autowired
    private ActorRepository actorRepository;

    public boolean createDonationCall(CreateDonationCallDto createDonationCallDto) {
        Actor actor = actorRepository.findActorById(createDonationCallDto.getIdUser());
        return donationCallRepository.save(new DonationCall(createDonationCallDto.getBloodType(), createDonationCallDto.getRegisterDate(),
                createDonationCallDto.getVisibleUntil(), createDonationCallDto.getCity(), actor)) != null;
    }

    public List<DonationCall> validate(List<DonationCall> donationCalls) {
        List<DonationCall> validDonationCalls = new ArrayList<>();
        Calendar calendar = Calendar.getInstance(TimeZone.getDefault());
        int day = calendar.get(Calendar.DATE);
        int month = calendar.get(Calendar.MONTH) + 1;
        int year = calendar.get(Calendar.YEAR);
        for (DonationCall donationCall : donationCalls) {
            String visibleUntil = donationCall.getVisibleUntil();
            String[] values = visibleUntil.split("/");
            if (Integer.parseInt(values[0]) >= day && Integer.parseInt(values[1]) >= month && Integer.parseInt(values[2]) >= year) {
                validDonationCalls.add(donationCall);
            }
        }
        return validDonationCalls;
    }

    public List<GetDonationCallDto> getDonationCalls() {
        List<DonationCall> donationCalls = donationCallRepository.findAll();
        List<DonationCall> validDonationCalls = validate(donationCalls);
        return validDonationCalls.stream().map(donationCall ->
                new GetDonationCallDto(
                        donationCall.getId(),
                        donationCall.getBloodType(),
                        donationCall.getRegisterDate(),
                        donationCall.getVisibleUntil(),
                        donationCall.getCity()
                )).collect(Collectors.toList());
    }

    public List<GetDonationCallDto> getAllDonationCallsByBloodTypeAndCity(GetDonationCallByBloodTypeAndCityDto getDonationCallByBloodTypeAndCityDto) {
        List<DonationCall> donationCalls = donationCallRepository.getAllByBloodTypeAndCity(getDonationCallByBloodTypeAndCityDto.getBloodType(), getDonationCallByBloodTypeAndCityDto.getCity());
        List<DonationCall> validDonationCalls = validate(donationCalls);
        return validDonationCalls.stream().map(donationCall ->
                new GetDonationCallDto(
                        donationCall.getId(),
                        donationCall.getBloodType(),
                        donationCall.getRegisterDate(),
                        donationCall.getVisibleUntil(),
                        donationCall.getCity()
                )).collect(Collectors.toList());
    }

    public List<GetDonationCallDto> getAllDonationCallsByBloodType(GetDonationCallByBloodType getDonationCallByBloodType) {
        List<DonationCall> validDonationCalls = validate(donationCallRepository.getAllByBloodType(getDonationCallByBloodType.getBloodType()));
        return validDonationCalls.stream().map(donationCall ->
                new GetDonationCallDto(
                        donationCall.getId(),
                        donationCall.getBloodType(),
                        donationCall.getRegisterDate(),
                        donationCall.getVisibleUntil(),
                        donationCall.getCity()
                )).collect(Collectors.toList());
    }
}