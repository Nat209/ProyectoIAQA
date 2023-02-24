import { Validacion } from "./Validate.js";
//Instanciar objeto
const validacion = new Validacion();
const formulario = document.getElementById("form")
const btn = document.getElementById("btnSend");
//Objeto de validacion
const formValid ={
    nombres: false,
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
        miClass.add("is-valid");
        miClass.remove("is-invalid");
    };
    const invalidClass = () =>{
        miClass.add("is-invalid");
        miClass.remove("is-valid");
    };

    switch(inputId){
        case "nombres" :
            formValid.nombres = validacion.validNames(miValue);
            formValid.nombres ? validClass() : invalidClass();
            console.log(Object.values(formValid));
            break;
        case "mail" :
            formValid.mail =validacion.validMail(miValue);
            formValid.mail ? validClass() : invalidClass();
            console.log(Object.values(formValid));
            break;
        case "telefono":
            formValid.telefono = validacion.validPhone(miValue);
            formValid.telefono ? validClass() : invalidClass();
            console.log(Object.values(formValid));
            break;
        case"politica" :
            if (e.target.checked) formValid.politica = true;
            else formValid.politica = false;
            console.log(Object.values(formValid));
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