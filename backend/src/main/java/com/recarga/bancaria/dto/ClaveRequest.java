package com.recarga.bancaria.dto;

import jakarta.validation.constraints.NotBlank;

public class ClaveRequest {
    
    @NotBlank(message = "La clave es requerida")
    private String clave;

    public ClaveRequest() {
    }

    public ClaveRequest(String clave) {
        this.clave = clave;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    @Override
    public String toString() {
        return "ClaveRequest{" +
                "clave='" + clave + '\'' +
                '}';
    }
}
