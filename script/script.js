// JavaScript code for search functionality
document.querySelector('button').addEventListener('click', function() {
    var inputValue = document.querySelector('input').value;
    var resultados = document.querySelectorAll('.item-resultado');

    resultados.forEach(function(resultado) {
        var titulo = resultado.querySelector('h2').textContent;
        if (titulo.toLowerCase().includes(inputValue.toLowerCase())) {
            resultado.style.display = 'block';
        } else {
            resultado.style.display = 'none';
        }
    });
});