const card = document.querySelector('.card__inner');

const input = document.querySelector('.input');

const footer = document.querySelector('footer a');

const head = document.querySelector('.head');

const strategies = [

"Create a part using a Software Synthesiser plugin and MIDI Keyboard. Choose from ES-M, ES-P and ES-E",
"Add a green (MIDI) Rhythmic Apple Loop",
"Add a green (MIDI) Percussive Apple Loop",
"Add a rhythmic audio Apple Loop",
"Add a melodic audio Apple Loop",
"Add a melodic MIDI Apple Loop",
"Add a bass part using an audio Apple Loop",
"Add a simple hook, or motif",
"Play a line using a preset from an software synthesiser you've never used before",
"Create a pad sound using a simple subtractive synthesiser",
"Create a bass part using a simple subtractive synthesiser",
"Add a string part",
"Add a brass part",
"Find and add an unusual sample",
"Add an orchestral instrument. The more unusual the better",
"Create and add a drone",
"Use an arpeggiator MIDI Effect",
"Add a staccato line",
"Create a legato line",
"Sing a simple melody, and recreate it with a software instrument",
"Convert a melodic element into a rhythmic element",
"Sample something in your pocket or bag. Record straight into QuickSampler then, using a MIDI keyboard, record a simple part",
"Add a percussive part of your choosing",
"Add a rhythmic part of your choosing",
  "Save the project",

    ""
]

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

const randomStrat = () => {
  const strat = strategies[Math.floor(Math.random() * strategies.length)];
  input.innerText = strat;
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);

