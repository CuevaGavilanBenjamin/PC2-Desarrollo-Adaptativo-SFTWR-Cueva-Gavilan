package com.recarga.bancaria.service;

import com.recarga.bancaria.model.Usuario;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

@Service
public class ClaveService {

    @Autowired
    private ResourceLoader resourceLoader;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final Map<String, Integer> intentosFallidos = new HashMap<>();
    private final int MAX_INTENTOS = 3;

    public boolean verificarClave(String clave) throws IOException {
        Resource resource = resourceLoader.getResource("classpath:usuarios.json");
        Usuario[] usuarios = objectMapper.readValue(resource.getInputStream(), Usuario[].class);
        
        if (usuarios == null || usuarios.length == 0) {
            throw new RuntimeException("No hay usuarios configurados");
        }
        
        Usuario usuarioActivo = usuarios[0];
        String usuario = usuarioActivo.getUsuario();

        if (intentosFallidos.getOrDefault(usuario, 0) >= MAX_INTENTOS) {
            throw new RuntimeException("Demasiados intentos. Intenta más tarde");
        }

        if (!clave.equals(usuarioActivo.getClave())) {
            int intentosRestantes = MAX_INTENTOS - intentosFallidos.getOrDefault(usuario, 0) - 1;
            intentosFallidos.put(usuario, intentosFallidos.getOrDefault(usuario, 0) + 1);
            
            if (intentosRestantes == 0) {
                throw new RuntimeException("Demasiados intentos. Intenta más tarde");
            }
            
            throw new RuntimeException("Clave incorrecta. Intentos restantes: " + intentosRestantes);
        }

        intentosFallidos.remove(usuario);
        return true;
    }

    public void reiniciarIntentos() throws IOException {
        Resource resource = resourceLoader.getResource("classpath:usuarios.json");
        Usuario[] usuarios = objectMapper.readValue(resource.getInputStream(), Usuario[].class);
        
        if (usuarios != null && usuarios.length > 0) {
            intentosFallidos.remove(usuarios[0].getUsuario());
        }
    }
}
