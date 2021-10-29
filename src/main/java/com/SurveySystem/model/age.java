package com.SurveySystem.model;

public enum age {
    BELOW_18("<18"),BETWEEN_18_AND_25("18-25"),BETWEEN_25_50("25-50"),ABOVE_50("50+");

    String age_def;
    age(String a)
    {
        age_def=a;
    }
}
