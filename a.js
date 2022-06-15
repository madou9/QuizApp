const question = document.getElementById('question')
const category = document.getElementById('category')
const difficulty = document.getElementById('difficulty')
const choix = document.getElementById('choix')
const trouver = document.getElementById('trouver');
const defaite = document.getElementById('defaite')
const check = document.getElementById('check')
const clear = document.getElementById('clear')
if (!(localStorage.gagne && localStorage.perdu)) {
    localStorage.gagne = 0;
    localStorage.perdu = 0;
} else {
    trouver.textContent = localStorage.gagne
    defaite.textContent = localStorage.perdu
}


function generer() {
    fetch('https://opentdb.com/api.php?amount=1', {
            headers: {
                "Content-Type": "text/plain;charset=UTF-8"
            },
        }).then(reponse => reponse.json())
        .then(answer => {
            var n = answer.results[0].incorrect_answers.length;
            difficulty.innerHTML = '<strong class=" blue-text soulign">Difficulty:</strong> ' + answer.results[0].difficulty
            category.innerHTML = '<span class="blue-text">Category <br/></span>' + answer.results[0].category
            question.innerHTML = '<strong class=" blue-text soulign">Question: <br/></strong> ' + answer.results[0].question;
            var rand = Math.round(Math.random() * n + 1);
            for (var i = 0; i <= n; i++) {
                if (i == rand) {
                    choix.innerHTML += '<div class="col s5 teal lighten-4 marge vrai">' + answer.results[0].correct_answer + '</div>'
                    console.log(i + 1)
                } else {
                    choix.innerHTML += '<div class="col s5 teal lighten-4 marge faux">' + answer.results[0].incorrect_answers[i] + '</div>'
                }
            }
            try {
                function reload() {
                    let vrai = document.querySelector('.vrai')
                    let faux = document.querySelectorAll('.faux')
                    vrai.addEventListener('click', function(e) {
                        localStorage.gagne++
                            trouver.textContent = localStorage.gagne
                        choix.textContent = ''
                        generer();
                    })
                    for (var i = 0; i < n; i++) {
                        faux[i].addEventListener('click', function(ev) {
                            localStorage.perdu++
                                defaite.textContent = localStorage.perdu
                            choix.textContent = ''
                            generer();
                        })
                    }
                }
                reload()

            } catch (err) {
                choix.textContent = ''
                generer();
            }


        })
}

generer();

clear.addEventListener('click', function() {
    localStorage.gagne = 0;
    localStorage.perdu = 0;
    trouver.textContent = localStorage.gagne
    defaite.textContent = localStorage.perdu
    choix.textContent = ''
    generer();
})
check.addEventListener('click', function() {
    choix.textContent = ''
    generer();
})



let check = document.getElementById('check');
let difficulty = document.getElementById('difficulty');
let category = document.getElementById('category');
let question = document.getElementById('question');
let choix = document.getElementById('choix');
let clear = document.getElementById('clear');
let trouver = document.getElementById('trouver');
let defaite = document.getElementById('defaite');





(function promess(){
    fetch('https://opentdb.com/api.php?amount=1') 
    .then( Response => Response.json())
    .then(Response => {
      const data = Response.results[0]
      console.log(data.correct_answer);
        generale(data)
   })
   
   //Response.results[0]

})();

function generale(data){
    //console.log(Response)
    difficulty.innerHTML = `<strong class=" blue-text soulign">Difficulty:</strong> ${data.difficulty}`
    category.innerHTML = `<span class="blue-text">Category <br/></span>${data.category}`
    question.innerHTML = `<strong class=" blue-text soulign">Question: <br/></strong> ${data.question}`;
    let x = data.incorrect_answers.length;
    let rand = Math.round(Math.random() * x + 1);
    //console.log(rand);
    for (let i = 0; i <= x; i++) {
        if (i == rand) {
            choix.innerHTML += `<div class="col s5 teal lighten-4 marge vrai"> ${data.correct_answer} </div>`
            console.log(i + 1)
        } else {
            choix.innerHTML += `<div class="col s5 teal lighten-4 marge faux">  ${data.incorrect_answers[i]} </div>`   
        }
    }
        function reload(){
            let vrai = document.querySelector('.vrai');
            let faux = document.querySelectorAll('.faux');

            if (!(localStorage.gagne && localStorage.perdu)) {
                localStorage.gagne = 0;
                localStorage.perdu = 0;
            } else {
                trouver.textContent = localStorage.gagne
                defaite.textContent = localStorage.perdu
            }


            vrai.addEventListener('click', function(e){
                localStorage.gagne++
                 trouver.textContent = localStorage.gagne
               choix.textContent = ''
                

            })
            for (let i = 0; i < x; i++) {
                faux[i].addEventListener('click', function(e) {
                    localStorage.perdu++
                    defaite.textContent = localStorage.perdu
                  choix.textContent = ''
                  
                })
            }
    }
        reload()
}

clear.addEventListener('click', function() {
    localStorage.gagne = 0;
    localStorage.perdu = 0;
    trouver.textContent = localStorage.gagne
    defaite.textContent = localStorage.perdu
    choix.textContent = ''
    generale(data)
})
check.addEventListener('click', function() {
    choix.textContent = ''
    generale(data)
})