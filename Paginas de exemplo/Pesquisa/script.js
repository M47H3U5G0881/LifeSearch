function redirect(id){
    const links = {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
      inicial: "inicial.html",
      login: "login.html",
      favoritos: "favoritos.html",
      suporte: "suporte.html"
    };
    linkChamado = links[id];
    window.location.href = linkChamado;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const jsonUrl = urlParams.get('https://api.npoint.io/05aad919ec83448182c1') || 'https://api.npoint.io/05aad919ec83448182c1';
  
  async function carregarProdutos() {
  try {
  const resposta = await fetch(jsonUrl);
  const dados = await resposta.json();
  const lista = dados.lista_produtos;
  
  const container = document.getElementById('produtos');
  container.innerHTML = '';
  
  lista.forEach(produto => {
  const card = document.createElement('button');
  card.className = 'QuadroProduto';
  card.innerHTML = `
  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="coração" id="coração" class="coração">
  <img src="${produto.link_de_img}" alt="${produto.nome}" class="Produto" id="Produto>
  <br>
  <p class="nome" id="nome"><strong>${produto.nome}</strong></p>
  <p class="preco">Menor preço: <strong>${produto.preço}</strong></p>
  <p>${produto.parcelado}</p>
  <p><strong>Tipo:</strong> ${produto.tipo} <strong>Nota:</strong> ${produto.N_de_estrelas}</p>
  <p class="Comparação">Compare em <strong>${produto.N_de_lojas}</strong> lojas</p>
  </div>
  `;
  container.appendChild(card);
  });
  } catch (erro) {
  console.error('Erro ao carregar os produtos:', erro);
  document.getElementById('produtos').innerHTML = '<p style="margin-left: 50px;">Erro ao carregar produtos.</p>';
  }
  }
  
  carregarProdutos();
