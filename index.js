var arr=
["“Be yourself; everyone else is already taken.”  <br/> <span>― Oscar Wilde</span>",
" “Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can t handle me at my worst, then you sure as hell don t deserve me at my best.” <br/> <span>― Frank Zappa</span>",
" “So many books, so little time.” <br/> <span>― Albert Einstein</span>",
" “A room without books is like a body without a soul.”  <br />  <span>-Marcus Tullius Cicero</span>",
" “You only live once, but if you do it right, once is enough.” <br/> <span>― Mae West</span>",
" “Be the change that you wish to see in the world.” <br/> <span>― Mahatma Gandhi </span>",
" “In three words I can sum up everything I ve learned about life it goes on.” <br/> <span>― Robert Frost</span>",
" “If you tell the truth, you don t have to remember anything.” <br/> <span>― Mark Twain</span>",
" “To live is the rarest thing in the world. Most people exist, that is all.” <br/> <span>― Oscar Wilde</span>",
" “Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” <br/> <span>― Martin Luther King Jr</span>",
]
function New()
{
var x=document.getElementById("quo").innerHTML
var random=Math.floor(Math.random()* arr.length)  
 while(arr[random]===x)
    {
        random=Math.floor(Math.random()* arr.length)
    }


 document.getElementById("quo").innerHTML=arr[random]


}