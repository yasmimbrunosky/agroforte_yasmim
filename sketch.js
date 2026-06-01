/* ========================================================================
  FONTES CONSULTADAS E CRÉDITOS DO PROJETO:
  - Brasil Escola (UOL): https://brasilescola.uol.com.br/geografia/agronegocio.htm
  - Mais Agro (Syngenta): https://maisagro.syngenta.com.br/tudo-sobre-agro/tudo-sobre-o-agronegocio-a-forca-motriz-da-economia-brasileira/
  - https://geoambientalgyn.com/sustentabilidade-no-agronegocio-desafios-e-solucoes/  ========================================================================
*/

let appState = "SPLASH";
let patinhas = [];
let coelhos = [];
let tamanhoFonteAtual = 16;

// BANCO DE DADOS: Enciclopédia
const agroData = [
    {id:1, icon:"🌽", t:"O Milho e a Força", r:"O milho é a espinha dorsal do agro brasileiro. Ele é usado tanto para alimentação humana quanto animal e biocombustíveis. A técnica de plantio consorciado com braquiária ajuda a recuperar o solo, garantindo proteção contra erosão."},
    {id:2, icon:"🛸", t:"Tecnologia de Drones", r:"Drones equipados com inteligência artificial sobrevoam as plantações para identificar falhas de nutrientes ou pragas. Isso permite que o produtor aplique defensivos apenas onde é necessário, economizando 40% de produtos químicos."},
    {id:3, icon:"☀️", t:"Energia Renovável", r:"O uso de painéis solares nas fazendas reduz custos e utiliza a abundância de luz solar do campo para gerar energia limpa. Isso diminui a dependência de combustíveis fósseis e torna a produção energeticamente neutra."},
    {id:4, icon:"🍃", t:"A Origem do Agronegócio", r:"O agronegócio, também conhecido por agrobusiness, compreende as atividades econômicas ligadas à agropecuária, ao manejo de florestas para comércio e serviços (silvicultura) e ao extrativismo vegetal. Esse termo foi cunhado na década de 1950, mas popularizou-se na década de 1970, no auge da Revolução Verde."},
    {id:5, icon:"🌱", t:"Plantio Direto", r:"A técnica de plantio direto consiste em semear a nova cultura sobre a palhada da colheita anterior, sem revirar o solo. Isso preserva a umidade, aumenta a matéria orgânica e evita de forma drástica a erosão provocada pelas chuvas."},
    {id:6, icon:"💧", t:"Manejo da Água", r:"A irrigação de precisão monitora a umidade do solo em tempo real via sensores subterrâneos. A água e os nutrientes são aplicados em doses exatas direto na raiz das plantas, gerando uma economia de recursos hídricos de até 90%."},
    {id:7, icon:"🚜", t:"Tratores Autônomos", r:"Máquinas conectadas via GPS e telemetria conseguem operar trajetórias programadas com precisão milimétrica. Reduzem o esmagamento acidental de mudas e otimizam o consumo de combustível fóssil no preparo da terra."},
    {id:8, icon:"🐝", t:"Polinizadores e Proteção", r:"Abelhas e outros polinizadores são essenciais para a biodiversidade e produtividade de diversas culturas. Fazendas sustentáveis reservam matas nativas próximas às lavouras para garantir o habitat natural desses insetos biológicos."},
    {id:9, icon:"🐄", t:"Pecuária de Precisão", r:"O monitoramento eletrônico do rebanho é feito por meio de brincos com chips RFID ou coleiras. Isso permite acompanhar o ganho de peso diário, detectar doenças precocemente e garantir o bem-estar animal de forma individualizada."},
    {id:10, icon:"🌳", t:"Integração ILPF", r:"A Integração Lavoura-Pecuária-Floresta (ILPF) combina diferentes atividades agrícolas, pastoris e florestais em uma mesma área. Melhora as condições físicas do solo e permite que as árvores neutralizem os gases gerados pelo gado."},
    {id:11, icon:"🌾", t:"A Força da Soja", r:"A soja se consolidou como o principal produto de exportação da agropecuária nacional. Avanços genéticos desenvolvidos no país permitiram a adaptação do grão ao clima tropical, transformando o cerrado em um polo produtivo mundial."},
    {id:12, icon:"🔋", t:"Biocombustíveis", r:"A produção de etanol a partir da cana-de-açúcar e do milho, somada ao biodiesel de óleos vegetais, posiciona o setor agro como um pilar essencial na matriz energética limpa, reduzindo a pegada de carbono global."},
    {id:13, icon:"🔬", t:"Bioinsumos e Controle", r:"O uso de bioinsumos substitui defensivos químicos por microrganismos e fungos benéficos nativos da natureza. Esses inimigos naturais combatem pragas específicas sem desequilibrar o ecossistema ou poluir os lençóis freáticos."},
    {id:14, icon:"🗺️", t:"Zoneamento Climático", r:"O Zoneamento Agrícola de Risco Climático (ZARC) analisa séries históricas de clima e tipos de solo para indicar as melhores janelas de plantio. Essa inteligência reduz as chances de perdas causadas por secas ou geadas."},
    {id:15, icon:"📊", t:"Gestão de Dados", r:"Softwares de gestão agrícola centralizam dados financeiros, estoques de insumos e custos por hectare. Tratam a propriedade rural como uma empresa altamente corporativa, elevando a margem de lucro do produtor."},
    {id:16, icon:"🛰️", t:"Imagens de Satélite", r:"O sensoriamento remoto monitora grandes extensões de terra utilizando índices de vegetação como o NDVI. Permite enxergar anomalias de crescimento, manchas de seca ou ataques de pragas antes mesmo de estarem visíveis a olho nu."},
    {id:17, icon:"☕", t:"Café e Qualidade", r:"O Brasil é o maior produtor e exportador mundial de café. Com o uso de rastreabilidade e certificações de sustentabilidade, as fazendas conquistaram o mercado internacional de grãos especiais com alto valor agregado."},
    {id:18, icon:"🍊", t:"Citricultura Moderna", r:"O manejo fitossanitário rigoroso contra o greening e outras pragas protege os pomares de laranja. O uso de adubação por fertirrigação garante frutas ideais para abastecer grande parte do mercado global de sucos."},
    {id:19, icon:"🍅", t:"Cultivo Protegido", r:"Estufas equipadas com controle automatizado de temperatura, luz e umidade protegem hortaliças de variações severas do clima. O método assegura produção constante o ano todo e alimentos livres de intempéries."},
    {id:20, icon:"🧬", t:"Biotecnologia Agrícola", r:"O desenvolvimento de sementes geneticamente modificadas confere resistência a lagartas e tolerância a períodos de estiagem prolongada. Isso eleva a segurança alimentar e estabiliza a oferta no mercado."},
    {id:21, icon:"🌡️", t:"Estações Meteorológicas", r:"Estações instaladas diretamente na fazenda coletam dados locais de vento, chuva e umidade do ar. Essas informações alimentam modelos preditivos que otimizam o momento exato para o plantio ou colheita."},
    {id:22, icon:"📈", t:"Mercado de Commodities", r:"A comercialização da produção agrícola é fortemente influenciada por bolsas de valores mundiais. Ferramentas financeiras de proteção permitem que o produtor rural trave preços antecipadamente, reduzindo riscos econômicos."},
    {id:23, icon:"🚚", t:"Logística de Escoamento", r:"O transporte eficiente da colheita das fazendas até as ferrovias e portos é um grande desafio para manter a competitividade. Investimentos em infraestrutura multimodal reduzem o desperdício de grãos nas estradas."},
    {id:24, icon:"🍎", t:"Fruticultura de Exportação", r:"Pólos irrigados, como o Vale do São Francisco, transformaram terras áridas em exportadoras de mangas e uvas de mesa de altíssima qualidade, gerando milhares de empregos no interior do país."},
    {id:25, icon:"🍫", t:"Cacau Cabruca", r:"O sistema cabruca cultiva o cacau sob a sombra das árvores nativas da Mata Atlântica. Uma prática tradicional que demonstra como a exploração comercial agrícola pode caminhar de mãos dadas com a conservação ambiental florestal."},
    {id:26, icon:"🌲", t:"Silvicultura Sustentável", r:"O cultivo planejado de florestas de eucalipto e pinus atende à demanda industrial de celulose, papel e madeira para construção, evitando totalmente a exploração ilegal e a degradação de florestas nativas."},
    {id:27, icon:"🍯", t:"Apicultura Integrada", r:"A criação de abelhas dentro de propriedades agrícolas diversifica a renda do produtor através do mel, própolis e cera, enquanto eleva as taxas de polinização e pegamento de frutos da própria fazenda."},
    {id:28, icon:"🥦", t:"Horticultura Urbana", r:"Fazendas verticais localizadas nos centros urbanos utilizam iluminação LED e hidroponia para produzir folhosas perto do consumidor final, encurtando o frete e eliminando desperdícios logísticos."},
    {id:29, icon:"🐓", t:"Avicultura Tecnológica", r:"Granjas inteligentes controlam a climatização, alimentação e fornecimento de água de forma digital. O controle sanitário rígido garante carnes saudáveis e mantém o país no topo das exportações de frango."},
    {id:30, icon:"🐖", t:"Suinocultura Ecológica", r:"O tratamento dos dejetos da criação de suínos em biodigestores converte o passivo ambiental em biogás para geração de eletricidade e biofertilizante de alta qualidade para as lavouras da propriedade."},
    {id:31, icon:" algodão ", icon:"👕", t:"Algodão Rastreável", r:"A produção de algodão adota práticas que reduzem o uso de defensivos e água. Sistemas de rastreamento por QR Code permitem que o consumidor final conheça toda a trajetória socioambiental da fibra na roupa."},
    {id:32, icon:"🐟", t:"Piscicultura em Tanques", r:"A criação de peixes como a tilápia expandiu-se integrando tanques-rede em reservatórios de usinas hidrelétricas. O uso de rações balanceadas e monitoramento da água garante proteínas de alto valor nutritivo."},
    {id:33, icon:"🧀", t:"Derivados e Agroindústria", r:"A agregação de valor através do processamento local de leite, carnes e frutas fortalece as pequenas propriedades rurais e cooperativas, retendo a riqueza econômica gerada dentro das próprias comunidades."},
    {id:34, icon:"🔍", t:"Análise de Solo", r:"A coleta georreferenciada de amostras de terra permite mapear a fertilidade exata de cada metro quadrado. A correção com calcário e gesso é feita de forma cirúrgica, evitando desperdício de insumos."},
    {id:35, icon:"⛓️", t:"Rastreabilidade Blockchain", r:"O registro de dados de cultivo em cadeias de blocos invioláveis garante a procedência de alimentos. O método assegura a compradores internacionais que o produto não tem origem em áreas de desmatamento ilegal."},
    {id:36, icon:"🔒", t:"Seguro Rural", r:"O seguro agrícola protege o capital investido pelo produtor contra sinistros climáticos devastadores. Ele estabiliza a economia do campo, garantindo que o agricultor consiga refinanciar a próxima safra."},
    {id:37, icon:"🤝", t:"Cooperativismo", r:"A união de produtores em cooperativas aumenta o poder de negociação na compra de insumos de forma coletiva e viabiliza o acesso a grandes mercados de exportação que pequenas fazendas não alcançariam isoladas."},
    {id:38, icon:"👨‍💻", t:"Sucessão Familiar", r:"A introdução de tecnologias móveis e a conectividade no campo motivam os jovens a permanecerem na atividade agrícola de seus pais, unindo a sabedoria prática tradicional à gestão digital de ponta."},
    {id:39, icon:"🌱", t:"Adubação Verde", r:"A inserção de plantas leguminosas entre safras atua fixando o nitrogênio do ar diretamente na terra por meios biológicos. Isso dispensa parte dos fertilizantes químicos minerais industriais."},
    {id:40, icon:"♻️", t:"Crédito de Carbono", r:"Propriedades que comprovadamente retêm mais carbono no solo do que emitem podem converter esse ganho ecológico em créditos negociáveis, gerando um novo fluxo de faturamento focado na preservação do planeta."}
];

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('p5-decoracao');
    for(let i=0; i<3; i++) coelhos.push(new CoelhoSplash());
    
    configurarSistema();
}

