package com.propertiestree.admin.service;

import com.propertiestree.common.entity.Photo;

public interface ImageService {

	String savePhoto(Photo photo) throws Exception;

	Photo getPhoto(String uuid) throws Exception;

}
