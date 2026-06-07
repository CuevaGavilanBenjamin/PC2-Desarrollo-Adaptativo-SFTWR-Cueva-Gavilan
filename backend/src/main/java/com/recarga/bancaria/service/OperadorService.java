package com.recarga.bancaria.service;

import com.recarga.bancaria.model.Operador;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Service
public class OperadorService {

    @Autowired
    private ResourceLoader resourceLoader;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<Operador> obtenerOperadores() throws IOException {
        Resource resource = resourceLoader.getResource("classpath:operadores.json");
        Operador[] operadores = objectMapper.readValue(resource.getInputStream(), Operador[].class);
        return Arrays.asList(operadores);
    }
}
