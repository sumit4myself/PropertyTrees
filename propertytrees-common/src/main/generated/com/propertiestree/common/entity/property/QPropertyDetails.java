package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPropertyDetails is a Querydsl query type for PropertyDetails
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPropertyDetails extends EntityPathBase<PropertyDetails> {

    private static final long serialVersionUID = 389601452L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPropertyDetails propertyDetails = new QPropertyDetails("propertyDetails");

    public final NumberPath<Integer> balconies = createNumber("balconies", Integer.class);

    public final NumberPath<Integer> bathrooms = createNumber("bathrooms", Integer.class);

    public final NumberPath<Integer> bedrooms = createNumber("bedrooms", Integer.class);

    public final NumberPath<Integer> builtUpArea = createNumber("builtUpArea", Integer.class);

    public final StringPath configuration = createString("configuration");

    public final QFurnishingDetails furnishingDetails;

    public final EnumPath<FurnishingType> furnishingType = createEnum("furnishingType", FurnishingType.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath others = createBoolean("others");

    public final EnumPath<ParkingType> parkingType = createEnum("parkingType", ParkingType.class);

    public final BooleanPath poojaRoom = createBoolean("poojaRoom");

    public final NumberPath<Integer> propertyOnFloor = createNumber("propertyOnFloor", Integer.class);

    public final BooleanPath servantRoom = createBoolean("servantRoom");

    public final BooleanPath studyRoom = createBoolean("studyRoom");

    public final NumberPath<Integer> superBuiltUpArea = createNumber("superBuiltUpArea", Integer.class);

    public final NumberPath<Integer> totalFloors = createNumber("totalFloors", Integer.class);

    public final EnumPath<AreaUnitType> unitType = createEnum("unitType", AreaUnitType.class);

    public QPropertyDetails(String variable) {
        this(PropertyDetails.class, forVariable(variable), INITS);
    }

    public QPropertyDetails(Path<? extends PropertyDetails> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPropertyDetails(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPropertyDetails(PathMetadata metadata, PathInits inits) {
        this(PropertyDetails.class, metadata, inits);
    }

    public QPropertyDetails(Class<? extends PropertyDetails> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.furnishingDetails = inits.isInitialized("furnishingDetails") ? new QFurnishingDetails(forProperty("furnishingDetails")) : null;
    }

}

