package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QFurnishingDetails is a Querydsl query type for FurnishingDetails
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QFurnishingDetails extends EntityPathBase<FurnishingDetails> {

    private static final long serialVersionUID = -1242037294L;

    public static final QFurnishingDetails furnishingDetails = new QFurnishingDetails("furnishingDetails");

    public final BooleanPath ac = createBoolean("ac");

    public final NumberPath<Integer> beds = createNumber("beds", Integer.class);

    public final BooleanPath chimney = createBoolean("chimney");

    public final BooleanPath curtains = createBoolean("curtains");

    public final BooleanPath dinningTable = createBoolean("dinningTable");

    public final BooleanPath exhaustFan = createBoolean("exhaustFan");

    public final NumberPath<Integer> fans = createNumber("fans", Integer.class);

    public final BooleanPath fridge = createBoolean("fridge");

    public final BooleanPath geyser = createBoolean("geyser");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> lights = createNumber("lights", Integer.class);

    public final BooleanPath microwave = createBoolean("microwave");

    public final BooleanPath modularKitchen = createBoolean("modularKitchen");

    public final StringPath others = createString("others");

    public final BooleanPath sofa = createBoolean("sofa");

    public final BooleanPath stove = createBoolean("stove");

    public final BooleanPath tV = createBoolean("tV");

    public final NumberPath<Integer> wardrobe = createNumber("wardrobe", Integer.class);

    public final BooleanPath washingMachine = createBoolean("washingMachine");

    public final BooleanPath waterPurifier = createBoolean("waterPurifier");

    public QFurnishingDetails(String variable) {
        super(FurnishingDetails.class, forVariable(variable));
    }

    public QFurnishingDetails(Path<? extends FurnishingDetails> path) {
        super(path.getType(), path.getMetadata());
    }

    public QFurnishingDetails(PathMetadata metadata) {
        super(FurnishingDetails.class, metadata);
    }

}

