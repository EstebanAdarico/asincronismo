//funcion que será llamada por la función exam 
// es un callback 
const mensse = function(){
    console.log(`el mensaje funcionó`)
}
//probando el segundo codigo para ver que la posición y el tipo de función 
//no influyen en el llamado del callaback (solo debemos cambiar la forma de la inicializacion)
function mensee2 (){
    console.log(`El segundo mensaje`)
}

const exam = function(callback){
    callback()
}
exam(mensee2);

const pri =()=>{
    console.log(`El primer mensaje `)
};
const seg =()=>{
    console.log(`Esto es un error gravisimo`)
};
const llamada =(constone,consttwo)=>{
    const R = Math.floor(Math.random() * 5);
    console.log(R);
    if (R > 1 ) constone();
    else consttwo();
}
llamada(pri,seg);

(function (nam){
    console.log(`hola ${nam}`);
})
console.log(`hola `);



(`esteban Gonzalo puma`)
