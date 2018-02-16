package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QApartmentFeature is a Querydsl query type for ApartmentFeature
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QApartmentFeature extends EntityPathBase<ApartmentFeature> {

    private static final long serialVersionUID = 1006299461L;

    public static final QApartmentFeature apartmentFeature = new QApartmentFeature("apartmentFeature");

    public final QPropertyFeature _super = new QPropertyFeature(this);

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

    public final EnumPath<OtherFeatureType> otherFeature = createEnum("otherFeature", OtherFeatureType.class);

    //inherited
    public final SetPath<com.propertiestree.common.entity.Photo, com.propertiestree.common.entity.QPhoto> photos = _super.photos;

    //inherited
    public final StringPath powerBackup = _super.powerBackup;

    public final EnumPath<PropertyFeatureType> propertyFeature = createEnum("propertyFeature", PropertyFeatureType.class);

    public final EnumPath<SocietyFeatureType> societyFeature = createEnum("societyFeature", SocietyFeatureType.class);

    //inherited
    public final StringPath typeOfFlooring = _super.typeOfFlooring;

    //inherited
    public final NumberPath<Integer> widthOfFacingRoad = _super.widthOfFacingRoad;

    //inherited
    public final EnumPath<AreaUnitType> widthOfFacingUnit = _super.widthOfFacingUnit;

    public QApartmentFeature(String variable) {
        super(ApartmentFeature.class, forVariable(variable));
    }

    public QApartmentFeature(Path<? extends ApartmentFeature> path) {
        super(path.getType(), path.getMetadata());
    }

    public QApartmentFeature(PathMetadata metadata) {
        super(ApartmentFeature.class, metadata);
    }

}

