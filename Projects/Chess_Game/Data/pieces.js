// black pieces
function blackPawn(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/pawn.png",
    piece_name: "BLACK_PAWN",
  };
}
function blackBishop(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/bishop.png",
    piece_name: "BLACK_BISHOP",
  };
}
function blackKnight(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/knight.png",
    piece_name: "BLACK_KNIGHT",
  };
}
function blackKing(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/king.png",
    piece_name: "BLACK_KING",
  };
}
function blackQueen(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/queen.png",
    piece_name: "BLACK_QUEEN",
  };
}
function blackRook(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/rook.png",
    piece_name: "BLACK_ROOK",
  };
}

// white pieces
function whitePawn(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/pawn.png",
    piece_name: "WHITE_PAWN",
  };
}
function whiteRook(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/rook.png",
    piece_name: "WHITE_ROOK",
  };
}
function whiteKnight(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/knight.png",
    piece_name: "WHITE_KNIGHT",
  };
}
function whiteBishop(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/bishop.png",
    piece_name: "WHITE_BISHOP",
  };
}
function whiteQueen(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/queen.png",
    piece_name: "WHITE_QUEEN",
  };
}
function whiteKing(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/king.png",
    piece_name: "WHITE_KING",
  };
}

export {
  blackPawn,
  blackBishop,
  blackKing,
  blackQueen,
  blackKnight,
  blackRook,
  whitePawn,
  whiteBishop,
  whiteKing,
  whiteQueen,
  whiteKnight,
  whiteRook,
};
