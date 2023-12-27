document.getElementById("formID").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Your existing code to fetch form values
    let x = Math.floor((Math.random() * 10) + 1);
    var Bnombre = document.getElementById("Bnombre").value;
    var Gnombre = document.getElementById("Gnombre").value;
    var verbo = document.getElementById("verbo").value;
    var adjetivo = document.getElementById("adjetivo").value;
    var locacion = document.getElementById("lugar").value;
    var personaje = document.getElementById("personaje").value;
    var pregunta = document.getElementById("pregunta").value;
    var txtImagen = document.getElementById("txtImagen");
var imagenElegida = txtImagen.value;
var imagen;
  switch (imagenElegida) {
    case "quimea":
      imagen = '<img src="images/1.png" style="width: 50px;" />';
      break;
    case "medusa":
      imagen = '<img src="images/2.png" style="width: 50px;" />';
      break;
    case "cancer":
      imagen = '<img src="images/3.png" style="width: 50px;" />';
      break;
    case "hidra":
      imagen = '<img src="images/4.png" style="width: 50px;" />';
      break;
    default:
      imagen = '....';
  }
  var evento
    if (x === 1||x === 2||x===3||x===10){
      evento = "también murió."
    }
    else if (x===4||x===5||x===6){
      evento = "logró salir del pueblo antes de ser engullido por la oscuridad."
    }
    else if (x===7||x===8||x===9){
      evento = "no solo escapó, sino que creó una empresa de joyas exitoso llamado PANDORA."
    }
    if (
      Bnombre.trim() === "" ||
      Gnombre.trim() === "" ||
      verbo.trim() === "" ||
      adjetivo.trim() === "" ||
      locacion.trim() === "" ||
      personaje.trim() === "placeholder" ||
      pregunta.trim() === "placeholder"
    ) {
      alert("Please fill out all fields before submitting.");
    } else {
      // Your existing story generation code
      var story = "Érase una vez, en " + locacion + ", vivían dos amigos inseparables, " + Bnombre + " y " + personaje + ". Su curiosidad los llevó a descubrir una misteriosa caja que, según se rumoreaba, guarda secretos inimaginables. Un día, convencieron a una chica valiente y aventurera llamada " + Gnombre + " para que se uniera a ellos para descubrir sus misterios.<br\>Mientras dudaban ante la caja sellada, su decisión de " + verbo + " la cerradura desató una fuerza " + adjetivo + " que transformó su mundo. De la caja surgieron pestes, enfermedades, problemas... y el pueblo tuvo que enfrentar las consecuencias de sus acciones. La comunidad que alguna vez fue pacífica ahora estaba en desorden y el trío tuvo que enfrentar la responsabilidad que conllevaban sus decisiones.<br\>"+imagen+"<br\>Antes de ser destruidos por los monstruos que salieron de la caja," + Bnombre + " le preguntó a " + personaje + ", " + pregunta + " pero antes de poder responder una ola de oscuridad les cubrió enteros y a todos los aldeanos, resultando en una muerte instantánea. En cuano a "+Gnombre+", ella "+evento+"";
  
      
      var overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.innerHTML = "<div class='storyOverlay'>" + story + "</div>";
      document.body.appendChild(overlay);
    }
  });
  document.getElementById("eraseButton").addEventListener("click", function() {
    document.getElementById("formID").reset();
    var overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.innerHTML = "";
    }
  });
  