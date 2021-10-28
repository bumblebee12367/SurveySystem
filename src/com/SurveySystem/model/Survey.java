package com.SurveySystem.model;

import lombok.*;
@Setter

public class Survey {
    private int id_survey;
    private int id_admin;
    private int id_customer;
    private int id_type;
    private int id_questions;
    private String description;
    private int access_number;
}
