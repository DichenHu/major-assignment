package com.rmit.sept.bk_loginservices.services;
import com.rmit.sept.bk_loginservices.Repositories.PublisherRepository;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class PublisherService {

    @Autowired
    private PublisherRepository publisherRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Publisher saveUser (Publisher newPublisher){
        try{
            newPublisher.setPassword(bCryptPasswordEncoder.encode(newPublisher.getPassword()));
            //Username has to be unique (exception)
            newPublisher.setUsername(newPublisher.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newPublisher.setConfirmPassword("");
            return publisherRepository.save(newPublisher);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newPublisher.getUsername()+"' already exists");
        }

    }


}