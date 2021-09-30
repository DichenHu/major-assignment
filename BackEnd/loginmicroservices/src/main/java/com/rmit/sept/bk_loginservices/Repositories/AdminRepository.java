package com.rmit.sept.bk_loginservices.Repositories;
import com.rmit.sept.bk_loginservices.model.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Long> {

    Admin findByUsername(String username);
    Admin getById(Long id);
}
