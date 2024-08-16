// Lista de mensagens desmotivadoras
const mensagens = [
      "Hoje é o dia perfeito para não fazer nada",
      "O sucesso é só para quem tem sorte, então, boa sorte",
      "Não espere muito de você mesmo",
      "Se tá difícil, vai piorar",
      "O caminho para o seu fracasso é acreditar que você pode",
      "A esperança é a última que morre, mas morre",
      "Sonhos são feitos para serem esquecidos",
      "Nada como um dia pior que o outro",
      "Tentar é o primeiro passo para o fracasso",
      "Nem sempre o esforço vale a pena",
      "A luz no fim do túnel pode não ser pra você",
      "A única certeza é a incerteza",
      "A vida é uma sequência de desilusões",
      "Não espere nada e você vai se decepcionar",
      "O amanhã não vai ser melhor",
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
      "Seja realista: o seu fracasso é sempre uma opção",
      "O mundo não gira ao seu favor, e nem vai",
      "O melhor da vida é a ilusão de que pode melhorar",
      "Cada dia é uma nova chance de fracassar, seu fracassado",
      "A felicidade é apenas uma pausa entre dois problemas",
      "A vida é curta, então não se apresse",
      "O que você faz hoje provavelmente não vai importar amanhã",
      "Quem espera, cansa",
      "O sucesso é a exceção, não a regra",
      "Ninguém se importa com seus problemas",
      "O que não te mata te deixa mais cínico",
      "É sempre mais fácil desistir",
      "Todo esforço pode ser em vão",
      "Não espere o melhor, se contente com o possível",
      "Seu sonho não pode ser alcançado",
      "A maior mentira que te contaram foi que você é especial",
      "Você não precisa vencer, porque você não vai",
      "O seu fracasso é inevitável",
      "Às vezes, o caminho mais fácil é o que você não fez",
      "Acredite: o pior ainda está por vir"
];


function mostrarMensagemDoDia() {
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    document.getElementById('message').innerText = "\"" + mensagens[diaDoAno % mensagens.length] + "\"";
}

// Executa a função quando o documento é carregado
document.addEventListener('DOMContentLoaded', mostrarMensagemDoDia);