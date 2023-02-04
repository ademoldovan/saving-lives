package com.backend.repository;

import com.backend.model.Appointment;
import com.backend.model.DonationCall;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
    Appointment save(Appointment appointment);

    List<Appointment> getAppointmentByDonationCall(DonationCall donationCall);

    void deleteById(Long id);
}
