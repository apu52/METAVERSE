import { giveBishopHighlightIds } from "../Helper/commonHelper.js";
import { checkSquareCaptureId } from "../Helper/commonHelper.js";
import { checkPieceOfOpponentOnElement } from "../Helper/commonHelper.js";
import { checkWeatherPieceExistsOrNot } from "../Helper/commonHelper.js";
import { giveRookHighlightIds } from "../Helper/commonHelper.js";
import { giveKingHighlightIds, giveKnightHighlightIds } from "../Helper/commonHelper.js";
import { giveQueenHighlightIds } from "../Helper/commonHelper.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { clearHightlight } from "../Render/main.js";
import { selfHighlight } from "../Render/main.js";
import { globalStateRender } from "../Render/main.js";
import { globalState, keySquareMapper } from "../index.js";

// hightlighted or not => state
let hightlight_state = false;
let inTurn = "white";

function changeTurn(){
  inTurn = inTurn === "white" ? "black" : "white";
}

function captureInTurn(square){
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  return;
}

// move element to square with id
function moveElement(piece, id) {
  changeTurn();
  const flatData = globalState.flat();
  flatData.forEach((el) => {
    if (el.id == piece.current_position) {
      delete el.piece;
    }
    if (el.id == id) {
      el.piece = piece;
    }
  });
  clearHightlight();
  const previousPiece = document.getElementById(piece.current_position);
  previousPiece.classList.remove("highlightYellow");
  const currentPiece = document.getElementById(id);
  currentPiece.innerHTML = previousPiece.innerHTML;
  previousPiece.innerHTML = "";
  piece.current_position = id;
  // globalStateRender();
}

// current self-highlighted square state
let selfHighlightState = null;

// in move state or not
let moveState = null;

// local function that will clear highlight with state
function clearHighlightLocal() {
  clearHightlight();
  hightlight_state = false;
}

// move piece from x-square to y-square
function movePieceFromXToY(from, to) {
  to.piece = from.piece;
  from.piece = null;
  globalStateRender();
}

