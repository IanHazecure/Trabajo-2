$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        // Rut: largo entre 9 y 10 caracteres
        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
            apellidoMaterno.length < 3 || apellidoMaterno.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        // Edad: Validación de edad 

        
        // Género: seleccionado
        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
    });
});

document.getElementById("loginBtn").addEventListener("click", function () {
    document.querySelector(".loginPopup").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.querySelector(".loginPopup").style.display = "none";
});


$(document).ready(function () {
    var currentSlide = 0;
    var images = ['https://nmrcdn.s3.amazonaws.com/assets/787/assets/responsive/297000/297000/web_cat.jpg',
        'https://live.staticflickr.com/2233/4218517831_7ecd5f876b.jpg',
        'https://www.guildinsurance.com.au/images/librariesprovider3/breed-images/500x500/tabby-(1)-(1).jpg?sfvrsn=b28f650b_2'];

    function changeSlide(next) {
        currentSlide = (currentSlide + (next ? 1 : images.length - 1)) % images.length;
        $('#carouselImg').attr('src', images[currentSlide]);
    }

    $('#prevBtn').click(function () {
        changeSlide(false);
    });

    $('#nextBtn').click(function () {
        changeSlide(true);
    });
});

