const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },
    {
        quote: "Seja a mudança que você quer ver no mundo.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Posso não concordar com o que você diz, mas defenderei até a morte o seu direito de dizê-lo.",
        author: "Voltaire"
    },
    {
        quote: "Para que o mal triunfe, basta que os bons não façam nada.",
        author: "Edmund Burke"
    },
    {
        quote: "Eu não posso mentir. Eu cortei a cerejeira.",
        author: "George Washington"
    },
    {
        quote: "Que comam brioche.",
        author: "Maria Antonieta"
    },
    {
        quote: "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
        author: "Carlos Drummond de Andrade"
    },
    {
        quote: "Quanto a mim, tudo que eu sei é que eu não sei nada.",
        author: "Sócrates"
    },
    {
        quote: "De todos os animais selvagens, o homem jovem é o mais difícil de domar.",
        author: "Platão"
    },
    {
        quote: "Tão bom morrer de amor e continuar vivendo... .",
        author: "Mario Quintana"
    },
    {
        quote: "O importante é tentar, mesmo o impossível.",
        author: "Jorge Amado"
    },
    {
        quote: "Jesus às vezes se disfarça de mendigo pra testar a bondade dos homens.",
        author: "Ariano Suassuna"
    },
    {
        quote: "Imagine uma nova história para sua vida e acredite nela.",
        author: "Paulo Coelho"
    }
    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();