// white pawn event
function whitePawnClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = null;

  // on initial position movement
  if (current_pos[1] == "2") {
    hightlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
      `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];
  } else {
    hightlightSquareIds = [`${current_pos[0]}${Number(current_pos[1]) + 1}`];
  }

  hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  // capture id logic
  const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${
    Number(current_pos[1]) + 1
  }`;
  const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${
    Number(current_pos[1]) + 1
  }`;

  let captureIds = [col1, col2];
  // captureIds = checkSquareCaptureId(captureIds);

  captureIds.forEach((element) => {
    checkPieceOfOpponentOnElement(element, "white");
  });

  globalStateRender();
}

// white bishop event
function whiteBishopClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveBishopHighlightIds(current_pos);
  let temp = [];

  const { bottomLeft, topLeft, bottomRight, topRight } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottomLeft));
  result.push(checkSquareCaptureId(topLeft));
  result.push(checkSquareCaptureId(bottomRight));
  result.push(checkSquareCaptureId(topRight));

  // insert into temp
  temp.push(bottomLeft);
  temp.push(topLeft);
  temp.push(bottomRight);
  temp.push(topRight);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("white")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "white")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// black bishop event
function blackBishopClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveBishopHighlightIds(current_pos);
  let temp = [];

  const { bottomLeft, topLeft, bottomRight, topRight } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottomLeft));
  result.push(checkSquareCaptureId(topLeft));
  result.push(checkSquareCaptureId(bottomRight));
  result.push(checkSquareCaptureId(topRight));

  // insert into temp
  temp.push(bottomLeft);
  temp.push(topLeft);
  temp.push(bottomRight);
  temp.push(topRight);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("black")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "black")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// black rook
function blackRookClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveRookHighlightIds(current_pos);
  let temp = [];

  const { bottom, top, right, left } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottom));
  result.push(checkSquareCaptureId(top));
  result.push(checkSquareCaptureId(right));
  result.push(checkSquareCaptureId(left));

  // insert into temp
  temp.push(bottom);
  temp.push(top);
  temp.push(right);
  temp.push(left);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("black")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "black")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// white rook click
function whiteRookClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveRookHighlightIds(current_pos);
  let temp = [];

  const { bottom, top, right, left } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottom));
  result.push(checkSquareCaptureId(top));
  result.push(checkSquareCaptureId(right));
  result.push(checkSquareCaptureId(left));

  // insert into temp
  temp.push(bottom);
  temp.push(top);
  temp.push(right);
  temp.push(left);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });


  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("white")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "white")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// handle knight click
function whiteKnightClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveKnightHighlightIds(current_pos);
  // const { bottom, top, right, left } = hightlightSquareIds;
  // let temp = [];


  // let result = [];
  // result.push(checkSquareCaptureId(bottom));
  // result.push(checkSquareCaptureId(top));
  // result.push(checkSquareCaptureId(right));
  // result.push(checkSquareCaptureId(left));

  // // insert into temp
  // temp.push(bottom);
  // temp.push(top);
  // temp.push(right);
  // temp.push(left);

  // // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  // hightlightSquareIds = result.flat();

  // hightlightSquareIds.forEach((hightlight) => {
  //   const element = keySquareMapper[hightlight];
  //   element.highlight = true;
  // });

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });

  let captureIds = [];

  // for (let index = 0; index < temp.length; index++) {
  //   const arr = temp[index];

  //   for (let j = 0; j < arr.length; j++) {
  //     const element = arr[j];

  //     let checkPieceResult = checkWeatherPieceExistsOrNot(element);
  //     if (
  //       checkPieceResult &&
  //       checkPieceResult.piece &&
  //       checkPieceResult.piece.piece_name.toLowerCase().includes("white")
  //     ) {
  //       break;
  //     }

  //     if (checkPieceOfOpponentOnElement(element, "white")) {
  //       break;
  //     }
  //   }
  // }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  hightlightSquareIds.forEach((element) => {
    checkPieceOfOpponentOnElement(element, "white");
  });

  globalStateRender();
}

// handle knight click
function blackKnightClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveKnightHighlightIds(current_pos);
  // const { bottom, top, right, left } = hightlightSquareIds;
  // console.log(hightlightSquareIds);
  // let temp = [];


  // let result = [];
  // result.push(checkSquareCaptureId(bottom));
  // result.push(checkSquareCaptureId(top));
  // result.push(checkSquareCaptureId(right));
  // result.push(checkSquareCaptureId(left));

  // // insert into temp
  // temp.push(bottom);
  // temp.push(top);
  // temp.push(right);
  // temp.push(left);

  // // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  // hightlightSquareIds = result.flat();

  // hightlightSquareIds.forEach((hightlight) => {
  //   const element = keySquareMapper[hightlight];
  //   element.highlight = true;
  // });

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });

 

  let captureIds = [];

  // for (let index = 0; index < temp.length; index++) {
  //   const arr = temp[index];

  //   for (let j = 0; j < arr.length; j++) {
  //     const element = arr[j];

  //     let checkPieceResult = checkWeatherPieceExistsOrNot(element);
  //     if (
  //       checkPieceResult &&
  //       checkPieceResult.piece &&
  //       checkPieceResult.piece.piece_name.toLowerCase().includes("white")
  //     ) {
  //       break;
  //     }

  //     if (checkPieceOfOpponentOnElement(element, "white")) {
  //       break;
  //     }
  //   }
  // }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  hightlightSquareIds.forEach((element) => {
    checkPieceOfOpponentOnElement(element, "black");
  });

  globalStateRender();
}

// white queen event
function whiteQueenClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveQueenHighlightIds(current_pos);
  let temp = [];

  const { bottomLeft, topLeft, bottomRight, topRight,top, right, left, bottom } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottomLeft));
  result.push(checkSquareCaptureId(topLeft));
  result.push(checkSquareCaptureId(bottomRight));
  result.push(checkSquareCaptureId(topRight));
  result.push(checkSquareCaptureId(top));
  result.push(checkSquareCaptureId(right));
  result.push(checkSquareCaptureId(bottom));
  result.push(checkSquareCaptureId(left));

  // insert into temp
  temp.push(bottomLeft);
  temp.push(topLeft);
  temp.push(bottomRight);
  temp.push(topRight);
  temp.push(top);
  temp.push(right);
  temp.push(bottom);
  temp.push(left);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("white")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "white")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// white king event
function whiteKingClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveKingHighlightIds(current_pos);
  let temp = [];

  const { bottomLeft, topLeft, bottomRight, topRight,top, right, left, bottom } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottomLeft));
  result.push(checkSquareCaptureId(topLeft));
  result.push(checkSquareCaptureId(bottomRight));
  result.push(checkSquareCaptureId(topRight));
  result.push(checkSquareCaptureId(top));
  result.push(checkSquareCaptureId(right));
  result.push(checkSquareCaptureId(bottom));
  result.push(checkSquareCaptureId(left));

  // insert into temp
  temp.push(bottomLeft);
  temp.push(topLeft);
  temp.push(bottomRight);
  temp.push(topRight);
  temp.push(top);
  temp.push(right);
  temp.push(bottom);
  temp.push(left);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("white")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "white")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}
// white king event
function blackKingClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;

  let hightlightSquareIds = giveKingHighlightIds(current_pos);
  let temp = [];

  const { bottomLeft, topLeft, bottomRight, topRight,top, right, left, bottom } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottomLeft));
  result.push(checkSquareCaptureId(topLeft));
  result.push(checkSquareCaptureId(bottomRight));
  result.push(checkSquareCaptureId(topRight));
  result.push(checkSquareCaptureId(top));
  result.push(checkSquareCaptureId(right));
  result.push(checkSquareCaptureId(bottom));
  result.push(checkSquareCaptureId(left));

  // insert into temp
  temp.push(bottomLeft);
  temp.push(topLeft);
  temp.push(bottomRight);
  temp.push(topRight);
  temp.push(top);
  temp.push(right);
  temp.push(bottom);
  temp.push(left);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("black")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "black")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// black queen event
function blackQueenClick(square) {
  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  // clear all highlights
  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = giveQueenHighlightIds(current_pos);
  let temp = [];

  const { bottomLeft, topLeft, bottomRight, topRight,top, right, left, bottom } = hightlightSquareIds;

  let result = [];
  result.push(checkSquareCaptureId(bottomLeft));
  result.push(checkSquareCaptureId(topLeft));
  result.push(checkSquareCaptureId(bottomRight));
  result.push(checkSquareCaptureId(topRight));
  result.push(checkSquareCaptureId(top));
  result.push(checkSquareCaptureId(right));
  result.push(checkSquareCaptureId(bottom));
  result.push(checkSquareCaptureId(left));

  // insert into temp
  temp.push(bottomLeft);
  temp.push(topLeft);
  temp.push(bottomRight);
  temp.push(topRight);
  temp.push(top);
  temp.push(right);
  temp.push(bottom);
  temp.push(left);

  // hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);
  hightlightSquareIds = result.flat();

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  let captureIds = [];

  for (let index = 0; index < temp.length; index++) {
    const arr = temp[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      let checkPieceResult = checkWeatherPieceExistsOrNot(element);
      if (
        checkPieceResult &&
        checkPieceResult.piece &&
        checkPieceResult.piece.piece_name.toLowerCase().includes("black")
      ) {
        break;
      }

      if (checkPieceOfOpponentOnElement(element, "black")) {
        break;
      }
    }
  }

  // let captureIds = [col1, col2];
  // console.log(captureIds);
  // // captureIds = checkSquareCaptureId(captureIds);

  // captureIds.forEach((element) => {
  //   checkPieceOfOpponentOnElement(element, "white");
  // });

  globalStateRender();
}

// black pawn function
function blackPawnClick(square) {
  // clear board for any previous highlight

  const piece = square.piece;

  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  if (square.captureHighlight) {
    // movePieceFromXToY();
    moveElement(selfHighlightState, piece.current_position);
    clearPreviousSelfHighlight(selfHighlightState);
    clearHighlightLocal();
    return;
  }

  clearPreviousSelfHighlight(selfHighlightState);
  clearHighlightLocal();

  // highlighting logic
  selfHighlight(piece);
  hightlight_state = true;
  selfHighlightState = piece;

  // add piece as move state
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  let hightlightSquareIds = null;

  // on initial position movement
  if (current_pos[1] == "7") {
    hightlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) - 1}`,
      `${current_pos[0]}${Number(current_pos[1]) - 2}`,
    ];
  } else {
    hightlightSquareIds = [`${current_pos[0]}${Number(current_pos[1]) - 1}`];
  }

  hightlightSquareIds = checkSquareCaptureId(hightlightSquareIds);

  hightlightSquareIds.forEach((hightlight) => {
    const element = keySquareMapper[hightlight];
    element.highlight = true;
  });



  // capture logic id
  const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${
    Number(current_pos[1]) - 1
  }`;
  const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${
    Number(current_pos[1]) - 1
  }`;

  let captureIds = [col1, col2];
  // captureIds = checkSquareCaptureId(captureIds);

  captureIds.forEach((element) => {
    checkPieceOfOpponentOnElement(element, "black");
  });

  globalStateRender();
}

