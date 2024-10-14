export const questions_ia_900 = [
  {
    id: 1,
    description: `<p class="pt-0">Uma empresa emprega uma equipe de agentes de atendimento ao cliente para fornecer suporte por telefone e e-mail aos clientes.</p>
                    <p class="pt-2">A empresa desenvolve um bot de webchat para fornecer respostas automatizadas a dúvidas comuns dos clientes.</p>
                    <p class="pt-2">Qual benefício comercial a empresa deve esperar como resultado da criação da solução de webchat bot?</p>`,
    answers: [
      {
        number: 1,
        description: "Aumento nas vendas",
        correct: false
      },
      {
        number: 2,
        description: "Uma carga de trabalho reduzida para os agentes de atendimento ao cliente",
        correct: true
      },
      {
        number: 3,
        description: "Maior confiabilidade do produto",
        correct: false
      },
    ],
    expanation: "Se a resposta for dada automaticamente pelo chat bot, reduzirá a carga de trabalho do agente.",
    reference: "https://azure.microsoft.com/pt-br/products/ai-services/ai-bot-service"
  },
  {
    id: 2,
    description: `<p class="pt-0">Você cria um modelo de aprendizado de máquina usando a interface do usuário (IU) de aprendizado de máquina automatizado.</p>
                    <p class="pt-2">Você precisa garantir que o modelo atenda ao princípio de transparência da Microsoft para IA responsável.</p>
                    <p class="pt-2">O que você deveria fazer?</p>`,
    answers: [
      {
        number: 1,
        description: "Defina o tipo de validação como automático",
        correct: false
      },
      {
        number: 2,
        description: "Habilite Explicar o melhor modelo",
        correct: true
      },
      {
        number: 3,
        description: "Defina a métrica primária como precisão",
        correct: false
      },
      {
        number: 4,
        description: "Defina o máximo de iterações simultâneas",
        correct: false
      },
    ],
    expanation: "Capacidade de explicação do modelo. A maioria das empresas funciona com base na confiança e ser capaz de abrir a “caixa preta” do ML ajuda a construir transparência e confiança. Em setores fortemente regulamentados, como saúde e bancos, é fundamental cumprir os regulamentos e as melhores práticas. Um aspecto importante disso é compreender a relação entre variáveis de entrada (recursos) e saída do modelo. Conhecer a magnitude e a direção do impacto que cada recurso (importância do recurso) tem no valor previsto ajuda a compreender e explicar melhor o modelo. Com a capacidade de explicação do modelo, permitimos que você entenda a importância dos recursos como parte de execuções automatizadas de ML.",
    reference: "https://azure.microsoft.com/en-us/blog/new-automated-machine-learning-capabilities-in-azure-machine-learning-service/"
  },
  {
    id: 3,
    description: `<p class="pt-0">Marque a opção correta:</p>`,
    answers: [
      {
        number: 1,
        description: "A previsão dos preços da habitação com base em dados históricos é um exemplo de detecção de anomalias.",
        correct: false
      },
      {
        number: 2,
        description: "Identificar entradas suspeitas procurando desvios dos padrões habituais é um exemplo de detecção de anomalias.",
        correct: true
      },
      {
        number: 3,
        description: "Prever se um paciente desenvolverá diabetes com base na história médica é um exemplo de detecção de anomalias.",
        correct: false
      },
    ],
    expanation: "A detecção de anomalias abrange muitas tarefas importantes no aprendizado de máquina: Identificar transações que são potencialmente fraudulentas. Padrões de aprendizagem que indicam que ocorreu uma intrusão na rede. Encontrar grupos anormais de pacientes. Verificação de valores inseridos em um sistema.",
    reference: "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/anomaly-detection"
  },
  {
    id: 4,
    description: `<p class="pt-0">Completa a frase:</p>
                  <p class="pt-0">"A ocorrência de valores incomuns ou ausentes fornecidos a um sistema é uma consideração para o princípio _________ da Microsoft para IA responsável."</p>`,
    answers: [
      {
        number: 1,
        description: "Privacidade e segurança",
        correct: false
      },
      {
        number: 2,
        description: "Confiabilidade e segurança",
        correct: true
      },
      {
        number: 3,
        description: "Transparência",
        correct: false
      },
    ],
    expanation: "A Microsoft desenvolveu um Padrão de IA Responsável. É uma estrutura para a criação de sistemas de IA de acordo com seis princípios: imparcialidade, confiabilidade e segurança, privacidade e segurança, inclusão, transparência e responsabilidade.",
    reference: "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai?view=azureml-api-2"
  },
  {
    id: 5,
    description: `<p class="pt-0">Você está projetando um sistema de IA que capacita todos, incluindo pessoas com deficiência auditiva, visual e outras deficiências.</p>
                <p class="pt-0">Este é um exemplo de qual princípio orientador da Microsoft para IA responsável?</p>`,
    answers: [
      {
        number: 1,
        description: "Justiça",
        correct: false
      },
      {
        number: 2,
        description: "Inclusão",
        correct: true
      },
      {
        number: 3,
        description: "Confiabilidade e segurança",
        correct: false
      },
      {
        number: 4,
        description: "Responsabilidade",
        correct: false
      },
    ],
    expanation: "Inclusão – os sistemas de IA da Microsoft devem capacitar e envolver comunidades no mundo todo e, para fazer isso, fazemos parcerias com comunidades minoritárias carentes para planejar, testar e criar sistemas de IA.",
    reference: "https://support.microsoft.com/pt-br/topic/o-que-%C3%A9-a-ia-respons%C3%A1vel-33fc14be-15ea-4c2c-903b-aa493f5b8d92#:~:text=Inclus%C3%A3o%20%E2%80%93%20os%20sistemas%20de%20IA,e%20criar%20sistemas%20de%20IA."
  },
  {
    id: 6,
    description: `<p class="pt-0">Você está construindo um sistema de IA.</p>
                  <p class="pt-0">Qual tarefa você deve incluir para garantir que o serviço atenda ao princípio de transparência da Microsoft para IA responsável?</p>`,
    answers: [
      {
        number: 1,
        description: "Certifique-se de que todos os recursos visuais tenham um texto associado que possa ser lido por um leitor de tela.",
        correct: false
      },
      {
        number: 2,
        description: "Habilite o escalonamento automático para garantir que um serviço seja dimensionado com base na demanda.",
        correct: false
      },
      {
        number: 3,
        description: "Fornece documentação para ajudar os desenvolvedores a depurar o código.",
        correct: true
      },
      {
        number: 4,
        description: "Garantir que um conjunto de dados de treinamento seja representativo da população.",
        correct: false
      },
    ],
    expanation: "Alcançar transparência ajuda a equipe a entender os dados e algoritmos usados para treinar o modelo, qual lógica de transformação foi aplicada aos dados, o modelo final gerado e seus ativos associados. Essas informações oferecem insights sobre como o modelo foi criado, o que permite que ele seja reproduzido de forma transparente. Os instantâneos nos espaços de trabalho do Azure Machine Learning apoiam a transparência, registando ou retreinando todos os ativos e métricas relacionados com a formação envolvidos na experiência.",
    reference: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#transparency"
  },
  {
    id: 7,
    description: `<p class="pt-0">Quais dos princípios abaixo são orientadores da Microsoft para uma IA responsável?</p>`,
    answers: [
      {
        number: 1,
        description: "Determinação, Solução e Classificação",
        correct: false
      },
      {
        number: 2,
        description: "Correlação, Detecção e Governança",
        correct: false
      },
      {
        number: 3,
        description: "Inclusão, Justiça, Confiabilidade e Segurança",
        correct: true
      },
    ],
    expanation: `<p class="pb-2">Os seis princípios orientadores são:</p>
    <p class="pt-0">1. Justiça</p>
    <p class="pt-0">2. Inclusão</p>
    <p class="pt-0">3. Transparência</p>
    <p class="pt-0">4. Privacidade e Segurança</p>
    <p class="pt-0">5. Confiabilidade e Segurança</p>
    <p class="pt-0">6. Responsabilidade</p>`,
    reference: ""
  },
  {
    id: 8,
    description: `<p class="pt-0">Você organiza um evento de caridade que envolve a postagem de fotos de pessoas usando óculos escuros no Twitter.</p>
                  <p class="pt-0">Você precisa garantir que retweetará apenas fotos que atendam aos seguintes requisitos:</p>
                  <p class="pt-2">✑ Incluir um ou mais rostos.</p>
                  <p class="pt-0">✑ Conter pelo menos uma pessoa usando óculos escuros.</p>
                  <p class="pt-2">O que você deve usar para analisar as imagens?</p>`,
    answers: [
      {
        number: 1,
        description: "A operação Verify no serviço Face",
        correct: false
      },
      {
        number: 2,
        description: "A operação Detectar no serviço Face",
        correct: true
      },
      {
        number: 3,
        description: "A operação Descrever Imagem no serviço Visão Computacional",
        correct: false
      },
      {
        number: 4,
        description: "A operação Analisar Imagem no serviço Visão Computacional",
        correct: false
      },
    ],
    expanation: "A detecção de rosto (Face) pode ser solicitada para detectar também o atributo de óculos.",
    reference: "https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview"
  },
  {
    id: 9,
    description: `<p class="pt-0">Quando se concebe um sistema de IA para avaliar se os empréstimos devem ser aprovados, os factores utilizados para tomar a decisão devem ser explicáveis.</p>
                  <p class="pt-2">Este é um exemplo de qual princípio orientador da Microsoft para IA responsável?</p>`,
    answers: [
      {
        number: 1,
        description: "Transparência",
        correct: true
      },
      {
        number: 2,
        description: "Inclusão",
        correct: false
      },
      {
        number: 3,
        description: "Justiça",
        correct: false
      },
      {
        number: 4,
        description: "Privacidade e segurança",
        correct: false
      },
    ],
    expanation: "Alcançar a transparência ajuda a equipe a entender os dados e algoritmos usados ​​para treinar o modelo, qual lógica de transformação foi aplicada aos dados, o modelo final gerado e seus ativos associados. Essas informações oferecem insights sobre como o modelo foi criado, o que permite que ele seja reproduzido de forma transparente.",
    reference: "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai https://docs.microsoft.com/en-us/azure/cloud -adoção-estrutura/estratégia/responsável-ai"
  },
  {
    id: 10,
    description: `<p class="pt-0">Você está construindo um aplicativo baseado em IA.</p>
                  <p class="pt-0">Você precisa garantir que o aplicativo use os princípios de IA responsável.</p>
                  <p class="pt-2">Quais das ações abaixo representa um princípio que você deve seguir?</p>`,
    answers: [
      {
        number: 1,
        description: "Implementar uma metodologia ágil de desenvolvimento de software",
        correct: false
      },
      {
        number: 2,
        description: "Impedir a divulgação do uso de algoritmos baseados em IA para tomada de decisão automatizada",
        correct: false
      },
      {
        number: 3,
        description: "Implementar um processo de validação do modelo de IA como parte do processo de revisão de software",
        correct: true
      },
    ],
    expanation: "Implementar um process de validação do modelo de IA garante o princípio de confiabilidade e segurança",
    reference: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#reliability-and-safety"
  },
  /* {
    id: 11,
    description: `<p class="pt-0">Você está construindo um aplicativo baseado em IA.</p>
                  <p class="pt-0">Você precisa garantir que o aplicativo use os princípios de IA responsável.</p>
                  <p class="pt-2">Quais das ações abaixo representa um princípio que você deve seguir?</p>`,
    answers: [
      {
        number: 1,
        description: "Estabelecer um comitê de governança de risco que inclua membros da equipe jurídica, membros da equipe de gestão de risco e um responsável pela privacidade",
        correct: true
      },
      {
        number: 2,
        description: "Impedir a divulgação do uso de algoritmos baseados em IA para tomada de decisão automatizada",
        correct: false
      },
      {
        number: 3,
        description: "Implementar uma metodologia ágil de desenvolvimento de software",
        correct: false
      },
    ],
    expanation: "Estabelecer um comitê de governança de risco garante o princípio de privacidade e segurança",
    reference: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#reliability-and-safety"
  }, */
]