package com.propertiestree.common.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QArchitect is a Querydsl query type for Architect
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QArchitect extends EntityPathBase<Architect> {

    private static final long serialVersionUID = -1698576739L;

    public static final QArchitect architect = new QArchitect("architect");

    public final QUser _super = new QUser(this);

    //inherited
    public final StringPath city = _super.city;

    //inherited
    public final StringPath emailId = _super.emailId;

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final NumberPath<Integer> landlinePhone = _super.landlinePhone;

    //inherited
    public final NumberPath<Integer> landlinePhone2 = _super.landlinePhone2;

    //inherited
    public final NumberPath<Integer> mobile = _super.mobile;

    //inherited
    public final NumberPath<Integer> mobile2 = _super.mobile2;

    //inherited
    public final NumberPath<Integer> mobile3 = _super.mobile3;

    //inherited
    public final StringPath name = _super.name;

    //inherited
    public final StringPath password = _super.password;

    //inherited
    public final EnumPath<UserType> type = _super.type;

    //inherited
    public final StringPath uuid = _super.uuid;

    public QArchitect(String variable) {
        super(Architect.class, forVariable(variable));
    }

    public QArchitect(Path<? extends Architect> path) {
        super(path.getType(), path.getMetadata());
    }

    public QArchitect(PathMetadata metadata) {
        super(Architect.class, metadata);
    }

}

