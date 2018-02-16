package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProperty is a Querydsl query type for Property
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QProperty extends EntityPathBase<Property> {

    private static final long serialVersionUID = 1714657462L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProperty property = new QProperty("property");

    public final QPropertyDetails details;

    public final QPropertyFeature features;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QLocation location;

    public final SetPath<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto> photos = this.<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto>createSet("photos", com.propertiestree.common.entity.Photo.class, com.propertiestree.common.entity.QPhoto.class, PathInits.DIRECT2);

    public final QPricing pricing;

    public final EnumPath<PropertyType> type = createEnum("type", PropertyType.class);

    public final StringPath uuid = createString("uuid");

    public QProperty(String variable) {
        this(Property.class, forVariable(variable), INITS);
    }

    public QProperty(Path<? extends Property> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProperty(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProperty(PathMetadata metadata, PathInits inits) {
        this(Property.class, metadata, inits);
    }

    public QProperty(Class<? extends Property> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.details = inits.isInitialized("details") ? new QPropertyDetails(forProperty("details"), inits.get("details")) : null;
        this.features = inits.isInitialized("features") ? new QPropertyFeature(forProperty("features")) : null;
        this.location = inits.isInitialized("location") ? new QLocation(forProperty("location"), inits.get("location")) : null;
        this.pricing = inits.isInitialized("pricing") ? new QPricing(forProperty("pricing")) : null;
    }

}

