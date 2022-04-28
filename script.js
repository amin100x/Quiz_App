const quizdata =
    [
        {
            qustion: '1. Who was the Final Man of Would Cup 2011 ?',
            a: 'MS Dhoni',
            b: 'ABD',
            c: 'Virat',
            d: 'Yuvraj Singh',
            correct: 'a'
        },
        {
            qustion: '2. How many runs did India make in its historic World Cup win over West Indies in 1983?',
            a: '375',
            b: '175',
            c: '183',
            d: '259',
            correct: 'c'
        },
        {
            qustion: '3. What is My Favorite Sport?',
            a: 'Football',
            b: 'Cricket',
            c: 'Hockey',
            d: 'Badmibnton',
            correct: 'b'
        },
        {
            qustion: '4. What is My Favorite Colour?',
            a: 'Black',
            b: 'Red',
            c: 'Yellow',
            d: 'White',
            correct: 'b'
        }
    ];
const quiz = document.getElementById("quiz");
const ansEle = document.querySelectorAll(".qust");
const qustionElement = document.getElementById('qus');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let score = 0;
let currentQ = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQDate = quizdata[currentQ];
    qustionElement.innerHTML = currentQDate.qustion;
    a_text.innerHTML = currentQDate.a;
    b_text.innerHTML = currentQDate.b;
    c_text.innerHTML = currentQDate.c;
    d_text.innerHTML = currentQDate.d;


}

function getSelect() {
    let ans = undefined;

    ansEle.forEach((ele) => {
        if (ele.checked) {
            ans = ele.id;
        }
    });

    return ans;
}

function deselectAnswers() {
    ansEle.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submit.addEventListener("click", () => {
    const Ans = getSelect();
    if (Ans) {
        if (Ans === quizdata[currentQ].correct) {
            score++;
        }
        currentQ++;
        if (currentQ < quizdata.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2 class="score">Your Score ${score} / ${quizdata.length}</h2> <button onclick="location.reload()">Restart</button>` ;
        }
    }
}
);

