package com.propertiestree.common.entity;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Astrologer extends User{

	private static final long serialVersionUID = -3142146227935464236L;

}