function draw() {
    if (appState === "SPLASH") {
        clear();
        desenharPatinhas();
        coelhos.forEach(c => { c.update(); c.display(); });
    }
}

// --- CONTROLE COMPLEMENTAR DO MENU DE TRÊS PONTINHOS ---
function alternarMenuLateral() {
    const menu = document.getElementById("menu-lateral");
    if (menu) menu.classList.toggle("aberto");
}

// --- CONHECIMENTO DA IA POMPOM ---
const pompomRespostas = {
    "água": "A gestão hídrica moderna utiliza a irrigação por gotejamento subsuperficial e sensores de umidade no solo. Isso evita o desperdício por evaporação, levando a água direto para as raízes e economizando até 90% do recurso! 💧",
    "coelho": "Eu represento a fauna nativa e os bioindicadores! Fazendas que adotam práticas sustentáveis mantêm corredores ecológicos para que animais como eu vivem em perfeita harmonia com as plantações. 🥕",
    "drone": "Drones de imageamento usam sensores multiespectrais (como NDVI) para ler a saúde das folhas através de infravermelho! Eles detectam estresse hídrico ou infestação de pragas dias antes do olho humano notar. 🛸",
    "sustentável": "Sustentabilidade no agro baseia-se no tripé: econômico, social e ambiental. Significa produzir alimentos de alta qualidade aplicando a rotação de culturas, ILPF (Integração Lavoura-Pecuária-Floresta) e reduzindo a pegada de carbono. ✨",
    "tecnologia": "O agro moderno usa GPS agrícola de alta precisão (RTK), tratores autônomos e softwares de telemetria em nuvem que cruzam dados de satélite com previsões meteorológicas em tempo real. 🚜💻",
    "biologico": "Os bioinsumos e o manejo integrado de pragas (MIP) utilizam inimigos naturais (como microvespas) e bactérias benéficas para proteger as plantas, reduzindo drasticamente a dependência de defensivos químicos! 🐝",
    "carbono": "O mercado de crédito de carbono valoriza produtores que sequestram CO₂ da atmosfera através do plantio de árvores e práticas conservacionistas, transformando preservação ambiental em ativo financeiro! 🌳",
   "plantio": "O plantio direto é uma técnica revolucionária onde não revolvemos o solo. O plantio é feito sobre a palhada da safra anterior, o que evita a erosão, mantém a umidade natural da terra e fixa o carbono orgânico no solo! 🐰🌾",
    "agronomia de campo": "Na agronomia de campo, analisamos diretamente a saúde física do ecossistema agrícola. Isso inclui o monitoramento dos estágios fenológicos das plantas, amostragem minuciosa de solo para correção de acidez e rotação estratégica de culturas! 🌾🔎",
    "máquinas": "A mecanização moderna utiliza tractors, plantadeiras e colheitadeiras interconectadas via telemetria. Essas máquinas controlam a taxa variável de sementes e fertilizantes por metro quadrado! 🚜⚙️",
    "agricultura de precisão": "A agricultura de precisão gerencia o campo metro a metro! Usando dados de satélite, sensores imagens em máquinas e mapas de produtividade baseados em coordenadas de GPS de alta precisão (RTK), aplicamos insumos no local exato. 📡🛰️",
    "gestão da fazenda": "Uma boa gestão da fazenda funciona como uma empresa corporativa! Ela integra o controle financeiro rigoroso do fluxo de caixa, o planejamento de compras antecipadas de insumo e análise do custo por hectare. 📊💼",
    "zootecnia": "A zootecnia e a pecuária de precisão buscam a máxima eficiência produtiva com bem-estar animal. Usamos brincos com chips de identificação eletrônica por radiofrequência (RFID) para monitorar o ganho de peso! 🐄🥩",
    "pecuária": "A zootecnia e a pecuária de precisão buscam a máxima eficiência produtiva com bem-estar animal. Usamos brincos com chips de identificação eletrônica por radiofrequência (RFID) para monitorar o ganho de peso! 🐄🥩",
    "dados": "O uso de dados e modelos matemáticos preditivos transforma dados brutos do campo em decisões corretas. Cruzamos sensores meteorológicos locais com modelos estatísticos históricos para prever surtos de pragas! 📈💻",
    "modelos": "O uso de dados e modelos matemáticos preditivos transforma dados brutos do campo em decisões corretas. Cruzamos sensores meteorológicos locais com modelos estatísticos históricos para prever surtos de pragas! 📈💻",
    "sustentabilidade": "A sustentabilidade e o mercado de crédito de carbono reconhecem o produtor que adota práticas regenerativas! Técnicas como a Integração Lavoura-Pecuária-Floresta (ILPF) e o plantio direto transformam o solo em um sumidouro de CO₂! 🌳♻️",
    "região": "A definição da região e do calendário agrícola (ZARC - Zoneamento Agrícola de Risco Climático) orienta as datas limites seguras de plantio por município, correlacionando o tipo de solo com o clima regional! 🗺️📅",
    "calendário": "A definição da região e do calendário agrícola (ZARC - Zoneamento Agrícola de Risco Climático) orienta as datas limites seguras de plantio por município, correlacionando o tipo de solo com o clima regional! 🗺️📅",
    "comunicação": "A comunicação com o produtor rural precisa ser clara, ágil e acessível. Desenvolvemos dashboards intuitivos e relatórios visuais diretos que traduzem dados complexos de satélite em orientações práticas! 📲🗣️"
};

