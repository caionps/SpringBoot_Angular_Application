package com.github.caionps.clientes.model.repository;

import com.github.caionps.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {



}
