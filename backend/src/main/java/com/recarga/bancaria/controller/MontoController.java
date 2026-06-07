package com.recarga.bancaria.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/montos")
public class MontoController {

    @Autowired
    private ResourceLoader resourceLoader;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping
    public ResponseEntity<?> obtenerMontos() {
        try {
            Resource resource = resourceLoader.getResource("classpath:montos.json");
            Integer[] montos = objectMapper.readValue(resource.getInputStream(), Integer[].class);
            return ResponseEntity.ok(montos);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("No se pudieron cargar los montos");
        }
    }
}
