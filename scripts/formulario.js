
import { Validacion } from "./validacion.js";
//Instanciar objeto
const validacion = new Validacion();
const formulario = document.getElementById("form")
const btn = document.getElementById("btnSend");
//Objeto de validacion
const formValid ={
    nombre: false,
    mail: false,
    telefono: false,
    politica: false
}
//validacion
formulario.addEventListener("change", (e)=>{
    e.preventDefault
    const inputId = e.target.id;
    const miValue = e.target.value;
    const miClass = e.target.classList;
    const validClass = () =>{
        miClass.addEventListener("is-valid");
        miClass.remove("is-invalid");
    };
    const invalidClass = () =>{
        miClass.add("is-valid");
        miClass.remove("is-invalid");
    };

    switch(inputId){
        case "names" :
            formValid.name = validacion.validNames(miValue);
            formValid.name ? validClass() : invalidClass();
            console.log(object.values(formValid));
            break;
        case "mail" :
            formValid.mail =validacion.validMail(mivalue);
            formValid.mail ? validClass() : invalidClass();
            console.log(object.values(formValid));
            break;
        case "telefono":
            formValid.telefono = validacion.validPhone();
            formValid.telefono ? validClass() : invalidClass();
            console.log(object.values(formValid));
            break;
        case"checkPolitica" :
            if (e.target.checked) formValid.politica = true;
            else formValid.politica = false;
            console.log(object.values(formValid));
            break;
        }
})
//ENvio de formulario
btn.addEventListener("click", (e => {
    e.preventDefault();
    if (validacion.validarForm(formValid) === -1){
        alert("Enviando Formulario");
        let datos = new FormData(document.getElementById('form'));
        console.log(datos);
    }
}))