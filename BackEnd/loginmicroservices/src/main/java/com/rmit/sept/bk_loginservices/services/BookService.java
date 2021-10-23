package com.rmit.sept.bk_loginservices.services;
import com.rmit.sept.bk_loginservices.Repositories.BookRepository;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.data.domain.Pageable;
@Service
public class BookService {

    @Autowired
    private BookRepository BookRepository;

    public Book saveBook (Book newBook){
        try{
            newBook.setimage(newBook.getimage());
            newBook.setbookName(newBook.getbookName());
            return BookRepository.save(newBook);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("bookName '"+newBook.getbookName()+"' already exists");
        }

    }

}