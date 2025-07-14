function ClearButton({ onClear }) {
    return (
        <button onClick={onClear} style={{ width: '100%', marginBottom: 10, background: '#eee' }}>
            Limpiar
        </button>
    );
}

export default ClearButton;
