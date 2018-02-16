package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;

public interface UserService {

	User register(UserModel registration);

	void updateProfile(String uuid, User updatedUser);

	void changePassword(String uuid, String updatedPassword);

	Page<User> search(String searchQuery, Pageable pageable);

}
