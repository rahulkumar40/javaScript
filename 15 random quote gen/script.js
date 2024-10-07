// Array of authors with quotes
const quoteArr = [
      {
          author: "Rahul Kumar",
          quote: "The journey of coding starts with curiosity. \nSuccess comes when you keep pushing boundaries."
      },
      {
          author: "Albert Einstein",
          quote: "Life is like riding a bicycle. \nTo keep your balance, you must keep moving."
      },
      {
          author: "Steve Jobs",
          quote: "Your work is going to fill a large part of your life. \nThe only way to do great work is to love what you do."
      },
      {
          author: "Mahatma Gandhi",
          quote: "The best way to find yourself is to lose yourself in the service of others. \nBe the change you want to see in the world."
      },
      {
          author: "Eleanor Roosevelt",
          quote: "The future belongs to those who believe in the beauty of their dreams. \nDo what you feel in your heart to be right."
      },
      {
          author: "C.S. Lewis",
          quote: "You are never too old to set another goal. \nDream a new dream, and take the first step."
      }
  ];
//   const t = '"The future belongs to those who believe in the beauty of their dreams. Do what you feel in your hea"'
//   console.log(t.length)
  
  function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quoteArr.length); 
      const randomQuote = quoteArr[randomIndex]; 
      console.log(randomQuote)
      console.log('hi rahul')
            
            const setQuote = randomQuote.quote;
            
            // console.log(randomIndex)
            document.getElementById('qoute').textContent = `"${setQuote.length > 95 ? (setQuote.substring(0,95) + "...") : setQuote}"`;
            document.getElementById('author').textContent = `- ${randomQuote.author}`;

  }
  
const generatebutton = document.querySelector('.button');

generatebutton.addEventListener('click', generateQuote);