package com.propertiestree.common.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QAgent is a Querydsl query type for Agent
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAgent extends EntityPathBase<Agent> {

    private static final long serialVersionUID = 1506132397L;

    public static final QAgent agent = new QAgent("agent");

    public final QUser _super = new QUser(this);

    public final StringPath addressLine2 = createString("addressLine2");

    //inherited
    public final StringPath city = _super.city;

    public final StringPath companyAddress = createString("companyAddress");

    public final StringPath companyName = createString("companyName");

    public final StringPath companyProfile = createString("companyProfile");

    public final StringPath companyUrl = createString("companyUrl");

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

    public QAgent(String variable) {
        super(Agent.class, forVariable(variable));
    }

    public QAgent(Path<? extends Agent> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAgent(PathMetadata metadata) {
        super(Agent.class, metadata);
    }

}

