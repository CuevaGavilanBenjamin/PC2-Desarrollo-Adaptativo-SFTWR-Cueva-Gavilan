package com.recarga.bancaria.controller;

import com.recarga.bancaria.dto.RecargaRequest;
import com.recarga.bancaria.dto.ClaveRequest;
import com.recarga.bancaria.model.Transaccion;
import com.recarga.bancaria.service.RecargaService;
import com.recarga.bancaria.service.ClaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/recarga")
public class RecargaController {

    @Autowired
    private RecargaService recargaService;

    @Autowired
    private ClaveService claveService;

    @PostMapping("/verificar-clave")
    public ResponseEntity<?> verificarClave(@Valid @RequestBody ClaveRequest claveRequest, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("La clave es requerida");
        }

        try {
            claveService.verificarClave(claveRequest.getClave());
            return ResponseEntity.ok("Clave verificada correctamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error al verificar la clave");
        }
    }

    @PostMapping("/procesar")
    public ResponseEntity<?> procesarRecarga(@Valid @RequestBody RecargaRequest recargaRequest, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("Datos inválidos en la recarga");
        }

        try {
            Transaccion transaccion = recargaService.procesarRecarga(recargaRequest);
            claveService.reiniciarIntentos();
            return ResponseEntity.ok(transaccion);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error al procesar la recarga. Intenta nuevamente");
        }
    }
}
