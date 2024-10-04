$(function(){
    $("#menu-canvas").load("./index.html #canva-menu")
})

$(function(){
    $("#highlight-articles").load("./partials/highlight-articles.html #articles-highlight")
})


$(function(){
    $("#highlight-projects").load("./partials/highlight-projects.html #projects-highlight")
})

$(function(){
    $("#footer-port").load("./index.html #port-footer")
})

$(function(){
    $("#form-port").load("./index.html #port-form")
})

$(function(){
    $("#components-article").load("./articles/article-css-1-components.html #article-components")
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const form = this;
    const status = document.getElementById('status');
    const data = new FormData(form); // Captura os dados do formulário
  
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        status.innerHTML = "Mensagem enviada com sucesso!";
        form.reset(); // Limpa o formulário após o envio
      } else {
        response.json().then(data => {
          if (data.hasOwnProperty('errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          } else {
            status.innerHTML = "Ocorreu um erro ao enviar a mensagem.";
          }
        });
      }
    })
    .catch(error => {
      status.innerHTML = "Ocorreu um erro ao enviar a mensagem.";
    });
  });
  