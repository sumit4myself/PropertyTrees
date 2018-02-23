package com.propertiestree.admin.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.propertiestree.common.entity.City;
import com.propertiestree.common.entity.property.Availability;
import com.propertiestree.common.entity.property.PropertyType;
import com.propertiestree.common.model.Cities;

public interface LocationRepository extends AbstractRepository<City, Integer> {

    Optional<City> findByUuid(String uuid);
    
    /*@Query(value="select c.name, c.uuid, count(prop.id) from city c, property prop, pricing prc  where c.id = prop.citi_id and prop.pricing_id=prc.id and prop.type = :type and prc.availability = :availability  group by c.name", nativeQuery=true)
    List<Cities> listOfCitiesWithPropertyCount(@Param("availability")  String availability, @Param("type")  String type);*/
    
    @Query("select new com.propertiestree.common.model.Cities(c.uuid, c.name, count(prop.id)) from City c, Property prop where c.id = prop.location.city.id and prop.pricing.availability = :availability and prop.type = :type  group by c.name")
    List<Cities> listOfCitiesWithPropertyCount(@Param("availability") Availability   availability, @Param("type")  PropertyType type);
    
    @Query("select new com.propertiestree.common.model.Cities(c.uuid, c.name, count(user.id)) from City c, User user where c.id = user.city.id and user.type = 'DEALER'  group by c.name")
    List<Cities> listOfCitiesWithDealerCount();
}
