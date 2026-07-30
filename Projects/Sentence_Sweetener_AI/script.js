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
        .catch(err => console.error(err))