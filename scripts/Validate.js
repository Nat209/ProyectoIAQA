'use strict';

class Validacion{

    /*Constructor: da valores iniciales a los atributos de un onbjeto*/ 
    constructor(){};

    inputValid(input,regeX){
        return input.match(regex) ? true: false;
    };
    

    validNames(cad){
        const nameRX =/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const response = this.input(cad,nombresRX);
        return response;        
    }
    validMail(cad){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const response = this.inputValid(cad,mailRX);
        return response;
    }
    validTelefono(cad){
        const telefonoRX = /^\(?(\ d{3}) \)? [-] ? (\ d {3}) [-]? (\ d {4}) $ /g;
        const response = this.inputValid(cad,mailRX);
        return response;
    }
    validarForm =(Object)=>{
        const valores = Object.values(object);
        let resp = valores.findIndex( e => e === false);
        return resp;
    
    }
}

export{Validacion};