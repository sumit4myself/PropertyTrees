
package com.propertiestree.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.session.SessionAutoConfiguration;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.boot.system.EmbeddedServerPortFileWriter;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableAspectJAutoProxy
@EnableTransactionManagement
@EntityScan(basePackages = { "com.propertiestree.common.entity" })
@EnableJpaRepositories(basePackages = { "com.propertiestree.admin.repository" })
@SpringBootApplication(scanBasePackages = { "com.propertiestree.common",
	"com.propertiestree.admin" })
@EnableAutoConfiguration(exclude = { SessionAutoConfiguration.class,
	SecurityAutoConfiguration.class })
public class AdminApplication {

	private static String applicationName = "admin-service-" + System.currentTimeMillis();

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(
				AdminApplication.class);
		springApplication.addListeners(
				new ApplicationPidFileWriter(applicationName + ".pid"));
		springApplication.addListeners(
				new EmbeddedServerPortFileWriter(applicationName + ".port"));
		springApplication.run(args);
	}

}
