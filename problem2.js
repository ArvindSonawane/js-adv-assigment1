const arrayOfQuotes = [
    
    {    
        'author': 'Nelson Mandela', 
        'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {    
        'author': 'Walt Disney', 
        'quote': 'The way to get started is to quit talking and begin doing.'
    },
    {    
        'author': 'Eleanor Roosevelt', 
        'quote': 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {    
        'author': 'Oprah Winfrey', 
        'quote': 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough'
    },
    {    
        'author': 'James Cameron', 
        'quote': 'If you set your goals ridiculously high and it`s a failure, you will fail above everyone else`s success'
    },
    {    
        'author': 'Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'John Lennon', 
        'quote': 'Life is what happens when you`re busy making other plans.'
    }
];
// Create a function to generate quote from array
function generateQoute(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector("#generatedQuote")
    .textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector("#AuthorName")
    .textContent = `--${arrayOfQuotes[random].author}`;
}