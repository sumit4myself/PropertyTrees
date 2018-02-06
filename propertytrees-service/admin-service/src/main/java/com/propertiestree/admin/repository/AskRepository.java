package com.propertiestree.admin.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.ask.Question;

@Repository
public interface AskRepository extends AbstractRepository<Question, Long> {

	Optional<Question> findByUuid(String uuid);

	@Query("select q from Question q where q.userId.uuid = :userUUId")
	List<Question> findAllQuestionByUserUUId(@Param("userUUId") String userUUId);
}
