
package com.propertiestree.ui.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.boot.system.EmbeddedServerPortFileWriter;

@SpringBootApplication(scanBasePackages = {"com.propertiestree.ui"})
public class UIApplicationConfig {

	private static String applicationName = "propertiestree-ui-" + System.currentTimeMillis();

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(UIApplicationConfig.class);
		springApplication.addListeners(new ApplicationPidFileWriter(applicationName + ".pid"));
		springApplication.addListeners(new EmbeddedServerPortFileWriter(applicationName + ".port"));
		springApplication.run(args);
	}
}
