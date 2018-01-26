package com.propertiestree.admin.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
	
	@Override
	public Photo uploadPhoto(MultipartFile file, String tagName) throws IOException {
		String fileName = ImageUtils.generateFileName(tagName,"."+file.getOriginalFilename());
		Path path = Paths.get(imageTargetDir + fileName);
        Files.write(path, file.getBytes());
		Photo photo = new Photo();
		photo.setUuid(uuidGenerator.nextLargeUID());
		photo.setTag(tagName);
		photo.setUrl(fileName);
		//TODO: imageRepository.save(photo);
		return photo;
	}
	
	@Override
	public Photo findPhoto(String uuid) throws Exception {
		Photo photo = imageRepository.findByUuid(uuid).orElseThrow(() -> new ImageNotFoundException(uuid));
		photo.setUrl(imageTargetDir+photo.getUrl());
		return photo;
	}
}
