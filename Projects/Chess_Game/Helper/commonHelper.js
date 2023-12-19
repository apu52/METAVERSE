import { globalState } from "../index.js";
import { keySquareMapper } from "../index.js";

// function to check if piece exists of opponent
function checkPieceOfOpponentOnElement(id, color) {
  const opponentColor = color === "white" ? "BLACK" : "WHITE";

  const element = keySquareMapper[id];

  if (!element) return false;

  if (element.piece && element.piece.piece_name.includes(opponentColor)) {
    const el = document.getElementById(id);
    el.classList.add("captureColor");
    element.captureHighlight = true;
    return true;
  }

  return false;
}

// function to check weather piece exists or not by square-id
function checkWeatherPieceExistsOrNot(squareId) {
  const square = keySquareMapper[squareId];

  if (square.piece) {
    return square;
  } else {
    return false;
  }
}

// function to check capture id square
function checkSquareCaptureId(array) {
  let returnArray = [];

  for (let index = 0; index < array.length; index++) {
    const squareId = array[index];
    const square = keySquareMapper[squareId];

    if (square.piece) {
      break;
    }
    returnArray.push(squareId);
  }

  return returnArray;
}

// function to give highlight ids for bishop
function giveBishopHighlightIds(id) {
  let finalReturnArray = [];

  // will give top left id
  function topLeft(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (alpha != "a" && num != 8) {
      alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
      num = num + 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  // find bottom left ids
  function bottomLeft(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (alpha != "a" && num != 1) {
      alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
      num = num - 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  // find top right ids
  function topRight(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (alpha != "h" && num != 8) {
      alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
      num = num + 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  // find bottom right ids
  function bottomRight(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (alpha != "h" && num != 1) {
      alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
      num = num - 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  return {
    topLeft: topLeft(id),
    bottomLeft: bottomLeft(id),
    topRight: topRight(id),
    bottomRight: bottomRight(id),
  };
}

// function to give highlight ids for rook
function giveRookHighlightIds(id) {
  let finalReturnArray = [];

  // will give top left id
  function top(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (num != 8) {
      // alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
      num = num + 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  // find bottom left ids
  function bottom(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (num != 1) {
      // alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
      num = num - 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  // find top right ids
  function right(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (alpha != "h") {
      alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
      // num = num + 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  // find bottom right ids
  function left(id) {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    while (alpha != "a") {
      alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
      // num = num + 1;
      resultArray.push(`${alpha}${num}`);
    }

    return resultArray;
  }

  return {
    top: top(id),
    bottom: bottom(id),
    right: right(id),
    left: left(id),
  };
}

// function to give highlight ids for knight
function giveKnightHighlightIds(id) {

  if (!id) {
    return;
  }

  function left() {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    let temp = 0;

    while (alpha != "a") {
      if (temp == 2) {
        break;
      }

      alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
      resultArray.push(`${alpha}${num}`);
      temp += 1;
    }

    if (resultArray.length == 2) {
      let finalReturnArray = [];

      const lastElement = resultArray[resultArray.length - 1];
      let alpha = lastElement[0];
      let number = Number(lastElement[1]);
      if (number < 8) {
        finalReturnArray.push(`${alpha}${number + 1}`);
      }
      if (number > 1) {
        finalReturnArray.push(`${alpha}${number - 1}`);
      }
      return finalReturnArray
    } else {
      return [];
    }
  }

  function top() {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    let temp = 0;

    while (num != "8") {
      if (temp == 2) {
        break;
      }

      num = num + 1;
      // alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
      resultArray.push(`${alpha}${num}`);
      temp += 1;
    }

    if (resultArray.length == 2) {
      let finalReturnArray = [];

      const lastElement = resultArray[resultArray.length - 1];
      let alpha = lastElement[0];
      let number = Number(lastElement[1]);
      if (alpha != "h") {
        let alpha2 = String.fromCharCode(alpha.charCodeAt(0) + 1);
        finalReturnArray.push(`${alpha2}${number}`);
      }
      if (alpha != "a") {
        let alpha2 = String.fromCharCode(alpha.charCodeAt(0) - 1);
        finalReturnArray.push(`${alpha2}${number}`);
      }
      // resultArray.push(`${Number(lastElement[1])}`);

      return finalReturnArray;
    } else {
      return [];
    }
  }

  function right() {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    let temp = 0;

    while (alpha != "h") {
      if (temp == 2) {
        break;
      }

      alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
      resultArray.push(`${alpha}${num}`);
      temp += 1;
    }

    if (resultArray.length == 2) {
      let finalReturnArray = [];

      const lastElement = resultArray[resultArray.length - 1];
      let alpha = lastElement[0];
      let number = Number(lastElement[1]);
      if (number < 8) {
        finalReturnArray.push(`${alpha}${number + 1}`);
      }
      if (number > 1) {
        finalReturnArray.push(`${alpha}${number - 1}`);
      }
      // resultArray.push(`${Number(lastElement[1])}`);

      return finalReturnArray;
    } else {
      return [];
    }
  }

  function bottom() {
    let alpha = id[0];
    let num = Number(id[1]);
    let resultArray = [];

    let temp = 0;

    while (num != "1") {
      if (temp == 2) {
        break;
      }

      num = num - 1;
      // alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
      resultArray.push(`${alpha}${num}`);
      temp += 1;
    }

    if (resultArray.length == 2) {
      let finalReturnArray = [];

      const lastElement = resultArray[resultArray.length - 1];
      let alpha = lastElement[0];
      let number = Number(lastElement[1]);
      if (alpha != "h") {
        let alpha2 = String.fromCharCode(alpha.charCodeAt(0) + 1);
        finalReturnArray.push(`${alpha2}${number}`);
      }
      if (alpha != "a") {
        let alpha2 = String.fromCharCode(alpha.charCodeAt(0) - 1);
        finalReturnArray.push(`${alpha2}${number}`);
      }
      // resultArray.push(`${Number(lastElement[1])}`);

      return finalReturnArray;
    } else {
      return [];
    }
  }

  return [...top(), ...bottom(), ...left(), ...right()];
}

// function to give highlight ids for queen
function giveQueenHighlightIds(id){
  const rookMoves = giveRookHighlightIds(id)
  const bishopMoves = giveBishopHighlightIds(id);
  return {
    "left": rookMoves.left,
    "right" :rookMoves.right,
    "top" : rookMoves.top,
    "bottom" : rookMoves.bottom,
    "topLeft": bishopMoves.topLeft,
    "topRight": bishopMoves.topRight,
    "bottomLeft" : bishopMoves.bottomLeft,
    "bottomRight" : bishopMoves.bottomRight
  }
}

function giveKingHighlightIds(id){
  const rookMoves = giveRookHighlightIds(id)
  const bishopMoves = giveBishopHighlightIds(id);
  const returnResult =  {
    "left": rookMoves.left,
    "right" :rookMoves.right,
    "top" : rookMoves.top,
    "bottom" : rookMoves.bottom,
    "topLeft": bishopMoves.topLeft,
    "topRight": bishopMoves.topRight,
    "bottomLeft" : bishopMoves.bottomLeft,
    "bottomRight" : bishopMoves.bottomRight
  }

  for (const key in returnResult) {
    if (Object.hasOwnProperty.call(returnResult, key)) {
      const element = returnResult[key];

      if(element.length != 0){
        returnResult[key] = new Array(element[0]);
      }
      
    }
  }

  return returnResult;
}

export {
  checkPieceOfOpponentOnElement,
  checkSquareCaptureId,
  giveRookHighlightIds,
  giveQueenHighlightIds,
  giveKingHighlightIds,
  giveKnightHighlightIds,
  checkWeatherPieceExistsOrNot,
  giveBishopHighlightIds,
};
