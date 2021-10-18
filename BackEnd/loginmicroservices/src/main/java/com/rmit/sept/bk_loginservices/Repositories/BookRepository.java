package com.rmit.sept.bk_loginservices.Repositories;
import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.*;
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

   // Book findByName(String bookName);
   // Book getById(Long id);
   // Book findAll(Book book);
   List<Book> findAll();
}
