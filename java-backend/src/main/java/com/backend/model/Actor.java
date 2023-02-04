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
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String bloodType;
    private String phoneNumber;
    private float weight;
    private String birthdate;
    private String role;
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Donation> donationList;
    @OneToMany(mappedBy = "addedBy", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<DonationCall> donationCallList;
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Result> resultList;

    public Actor(String name, String email, String password, String phoneNumber, String birthdate, String bloodType, float weight, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.bloodType = bloodType;
        this.phoneNumber = phoneNumber;
        this.weight = weight;
        this.birthdate = birthdate;
        this.role = role;
    }

    public Actor(Long id, String name, String email, String password, String phoneNumber, String birthdate, String bloodType, float weight, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.bloodType = bloodType;
        this.phoneNumber = phoneNumber;
        this.weight = weight;
        this.birthdate = birthdate;
        this.role = role;
    }
}