function perguntarPompom() {
    const pergunta = document.getElementById('campo-busca').value.toLowerCase().trim();
    const respBox = document.getElementById('pompom-resposta');
    let resposta = "Infelizmente, não localizei esse termo. Tente me perguntar outra coisa 🐰";
    
    for (let chave in pompomRespostas) {
        if (pergunta.includes(chave)) {
            resposta = pompomRespostas[chave];
            break;
        }
    }
    
    respBox.innerHTML = `<strong>Pompom Especialista diz:</strong> ${resposta}`;
}

// --- NAVEGAÇÃO E CONTROLE DO DOM ---
function configurarSistema() {
    const input = document.getElementById('input-nome');
    const btn = document.getElementById('btn-entrar');

    if (input && btn) {
        input.oninput = () => {
            if(input.value.trim().length > 0) { 
                btn.classList.add('active'); 
                btn.disabled = false; 
            } else { 
                btn.classList.remove('active'); 
                btn.disabled = true; 
            }
        };

        btn.onclick = () => {
            document.getElementById('span-nome').innerText = input.value;
            document.getElementById('tela-splash').style.display = 'none';
            document.getElementById('tela-home').classList.remove('escondida');
            appState = "HOME";
            carregarCards();
        };
    }

    const btnPerguntar = document.getElementById('btn-perguntar');
    if (btnPerguntar) btnPerguntar.onclick = perguntarPompom;
}

