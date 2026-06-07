package com.recarga.bancaria.model;

import java.time.LocalDateTime;

public class Transaccion {
    private String id;
    private String numero;
    private String operador;
    private Double monto;
    private LocalDateTime fecha;
    private String estado;

    public Transaccion() {
    }

    public Transaccion(String id, String numero, String operador, Double monto, LocalDateTime fecha, String estado) {
        this.id = id;
        this.numero = numero;
        this.operador = operador;
        this.monto = monto;
        this.fecha = fecha;
        this.estado = estado;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Transaccion{" +
                "id='" + id + '\'' +
                ", numero='" + numero + '\'' +
                ", operador='" + operador + '\'' +
                ", monto=" + monto +
                ", fecha=" + fecha +
                ", estado='" + estado + '\'' +
                '}';
    }
}
