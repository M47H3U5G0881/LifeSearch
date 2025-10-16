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