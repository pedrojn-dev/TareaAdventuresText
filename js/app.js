alert("¡Bienvenido a Panic Adventure Text!");
let username = prompt(
  "Antes de comenzar el juego, escribe tu nombre!"
)?.trim();

usernameValidate();

alert("Estás a punto de conocer una historia de pánico " + username + "...");

const principalOptions =
  "Menu: \n" + "1. Cambiar de nombre \n" + "2. Iniciar juego\n";

let userMenuChoice = prompt(principalOptions);

switch (userMenuChoice) {
  case "1":
    username = prompt("Coloca un nuevo nombre")?.trim();
    usernameValidate();
    break

  case "2":
    alert(username + " estás a punto de iniciar el juego...");
    playGameIntroduction();
    break
  default:
    alert(
      "Error, no es una opción válida. Vuelve a intentarlo."
    );
    menuTryAgain();
}

/* Funciones */
function usernameValidate() {
  while (!username) {
    username = prompt(
      "El nombre no cumple con nuestros parámetros. Por favor, elije otro."
    )?.trim();
  }
}

function playGameIntroduction() {
  alert(
    "Una tarde casi por anochecer, caminando por la ciudad, meditabundo pasaste por un callejón de donde salieron criminales. Uno de ellos se acerca para robarte..."
  );
  alert("Criminal: ¡Dame tus cosas o te mueres!");

  const gameFirstOptions =
    "Elige una opción:\n" + "1. Escapar\n" + "2. Pelear\n" + "3. Pedir ayuda\n";

  let userGameFirstChoice = prompt(gameFirstOptions);

  switch (userGameFirstChoice) {
    case "1":
      alert(
        "Has intentado escapar, pero lamentablemente te atraparon y terminaste perdiendo la vida."
      );
      alert("Perdiste, triste final del juego.");
      break;
    case "2":
      alert(
        "Te atreviste a pelear delante de un criminal, has logrado dejarlo inconsciente y pudiste escapar."
      );
      alert("Lo lográste!")
      playGameFirstCap()
      break;
    case "3":
      alert(
        "Intentaste pedir ayuda, pero la calle estuvo muy silenciosa y nadie te ayudó, terminaste muerto debido a tu desesperación y poco control ante la situación"
      );
      alert("Perdiste, triste final del juego.");
      break
    default:
      alert("Opción no válida")
      gameFirstTryAgain()
      break
  }
}

function playGameFirstCap() {
  alert("Has logrado escapar, sin embargo hay una banda de delincuentes que ahora están buscándote, debido a que has dejado en ridículo a uno de los suyos. Tu misión es poder encontrar un lugar seguro.")
  alert("Un nuevo dia estabas saliendo de tu casa, todo tranquilo a realizar compras, tuviste un día relajado, pero en la noche es donde todo se puso feo.");
  alert("Estabas tranquilo viendo tus cosas, y alguien se mete a tu casa sigilosamente, deciden capturarte y llevarte a un lugar oculto de la ciudad, intentaste liberarte pero no lo lograste, te durmieron.")
  alert("¡Has despertado! pero en un lugar oscuro y silencioso, entonces pensaste que ya te secuestraron. Vino un señor y te dice \n" + "Señor: Si quieres salir de esta, tienes que darme $5000 dólares, o te buscaremos y te mataremos. Tienes una oportunidad \n" + "Sistema: ¿Que harás en esta situación?")


  const gameSecondOptions =
    "Elige una opción:\n" + "1. Intentar agredirlo y rechazar la oferta\n" + "2. Suplicar que te deje libre\n" + "3. Intentar atacarlo\n";

  let userGameSecondChoice = prompt(gameSecondOptions);

  switch (userGameSecondChoice) {
    case "1":
      alert(
        "Al intentarlo, el señor terminó riendose de ti, y le dijo a su banda que te asesinen lentamente."
      );
      alert("Perdiste, triste final del juego.");
      break
    case "2":
      alert(
        "El señor te dio una oportunidad, eres libre pero tienes una deuda que saldar, lo unico malo es que te van a supervisar, tienes que obtener $4000 dólares."
      );
      alert("Has logrado retirarte con una amenaza. Fin del capitulo.")
      break;
    case "3":
      alert(
        "Intentaste atacarlo pero te mataron con un arma de fuego, has perdido la vida"
      );
      alert("Perdiste, triste final del juego.");
      break
    default:
      alert("Opción no válida")
      gameSecondTryAgain()
      break
  }
}

function menuTryAgain() {
  while (true) {
    const principalOptions =
      "Menu: \n" + "1. Cambiar tu nombre \n" + "2. Iniciar juego\n";

    let userMenuChoice = prompt(principalOptions);

    switch (userMenuChoice) {
      case "1":
        username = prompt("Coloca un nuevo nombre")?.trim();
        usernameValidate();
        break

      case "2":
        alert(username + " estás a punto de iniciar el juego...");
        playGame();
        break

      default:
        alert(
          "Error, no es una opción correcta o algo válido. Vuelve a intentarlo."
        );
        break
    }
  }
}

function gameFirstTryAgain() {
  while(true) {
    const gameFirstOptions =
    "Elige una opción:\n" + "1. Escapar\n" + "2. Pelear\n" + "3. Pedir ayuda\n";

  let userGameFirstChoice = prompt(gameFirstOptions);

  switch (userGameFirstChoice) {
    case "1":
      alert(
        "Has intentado escapar, pero lamentablemente te atraparon y terminaste perdiendo la vida."
      );
      alert("Perdiste, triste final del juego.");
      break;
    case "2":
      alert(
        "Te atreviste a pelear delante de un criminal, has logrado dejarlo inconsciente y pudiste escapar."
      );
      alert("Lo lográste!");
      break;
    case "3":
      alert(
        "Intentaste pedir ayuda, pero la calle estuvo muy silenciosa y nadie te ayudó, terminaste perdiendo la vida por la desesperación y poco control ante la situación"
      );
      alert("Perdiste, triste final del juego.");
      break
    default:
      alert("Opción no válida")
      break
  }
  }
}

function gameSecondTryAgain() {
  while(true) {
    const gameSecondOptions =
    "Elige una opción:\n" + "1. Intentar agredirlo y rechazar la oferta\n" + "2. Rogarle que te deje libre\n" + "3. Intentar atacarlo\n";

  let userGameSecondChoice = prompt(gameSecondOptions);

  switch (userGameSecondChoice) {
    case "1":
      alert(
        "Al intentarlo, el señor terminó riendose de ti, y le dijo a su banda que te asesinen lentamente con tortura."
      );
      alert("Perdiste, triste final del juego.");
      break
    case "2":
      alert(
        "El señor te dio una oportunidad, eres libre pero tienes una deuda que saldar, lo unico malo es que te van a supervisar, tienes que obtener $4000 dólares."
      );
      alert("Has logrado retirarte con una amenaza. Fin del capitulo.")
      break;
    case "3":
      alert(
        "Intentaste atacarlo pero te mataron con un arma de fuego, has perdido la vida"
      );
      alert("Perdiste, triste final del juego.");
      break
    default:
      alert("Opción no válida")
      gameSecondTryAgain()
      break
  }
}
}