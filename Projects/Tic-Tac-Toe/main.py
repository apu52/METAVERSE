import tkinter as tk
from tkinter import messagebox

# Initialize the game variables
current_player = "X"
board = [""] * 9
game_over = False

# Check for a win or a draw
def check_win():
    global game_over
    for combo in [(0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6)]:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != "":
            game_over = True
            messagebox.showinfo("Tic-Tac-Toe", f"Player {board[combo[0]]} wins!")
            return

    if "" not in board:
        game_over = True
        messagebox.showinfo("Tic-Tac-Toe", "It's a draw!")

# Handle player moves
def player_move(idx):
    global current_player
    if not game_over and board[idx] == "":
        board[idx] = current_player
        buttons[idx].config(text=current_player)
        current_player = "O" if current_player == "X" else "X"
        check_win()

# Create the main window
window = tk.Tk()
window.title("Tic-Tac-Toe")

# Create buttons for the game board
buttons = []
for i in range(9):
    button = tk.Button(window, text="", width=10, height=3, command=lambda i=i: player_move(i))
    button.grid(row=i // 3, column=i % 3)
    buttons.append(button)

# Run the application
window.mainloop()
