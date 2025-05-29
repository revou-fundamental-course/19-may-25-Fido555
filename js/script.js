document.getElementById('btn-konversi').addEventListener('click', function() {
    const suhuC = parseFloat(document.getElementById('suhu').value);
    if (isNaN(suhuC)) {
        this.blur();
        alert('Masukkan suhu yang valid!');
        return;
    }
    const suhuF = (suhuC * 9/5) + 32;
    document.getElementById('Fahrenheit').value = suhuF.toFixed(2);
    document.getElementById('penjelasan').value = `${suhuC}°C x 9/5 + 32 = ${suhuF.toFixed(2)}°F`;
    this.blur();
});

document.getElementById('btn-reset').addEventListener('click', function() {
    document.getElementById('suhu').value = '';
    document.getElementById('Fahrenheit').value = '';
    document.getElementById('penjelasan').value = '';
    this.blur();
});

document.getElementById('btn-reverse').addEventListener('click', function() {
    const suhuF = parseFloat(document.getElementById('Fahrenheit').value);
    if (isNaN(suhuF)) {
        this.blur();
        alert('Masukkan suhu Fahrenheit yang valid!');
        return;
    }
    const suhuC = (suhuF - 32) * 5/9;
    document.getElementById('suhu').value = suhuC.toFixed(2);
    document.getElementById('penjelasan').value = `${suhuF}°F - 32 x 5/9 = ${suhuC.toFixed(2)}°C`;
    this.blur();
});

// Shortcut key handlers
document.getElementById('suhu').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('btn-konversi').click();
    }
    if (event.key === 'Escape') {
        event.preventDefault();
        document.getElementById('btn-reset').click();
    }
    if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
        document.getElementById('btn-reverse').click();
    }
});

