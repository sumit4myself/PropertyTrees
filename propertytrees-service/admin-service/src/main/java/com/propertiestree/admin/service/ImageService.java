package com.propertiestree.admin.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.propertiestree.common.entity.Photo;

public interface ImageService {

	String savePhoto(Photo photo) throws Exception;

	Photo getPhoto(String uuid) throws Exception;

	Photo uploadPhoto(MultipartFile file, String tagName) throws IOException;

	Photo findPhoto(String uuid) throws Exception;

}
