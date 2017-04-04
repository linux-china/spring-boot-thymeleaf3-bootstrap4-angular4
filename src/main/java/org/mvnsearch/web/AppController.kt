package org.mvnsearch.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody

/**
 * application controller
 *
 * @author linux_china
 */
@Controller
class PortController {

    @GetMapping("/")
    fun index() = "index"

    @GetMapping("/welcome")
    @ResponseBody
    fun welcome() = "welcome"

    @GetMapping("/json")
    @ResponseBody
    fun jsonData(): Map<String, Any> {
        return mapOf("id" to 1, "nick" to "Jackie");
    }
}
