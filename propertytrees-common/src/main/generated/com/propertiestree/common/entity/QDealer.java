package com.propertiestree.common.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QDealer is a Querydsl query type for Dealer
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDealer extends EntityPathBase<Dealer> {

    private static final long serialVersionUID = -470616975L;

    public static final QDealer dealer = new QDealer("dealer");

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

    public QDealer(String variable) {
        super(Dealer.class, forVariable(variable));
    }

    public QDealer(Path<? extends Dealer> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDealer(PathMetadata metadata) {
        super(Dealer.class, metadata);
    }

}

