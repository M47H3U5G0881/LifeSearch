function redirect(id){
      const links = {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://www.twitter.com",
        linkedin: "https://www.linkedin.com",
        inicial: "/inicial.html"
      };

      linkChamado = links[id];

      window.location.href = linkChamado;
