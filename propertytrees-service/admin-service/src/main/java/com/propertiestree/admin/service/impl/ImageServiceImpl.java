package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.ImageNotFoundException;
import com.propertiestree.admin.helper.impl.ImageUtils;
import com.propertiestree.admin.helper.impl.UUIDGeneratorImpl;
import com.propertiestree.admin.repository.ImageRepository;
import com.propertiestree.admin.service.ImageService;
import com.propertiestree.common.entity.Photo;

@Service
public class ImageServiceImpl implements ImageService {
	
	@Autowired
	private ImageRepository imageRepository;
	@Autowired
	private UUIDGeneratorImpl uuidGenerator;
	
	@Value("${image.upload.targetDir}")
	private String imageTargetDir;
	
	@Override
	public String savePhoto(Photo photo) throws Exception {
		String fileName = ImageUtils.generateFileName(photo.getTag(),"."+photo.getExtension());
		photo.setUrl(fileName);
		photo.setUuid(uuidGenerator.nextLargeUID());
		ImageUtils.decoder(photo.getBase64String(), imageTargetDir+fileName);
		return imageRepository.save(photo).getUuid();
	}
	
	@Override
	public Photo getPhoto(String uuid) throws Exception {
		Photo photo = imageRepository.findByUuid(uuid).orElseThrow(() -> new ImageNotFoundException(uuid));
		String imageBase64 = ImageUtils.encoder(imageTargetDir+photo.getUrl());
		photo.setBase64String(imageBase64);
		return photo;
	}
}
