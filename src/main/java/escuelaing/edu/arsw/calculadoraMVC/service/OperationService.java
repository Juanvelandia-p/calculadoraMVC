package escuelaing.edu.arsw.calculadoraMVC.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
@Service
public class OperationService {

    @FunctionalInterface
    interface Operation {
        float apply(float a, float b);
    }

    private final Map<String, Operation> operations = new HashMap<>();

    public OperationService() {
        operations.put("+", (a, b) -> a + b);
        operations.put("-", (a, b) -> a - b);
        operations.put("*", (a, b) -> a * b);
        operations.put("/", (a, b) -> {
            if (b == 0) throw new IllegalArgumentException("Division by zero is not allowed.");
            return a / b;
        });
    }

    public float execute(String op, float a, float b) {
        Operation operation = operations.get(op);
        if (operation == null) throw new IllegalArgumentException("Unknown operation: " + op);
        return operation.apply(a, b);
    }
    public void AC() {
        operations.clear();
        operations.put("+", (a, b) -> a + b);
        operations.put("-", (a, b) -> a - b);
        operations.put("*", (a, b) -> a * b);
        operations.put("/", (a, b) -> {
            if (b == 0) throw new IllegalArgumentException("Division by zero is not allowed.");
            return a / b;
        });
    }
}
