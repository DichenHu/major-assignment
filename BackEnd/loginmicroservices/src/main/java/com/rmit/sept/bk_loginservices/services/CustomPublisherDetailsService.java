package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.PublisherRepository;
import com.rmit.sept.bk_loginservices.model.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomPublisherDetailsService implements UserDetailsService {

    @Autowired
    private PublisherRepository publisherRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Publisher user = publisherRepository.findByUsername(username);
        if(user==null) new UsernameNotFoundException("User not found");
        return user;
    }


    @Transactional
    public Publisher loadUserById(Long id){
        Publisher user = publisherRepository.getById(id);
        if(user==null) new UsernameNotFoundException("User not found");
        return user;

    }
}
