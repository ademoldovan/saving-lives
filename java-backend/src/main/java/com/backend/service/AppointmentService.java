package com.backend.service;

import com.backend.dto.CreateAppointmentDto;
import com.backend.dto.DeleteAppointmentDto;
import com.backend.dto.GetAppointment;
import com.backend.dto.GetAppointmentByDonationCall;
import com.backend.model.Actor;
import com.backend.model.Appointment;
import com.backend.model.DonationCall;
import com.backend.repository.ActorRepository;
import com.backend.repository.AppointmentRepository;
import com.backend.repository.DonationCallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private ActorRepository actorRepository;
    @Autowired
    private DonationCallRepository donationCallRepository;

    public boolean create(CreateAppointmentDto createAppointmentDto){
        Actor actor = actorRepository.findActorById(createAppointmentDto.getIdUser());
        DonationCall donationCall = donationCallRepository.findDonationCallById(createAppointmentDto.getIdDonationCall());
        return appointmentRepository.save(new Appointment(actor,donationCall)) != null;
    }

    public List<GetAppointment> getAllAppointmentsByDonationCall(GetAppointmentByDonationCall getAppointmentByDonationCall){
        DonationCall donationCall = donationCallRepository.findDonationCallById(getAppointmentByDonationCall.getIdDonationCall());
        List<Appointment> appointments = appointmentRepository.getAppointmentByDonationCall(donationCall);
        List<GetAppointment> getAppointments = new ArrayList<>();
        for(Appointment appointment: appointments){
            getAppointments.add(new GetAppointment(appointment.getId(),appointment.getUser().getId(), appointment.getUser().getName(), appointment.getUser().getBloodType(),
                    appointment.getUser().getWeight(),appointment.getUser().getBirthdate(), appointment.getUser().getPhoneNumber()));
        }
        return getAppointments;
    }

    public void delete(long deleteAppointmentDto){
        appointmentRepository.deleteById(deleteAppointmentDto);
    }
}
