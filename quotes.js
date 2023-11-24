 //array with  quote & author name

 let arr=[
    {name:"Oscar Wilde",quote:"To live is the rarest thing in the world. Most people exist, that is all."},
    {name:"Emily Dickinson",quote:'That it will never come again is what makes life so sweet.' },
    {name:"George Eliot",quote:'It is never too late to be what you might have been.' },
    {name:"Ralph Waldo Emerson",quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' },
    {name:"Haruki Murakami",quote:'Pain is inevitable. Suffering is optional.' },
    {name:"William Shakespeare",quote:"All the world's a stage, and all the men and women merely players."},
    {name:"Plato",quote:'Be kind, for everyone you meet is fighting a hard battle.'},
    {name:"Emily Dickinson",quote:'Unable are the loved to die for love is immortality.' },
    {name:" Sylvia Plath",quote:'Let me live, love, and say it well in good sentences.'},
    {name:"C.S. Lewis",quote:"Don't let your happiness depend on something you may lose."},
    {name:"Ernest Hemingway",quote:"We are all broken, that's how the light gets in."},
    {name:"Voltaire",quote:'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.' },
    {name:"Stephanie Bennett Henry",quote:'Life is tough my darling, but so are you.'},
    {name:"William Faulkner",quote:"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."},
    {name:"Brene Brown",quote:'Self-awareness and self-love matter. Who we are is how we lead.'},
    {name:"Stephen King",quote:'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.'},
    {name:"Ernest Hemingway",quote:'As a writer, you should not judge, you should understand.'},
    {name:"Herman Melville",quote:'To produce a mighty book, you must choose a mighty theme.' },
    {name:"John Steinbeck",quote:'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.'},
    {name:" John Green",quote:'Sometimes, you read a book and it fills you with this weird evangelical zeal.' }
]


//onclick => generate random index<=20
//print it on html page

let btn=document.querySelector('#btn')
let span=document.querySelector('span')
let authname=document.querySelector('#authname')





 btn.addEventListener("click",function(){

    let arrlength=arr.length
    
    let arrindex=arr[Math.round(Math.random()*arrlength)]
    
    console.log(arrindex)

    span.innerHTML=arrindex.quote
    authname.innerHTML=arrindex.name
 
    

 })
  
  
  

