let quote = document.getElementById("qoute")
let person = document.getElementById("person")

// This is an array of quote objects. Each object contains a quote property and a person property.
let qoutes =[{
    quote:  "“I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.”",
    person: 'Abreham Lincoln'
},{
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    
    person: "Albert Einstein"
},{
    quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    person:" Bernard M.Baruch"
},{
quote:"“You only live once, but if you do it right, once is enough.”",
    person:" Mae West"
},{
quote:"“Be the change that you wish to see in the world.”",
    person: "Mahatma Gandhi"
},{
quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    person: "Maya Angelou"
},{
quote:"“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”",
    person:" Helen Keller"
},{
quote:"“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    person: "Albert Einstein"
},{
quote:"“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
},{
quote:"“We are what we pretend to be, so we must be careful about what we pretend to be.”",
    person: "Kurt Vonnegut"
},{
quote:'Be yourself; everyone else is already taken.”',
    person: "Oscar Wilde"
}, {
quote:'ፈረስ ያደርሳል እንጂ አይዋጋም.”',
    person: "peoples"
}, {
quote:'ያልጠረጠረ ተመነጠረ.”',
    person: "peoples"
},]
 

let buttn = document.getElementById("button")

buttn.addEventListener("click", function () {
    let random = Math.floor(Math.random() *qoutes.length +1)
    quote.innerText = qoutes[random].quote
    person.innerText = qoutes[random].person
  
}
    
)
// Math.random() generates a random decimal number between 0 and 1 (excluding 1).
// Multiplying this random decimal number by the length of an array gives a random decimal number between 0 and the length of the array (excluding the length itself).
// Math.floor() then rounds down this decimal number to the nearest integer, resulting in a random integer between 0 and the length of the array (excluding the length itself).


