/*DIVONZI BARBOSA*/

var campo = [
    ['C','Dm','Em','F','G','Am','Bº'],
    ['C#','D#m','Fm','F#','G#','A#m','Cº'],

    ['D','Em','F#m','G','A','Bm','C#º'],
    ['D#','Fm','Gm','G#','A#','C','Dº'],

    ['E','F#m','G#m','A','B','C#m','D#º'],

    ['F','Gm','Am','Bb','C','Dm','Eº'],
    ['F#','G#m','A#m','B','C#','D#m','Fº'],

    ['G','Am','Bm','C','D','Em','A#º'],
    ['G#','A#m','Cm','C#','D#','Fm','Gº'],

    ['A','Bm','C#m','D','E','F#m','G#º'],
    ['A#','Cm','Dm','D#','E','F#m','G#º'],

    ['B','C#m','D#m','E','F#','G#m','A#º']
];

function grau() {
    x = Math.floor((Math.random()*7));
    while (x<=1) {
        x = Math.floor((Math.random()*7));
    }
    return x;
}

function tonica() {
    x = Math.floor((Math.random()*12));
    return x;
}

function gerarAlternativas(g,t) {
    var altern = document.getElementById("alternativas");
    var campos = [];
    
    if (t==11) {
        campos[0] = '<button onclick="responder(this.id);" id="'+campo[t-1][g]+'" class="btn">'+campo[t-1][g]+'</button>';
        campos[1] = '<button onclick="responder(this.id);" id="'+campo[t][g+1]+'" class="btn">'+campo[t][g+1]+'</button>';
        campos[2] = '<button onclick="responder(this.id);" id="'+campo[t][g-1]+'" class="btn">'+campo[t][g-1]+'</button>';
        campos[3] = '<button onclick="responder(this.id);" id="'+campo[t][g]+'" class="btn">'+campo[t][g]+'</button>';
    }else{
        campos[0] = '<button onclick="responder(this.id);" id="'+campo[t+1][g]+'" class="btn">'+campo[t+1][g]+'</button>';
        campos[1] = '<button onclick="responder(this.id);" id="'+campo[t][g+1]+'" class="btn">'+campo[t][g+1]+'</button>';
        campos[2] = '<button onclick="responder(this.id);" id="'+campo[t][g-1]+'" class="btn">'+campo[t][g-1]+'</button>';
        campos[3] = '<button onclick="responder(this.id);" id="'+campo[t][g]+'" class="btn">'+campo[t][g]+'</button>';
    }
    
    
    
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    
    shuffle(campos);
        
    for(var i=0;i<=3;i++){
        altern.innerHTML += campos[i];
    }
}

var resposta,alternativas;

function gerarPartida() {
    var txtAlternativas = document.getElementById("alternativas");
    var txtGrau = document.getElementById("grau");
    var txtTon = document.getElementById("tonica");
    var tons = 12; // de C até B temos 12 tons, contando com os sustenidos
    var g = grau();
    var t = tonica();
    var r = campo[t][g-1];
    txtAlternativas.innerHTML = "";
    txtGrau.innerHTML = g;
    txtTon.innerHTML = campo[t][0];
    resposta = r;
    gerarAlternativas(g-1,t);
}

function responder(res){
    txtAlternativa = document.getElementById(res);
    txtResultado = document.getElementById("resposta");
    txtResultado.style.visibility = "visible";
    txtResultado.innerHTML = "&nbsp;";
    if (res == resposta) {
        txtAlternativa.style.border = ".1em solid #42bc42";
        txtAlternativa.style.color = "#42bc42";
        txtResultado.style.color = "#42bc42";
        txtResultado.innerHTML = "CERTO!";
        setTimeout(function() {
            gerarPartida();
            txtResultado.innerHTML = "";
        }, 2000);
                
    }else{
        txtAlternativa.style.border = ".1em solid #c41111";
        txtAlternativa.style.color = "#c41111";
        txtResultado.style.color = "#c41111";
        txtResultado.innerHTML = "ERRADO!";
        setTimeout(function() {
            txtResultado.innerHTML = "&nbsp;";
        }, 1000);
    }
}