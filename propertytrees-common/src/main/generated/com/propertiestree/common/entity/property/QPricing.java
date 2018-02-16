package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QPricing is a Querydsl query type for Pricing
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPricing extends EntityPathBase<Pricing> {

    private static final long serialVersionUID = -89160507L;

    public static final QPricing pricing = new QPricing("pricing");

    public final EnumPath<Availability> availability = createEnum("availability", Availability.class);

    public final NumberPath<Integer> bookingAmount = createNumber("bookingAmount", Integer.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<OwnershipType> ownershipType = createEnum("ownershipType", OwnershipType.class);

    public final BooleanPath priceNegotiable = createBoolean("priceNegotiable");

    public final EnumPath<TransactionType> transactionType = createEnum("transactionType", TransactionType.class);

    public QPricing(String variable) {
        super(Pricing.class, forVariable(variable));
    }

    public QPricing(Path<? extends Pricing> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPricing(PathMetadata metadata) {
        super(Pricing.class, metadata);
    }

}

