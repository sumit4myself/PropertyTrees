
package com.propertiestree.ui.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.boot.system.EmbeddedServerPortFileWriter;

@SpringBootApplication(scanBasePackages = {"com.propertiestree.ui.admin"})
public class AdminUIApplication {

	private static String applicationName = "propertiestree-ui-admin" + System.currentTimeMillis();

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(AdminUIApplication.class);
		springApplication.addListeners(new ApplicationPidFileWriter(applicationName + ".pid"));
		springApplication.addListeners(new EmbeddedServerPortFileWriter(applicationName + ".port"));
		springApplication.run(args);
	}
}
