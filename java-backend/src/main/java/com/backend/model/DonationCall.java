package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DonationCall {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String bloodType;
    private String registerDate;
    private String visibleUntil;
    private String city;
    @ManyToOne(fetch = FetchType.LAZY)
    private Actor addedBy;
    @OneToMany(mappedBy = "donationCall", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Appointment> appointments;

    public DonationCall(String bloodType, String registerDate, String visibleUntil, String city, Actor addedBy) {
        this.bloodType = bloodType;
        this.registerDate = registerDate;
        this.visibleUntil = visibleUntil;
        this.city = city;
        this.addedBy = addedBy;
    }
}
