
package com.propertiestree.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.boot.system.EmbeddedServerPortFileWriter;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@SpringBootApplication(scanBasePackages = {"com.propertiestree.gateway"})
public class GatewayApplication {

	private static String applicationName = "propertiestree-gateway-" + System.currentTimeMillis();

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(GatewayApplication.class);
		springApplication.addListeners(new ApplicationPidFileWriter(applicationName + ".pid"));
		springApplication.addListeners(new EmbeddedServerPortFileWriter(applicationName + ".port"));
		springApplication.run(args);
	}
}
