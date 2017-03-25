package org.mvnsearch.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

/**
 * application controller
 *
 * @author linux_china
 */
@Controller
class PortController {

    @GetMapping("/")
    fun index() = "index"

}
