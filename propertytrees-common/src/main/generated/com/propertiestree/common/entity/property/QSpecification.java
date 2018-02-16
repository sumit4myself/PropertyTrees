package com.propertiestree.common.entity.property;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QSpecification is a Querydsl query type for Specification
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSpecification extends EntityPathBase<Specification> {

    private static final long serialVersionUID = -1459934526L;

    public static final QSpecification specification = new QSpecification("specification");

    public final StringPath content = createString("content");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath title = createString("title");

    public QSpecification(String variable) {
        super(Specification.class, forVariable(variable));
    }

    public QSpecification(Path<? extends Specification> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSpecification(PathMetadata metadata) {
        super(Specification.class, metadata);
    }

}

