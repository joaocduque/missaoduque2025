const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-resultado");
const caixaReultado = document.querySelector(".texto-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "quantos gols o Yuri Alberto fez com a camisa do Corinthians?",
        alternativas: [
            {
                texto:"68 gols",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"72 gols",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Qual jogador do Corinthians fez na final do mundial de clubes 2012?",
        alternativas: [
            {
                texto:"Paolo Guerrero",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Romarinho",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Que ano que o Corinthians ganhou a libertadores?",
        alternativas: [
            {
                texto:"2012",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"2013",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Qual time que o Corinthians venceu na Final do mundial?",
        alternativas: [
            {
                texto:"Chelsea",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Barcelona",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quantos titulos o Cássio tem pelo Corinthians?",
        alternativas: [
            {
                texto:"9 títulos",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"12 títulos",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]

let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixasAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa o perguntaAtual.alternativa){
        const botaoAlternativa=document.createElement("buttom");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventlistener("click,"() => respostaSelecionada(alternativa);
        caixaAlternativas.appendChild(botaoAlternativas);

    }

}