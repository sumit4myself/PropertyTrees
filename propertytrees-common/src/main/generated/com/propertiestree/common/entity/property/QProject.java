package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QProject is a Querydsl query type for Project
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QProject extends EntityPathBase<Project> {

    private static final long serialVersionUID = -83415016L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QProject project = new QProject("project");

    public final SetPath<Amenities, QAmenities> amenities = this.<Amenities, QAmenities>createSet("amenities", Amenities.class, QAmenities.class, PathInits.DIRECT2);

    public final EnumPath<Availability> availability = createEnum("availability", Availability.class);

    public final QBanner banner;

    public final SetPath<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto> gallery = this.<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto>createSet("gallery", com.propertiestree.common.entity.Photo.class, com.propertiestree.common.entity.QPhoto.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QLocation location;

    public final StringPath name = createString("name");

    public final StringPath overview = createString("overview");

    public final SetPath<Plan, QPlan> plans = this.<Plan, QPlan>createSet("plans", Plan.class, QPlan.class, PathInits.DIRECT2);

    public final ListPath<Property, QProperty> properties = this.<Property, QProperty>createList("properties", Property.class, QProperty.class, PathInits.DIRECT2);

    public final ListPath<Specification, QSpecification> specifications = this.<Specification, QSpecification>createList("specifications", Specification.class, QSpecification.class, PathInits.DIRECT2);

    public final EnumPath<PropertyType> type = createEnum("type", PropertyType.class);

    public final com.propertiestree.common.entity.QUser user;

    public final StringPath uuid = createString("uuid");

    public QProject(String variable) {
        this(Project.class, forVariable(variable), INITS);
    }

    public QProject(Path<? extends Project> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QProject(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QProject(PathMetadata metadata, PathInits inits) {
        this(Project.class, metadata, inits);
    }

    public QProject(Class<? extends Project> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.banner = inits.isInitialized("banner") ? new QBanner(forProperty("banner"), inits.get("banner")) : null;
        this.location = inits.isInitialized("location") ? new QLocation(forProperty("location"), inits.get("location")) : null;
        this.user = inits.isInitialized("user") ? new com.propertiestree.common.entity.QUser(forProperty("user")) : null;
    }

}

