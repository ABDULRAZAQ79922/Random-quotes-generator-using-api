
const quoteEl = document.querySelector(".quote"),
authorEl = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;



const getQuote = async () => {
  try {
    quoteEl.classList.add("loading");
    quoteEl.innerText = "Loading Quote...";
    authorEl.innerText = "Loading Auther";
    const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness");
    const data = await response.json();
  
    quoteEl.innerText = result.text;
    authorEl.innerText = result.author;
      quoteEl.classList.remove("loading");

    const quote = data.content;
    const author = data.author || 'Unknown';
  
    quoteEl.textContent = quote;
    authorEl.textContent = author;
  } catch (error) {
    console.log(error);
    quoteEl.textContent = 'Hardwork is the Success Key of Success';
    authorEl.textContent = '-Unknown';
    quoteEl.textContent = 'Energy Nor be Created Neither be Destroyed';
    authorEl.textContent = '-albert';
  }
}



function speakQuote() {
  if (!quoteEl.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(
      `${quoteEl.innerText} by ${authorEl.innerText}`
    );
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speechBtn.classList.remove("active")
        : speechBtn.classList.add("active");
    }, 10);
  }
}

function copyQuote() {
  navigator.clipboard.writeText(quoteEl.innerText);
  
}



setInterval(getQuote, 10000); // Change quote every 2 seconds

speechBtn.addEventListener("click", speakQuote);
copyBtn.addEventListener("click", copyQuote);




