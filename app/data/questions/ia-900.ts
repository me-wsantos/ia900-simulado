export const questions_ia_900 = [
/*   {
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
    explanation: "Se a resposta for dada automaticamente pelo chat bot, reduzirá a carga de trabalho do agente.",
    reference: ["https://azure.microsoft.com/pt-br/products/ai-services/ai-bot-service"],
    image: "",
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
    explanation: "Capacidade de explicação do modelo. A maioria das empresas funciona com base na confiança e ser capaz de abrir a “caixa preta” do ML ajuda a construir transparência e confiança. Em setores fortemente regulamentados, como saúde e bancos, é fundamental cumprir os regulamentos e as melhores práticas. Um aspecto importante disso é compreender a relação entre variáveis de entrada (recursos) e saída do modelo. Conhecer a magnitude e a direção do impacto que cada recurso (importância do recurso) tem no valor previsto ajuda a compreender e explicar melhor o modelo. Com a capacidade de explicação do modelo, permitimos que você entenda a importância dos recursos como parte de execuções automatizadas de ML.",
    reference: ["https://azure.microsoft.com/en-us/blog/new-automated-machine-learning-capabilities-in-azure-machine-learning-service/"],
    image: "",
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
    explanation: "A detecção de anomalias abrange muitas tarefas importantes no aprendizado de máquina: Identificar transações que são potencialmente fraudulentas. Padrões de aprendizagem que indicam que ocorreu uma intrusão na rede. Encontrar grupos anormais de pacientes. Verificação de valores inseridos em um sistema.",
    reference: ["https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/anomaly-detection"],
    image: "",
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
    explanation: "A Microsoft desenvolveu um Padrão de IA Responsável. É uma estrutura para a criação de sistemas de IA de acordo com seis princípios: imparcialidade, confiabilidade e segurança, privacidade e segurança, inclusão, transparência e responsabilidade.",
    reference: ["https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai?view=azureml-api-2"],
    image: "",
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
    explanation: "Inclusão – os sistemas de IA da Microsoft devem capacitar e envolver comunidades no mundo todo e, para fazer isso, fazemos parcerias com comunidades minoritárias carentes para planejar, testar e criar sistemas de IA.",
    reference: ["https://support.microsoft.com/pt-br/topic/o-que-%C3%A9-a-ia-respons%C3%A1vel-33fc14be-15ea-4c2c-903b-aa493f5b8d92#:~:text=Inclus%C3%A3o%20%E2%80%93%20os%20sistemas%20de%20IA,e%20criar%20sistemas%20de%20IA."],
    image: "",
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
    explanation: "Alcançar transparência ajuda a equipe a entender os dados e algoritmos usados para treinar o modelo, qual lógica de transformação foi aplicada aos dados, o modelo final gerado e seus ativos associados. Essas informações oferecem insights sobre como o modelo foi criado, o que permite que ele seja reproduzido de forma transparente. Os instantâneos nos espaços de trabalho do Azure Machine Learning apoiam a transparência, registando ou retreinando todos os ativos e métricas relacionados com a formação envolvidos na experiência.",
    reference: ["https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#transparency"],
    image: "",
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
    explanation: `<p class="pb-2">Os seis princípios orientadores são:</p>
    <p class="pt-0">1. Justiça</p>
    <p class="pt-0">2. Inclusão</p>
    <p class="pt-0">3. Transparência</p>
    <p class="pt-0">4. Privacidade e Segurança</p>
    <p class="pt-0">5. Confiabilidade e Segurança</p>
    <p class="pt-0">6. Responsabilidade</p>`,
    reference: [],
    image: "",
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
    explanation: "A detecção de rosto (Face) pode ser solicitada para detectar também o atributo de óculos.",
    reference: ["https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview"],
    image: "",
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
    explanation: "Alcançar a transparência ajuda a equipe a entender os dados e algoritmos usados ​​para treinar o modelo, qual lógica de transformação foi aplicada aos dados, o modelo final gerado e seus ativos associados. Essas informações oferecem insights sobre como o modelo foi criado, o que permite que ele seja reproduzido de forma transparente.",
    reference: ["https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai"],
    image: "",
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
    explanation: "Implementar um process de validação do modelo de IA garante o princípio de confiabilidade e segurança",
    reference: ["https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#reliability-and-safety"],
    image: "",
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
    explanation: "Estabelecer um comitê de governança de risco garante o princípio de privacidade e segurança",
    reference: ["https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#reliability-and-safety"],
    image: "",
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
    explanation: "O rótulo é a coluna que você deseja prever. Os recursos identificados são as entradas que você fornece ao modelo para prever o rótulo.",
    reference: ["https://docs.microsoft.com/en-us/dotnet/machine-learning/tutorials/predict-prices"],
    image: "",
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
    explanation: `<p class="pt-0">No sentido mais básico, regressão refere-se à previsão de um alvo numérico.</p>
                <p class="pt-0">A regressão linear tenta estabelecer uma relação linear entre uma ou mais variáveis independentes e um resultado numérico ou variável dependente.</p>
                <p class="pt-0">Você usa este módulo para definir um método de regressão linear e, em seguida, treinar um modelo usando um conjunto de dados rotulado. O modelo treinado pode então ser usado para fazer previsões.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression"],
    image: "",
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
    explanation: "Acelere seus processos de negócios automatizando a extração de informações. O Form Recogniser aplica aprendizado de máquina avançado para extrair com precisão texto, pares de chave/valor e tabelas de documentos. Com apenas alguns exemplos, o Form Recognizer adapta sua compreensão aos seus documentos, tanto no local quanto na nuvem. Transforme formulários em dados utilizáveis por uma fração do tempo e do custo, para que você possa dedicar mais tempo agindo nas informações em vez de compilá-las.",
    reference: ["https://azure.microsoft.com/en-us/services/cognitive-services/form-recognizer/"],
    image: "",
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
    explanation: `<p class="pt-2">Você pode consumir um pipeline publicado na página Pipelines publicados.</p>
                  <p class="pt-0">Selecione um pipeline publicado e encontre o endpoint REST dele.</p>
                  <p class="pt-0">Para consumir o pipeline, você precisa de:</p>
                  <p class="pt-0">✑ O ponto de extremidade REST do seu serviço</p>
                  <p class="pb-0">✑ A chave primária do seu serviço</p>`,
    reference: ["https://docs.microsoft.com/en-in/learn/modules/create-regression-model-azure- designer de aprendizado de máquina/serviço de implantação"],
    image: "",
  },
  {
    id: 16,
    description: `<p class="pt-0">Um projeto de pesquisa médica usa um grande conjunto de dados anônimos de imagens de tomografia cerebral categorizadas em tipos de hemorragia cerebral predefinidos.</p>
                  <p class="pt-0">Você precisa usar o aprendizado de máquina para apoiar a detecção precoce dos diferentes tipos de hemorragia cerebral nas imagens antes que as imagens sejam revisadas por uma pessoa.</p>
                  <p class="pt-2">Este é um exemplo de que tipo de aprendizado de máquina?</p>`,
    answers: [
      {
        number: 1,
        description: "Agrupamento",
        correct: false
      },
      {
        number: 2,
        description: "Regressão",
        correct: false
      },
      {
        number: 3,
        description: "Classificação",
        correct: true
      },
    ],
    explanation: "Embora ambas as técnicas tenham certas semelhanças, a diferença reside no fato de que a classificação utiliza classes predefinidas nas quais os objetos são atribuídos, enquanto o agrupamento identifica semelhanças entre objetos, que agrupa de acordo com as características em comum e que os diferenciam de outros.",
    reference: ["https://docs.microsoft.com/en-us/learn/modules/create-classification-model-azure-machine-learning-designer/introduction"],
    image: "",
  },
  {
    id: 17,
    description: `<p class="pt-0">Ao treinar um modelo, por que você deveria dividir aleatoriamente as linhas em subconjuntos separados?</p>`,
    answers: [
      {
        number: 1,
        description: "Treinar o modelo duas vezes para obter melhor precisão",
        correct: false
      },
      {
        number: 2,
        description: "Treinar vários modelos simultaneamente para obter melhor desempenho",
        correct: false
      },
      {
        number: 3,
        description: "Testar o modelo usando dados que não foram usados para treinar o modelo",
        correct: true
      },
    ],
    explanation: "Você perde poder estatístico ao estimar em um subconjunto n como 50% do N original. Esse é o preço que você paga pela divisão dos dados. Por exemplo, um x normalmente distribuído de forma independente (nid) tem um estimador de média aritmética X cuja variância é inversamente relacionada a N. Uma amostra maior é melhor para a precisão de uma média aritmética simples.",
    reference: ["https://learn.microsoft.com/en-us/azure/machine-learning/component-reference/split-data?view=azureml-api-2"],
    image: "",
  },
  {
    id: 18,
    description: `<p class="pt-0">Você está construindo uma ferramenta que processará imagens de lojas de varejo e identificará os produtos dos concorrentes.</p>
                  <p class="pt-0">A solução usará um modelo customizado.</p>
                  <p class="pt-2">Qual serviço dos Serviços Cognitivos do Azure você deve usar?</p>`,
    answers: [
      {
        number: 1,
        description: "Visão Personalizada (Custom Vision)",
        correct: true
      },
      {
        number: 2,
        description: "Visão Computacional",
        correct: false
      },
      {
        number: 3,
        description: "Face",
        correct: false
      },
    ],
    explanation: "O Azure Custom Vision é um serviço de reconhecimento de imagem que permite criar, implantar e melhorar seus próprios modelos de identificador de imagem. Um identificador de imagem aplica rótulos (que representam classificações ou objetos) às imagens, de acordo com suas características visuais detectadas. Ao contrário do serviço de Visão Computacional, a Visão Personalizada permite-lhe especificar os seus próprios rótulos e treinar modelos personalizados para os detetar.",
    reference: ["https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/overview"],
    image: "",
  },
  {
    id: 19,
    description: `<p class="pt-0">Quais são as duas métricas que você pode usar para avaliar um modelo de regressão?</p>`,
    answers: [
      {
        number: 1,
        description: "Coeficiente de determinação (R2) e F1 score",
        correct: false
      },
      {
        number: 2,
        description: "F1 score e Raiz do erro quadrático médio (RMSE)",
        correct: false
      },
      {
        number: 3,
        description: "Coeficiente de determinação (R2) e Raiz do erro quadrático médio (RMSE)",
        correct: true
      },
    ],
    explanation: `<p class="pt-0">R-quadrado (R2), ou Coeficiente de determinação representa o poder preditivo do modelo como um valor entre -inf e 1,00. 1,00 significa que há um ajuste perfeito e que o ajuste pode ser arbitrariamente ruim, de modo que as pontuações podem ser negativas.</p>
                <p class="pt-2">Perda RMS ou Root Mean Squared Error (RMSE) (também chamado Root Mean Square Deviation, RMSD), mede a diferença entre os valores previstos por um modelo e os valores observados no ambiente que está sendo modelado.</p>`,
    reference: ["https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/metrics"],
    image: "",
  },
  {
    id: 20,
    description: `<p class="pt-0">Que tipo de aprendizado de máquina você deve usar para identificar grupos de pessoas que têm hábitos de compra semelhantes?</p>`,
    answers: [
      {
        number: 1,
        description: "Classificação",
        correct: false
      },
      {
        number: 2,
        description: "Regressão",
        correct: false
      },
      {
        number: 3,
        description: "Agrupamento (Clustering)",
        correct: true
      },
    ],
    explanation: "Clustering é uma tarefa de aprendizado de máquina usada para agrupar instâncias de dados em clusters que contêm características semelhantes. O clustering também pode ser usado para identificar relacionamentos em um conjunto de dados.",
    reference: ["https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/tasks"],
    image: "",
  },
  {
    id: 21,
    description: `<p class="pt-0">Qual métrica você pode usar para avaliar um modelo de classificação?</p>`,
    answers: [
      {
        number: 1,
        description: "Taxa verdadeira positiva",
        correct: true
      },
      {
        number: 2,
        description: "Erro absoluto médio (MAE)",
        correct: false
      },
      {
        number: 3,
        description: "Coeficiente de determinação (R2)",
        correct: false
      },
      {
        number: 4,
        description: "Raiz do erro quadrático médio (RMSE)",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">Uma curva ROC que se aproxima do canto superior esquerdo com 100% de taxa de verdadeiros positivos e 0% de taxa de falsos positivos será o melhor modelo. Um modelo aleatório seria exibido como uma linha plana do canto inferior esquerdo ao canto superior direito. Pior que aleatório seria cair abaixo da linha y=x.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/machine-learning/how-to-understand-automated-ml#classification"],
    image: "",
  },
  {
    id: 22,
    description: `<p class="pt-0">Quais são os dois componentes que você pode arrastar para uma tela no designer do Azure Machine Learning?</p>`,
    answers: [
      {
        number: 1,
        description: "Conjunto de dados (dataset) e Pipeline",
        correct: false
      },
      {
        number: 2,
        description: "Pipeline e Module (Módulo)",
        correct: false
      },
      {
        number: 3,
        description: "Conjunto de dados (dataset) e Module (Módulo)",
        correct: true
      },
    ],
    explanation: `<p class="pt-0">Você pode arrastar e soltar conjuntos de dados e módulos na tela.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/machine-learning/concept-designer"],
    image: "",
  },
  {
    id: 23,
    description: `<p class="pt-0">Você precisa criar um conjunto de dados de treinamento e um conjunto de dados de validação a partir de um conjunto de dados existente.</p>
                <p class="pt-2">Qual módulo do designer do Azure Machine Learning você deve usar?</p>`,
    answers: [
      {
        number: 1,
        description: "Selecione colunas no conjunto de dados",
        correct: false
      },
      {
        number: 2,
        description: "Adicionar linhas",
        correct: false
      },
      {
        number: 3,
        description: "Dividir dados",
        correct: true
      },
      {
        number: 4,
        description: "Juntar dados",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">Uma maneira comum de avaliar um modelo é dividir os dados em um conjunto de treinamento e teste usando Split Data e, em seguida, validar o modelo nos dados de treinamento.</p>
                  <p class="pt-0">Use o módulo Split Data para dividir um conjunto de dados em dois conjuntos distintos.</p>
                  <p class="pt-0">Atualmente, o estúdio oferece suporte a divisões de dados de treinamento/validação.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/machine-learning/how-to-configure-cross-validation-data-splits"],
    image: "",
  },
  {
    id: 24,
    description: `<p class="pt-0">Quais são as duas ações executadas durante a fase de ingestão de dados e preparação de dados de um processo Azure Machine Learning?</p>`,
    answers: [
      {
        number: 1,
        description: "Calcule a precisão do modelo e combine vários conjuntos de dados.",
        correct: false
      },
      {
        number: 2,
        description: "Combine vários conjuntos de dados e remova os registros que possuem valores ausentes.",
        correct: true 
      },
      {
        number: 3,
        description: "Pontue os dados do teste usando o modelo e combine vários conjuntos de dados.",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">Depois que os dados estiverem acessíveis por meio de um armazenamento de dados ou conjunto de dados, você poderá usá-los para treinar um modelo de ML.</p>
                <p class="pt-2">O pré-processamento e a limpeza de dados são tarefas importantes que devem ser realizadas antes que um conjunto de dados possa ser usado para treinamento de modelo. Os dados brutos costumam ser barulhentos e não confiáveis e podem conter valores ausentes.</p>`,
    reference: [
      "https://learn.microsoft.com/en-us/azure/machine-learning/how-to-data-ingest-adf?view=azureml-api-1",
      "https://learn.microsoft.com/en-us/azure/machine-learning/concept-designer?view=azureml-api-2"
    ],
    image: "",
  },
  {
    id: 25,
    description: `<p class="pt-0">Você precisa prever a população animal de uma área.</p>
                <p class="pt-2">Qual tipo de Azure Machine Learning você deve usar?</p>`,
    answers: [
      {
        number: 1,
        description: "Regressão",
        correct: true
      },
      {
        number: 2,
        description: "Classificação",
        correct: false
      },
      {
        number: 3,
        description: "Agrupamento",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">A regressão é uma técnica de aprendizado de máquina supervisionada usada para prever valores numéricos.</p>`,
    reference: ["https://docs.microsoft.com/en-us/learn/modules/create-regression-model-azure-machine-learning-designer/1-introduction"],
    image: "",
  },
  {
    id: 26,
    description: `<p class="pt-0">Quais são as duas linguagens que você pode usar para escrever código personalizado para o designer do Azure Machine Learning?</p>
                <p class="pt-2"></p>`,
    answers: [
      {
        number: 1,
        description: "Python e C#",
        correct: false
      },
      {
        number: 2,
        description: "Python e R",
        correct: true
      },
      {
        number: 3,
        description: "R e C#",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">Use o designer Azure Machine Learning para personalizar usando código Python e R.</p>`,
    reference: ["https://azure.microsoft.com/en-us/services/machine-learning/designer/#features"],
    image: "",
  },
  {
    id: 27,
    description: `<p class="pt-0">Sua empresa quer construir uma máquina de reciclagem de garrafas. A máquina de reciclagem deve identificar automaticamente as garrafas com o formato correto e rejeitar todos os demais itens.</p>
                <p class="pt-2">Que tipo de carga de trabalho de IA a empresa deve usar?</p>`,
    answers: [
      {
        number: 1,
        description: "Detecção de anomalias",
        correct: false
      },
      {
        number: 2,
        description: "IA conversacional",
        correct: false
      },
      {
        number: 3,
        description: "Visão computacional",
        correct: true
      },
      {
        number: 4,
        description: "Processamento de linguagem natural",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">O serviço de Visão Computacional do Azure oferece acesso a algoritmos avançados que processam imagens e retornam informações com base nos recursos visuais de seu interesse. Por exemplo, a Visão Computacional pode determinar se uma imagem contém conteúdo adulto, encontrar marcas específicas ou objetos ou encontrar rostos humanos.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview"],
    image: "",
  },
  {
    id: 28,
    description: `<p class="pt-0">Em quais dois cenários você pode usar o serviço Form Recognizer?</p>`,
    answers: [
      {
        number: 1,
        description: "Extraia o número da fatura de uma fatura / traduzir um formulário do francês para o inglês",
        correct: false
      },
      {
        number: 2,
        description: "Encontre a imagem do produto em um catálogo / Identifique o varejista a partir de um recibo",
        correct: false
      },
      {
        number: 3,
        description: "Traduzir um formulário do francês para o inglês / Encontre a imagem do produto em um catálogo",
        correct: false
      },
      {
        number: 4,
        description: "Extraia o número da fatura de uma fatura / Identifique o varejista a partir de um recibo",
        correct: true
      },
    ],
    explanation: `<p class="pt-0">Lendo informações de fatura, recibo ou cartão de visita -> Form Recognizer</p>`,
    reference: ["https://azure.microsoft.com/en-gb/services/cognitive-services/form-recognizer/#features"],
    image: "",
  },
  {
    id: 29,
    description: `<p class="pt-0">Você precisa desenvolver um aplicativo móvel para que os funcionários possam digitalizar e armazenar suas despesas durante a viagem.</p>
                <p class="pt-2">Que tipo de visão computacional você deve usar?</p>`,
    answers: [
      {
        number: 1,
        description: "Segmentação semântica",
        correct: false
      },
      {
        number: 2,
        description: "Classificação de imagens",
        correct: false
      },
      {
        number: 3,
        description: "Detecção de objetos",
        correct: false
      },
      {
        number: 4,
        description: "Reconhecimento óptico de caracteres (OCR)",
        correct: true
      },
    ],
    explanation: `<p class="pt-0">A API de Visão Computacional do Azure inclui recursos de reconhecimento óptico de caracteres (OCR) que extraem texto impresso ou manuscrito de imagens. Você pode extrair texto de imagens, como fotos de placas de veículos ou contêineres com números de série, bem como de documentos – faturas, contas, relatórios financeiros, artigos e muito mais.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-recognizing-text"],
    image: "",
  }, */
  {
    id: 30,
    description: `<p class="pt-0">Você envia uma imagem para uma API de Visão Computacional e recebe de volta a imagem anotada mostrada na exposição.</p>
                <p class="pt-2">Que tipo de visão computacional foi usada?</p>`,
    answers: [
      {
        number: 1,
        description: "Detecção de objetos",
        correct: true
      },
      {
        number: 2,
        description: "Detecção de rosto",
        correct: false
      },
      {
        number: 3,
        description: "Reconhecimento óptico de caracteres (OCR)",
        correct: false
      },
      {
        number: 4,
        description: "Classificação de imagens",
        correct: false
      },
    ],
    explanation: `<p class="pt-0">A detecção de objetos é semelhante à marcação, mas a API retorna as coordenadas da caixa delimitadora (em pixels) para cada objeto encontrado. Por exemplo, se uma imagem contém um cachorro, um gato e uma pessoa, a operação Detectar listará esses objetos junto com suas coordenadas na imagem. Você pode usar esta funcionalidade para processar os relacionamentos entre os objetos em uma imagem. Também permite determinar se há várias instâncias da mesma tag em uma imagem.</p>
                <p class="pt-2">A API Detect aplica tags com base nos objetos ou seres vivos identificados na imagem. Atualmente não existe uma relação formal entre a taxonomia de marcação e a taxonomia de detecção de objetos. Em um nível conceitual, a API Detect encontra apenas objetos e seres vivos, enquanto a API Tag também pode incluir termos contextuais como “interno”, que não podem ser localizados com caixas delimitadoras.</p>`,
    reference: ["https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-object-detection",
      "https://learn.microsoft.com/en-in/training/browse/?resource_type=module"
    ],
    image: "/images/ia_900/ia_900_01.png",
  },
]