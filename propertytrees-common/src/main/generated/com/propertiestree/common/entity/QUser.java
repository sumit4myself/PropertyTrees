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

    public final NumberPath<Integer> landlinePhone = createNumber("landlinePhone", Integer.class);

    public final NumberPath<Integer> landlinePhone2 = createNumber("landlinePhone2", Integer.class);

    public final NumberPath<Integer> mobile = createNumber("mobile", Integer.class);

    public final NumberPath<Integer> mobile2 = createNumber("mobile2", Integer.class);

    public final NumberPath<Integer> mobile3 = createNumber("mobile3", Integer.class);

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

