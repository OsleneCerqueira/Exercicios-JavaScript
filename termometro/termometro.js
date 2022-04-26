var termometro = parseInt(prompt("Digite a temperatura"))

if( termometro > 38){
    alert(`Com ${termometro}°C você está com febre`)
}
    else if( termometro <= 35){
        alert("Você está com hiportemia ")
    }
else{alert("Nada de febre")}