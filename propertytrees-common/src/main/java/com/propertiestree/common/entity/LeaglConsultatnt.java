package com.propertiestree.common.entity;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class LeaglConsultatnt extends User{

	private static final long serialVersionUID = -4056548648520766210L;

}
