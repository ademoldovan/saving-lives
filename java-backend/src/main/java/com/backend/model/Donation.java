package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private Actor user;
    private String date;
    private String bloodType;
    @ManyToOne(fetch = FetchType.LAZY)
    private DonationCenter donationCenter;

    public Donation(Actor user, String date, String bloodType, DonationCenter donationCenter) {
        this.user = user;
        this.date = date;
        this.bloodType = bloodType;
        this.donationCenter = donationCenter;
    }
}
