type Jugada = "piedra" | "papel" | "tijeras";
type Game = {
  myPlay: Jugada;
  computerPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    winner: "",
    playerScore: 0,
    computerScore: 0,
    result: "",
  },
  listeners: [],
  init() {
    const localData = localStorage.getItem("saved-plays");
    if (localData == null || localData == "" || localData == "null") {
      return (this.data = {
        currentGame: {
          myPlay: "",
          computerPlay: "",
        },
        winner: "",
        playerScore: 0,
        computerScore: 0,
        result: "",
      });
    } else {
      this.data = JSON.parse(localData);
    }

    this.setState(JSON.parse(localData));
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    localStorage.setItem("saved-plays", JSON.stringify(newState));
    this.data = newState;
    for (const listener of this.listeners) {
      listener();
    }
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  //método score para actualizar el score

  scoreResult(winner) {
    const currentState = this.getState();
    if (winner === "player") {
      currentState.playerScore++;
    } else if (winner === "computer") {
      currentState.computerScore++;
    }
    this.setState(currentState);
  },
  setMove(move: Jugada) {
    const currentState = state.getState();
    currentState.currentGame.myPlay = move;
    this.setState(currentState);
  },
  setComputerMove(move) {
    const currentState = state.getState();
    currentState.currentGame.computerPlay = move;
    this.setState(currentState);
  },
  whoWin(myPlay: Jugada, computerPlay: Jugada) {
    const ganeConPiedra =
      state.data.currentGame.myPlay == "piedra" &&
      state.data.currentGame.computerPlay == "tijeras";
    const ganeConPapel =
      state.data.currentGame.myPlay == "papel" &&
      state.data.currentGame.computerPlay == "piedra";
    const ganeConTijeras =
      state.data.currentGame.myPlay == "tijeras" &&
      state.data.currentGame.computerPlay == "papel";
    const gane = [ganeConPiedra, ganeConPapel, ganeConTijeras].includes(true);
    if (gane == true) {
      state.data.winner = "player";
      state.data.result = "Ganastes";
    }

    const perdioConPiedra =
      state.data.currentGame.myPlay == "tijeras" &&
      state.data.currentGame.computerPlay == "piedra";
    const perdioConPapel =
      state.data.currentGame.myPlay == "piedra" &&
      state.data.currentGame.computerPlay == "papel";
    const perdioConTijeras =
      state.data.currentGame.myPlay == "papel" &&
      state.data.currentGame.computerPlay == "tijeras";
    const perdioContraNadaPiedra =
      state.data.currentGame.myPlay == "" &&
      state.data.currentGame.computerPlay == "piedra";
    const perdioContraNadaTijeras =
      state.data.currentGame.myPlay == "" &&
      state.data.currentGame.computerPlay == "tijeras";
    const perdioContraNadaPapel =
      state.data.currentGame.myPlay == "" &&
      state.data.currentGame.computerPlay == "papel";
    const perdio = [
      perdioConPiedra,
      perdioConPapel,
      perdioConTijeras,
      perdioContraNadaPiedra,
      perdioContraNadaTijeras,
      perdioContraNadaPapel,
    ].includes(true);
    if (perdio == true) {
      state.data.winner = "computer";
      state.data.result = "Perdistes";
    }
    if (gane == false && perdio == false) {
      state.data.winner = "";
      state.data.result = "Empate";
    }
  },
};

export { state };
