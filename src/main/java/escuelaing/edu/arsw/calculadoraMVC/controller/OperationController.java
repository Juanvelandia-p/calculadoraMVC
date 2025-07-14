package escuelaing.edu.arsw.calculadoraMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import escuelaing.edu.arsw.calculadoraMVC.service.OperationService;

@RestController
@RequestMapping("/operations")
public class OperationController {
    @Autowired
    private OperationService operationService;

    @GetMapping
    public float operate(@RequestParam float a,@RequestParam String op,@RequestParam float b) {
        // Assuming operationService has an add method
        return operationService.execute(op,a,b);
    }

    @PutMapping
    public void AC() {
        // Assuming operationService has a clear method
        operationService.AC();
    }
    
}
