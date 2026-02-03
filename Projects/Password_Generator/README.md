# 🔐 Password Generator

A modern, secure, and user-friendly password generator web application built with vanilla HTML, CSS, and JavaScript.

## 📸 Preview

![Password Generator Preview](screenshot.png)

## ✨ Features

- **Customizable Password Length**: Generate passwords between 8 to 32 characters
- **Multiple Character Types**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*)
- **Real-time Strength Indicator**: Visual feedback on password strength
- **One-Click Copy**: Easy copy to clipboard functionality
- **Responsive Design**: Works perfectly on all devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Secure Generation**: Uses cryptographically secure random generation

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, gradients, and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for functionality
- **Clipboard API**: Modern clipboard access

## 🎯 How to Use

1. **Adjust Password Length**: Use the slider to set your desired password length (8-32 characters)
2. **Select Character Types**: Check/uncheck the boxes to include:
   - Uppercase letters
   - Lowercase letters
   - Numbers
   - Symbols
3. **Generate Password**: Click the "Generate Password" button
4. **Copy to Clipboard**: Click the copy icon to copy the password
5. **Check Strength**: View the password strength indicator (Weak, Medium, Strong)

## 📦 Installation

1. Clone or download this project
2. Open `index.html` in your web browser
3. Start generating secure passwords!

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project folder
cd Password_Generator

# Open in browser
open index.html
```

## 💻 Code Structure

```
Password_Generator/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Password generation logic
└── README.md       # Documentation
```

## 🔒 Security Features

- Uses `Math.random()` for generating random characters
- Ensures all selected character types are included in the password
- No password is stored or transmitted anywhere
- All processing happens locally in the browser

## 🎨 Customization

You can easily customize the appearance by modifying the CSS variables:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Strength colors */
.strength-weak { background: #ef4444; }
.strength-medium { background: #f59e0b; }
.strength-strong { background: #10b981; }
```

## 🌟 Future Enhancements

- [ ] Add password history (optional, with user consent)
- [ ] Pronounceable password option
- [ ] Password strength checker for user-entered passwords
- [ ] Dark mode toggle
- [ ] Export passwords to file
- [ ] Password blacklist checker

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](../LICENSE).

## 👨‍💻 Author

Created with ❤️ for the METAVERSE project

## 🙏 Acknowledgments

- Icons from [Feather Icons](https://feathericons.com/)
- Inspired by modern password generator tools
- Part of the METAVERSE Front-End Playground

---

**Note**: For maximum security, always use unique passwords for different accounts and consider using a password manager to store them securely.
