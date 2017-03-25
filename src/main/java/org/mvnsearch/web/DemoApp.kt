package org.mvnsearch.web

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

/**
 * spring boot demo app
 *
 * @author linux_china
 */
@SpringBootApplication
open class DemoApp {

}

fun main(args: Array<String>) {
    SpringApplication.run(DemoApp::class.java, *args)
}