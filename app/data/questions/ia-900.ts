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
  {
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
  },
  {
    id: 12,
    description: `<p class="pt-0">Você tem um conjunto de dados que contém informações sobre viagens de táxi ocorridas durante um determinado período.</p>
                  <p class="pt-0">Você precisa treinar um modelo para prever a tarifa de uma viagem de táxi.</p>
                  <p class="pt-2">O que você deve usar como recurso?</p>`,
    answers: [
      {
        number: 1,
        description: "O número de viagens de táxi no conjunto de dados",
        correct: false
      },
      {
        number: 2,
        description: "A distância percorrida em viagens individuais de táxi",
        correct: true
      },
      {
        number: 3,
        description: "A tarifa de viagens individuais de táxi",
        correct: false
      },
      {
        number: 4,
        description: "O ID de viagem de viagens individuais de táxi",
        correct: false
      },
    ],
    expanation: "O rótulo é a coluna que você deseja prever. Os recursos identificados são as entradas que você fornece ao modelo para prever o rótulo.",
    reference: "https://docs.microsoft.com/en-us/dotnet/machine-learning/tutorials/predict-prices"
  },
  {
    id: 13,
    description: `<p class="pt-0">Você precisa prever o nível do mar em metros para os próximos 10 anos.</p>
                  <p class="pt-0">Que tipo de aprendizado de máquina você deve usar?</p>`,
    answers: [
      {
        number: 1,
        description: "Classificação",
        correct: false
      },
      {
        number: 2,
        description: "Regressão",
        correct: true
      },
      {
        number: 3,
        description: "Agrupamento",
        correct: false
      },
    ],
    expanation: `<p class="pt-0">No sentido mais básico, regressão refere-se à previsão de um alvo numérico.</p>
                <p class="pt-0">A regressão linear tenta estabelecer uma relação linear entre uma ou mais variáveis independentes e um resultado numérico ou variável dependente.</p>
                <p class="pt-0">Você usa este módulo para definir um método de regressão linear e, em seguida, treinar um modelo usando um conjunto de dados rotulado. O modelo treinado pode então ser usado para fazer previsões.</p>`,
    reference: "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression"
  },
  {
    id: 14,
    description: `<p class="pt-0">Qual serviço você deve usar para extrair texto, pares chave/valor e dados de tabela automaticamente de documentos digitalizados?</p>`,
    answers: [
      {
        number: 1,
        description: "Form Recognizer",
        correct: true
      },
      {
        number: 2,
        description: "Language Understanding (Compreensão de linguagem)",
        correct: false
      },
      {
        number: 3,
        description: "Visão Personalizada",
        correct: false
      },
    ],
    expanation: "Acelere seus processos de negócios automatizando a extração de informações. O Form Recogniser aplica aprendizado de máquina avançado para extrair com precisão texto, pares de chave/valor e tabelas de documentos. Com apenas alguns exemplos, o Form Recognizer adapta sua compreensão aos seus documentos, tanto no local quanto na nuvem. Transforme formulários em dados utilizáveis por uma fração do tempo e do custo, para que você possa dedicar mais tempo agindo nas informações em vez de compilá-las.",
    reference: "https://azure.microsoft.com/en-us/services/cognitive-services/form-recognizer/"
  },
  {
    id: 15,
    description: `<p class="pt-0">Você usa o designer do Azure Machine Learning para publicar um pipeline de inferência.</p>
                  <p class="pt-0">Quais são os dois parâmetros que você deve usar para acessar o serviço web?</p>`,
    answers: [
      {
        number: 1,
        description: "O nome do modelo e a chave de autenticação",
        correct: false
      },
      {
        number: 2,
        description: "•	O ponto final do treinamento e o ponto final REST",
        correct: false
      },
      {
        number: 3,
        description: "A chave de autenticação e o ponto final REST", 
        correct: true
      },
      {
        number: 4,
        description: "O nome do modelo e o ponto final REST",
        correct: false
      },
    ],
    expanation: `<p class="pt-2">Você pode consumir um pipeline publicado na página Pipelines publicados.</p>
                  <p class="pt-0">Selecione um pipeline publicado e encontre o endpoint REST dele.</p>
                  <p class="pt-0">Para consumir o pipeline, você precisa de:</p>
                  <p class="pt-0">✑ O ponto de extremidade REST do seu serviço</p>
                  <p class="pb-0">✑ A chave primária do seu serviço</p>`,
    reference: "https://docs.microsoft.com/en-in/learn/modules/create-regression-model-azure- designer de aprendizado de máquina/serviço de implantação"
  },
  {
    id: 16,
    description: `<p class="pt-0"></p>
                  <p class="pt-0"></p>
                  <p class="pt-2"></p>`,
    answers: [
      {
        number: 1,
        description: "",
        correct: false
      },
      {
        number: 2,
        description: "",
        correct: false
      },
      {
        number: 3,
        description: "",
        correct: false
      },
    ],
    expanation: "",
    reference: ""
  },
  {
    id: 17,
    description: `<p class="pt-0"></p>
                  <p class="pt-0"></p>
                  <p class="pt-2"></p>`,
    answers: [
      {
        number: 1,
        description: "",
        correct: false
      },
      {
        number: 2,
        description: "",
        correct: false
      },
      {
        number: 3,
        description: "",
        correct: false
      },
    ],
    expanation: "",
    reference: ""
  },
  {
    id: 18,
    description: `<p class="pt-0"></p>
                  <p class="pt-0"></p>
                  <p class="pt-2"></p>`,
    answers: [
      {
        number: 1,
        description: "",
        correct: false
      },
      {
        number: 2,
        description: "",
        correct: false
      },
      {
        number: 3,
        description: "",
        correct: false
      },
    ],
    expanation: "",
    reference: ""
  },
  {
    id: 19,
    description: `<p class="pt-0"></p>
                  <p class="pt-0"></p>
                  <p class="pt-2"></p>`,
    answers: [
      {
        number: 1,
        description: "",
        correct: false
      },
      {
        number: 2,
        description: "",
        correct: false
      },
      {
        number: 3,
        description: "",
        correct: false
      },
    ],
    expanation: "",
    reference: ""
  },
  {
    id: 20,
    description: `<p class="pt-0"></p>
                  <p class="pt-0"></p>
                  <p class="pt-2"></p>`,
    answers: [
      {
        number: 1,
        description: "",
        correct: false
      },
      {
        number: 2,
        description: "",
        correct: false
      },
      {
        number: 3,
        description: "",
        correct: false
      },
    ],
    expanation: "",
    reference: ""
  },
]