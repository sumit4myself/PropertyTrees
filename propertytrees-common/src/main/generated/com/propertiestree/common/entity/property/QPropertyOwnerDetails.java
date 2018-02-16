package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPropertyOwnerDetails is a Querydsl query type for PropertyOwnerDetails
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPropertyOwnerDetails extends EntityPathBase<PropertyOwnerDetails> {

    private static final long serialVersionUID = 498942949L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPropertyOwnerDetails propertyOwnerDetails = new QPropertyOwnerDetails("propertyOwnerDetails");

    public final com.propertiestree.common.entity.QCity city;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> landlinePhone1 = createNumber("landlinePhone1", Integer.class);

    public final NumberPath<Integer> landlinePhone2 = createNumber("landlinePhone2", Integer.class);

    public final NumberPath<Integer> mobile = createNumber("mobile", Integer.class);

    public final NumberPath<Integer> mobile2 = createNumber("mobile2", Integer.class);

    public final NumberPath<Integer> mobile3 = createNumber("mobile3", Integer.class);

    public QPropertyOwnerDetails(String variable) {
        this(PropertyOwnerDetails.class, forVariable(variable), INITS);
    }

    public QPropertyOwnerDetails(Path<? extends PropertyOwnerDetails> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPropertyOwnerDetails(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPropertyOwnerDetails(PathMetadata metadata, PathInits inits) {
        this(PropertyOwnerDetails.class, metadata, inits);
    }

    public QPropertyOwnerDetails(Class<? extends PropertyOwnerDetails> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.city = inits.isInitialized("city") ? new com.propertiestree.common.entity.QCity(forProperty("city"), inits.get("city")) : null;
    }

}

