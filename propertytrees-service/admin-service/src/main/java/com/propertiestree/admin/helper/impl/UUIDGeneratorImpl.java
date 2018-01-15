package com.propertiestree.admin.helper.impl;

import org.springframework.stereotype.Component;

import com.propertiestree.admin.helper.UUIDGenerator;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.UUID;

@Component("uuidGenerator")
public class UUIDGeneratorImpl implements UUIDGenerator {

    private SecureRandom random = new SecureRandom();

    @Override
    public String nextLargeUID() {
        return UUID.randomUUID().toString().replaceAll("[^a-f0-9]", "");
    }

    @Override
    public String nextSmallUID() {
        String smallUid = new BigInteger(35, random).toString(32);
        while(smallUid.length() < 7)
            smallUid += "m";
        return smallUid;
    }
}
