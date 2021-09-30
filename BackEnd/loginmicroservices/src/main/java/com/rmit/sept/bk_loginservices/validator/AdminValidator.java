package com.rmit.sept.bk_loginservices.validator;
import com.rmit.sept.bk_loginservices.model.Admin;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class AdminValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return Admin.class.equals(aClass);
    }
    @Override
    public void validate(Object object, Errors errors) {
        Admin user = (Admin) object;
        if(user.getPassword().length() <6){
            errors.rejectValue("password","Length", "Password must be at least 6 characters");
        }
        if(!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("confirmPassword","Match", "Passwords must match");

        }
    }
}