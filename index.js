function cutUpText(
  inputText,
  lengthThreshold = 100,
  inclusionProbability = 0.5
) {
  // Split the input text into sentences using a regular expression
  let sentences = inputText.split(/(?<=[.!?])\s+/);

  // Filter sentences based on length and random inclusion
  let selectedSentences = sentences.filter((sentence) => {
    const isLongEnough = sentence.length >= lengthThreshold;
    const shouldInclude = Math.random() < inclusionProbability;
    return isLongEnough || shouldInclude;
  });

  // Shuffle the selected sentences using the Fisher-Yates algorithm
  for (let i = selectedSentences.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedSentences[i], selectedSentences[j]] = [
      selectedSentences[j],
      selectedSentences[i],
    ];
  }

  // Join the shuffled sentences back into a single string
  return selectedSentences.join(" ");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cutButton").addEventListener("click", function () {
    let originalText = document.getElementById("inputText").value;
    let cutUpResult = cutUpText(originalText);
    document.getElementById("outputText").textContent = cutUpResult;
  });
});
