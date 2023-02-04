package com.backend.repository;

import com.backend.model.DonationCenter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationCenterRepository extends CrudRepository<DonationCenter, Long> {
    DonationCenter save(DonationCenter donationCenter);

    List<DonationCenter> findAll();

    void deleteById(Long id);

    DonationCenter findDonationCenterById(Long id);

    DonationCenter findDonationCenterByCity(String name);
}
