var agora = 8         /* var agora = new Date() forma de usar a hora do pc*/
console.log(`Agora são exatamente ${hora} horas`)     /*var hora =   agora.getHours() forma de usar a hora do pc*/

if (hora < 12 ) {
    console.log('Bom dia !!')
}   else if (hora >12 && hora <18 ) {  /*ou tmb da pra fazer assim : ...(hora <=18 )*/
        console.log('Boa tarde !')
}           else {
                console.log('Boa noite ! ')
}
