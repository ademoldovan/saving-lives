package com.backend.repository;

import com.backend.model.Actor;
import com.backend.model.Donation;
import com.backend.model.DonationCenter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends CrudRepository<Donation, String> {
    Donation save(Donation donation);

    List<Donation> findAll();

    List<Donation> getAllByDonationCenter(DonationCenter donationCenter);

    List<Donation> getAllByBloodType(String bloodType);

    List<Donation> getAllByUser(Actor actor);

    Donation findById(Long id);
}
