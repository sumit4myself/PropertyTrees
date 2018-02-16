package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QAmenities is a Querydsl query type for Amenities
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAmenities extends EntityPathBase<Amenities> {

    private static final long serialVersionUID = -1800915370L;

    public static final QAmenities amenities = new QAmenities("amenities");

    public final EnumPath<AmenitiesType> amenitiesType = createEnum("amenitiesType", AmenitiesType.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QAmenities(String variable) {
        super(Amenities.class, forVariable(variable));
    }

    public QAmenities(Path<? extends Amenities> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAmenities(PathMetadata metadata) {
        super(Amenities.class, metadata);
    }

}

