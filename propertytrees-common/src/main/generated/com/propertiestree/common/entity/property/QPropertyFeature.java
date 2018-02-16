package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPropertyFeature is a Querydsl query type for PropertyFeature
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPropertyFeature extends EntityPathBase<PropertyFeature> {

    private static final long serialVersionUID = -2147327648L;

    public static final QPropertyFeature propertyFeature = new QPropertyFeature("propertyFeature");

    public final SetPath<Amenities, QAmenities> amenities = this.<Amenities, QAmenities>createSet("amenities", Amenities.class, QAmenities.class, PathInits.DIRECT2);

    public final BooleanPath cornerProperty = createBoolean("cornerProperty");

    public final StringPath Description = createString("Description");

    public final StringPath facig = createString("facig");

    public final BooleanPath gatedSociety = createBoolean("gatedSociety");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final SetPath<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto> photos = this.<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto>createSet("photos", com.propertiestree.common.entity.Photo.class, com.propertiestree.common.entity.QPhoto.class, PathInits.DIRECT2);

    public final StringPath powerBackup = createString("powerBackup");

    public final StringPath typeOfFlooring = createString("typeOfFlooring");

    public final NumberPath<Integer> widthOfFacingRoad = createNumber("widthOfFacingRoad", Integer.class);

    public final EnumPath<AreaUnitType> widthOfFacingUnit = createEnum("widthOfFacingUnit", AreaUnitType.class);

    public QPropertyFeature(String variable) {
        super(PropertyFeature.class, forVariable(variable));
    }

    public QPropertyFeature(Path<? extends PropertyFeature> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPropertyFeature(PathMetadata metadata) {
        super(PropertyFeature.class, metadata);
    }

}

