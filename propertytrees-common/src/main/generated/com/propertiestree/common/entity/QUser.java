package com.propertiestree.common.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = -1336281053L;

    public static final QUser user = new QUser("user");

    public final StringPath city = createString("city");

    public final StringPath emailId = createString("emailId");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath landlinePhone = createString("landlinePhone");

    public final StringPath landlinePhone2 = createString("landlinePhone2");

    public final StringPath mobile = createString("mobile");

    public final StringPath mobile2 = createString("mobile2");

    public final StringPath mobile3 = createString("mobile3");

    public final StringPath name = createString("name");

    public final StringPath password = createString("password");

    public final EnumPath<UserType> type = createEnum("type", UserType.class);

    public final StringPath uuid = createString("uuid");

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

