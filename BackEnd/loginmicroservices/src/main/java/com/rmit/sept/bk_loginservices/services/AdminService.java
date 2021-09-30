package com.rmit.sept.bk_loginservices.services;
import com.rmit.sept.bk_loginservices.Repositories.AdminRepository;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Admin saveUser (Admin newAdmin){
        try{
            newAdmin.setPassword(bCryptPasswordEncoder.encode(newAdmin.getPassword()));
            //Username has to be unique (exception)
            newAdmin.setUsername(newAdmin.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newAdmin.setConfirmPassword("");
            return adminRepository.save(newAdmin);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newAdmin.getUsername()+"' already exists");
        }

    }


}