function clearPreviousSelfHighlight(piece) {
  if (piece) {
    document
      .getElementById(piece.current_position)
      .classList.remove("highlightYellow");
    // console.log(piece);
    // selfHighlight = false;
    selfHighlightState = null;
  }
}

// // black pawn event

function GlobalEvent() {
  ROOT_DIV.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
    
      const square = keySquareMapper[clickId];      

      if((square.piece.piece_name.includes("WHITE") && inTurn === "black")
      || (square.piece.piece_name.includes("BLACK") && inTurn === "white")){
        captureInTurn(square);
        return;
      }

      if (square.piece.piece_name == "WHITE_PAWN") {
        if(inTurn == "white")
         whitePawnClick(square);
      } else if (square.piece.piece_name == "BLACK_PAWN") {
        if(inTurn == "black")
        blackPawnClick(square);
      } else if (square.piece.piece_name == "WHITE_BISHOP") {
         if(inTurn == "white")
        whiteBishopClick(square);
      } else if (square.piece.piece_name == "BLACK_BISHOP") {
        if(inTurn == "black")
        blackBishopClick(square);
      } else if (square.piece.piece_name == "BLACK_ROOK") {
        if(inTurn == "black")
        blackRookClick(square);
      } else if (square.piece.piece_name == "WHITE_ROOK") {
         if(inTurn == "white")
        whiteRookClick(square);
      } else if (square.piece.piece_name == "WHITE_KNIGHT") {
         if(inTurn == "white")
        whiteKnightClick(square);
      }
       else if (square.piece.piece_name == "BLACK_KNIGHT") {
        if(inTurn == "black")
        blackKnightClick(square);
      }
      else if (square.piece.piece_name == "WHITE_QUEEN") {
         if(inTurn == "white")
        whiteQueenClick(square);
      }
      else if (square.piece.piece_name == "BLACK_QUEEN") {
        if(inTurn == "black")
        blackQueenClick(square);
      }
      else if (square.piece.piece_name == "WHITE_KING") {
         if(inTurn == "white")
        whiteKingClick(square);
      }
      else if (square.piece.piece_name == "BLACK_KING") {
        if(inTurn == "black")
        blackKingClick(square);
      }
    } else {
      const childElementsOfclickedEl = Array.from(event.target.childNodes);

      if (
        childElementsOfclickedEl.length == 1 ||
        event.target.localName == "span"
      ) {
        if (event.target.localName == "span") {
          clearPreviousSelfHighlight(selfHighlightState);
          const id = event.target.parentNode.id;
          moveElement(moveState, id);
          moveState = null;
        } else {
          clearPreviousSelfHighlight(selfHighlightState);
          const id = event.target.id;
          moveElement(moveState, id);
          moveState = null;
        }
      } else {
        // clear highlights
        clearHighlightLocal();
        clearPreviousSelfHighlight(selfHighlightState);
      }
    }
  });
}

export { GlobalEvent, movePieceFromXToY };
