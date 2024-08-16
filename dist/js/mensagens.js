// Lista de mensagens desmotivadoras
const mensagens = [
      "Hoje é o dia perfeito para não fazer nada",
      "O sucesso é só para quem tem sorte, então, boa sorte",
      "Não espere muito de você mesmo, assim evita decepções",
      "Se tá difícil, pode piorar",
      "O caminho para o fracasso é sempre mais curto",
      "A esperança é a última que morre, mas morre",
      "Sonhos são feitos para serem esquecidos",
      "Nada como um dia pior que o outro",
      "Tentar é o primeiro passo para o fracasso",
      "Nem sempre o esforço vale a pena",
      "A luz no fim do túnel pode ser só um vagalume",
      "A única certeza é a incerteza",
      "A vida é uma sequência de desilusões",
      "Não espere nada e você ainda pode se decepcionar",
      "Nem sempre o amanhã é melhor",
      "Tudo pode sempre piorar",
      "Acredite: desistir é uma opção",
      "Os melhores planos geralmente dão errado",
      "Hoje pode não ser o seu dia, mas amanhã também não",
      "Seja mediano, é mais fácil",
      "O importante é não se destacar",
      "Quanto mais alto, maior a queda",
      "Nem todo esforço é recompensado",
      "O sucesso alheio é só para te lembrar do seu fracasso",
      "Às vezes, não fazer nada é o melhor a se fazer",
      "Lembre-se: quem não arrisca não se frustra",
      "O que está ruim sempre pode piorar",
      "Seja realista: o fracasso é sempre uma opção",
      "O mundo não gira ao seu favor",
      "O melhor da vida é a ilusão de que pode melhorar",
      "Cada dia é uma nova chance de se decepcionar",
      "A felicidade é apenas uma pausa entre dois problemas",
      "A vida é curta, então não se apresse",
      "O que você faz hoje provavelmente não vai importar amanhã",
      "Quem espera, cansa",
      "O sucesso é a exceção, não a regra",
      "Ninguém se importa com seus problemas",
      "O que não te mata te deixa mais cínico",
      "No final, nada realmente importa",
      "É sempre mais fácil desistir",
      "Todo esforço pode ser em vão",
      "Não espere o melhor, se contente com o possível",
      "Nem sempre é possível fazer o seu melhor, então faça o mínimo",
      "Nem todo sonho merece ser perseguido",
      "A maior mentira que te contaram foi que você é especial",
      "A realidade é sempre menos interessante que a fantasia",
      "Você não precisa vencer, só precisa sobreviver",
      "O fracasso é inevitável",
      "Às vezes, o caminho mais fácil é o mais certo",
      "Acredite: o pior ainda está por vir"
];


function mostrarMensagemDoDia() {
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    document.getElementById('message').innerText = "\"" + mensagens[diaDoAno % mensagens.length] + "\"";
}

// Executa a função quando o documento é carregado
document.addEventListener('DOMContentLoaded', mostrarMensagemDoDia);