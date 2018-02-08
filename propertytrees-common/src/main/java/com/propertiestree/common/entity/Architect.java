package com.propertiestree.common.entity;


import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Architect extends User {

	private static final long serialVersionUID = 1734173585552341483L;

}
