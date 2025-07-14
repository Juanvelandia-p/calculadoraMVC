const { useState } = React;

function App() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [op, setOp] = useState('+');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = async () => {
        setError('');
        setResult(null);
        // Validación básica
        if (a === '' || b === '') {
            setError('Por favor ingresa ambos números.');
            return;
        }
        // Construye la URL para el backend
        const url = `/operations?a=${a}&op=${encodeURIComponent(op)}&b=${b}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }
            const data = await response.text(); // El backend devuelve un número como texto
            setResult(data);
        } catch (err) {
            setError('Error: ' + err.message);
        }
    };

    return (
        <div style={{ maxWidth: 300, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Calculadora MVC</h2>
            <input
                type="number"
                value={a}
                onChange={e => setA(e.target.value)}
                placeholder="Primer número"
                style={{ width: '100%', marginBottom: 10 }}
            />
            <select value={op} onChange={e => setOp(e.target.value)} style={{ width: '100%', marginBottom: 10 }}>
                <option value="+">Sumar (+)</option>
                <option value="-">Restar (-)</option>
                <option value="*">Multiplicar (*)</option>
                <option value="/">Dividir (/)</option>
            </select>
            <input
                type="number"
                value={b}
                onChange={e => setB(e.target.value)}
                placeholder="Segundo número"
                style={{ width: '100%', marginBottom: 10 }}
            />
            <button onClick={handleCalculate} style={{ width: '100%', marginBottom: 10 }}>Calcular</button>
            {result !== null && <div>Resultado: <strong>{result}</strong></div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

// Renderiza el componente en el div con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(<App />);