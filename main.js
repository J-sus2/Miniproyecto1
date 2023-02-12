const buttonexperience = document.getElementById("Experience");
const buttonaboutme = document.getElementById("about-me");
const buttonskills = document.getElementById("skills");
const buttoncontactme = document.getElementById("contact-me");
const showinputs = document.getElementById("main");

buttonaboutme.addEventListener("click", () => {
    showinputs.innerHTML += 
    '<img src=""C:\Users\jesus alejandro\Pictures\Saved Pictures\foto de Jesus.jpg"" alt="Imagen de Jesus">' +
    '<p>Mi nombre es Jesus Alejandro Perez Arrechedera. <br>' +
    'Estoy estudiando en la Universidad Metropolitana. <br>' +
    'Mis objetivos a corto plazo son graduarme de la Universidad. <br>' +
    'Mis objetivos a largo plazo son estudiar y trabajar como un desarrolardor de videojuegos. <br>' +
    'Mis gustos y pasatiempos favortios son escuchar musica, jugar videojuegos, y salir afuera a caminar.</p>';
});


buttonexperience.addEventListener("click", () => {
    showinputs.innerHTML += 
    '<h2>Mis proyectos</h2> <br>' +
    '<section>' +
        '<h3>Robot NXT Basico-Carrito</h3> <br>' +
        '<h4>Fecha de ejecucion: 2015</h4> <br>' +
        '<h4>Tecnologia utilizada: Lego Mindstorms NXT</h4> <br>' +
        '<img src="http://codigo21.educacion.navarra.es/wp-content/uploads/2015/09/montaje_lego_nxt_01.jpg" alt="Robot NXT Basico-Carrito (Imagen)"> <br>' +
    '</section>' +
    '<br>' +
    '<section>' +
        '<h3>Robot NXT Basico-Araña</h3> <br>' +
        '<h4>Fecha de ejecucion: 2015</h4> <br> ' +
        '<h4>Tecnologia utilizada: Lego Mindstorms NXT</h4> <br>' +
        '<img src="https://nxtprograms.com/spider/DCP_7536.JPG" alt="Robot NXT Basico-Araña (Imagen)"> <br>' + 
    '</section>' +
    '<br>' +
    '<section>' +
        '<h3>Robot NXT Basico-Brazo Robotico</h3> <br>' +
        '<h4>Fecha de ejecucion: 2016</h4> <br>' +
        '<h4>Tecnologia utilizada: Lego Mindstorms NXT</h4> <br>' +
        '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeA93R6ONNSYcvLh6jzChtmqOupHQ5BI8FmQ&usqp=CAU" alt="Robot NXT Basico-Brazo Robotico (Imagen)"> <br>' +
        '<a href="https://education.lego.com/en-us/product-resources/mindstorms-ev3/downloads/whats-in-the-box" target="_blank">Link a la pagina de Lego Mindstorms NXT</a>' +
    '</section>' 
});
