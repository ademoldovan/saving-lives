package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @OneToOne(fetch = FetchType.LAZY)
    private Actor user;
    @ManyToOne(fetch = FetchType.LAZY)
    private DonationCall donationCall;

    public Appointment(Actor user, DonationCall donationCall) {
        this.user = user;
        this.donationCall = donationCall;
    }
}
