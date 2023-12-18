import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

// function globalStateRender (this function is usefull to render pieces from globalStateData) => use when updating globalState
function globalStateRender() {
  globalState.forEach((row) => {
    row.forEach((element) => {
      if (element.highlight) {
        const hightlightSpan = document.createElement("span");
        hightlightSpan.classList.add("highlight");
        document.getElementById(element.id).appendChild(hightlightSpan);
        // } else if (element.highlight === null) {
      } else {
        const el = document.getElementById(element.id);
        const highlights = Array.from(el.getElementsByTagName("span"));
        highlights.forEach((element) => {
          el.removeChild(element);
        });
        // document.getElementById(element.id).innerHTML = "";
      }
    });
  });
}


function selfHighlight(piece) {
  document
    .getElementById(piece.current_position)
    .classList.add("highlightYellow");
}

// use when you want to render pieces on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      // if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);

        // create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        // insert piece into square element
        squareEl.appendChild(piece);
      }
    });
  });
}

// use when you want to render board for first time when game start
function initGameRender(data) {
  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");

      // render blackpawn
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
      }

      // render black rook
      if (square.id == "h8" || square.id == "a8") {
        square.piece = piece.blackRook(square.id);
      }

      // render black knight
      if (square.id == "b8" || square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
      }
      // render black knight
      if (square.id == "c8" || square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
      }
      // render black knight
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
      }
      // render black knight
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
      }

      // render white pawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
      }
      // render white queen
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
      }

      // render white king
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
      }

      // render white rook
      if (square.id == "h1" || square.id == "a1") {
        square.piece = piece.whiteRook(square.id);
      }

      // render black knight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
      }

      // render black bishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
      }

      rowEl.appendChild(squareDiv);
    });
    rowEl.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEl);
  });

  pieceRender(data);
}

// render hightlight circle
function renderHighlight(squareId) {
  const hightlightSpan = document.createElement("span");
  hightlightSpan.classList.add("highlight");
  document.getElementById(squareId).appendChild(hightlightSpan);
}

// clear all highlights from the board
function clearHightlight() {
  const flatData = globalState.flat();

  flatData.forEach((el) => {
    if (el.captureHighlight) {
      document.getElementById(el.id).classList.remove("captureColor");
      el.captureHighlight = false;
    }

    if (el.highlight) {
      el.highlight = null;
    }

    globalStateRender();
  });
}

export {
  initGameRender,
  renderHighlight,
  clearHightlight,
  selfHighlight,
  globalStateRender,
};
