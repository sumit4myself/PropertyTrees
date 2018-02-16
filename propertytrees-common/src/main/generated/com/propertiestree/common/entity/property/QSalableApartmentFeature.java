package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QSalableApartmentFeature is a Querydsl query type for SalableApartmentFeature
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSalableApartmentFeature extends EntityPathBase<SalableApartmentFeature> {

    private static final long serialVersionUID = 1988603067L;

    public static final QSalableApartmentFeature salableApartmentFeature = new QSalableApartmentFeature("salableApartmentFeature");

    public final QApartmentFeature _super = new QApartmentFeature(this);

    //inherited
    public final SetPath<Amenities, QAmenities> amenities = _super.amenities;

    //inherited
    public final BooleanPath cornerProperty = _super.cornerProperty;

    //inherited
    public final StringPath Description = _super.Description;

    //inherited
    public final StringPath facig = _super.facig;

    //inherited
    public final BooleanPath gatedSociety = _super.gatedSociety;

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final EnumPath<OtherFeatureType> otherFeature = _super.otherFeature;

    public final EnumPath<OverlookingType> overlooking = createEnum("overlooking", OverlookingType.class);

    //inherited
    public final SetPath<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto> photos = _super.photos;

    //inherited
    public final StringPath powerBackup = _super.powerBackup;

    //inherited
    public final EnumPath<PropertyFeatureType> propertyFeature = _super.propertyFeature;

    //inherited
    public final EnumPath<SocietyFeatureType> societyFeature = _super.societyFeature;

    //inherited
    public final StringPath typeOfFlooring = _super.typeOfFlooring;

    public final EnumPath<WaterSourceType> waterSource = createEnum("waterSource", WaterSourceType.class);

    //inherited
    public final NumberPath<Integer> widthOfFacingRoad = _super.widthOfFacingRoad;

    //inherited
    public final EnumPath<AreaUnitType> widthOfFacingUnit = _super.widthOfFacingUnit;

    public QSalableApartmentFeature(String variable) {
        super(SalableApartmentFeature.class, forVariable(variable));
    }

    public QSalableApartmentFeature(Path<? extends SalableApartmentFeature> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSalableApartmentFeature(PathMetadata metadata) {
        super(SalableApartmentFeature.class, metadata);
    }

}

