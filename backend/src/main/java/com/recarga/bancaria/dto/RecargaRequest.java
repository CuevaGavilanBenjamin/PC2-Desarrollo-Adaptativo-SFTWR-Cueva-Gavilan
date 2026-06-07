package com.recarga.bancaria.dto;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;

public class RecargaRequest {
    
    @Pattern(regexp = "^\\d{9}$", message = "Ingresa un número válido de 9 dígitos")
    private String numero;
    
    @NotBlank(message = "El operador es requerido")
    private String operador;
    
    @Min(value = 5, message = "El monto debe estar entre S/5 y S/100")
    @Max(value = 100, message = "El monto debe estar entre S/5 y S/100")
    private Double monto;

    public RecargaRequest() {
    }

    public RecargaRequest(String numero, String operador, Double monto) {
        this.numero = numero;
        this.operador = operador;
        this.monto = monto;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getOperador() {
        return operador;
    }

    public void setOperador(String operador) {
        this.operador = operador;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    @Override
    public String toString() {
        return "RecargaRequest{" +
                "numero='" + numero + '\'' +
                ", operador='" + operador + '\'' +
                ", monto=" + monto +
                '}';
    }
}
