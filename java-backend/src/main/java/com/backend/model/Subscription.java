package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @OneToOne(fetch = FetchType.LAZY)
    private Actor user;
    private String city;
    private String bloodType;

    public Subscription(Actor user, String city, String bloodType) {
        this.user = user;
        this.city = city;
        this.bloodType = bloodType;
    }
}
