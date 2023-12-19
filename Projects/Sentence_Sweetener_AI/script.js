async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gagan3012/pickuplines",
    {
      headers: { 
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

function generateFunnyLine() {
    const userInput = document.getElementById('userInput').value;

    console.log("User Input:", userInput);

    if (userInput.trim() !== '') {
        query({ inputs: userInput }).then((response) => {
            console.log("API Response:", response);
            displayResult(response);
        });
    } else {
        alert('Please enter a sentence.');
    }
}

function displayResult(response) {
  const resultContainer = document.getElementById('result');
  const generatedText = response[0].generated_text;

  // Find the position of the first newline character
  const newlineIndex = generatedText.indexOf('\n');

  // Extract the substring before the newline character, or use the entire string if no newline is found
  const displayText = newlineIndex !== -1 ? generatedText.substring(0, newlineIndex-2) : generatedText;

  resultContainer.innerHTML = `<p><strong>Generated Line:</strong> ${displayText}</p>`;
}

