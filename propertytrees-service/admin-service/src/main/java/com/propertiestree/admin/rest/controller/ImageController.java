package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.ImageService;
import com.propertiestree.common.entity.Photo;

@RestController
@RequestMapping("/photo")
public class ImageController {
	
	@Autowired
	private ImageService imageService;

	@PostMapping()
	public String savePhoto(@RequestBody Photo photo) {
		try {
			return imageService.savePhoto(photo);
		} catch (Exception e) {
			return null;
		}
	}

	@GetMapping("/{uuid}")
	public Photo getPhoto(@PathVariable("uuid") String uuid) {
		try {
			return imageService.getPhoto(uuid);
		} catch (Exception e) {
			return null;
		}
	}
	
}
