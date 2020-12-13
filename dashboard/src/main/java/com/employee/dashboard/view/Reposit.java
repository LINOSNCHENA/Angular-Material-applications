
package com.employee.dashboard.view;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.employee.dashboard.model.Muntu;

@Repository
// Repository Vs Reposit naming conversions

public interface Reposit extends JpaRepository < Muntu, Integer> {}