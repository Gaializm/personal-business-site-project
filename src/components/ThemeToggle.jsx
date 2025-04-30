

const ThemeToggle = ({ mode, setMode }) => {
    const handleModeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark-mode" : "light"));
    };

    return (
        <button onClick={handleModeChange} style={{ cursor: 'pointer' }}>
            {mode === "dark-mode" ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
};

export default ThemeToggle;