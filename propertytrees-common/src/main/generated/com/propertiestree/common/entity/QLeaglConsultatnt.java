package com.propertiestree.common.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QLeaglConsultatnt is a Querydsl query type for LeaglConsultatnt
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QLeaglConsultatnt extends EntityPathBase<LeaglConsultatnt> {

    private static final long serialVersionUID = 1277115472L;

    public static final QLeaglConsultatnt leaglConsultatnt = new QLeaglConsultatnt("leaglConsultatnt");

    public final QUser _super = new QUser(this);

    //inherited
    public final StringPath city = _super.city;

    //inherited
    public final StringPath emailId = _super.emailId;

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final StringPath landlinePhone = _super.landlinePhone;

    //inherited
    public final StringPath landlinePhone2 = _super.landlinePhone2;

    //inherited
    public final StringPath mobile = _super.mobile;

    //inherited
    public final StringPath mobile2 = _super.mobile2;

    //inherited
    public final StringPath mobile3 = _super.mobile3;

    //inherited
    public final StringPath name = _super.name;

    //inherited
    public final StringPath password = _super.password;

    //inherited
    public final EnumPath<UserType> type = _super.type;

    //inherited
    public final StringPath uuid = _super.uuid;

    public QLeaglConsultatnt(String variable) {
        super(LeaglConsultatnt.class, forVariable(variable));
    }

    public QLeaglConsultatnt(Path<? extends LeaglConsultatnt> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLeaglConsultatnt(PathMetadata metadata) {
        super(LeaglConsultatnt.class, metadata);
    }

}