function carregarCards() {
    const container = document.getElementById('grid-icones');
    if (!container) return;
    container.innerHTML = "";
    agroData.forEach(d => {
        const card = document.createElement('div');
        card.className = "card-agro";
        card.innerHTML = `<div class="icon">${d.icon}</div><h4>${d.t}</h4><p>${d.r.substring(0, 60)}...</p>`;
        card.onclick = () => verDetalhe(d);
        container.appendChild(card);
    });
}

function verDetalhe(item) {
    const lateralMenu = document.getElementById("menu-lateral");
    if (lateralMenu) lateralMenu.classList.remove("aberto");
    
    document.getElementById('tela-home').classList.add('escondida');
    document.getElementById('tela-detalhe').classList.remove('escondida');
    const conteudo = document.getElementById('conteudo-detalhe');

    appState = "DETALHE";
    conteudo.innerHTML = `
        <h1>Tópico ${item.id}: ${item.t}</h1>
        <div class="detalhe-flex">
            <div class="emoji-decorativo-painel">${item.icon}</div>
            <div class="texto-container">
                <p style="font-size:1.2rem; line-height:1.6; margin-bottom: 20px;">${item.r}</p>
                <hr style="margin: 15px 0; opacity: 0.3;">
                <p class="fontes-artigo" style="font-size:0.95rem; color: var(--texto); opacity:0.9;">
                    <strong>Referências Científicas Consultadas:</strong><br>
                    • Conteúdo estruturado via: <a href="https://brasilescola.uol.com.br/geografia/agronegocio.htm" target="_blank" style="color: var(--laranja-suave); font-weight:bold;">Brasil Escola (UOL)</a><br>
                    • Dados mercadológicos via: <a href="https://maisagro.syngenta.com.br/tudo-sobre-agro/tudo-sobre-o-agronegocio-a-forca-motriz-da-economia-brasileira/" target="_blank" style="color: var(--laranja-suave); font-weight:bold;">Syngenta Mais Agro</a>
                </p>
            </div>
        </div>`;
}

