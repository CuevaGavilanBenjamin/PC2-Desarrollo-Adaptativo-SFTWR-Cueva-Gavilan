package com.recarga.bancaria.controller;

import com.recarga.bancaria.model.Operador;
import com.recarga.bancaria.service.OperadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/operadores")
public class OperadorController {

    @Autowired
    private OperadorService operadorService;

    @GetMapping
    public ResponseEntity<?> obtenerOperadores() {
        try {
            List<Operador> operadores = operadorService.obtenerOperadores();
            return ResponseEntity.ok(operadores);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("No se pudieron cargar los operadores");
        }
    }
}
