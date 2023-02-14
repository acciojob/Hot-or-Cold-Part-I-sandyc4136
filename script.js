//your code here
var randomnumber=0;
var guessnumber=0;

var body=document.getElementById('body');
var p1=document.createElement('p');
p1.textContent="I am learning to generate random number. I will be able to handle randomness in any of my applications that needs it. Press the button to get a random number."


var btn=document.createElement('button');
btn.id='btn';
btn.textContent="generate random number";

btn.onclick=function getrandomvalue(){
	randomnumber= Math.floor(Math.random()* 41)-20;
	p2.innerText=randomnumber;
	getGuess();
	result();
}

var p2=document.createElement('p')
p2.id='num';
p2.textContent="";

body.appendChild(p1);
body.appendChild(btn)
body.appendChild(p2);

function getGuess(){
	guessnumber = Number(document.getElementById("guess").value);
}

function result(){
	if(Math.abs(randomnumber-guessnumber) <=5)
	{
		document.getElementById('respond').innerText="hot";
	}
	else{
		document.getElementById('respond').innerText="cold";
	}
}


