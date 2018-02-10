package com.propertiestree.admin.service;

import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;

public interface UserService {

	User register(UserModel registration);

	void updateProfile(String uuid, User updatedUser);

	void changePassword(String uuid, String updatedPassword);

}
