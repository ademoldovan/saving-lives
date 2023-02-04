package com.backend.repository;

import com.backend.model.DonationCall;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationCallRepository extends CrudRepository<DonationCall, Long> {
    DonationCall save(DonationCall donationCall);

    List<DonationCall> findAll();

    List<DonationCall> getAllByBloodTypeAndCity(String bloodType, String city);

    List<DonationCall> getAllByBloodType(String bloodType);

    DonationCall findDonationCallById(Long id);
}
