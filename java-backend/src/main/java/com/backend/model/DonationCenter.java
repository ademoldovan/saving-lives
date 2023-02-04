package com.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(value = {"donationList"})
public class DonationCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String address;
    private String city;
    @OneToMany(mappedBy = "donationCenter", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Donation> donationList;

    public DonationCenter(String name, String address, String city) {
        this.name = name;
        this.address = address;
        this.city = city;
    }
}
