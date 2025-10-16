function redirect(id){
  const links = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
    login: "login.html",
    favoritos: "favoritos.html",
    suporte: "suporte.html",
    inicial: "inicial.html"
  };

  linkChamado = links[id];

  window.location.href = linkChamado;
}