function irParaHome() {
    document.getElementById('tela-detalhe').classList.add('escondida');
    document.getElementById('tela-home').classList.remove('escondida');
    appState = "HOME";
}

function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

function aumentarFonte() {
    tamanhoFonteAtual += 2;
    if (tamanhoFonteAtual > 24) tamanhoFonteAtual = 16;
    document.body.style.fontSize = tamanhoFonteAtual + "px";
}

function desenharPatinhas() {
    if (mouseIsPressed || frameCount % 10 == 0) patinhas.push({x: mouseX, y: mouseY, a: 255});
    patinhas.forEach((p, i) => {
        fill(255, 255, 255, p.a); noStroke();
        ellipse(p.x, p.y, 12, 12); ellipse(p.x-6, p.y-10, 6, 8); ellipse(p.x+6, p.y-10, 6, 8);
        p.a -= 5; if(p.a <= 0) patinhas.splice(i, 1);
    });
}

class CoelhoSplash {
    constructor() { 
        this.x = random(width); 
        this.y = random(height); 
        this.v = random(1, 2); 
    }
    update() { 
        this.x += this.v; 
        if(this.x > width) this.x = -50; 
    }
    display() { 
        textSize(40); 
        text("🐰", this.x, this.y); 
    }
}
(function() {
  // Texto e link desejados
  const siteLink = 'https://geoambientalgyn.com/sustentabilidade-no-agronegocio-desafios-e-solucoes/';
  const longHTML = `
    <p><strong>Sustentabilidade no Agronegócio: Desafios e Soluções</strong></p>
    <p>A sustentabilidade no agronegócio tem se tornado um dos maiores focos do setor nas últimas décadas. Com a crescente demanda por produção de alimentos, fibras e energia, conciliar produtividade com preservação ambiental é um dos principais desafios enfrentados pelos produtores e empresas do setor.</p>
    <p>Principais desafios ambientais do agronegócio incluem desmatamento, poluição de solos e cursos d’água por defensivos, emissões de gases de efeito estufa, uso excessivo de água e degradação do solo. Esses problemas afetam o meio ambiente, a produtividade a longo prazo e a imagem de quem produz.</p>
    <p><strong>Soluções e práticas sustentáveis</strong>:
      Regularização Ambiental (CAR, APP, Reserva Legal, Licenciamento); Boas Práticas Agrícolas (rotação de culturas, manejo de defensivos, manejo de pragas, conservação do solo/água);
      Inovação tecnológica (irrigação de precisão, monitoramento por satélite, drones); ILPF; Gestão de resíduos e efluentes.
    </p>
    <p>Caminho para um agro mais verde: redução de custos, acesso a mercados sustentáveis, melhoria de imagem e conformidade legal.</p>
    <p><em>Leia mais no site: <a href="${siteLink}" target="_blank" rel="noopener">Leia mais no site</a></em></p>
  `;

  // Ícone de Folha em SVG (Sustentabilidade)
  const leafIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: inline-block; vertical-align: middle;">
      <path d="M17 8C14.24 8 12.01 10.24 12.01 13C12.01 14.1 12.42 15.1 13.08 15.89L11 18H13L14.71 16.29C15.39 16.74 16.17 17 17 17C19.76 17 22 14.76 22 12V8H17M17 15C15.9 15 15 14.1 15 13C15 11.9 15.9 11 17 11C18.1 11 19 11.9 19 13C19 14.1 18.1 15 17 15M2 22H4V20C4 16.42 6.42 13.35 9.75 12.43C8.65 10.96 8 9.11 8 7C8 3.13 11.13 0 15 0H16V2C16 6.13 13.13 9.42 9.27 9.89C9.1 10.55 9 11.24 9 12C9 15.53 11.3 18.5 14.5 19.5V22H16V24H2V22Z"/>
    </svg>
  `;

  // Função para criar o painel/modal
  function createPanel() {
    // Painel (overlay de fundo)
    const panel = document.createElement('div');
    panel.id = 'summary-panel';
    Object.assign(panel.style, {
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,0.85)',
      color: '#fff',
      padding: '40px 20px',
      overflowY: 'auto',
      display: 'none',
      zIndex: '10000',
      boxSizing: 'border-box'
    });

    // Conteúdo do painel (Caixa interna com o texto)
    const inner = document.createElement('div');
    Object.assign(inner.style, {
      maxWidth: '900px',
      margin: '0 auto',
      background: 'rgba(20,20,20,0.95)',
      padding: '30px',
      borderRadius: '12px',
      maxHeight: '80vh',
      overflowY: 'auto', // Força a rolagem a acontecer aqui dentro
      boxSizing: 'border-box',
      border: '1px solid rgba(255,255,255,0.1)'
    });

    // Título
    const title = document.createElement('h2');
    title.textContent = 'Sustentabilidade no Agronegócio';
    title.style.marginTop = '0';
    inner.appendChild(title);

    // Conteúdo (texto formatado)
    const content = document.createElement('div');
    content.innerHTML = longHTML;
    inner.appendChild(content);

    // Botão Fechar
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fechar';
    Object.assign(closeBtn.style, {
      marginTop: '20px',
      padding: '10px 20px',
      background: '#2e7d32', // Verde sustentável
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px'
    });
    
    closeBtn.addEventListener('click', () => { 
      panel.style.display = 'none'; 
      document.body.style.overflow = ''; 
    });

    inner.appendChild(closeBtn);
    panel.appendChild(inner);
    document.body.appendChild(panel);

    // Fecha o modal se o usuário clicar no fundo escuro fora da caixa
    panel.addEventListener('click', (e) => {
      if (e.target === panel) {
        panel.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    return panel;
  }

  // Função para abrir/fechar o painel
  function togglePanel(panel) {
    if (!panel) panel = document.getElementById('summary-panel') || createPanel();
    const isVisible = panel.style.display === 'block';
    panel.style.display = isVisible ? 'none' : 'block';
    if (!isVisible && panel.style.display === 'block') {
      document.body.style.overflow = 'hidden'; // Trava o site ao fundo
    } else {
      document.body.style.overflow = '';
    }
  }

  // Tenta anexar ao menu existente ou cria o botão flutuante
  function init() {
    const mainMenu = document.querySelector('#main-menu');
    let trigger;

    if (mainMenu) {
      // Cria o link do menu com o ícone e o texto
      trigger = document.createElement('a');
      trigger.href = '#';
      trigger.title = 'Sustentabilidade no Agronegócio';
      trigger.innerHTML = `${leafIconSVG} <span style="margin-left: 6px; vertical-align: middle;">Sustentabilidade</span>`;
      
      Object.assign(trigger.style, {
        cursor: 'pointer',
        padding: '8px 12px',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none'
      });
      
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        togglePanel(null);
      });
      
      // Se o menu for uma lista (<ul>), envolve em uma <li> para não quebrar o HTML
      if (mainMenu.tagName === 'UL') {
        const li = document.createElement('li');
        li.appendChild(trigger);
        mainMenu.appendChild(li);
      } else {
        mainMenu.appendChild(trigger);
      }
    } else {
      // Fallback: Botão flutuante redondo e verde
      trigger = document.createElement('button');
      trigger.title = 'Sustentabilidade no Agronegócio';
      trigger.innerHTML = leafIconSVG;
      
      Object.assign(trigger.style, {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '9999',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2e7d32',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      });
      
      trigger.addEventListener('click', () => togglePanel(null));
      document.body.appendChild(trigger);
    }

    if (!document.getElementById('summary-panel')) createPanel();
  }

  // Aguarda o carregamento do DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function() {
  // --- CONFIGURAÇÕES DE LINKS E TEXTOS ---
  const siteLink = 'https://geoambientalgyn.com/sustentabilidade-no-agronegocio-desafios-e-solucoes/';
  const longHTML = `
    <p><strong>Sustentabilidade no Agronegócio: Desafios e Soluções</strong></p>
    <p>A sustentabilidade no agronegócio tem se tornado um dos maiores focos do setor nas últimas décadas. Com a crescente demanda por produção de alimentos, fibras e energia, conciliar produtividade com preservação ambiental é um dos principais desafios enfrentados pelos produtores e empresas do setor.</p>
    <p>Principais desafios ambientais do agronegócio incluem desmatamento, poluição de solos e cursos d’água por defensivos, emissões de gases de efeito estufa, uso excessivo de água e degradação do solo. Esses problemas afetam o meio ambiente, a produtividade a longo prazo e a imagem de quem Horizon.</p>
    <p><strong>Soluções e práticas sustentáveis</strong>:
      Regularização Ambiental (CAR, APP, Reserva Legal, Licenciamento); Boas Práticas Agrícolas (rotação de culturas, manejo de defensivos, manejo de pragas, conservação do solo/água);
      Inovação tecnológica (irrigação de precisão, monitoramento por satélite, drones); ILPF; Gestão de resíduos e efluentes.
    </p>
    <p>Caminho para um agro mais verde: redução de custos, acesso a mercados sustentáveis, melhoria de imagem e conformidade legal.</p>
    <p><em>Leia mais no site: <a href="${siteLink}" target="_blank" rel="noopener">Leia mais no site</a></em></p>
  `;

  // --- ÍCONES SVG ---
  // 1. Ícone de Folha (Sustentabilidade)
  const leafIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: inline-block; vertical-align: middle;">
      <path d="M17 8C14.24 8 12.01 10.24 12.01 13C12.01 14.1 12.42 15.1 13.08 15.89L11 18H13L14.71 16.29C15.39 16.74 16.17 17 17 17C19.76 17 22 14.76 22 12V8H17M17 15C15.9 15 15 14.1 15 13C15 11.9 15.9 11 17 11C18.1 11 19 11.9 19 13C19 14.1 18.1 15 17 15M2 22H4V20C4 16.42 6.42 13.35 9.75 12.43C8.65 10.96 8 9.11 8 7C8 3.13 11.13 0 15 0H16V2C16 6.13 13.13 9.42 9.27 9.89C9.1 10.55 9 11.24 9 12C9 15.53 11.3 18.5 14.5 19.5V22H16V24H2V22Z"/>
    </svg>
  `;

  // 2. Ícone de Controle/Gamepad (Jogo do Agro)
  const gameIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: inline-block; vertical-align: middle;">
      <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-10 7H9v2H8v-2H6v-1h2V9h1v2h2v1Zm4.5 1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm3-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"/>
    </svg>
  `;

  // --- CONTROLE DOS MODAIS ---
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Trava a rolagem do site ao fundo
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    // Só destrava a rolagem se ambos os modais estiverem fechados
    if (document.getElementById('summary-panel').style.display !== 'block' && 
        document.getElementById('game-panel').style.display !== 'block') {
      document.body.style.overflow = '';
    }
  }

  // --- ESTRUTURA BASE DOS MODAIS (CSS & HTML) ---
  function createBaseModal(id, titleText, contentHTML) {
    const panel = document.createElement('div');
    panel.id = id;
    Object.assign(panel.style, {
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,0.85)',
      color: '#fff',
      padding: '40px 20px',
      overflowY: 'auto',
      display: 'none',
      zIndex: '10000',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif'
    });

    const inner = document.createElement('div');
    Object.assign(inner.style, {
      maxWidth: '700px',
      margin: '0 auto',
      background: 'rgba(20,20,20,0.95)',
      padding: '30px',
      borderRadius: '12px',
      maxHeight: '85vh',
      overflowY: 'auto',
      boxSizing: 'border-box',
      border: '1px solid rgba(255,255,255,0.1)'
    });

    const title = document.createElement('h2');
    title.textContent = titleText;
    title.style.marginTop = '0';
    inner.appendChild(title);

    const content = document.createElement('div');
    content.innerHTML = contentHTML;
    inner.appendChild(content);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fechar';
    Object.assign(closeBtn.style, {
      marginTop: '20px',
      padding: '10px 20px',
      background: '#2e7d32',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold'
    });
    closeBtn.addEventListener('click', () => closeModal(id));

    inner.appendChild(closeBtn);
    panel.appendChild(inner);
    document.body.appendChild(panel);

    panel.addEventListener('click', (e) => {
      if (e.target === panel) closeModal(id);
    });

    return panel;
  }

  // --- CÓDIGO DO JOGO ---
  let score = 0;
  function initGameLogic() {
    const btnColher = document.getElementById('btn-colher');
    const scoreDisplay = document.getElementById('game-score');
    const gameStatus = document.getElementById('game-status');

    if(btnColher) {
      btnColher.addEventListener('click', () => {
        score += 10;
        scoreDisplay.textContent = score;
        
        // Feedbacks simples dependendo da pontuação
        if (score === 30) gameStatus.textContent = "🌱 Suas sementes germinaram bem!";
        if (score === 70) gameStatus.textContent = "💧 Irrigação de precisão ativada com sucesso!";
        if (score === 120) gameStatus.textContent = "🚜 Fazenda Sustentável Nota 10! Parabéns!";
      });
    }
  }

  // --- INICIALIZAÇÃO ---
  function init() {
    // 1. Criar Modal de Sustentabilidade
    if (!document.getElementById('summary-panel')) {
      createBaseModal('summary-panel', 'Resumo: Sustentabilidade no Agronegócio', longHTML);
    }

    // 2. Modal do Jogo
    if (!document.getElementById('game-panel')) {
      const gameHTML = `
        <p>Bem-vindo ao <strong>Eco-Fazenda Clicker</strong>! Produza alimentos adotando práticas sustentáveis rápidas.</p>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <h3 style="margin-top:0;">Pontuação de Sustentabilidade: <span id="game-score" style="color: #4caf50;">0</span></h3>
          <p id="game-status" style="font-style: italic; color: #aaa;">Clique no botão abaixo para iniciar o plantio direto direto...</p>
          <button id="btn-colher" style="background: #4caf50; color: white; border: none; padding: 15px 30px; font-size: 16px; font-weight: bold; border-radius: 30px; cursor: pointer; boxShadow: 0 4px 6px rgba(0,0,0,0.2);">
            🚜 Praticar Manejo Sustentável!
          </button>
        </div>
        <p style="font-size:12px; color:#aaa;">*Este é um mini-game interativo feito para engajamento rápido de forma leve.</p>
      `;
      createBaseModal('game-panel', '🎮 Agro-Jogo Sustentável', gameHTML);
      initGameLogic();
    }

    // 3. Inserir Itens no Menu Principal ou Fallback Flutuante
    const mainMenu = document.querySelector('#main-menu');

    // Estilo base reutilizável para os botões/links do menu
    const applyTriggerStyles = (el) => {
      Object.assign(el.style, {
        cursor: 'pointer',
        padding: '8px 12px',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        fontFamily: 'sans-serif'
      });
    };

    if (mainMenu) {
      // Cria Link 1: Sustentabilidade
      const triggerSust = document.createElement('a');
      triggerSust.href = '#';
      triggerSust.title = 'Sustentabilidade no Agronegócio';
      triggerSust.innerHTML = `${leafIconSVG} <span style="margin-left: 6px; vertical-align: middle;">Sustentabilidade</span>`;
      applyTriggerStyles(triggerSust);
      triggerSust.addEventListener('click', (e) => { e.preventDefault(); openModal('summary-panel'); });

      // Cria Link 2: Jogo
      const triggerGame = document.createElement('a');
      triggerGame.href = '#';
      triggerGame.title = 'Jogar Mini-Game do Agro';
      triggerGame.innerHTML = `${gameIconSVG} <span style="margin-left: 6px; vertical-align: middle;">AgroJogo</span>`;
      applyTriggerStyles(triggerGame);
      triggerGame.addEventListener('click', (e) => { e.preventDefault(); openModal('game-panel'); });

      // Se for uma lista <ul>, empacota em tags <li> individuais para manter a integridade sem quebras de layout
      if (mainMenu.tagName === 'UL') {
        const liSust = document.createElement('li');
        liSust.appendChild(triggerSust);
        mainMenu.appendChild(liSust);

        const liGame = document.createElement('li');
        liGame.appendChild(triggerGame);
        mainMenu.appendChild(liGame);
      } else {
        mainMenu.appendChild(triggerSust);
        mainMenu.appendChild(triggerGame);
      }
    } else {
      // Fallback: Se o menu principal não for achado, cria 2 botões flutuantes empilhados no canto inferior
      const createFallbackBtn = (bottomOffset, icon, title, targetModal, bgColor) => {
        const btn = document.createElement('button');
        btn.title = title;
        btn.innerHTML = icon;
        Object.assign(btn.style, {
          position: 'fixed',
          right: '20px',
          bottom: bottomOffset,
          zIndex: '9999',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: bgColor,
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        });
        btn.addEventListener('click', () => openModal(targetModal));
        document.body.appendChild(btn);
      };

      // Botão Flutuante 1 (Sustentabilidade - Abaixo)
      createFallbackBtn('20px', leafIconSVG, 'Sustentabilidade no Agronegócio', 'summary-panel', '#2e7d32');
      // Botão Flutuante 2 (Jogo - Acima do primeiro)
      createFallbackBtn('75px', gameIconSVG, 'Jogar Mini-Game do Agro', 'game-panel', '#1565c0');
    }
  }

  // Controle de carregamento seguro do DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();