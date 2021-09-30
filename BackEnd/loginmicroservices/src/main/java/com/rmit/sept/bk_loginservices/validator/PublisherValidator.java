package com.rmit.sept.bk_loginservices.validator;
import com.rmit.sept.bk_loginservices.model.Publisher;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class PublisherValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return Publisher.class.equals(aClass);
    }
    @Override
    public void validate(Object object, Errors errors) {
        Publisher user = (Publisher) object;
        if(user.getPassword().length() <6){
            errors.rejectValue("password","Length", "Password must be at least 6 characters");
        }
        if(!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("confirmPassword","Match", "Passwords must match");

        }
    }
}