package com.propertiestree.admin.helper.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;

public class ImageUtils {
	
	public final static String IMAGE_NOT_FOUND = "Image not found";
	public final static String IMAGE_NOT_READABLE = "Exception while reading the Image";

	public static String encoder(String imagePath) throws Exception {
		File file = new File(imagePath);
		try (FileInputStream imageInFile = new FileInputStream(file)) {
			byte imageData[] = new byte[(int) file.length()];
			imageInFile.read(imageData);
			return Base64.getEncoder().encodeToString(imageData);
		} catch (FileNotFoundException e) {
			throw new RuntimeException(IMAGE_NOT_FOUND);
		} catch (IOException ioe) {
			throw new RuntimeException(IMAGE_NOT_READABLE);
		}
	}

	public static void decoder(String base64Image, String pathFile) throws Exception {
		try (FileOutputStream imageOutFile = new FileOutputStream(pathFile)) {
			byte[] imageByteArray = Base64.getDecoder().decode(base64Image);
			imageOutFile.write(imageByteArray);
		} catch (FileNotFoundException e) {
			throw new RuntimeException(IMAGE_NOT_FOUND);
		} catch (IOException ioe) {
			throw new RuntimeException(IMAGE_NOT_READABLE);
		}
	}

	public static String generateFileName(String prefix, String suffix) {
		StringBuffer fileName = new StringBuffer();
		fileName.append(prefix).append(System.currentTimeMillis()).append(suffix);
		return fileName.toString();
	}

}
