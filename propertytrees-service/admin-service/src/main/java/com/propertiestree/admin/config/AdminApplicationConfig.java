package com.propertiestree.admin.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.boot.system.EmbeddedServerPortFileWriter;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@EntityScan(basePackages = {"com.propertiestree.common.entity"})
@SpringBootApplication(scanBasePackages = {"com.propertiestree.common", "com.propertiestree.admin"})
@EnableAspectJAutoProxy
public class AdminApplicationConfig {

	private static String applicationName = "admin-service-" + System.currentTimeMillis();

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(AdminApplicationConfig.class);
		springApplication.addListeners(new ApplicationPidFileWriter(applicationName + ".pid"));
		springApplication.addListeners(new EmbeddedServerPortFileWriter(applicationName + ".port"));
		springApplication.run(args);
	}
}
