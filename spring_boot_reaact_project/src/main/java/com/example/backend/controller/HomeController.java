package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")

public class HomeController {
    @GetMapping("/data")
    public List<String> getData() {
        return Arrays.asList("Item 1", "Item 2", "Item 3");
    }
}
