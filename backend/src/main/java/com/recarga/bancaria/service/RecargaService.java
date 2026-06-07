package com.recarga.bancaria.service;

import com.recarga.bancaria.model.Transaccion;
import com.recarga.bancaria.dto.RecargaRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
public class RecargaService {

    @Autowired
    private ResourceLoader resourceLoader;

    @Autowired
    private ObjectMapper objectMapper;

    public Transaccion procesarRecarga(RecargaRequest recargaRequest) throws IOException {
        String id = UUID.randomUUID().toString();
        LocalDateTime fecha = LocalDateTime.now();

        Transaccion transaccion = new Transaccion(
            id,
            recargaRequest.getNumero(),
            recargaRequest.getOperador(),
            recargaRequest.getMonto(),
            fecha,
            "EXITOSA"
        );

        guardarTransaccion(transaccion);
        return transaccion;
    }

    private void guardarTransaccion(Transaccion transaccion) throws IOException {
        Path transaccionesPath = Paths.get("target/classes/transacciones.json");
        List<Transaccion> transacciones = new ArrayList<>();

        if (Files.exists(transaccionesPath) && Files.size(transaccionesPath) > 0) {
            Resource resource = resourceLoader.getResource("classpath:transacciones.json");
            try (InputStream is = resource.getInputStream()) {
                Transaccion[] transaccionesExistentes = objectMapper.readValue(is, Transaccion[].class);
                transacciones.addAll(Arrays.asList(transaccionesExistentes));
            }
        }

        transacciones.add(transaccion);
        
        if (transaccionesPath.getParent() != null) {
            Files.createDirectories(transaccionesPath.getParent());
        }
        
        objectMapper.writerWithDefaultPrettyPrinter().writeValue(transaccionesPath.toFile(), transacciones);
    }
}
