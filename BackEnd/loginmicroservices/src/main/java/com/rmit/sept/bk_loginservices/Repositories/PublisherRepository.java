package com.rmit.sept.bk_loginservices.Repositories;
import com.rmit.sept.bk_loginservices.model.Publisher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublisherRepository extends CrudRepository<Publisher, Long> {

    Publisher findByUsername(String username);
    Publisher getById(Long id);
}
