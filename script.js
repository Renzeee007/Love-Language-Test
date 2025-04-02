// Add this at the beginning of your file
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial value
setVH();

// Update on resize and orientation change
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);

const questions = [
    // Words of Affirmation vs Physical Touch
    { question: "What would make you feel more loved?", 
      options: { 
        "words": "Your partner telling you specific reasons why they admire you", 
        "touch": "Your partner giving you a spontaneous warm embrace"
      }
    },
    { question: "During a difficult day, which would comfort you more?",
      options: {
        "words": "Your partner saying 'I believe in you, you'll get through this'",
        "touch": "Your partner holding your hand and sitting close to you"
      }
    },
    // Words of Affirmation vs Quality Time
    { question: "Which means more to you?",
      options: {
        "words": "Receiving a heartfelt message expressing their love",
        "time": "Having your partner's undivided attention for an evening"
      }
    },
    { question: "What would make you feel more special?",
      options: {
        "words": "Your partner publicly acknowledging your achievements",
        "time": "Your partner canceling other plans to be with you"
      }
    },
    // Words of Affirmation vs Acts of Service
    { question: "Which gesture would you appreciate more?",
      options: {
        "words": "Your partner writing you a poem about their feelings",
        "acts": "Your partner taking care of all your chores when you're tired"
      }
    },
    { question: "What would mean more to you?",
      options: {
        "words": "Daily messages of appreciation and encouragement",
        "acts": "Daily small helpful actions without being asked"
      }
    },
    // Words of Affirmation vs Gifts
    { question: "On your birthday, which would you prefer?",
      options: {
        "words": "A heartfelt letter describing your impact on their life",
        "gifts": "A carefully chosen gift that matches your interests"
      }
    },
    { question: "Which makes you feel more valued?",
      options: {
        "words": "Verbal recognition of your efforts",
        "gifts": "Receiving thoughtful surprises that show they know you"
      }
    },
    // Physical Touch vs Quality Time
    { question: "During a movie night, what matters more?",
      options: {
        "touch": "Cuddling and physical closeness",
        "time": "Having focused conversation about the movie afterward"
      }
    },
    { question: "What makes you feel more connected?",
      options: {
        "touch": "Walking hand in hand",
        "time": "Having deep, meaningful conversations"
      }
    },
    // Physical Touch vs Acts of Service
    { question: "When you're stressed, which helps more?",
      options: {
        "touch": "A comforting massage",
        "acts": "Having someone take over your responsibilities"
      }
    },
    { question: "Which gesture means more?",
      options: {
        "touch": "A gentle touch on your back when passing by",
        "acts": "Having your coffee made exactly how you like it"
      }
    },
    // Physical Touch vs Gifts
    { question: "Which would you choose?",
      options: {
        "touch": "A long, warm hug after a long day",
        "gifts": "Finding a small gift left for you after a long day"
      }
    },
    { question: "What makes you feel more special?",
      options: {
        "touch": "Physical affection throughout the day",
        "gifts": "Receiving small, meaningful gifts throughout the day"
      }
    },
    // Quality Time vs Acts of Service
    { question: "Which weekend scenario appeals more?",
      options: {
        "time": "Spending the day doing activities together",
        "acts": "Your partner helping you complete a project"
      }
    },
    { question: "What makes you feel more supported?",
      options: {
        "time": "Having someone's full attention when sharing problems",
        "acts": "Having someone solve practical problems for you"
      }
    },
    // Quality Time vs Gifts
    { question: "Which would you prefer for an anniversary?",
      options: {
        "time": "A full day of shared experiences and activities",
        "gifts": "A significant gift you've been wanting"
      }
    },
    { question: "What means more to you?",
      options: {
        "time": "Regular dedicated time together without distractions",
        "gifts": "Regular small gifts that show thoughtfulness"
      }
    },
    // Acts of Service vs Gifts
    { question: "Which gesture would you appreciate more?",
      options: {
        "acts": "Having your living space cleaned and organized",
        "gifts": "Receiving a new item to decorate your living space"
      }
    },
    { question: "What would make you feel more cared for?",
      options: {
        "acts": "Someone running your errands when you're busy",
        "gifts": "Someone bringing you a care package when you're busy"
      }
    },
    // Additional Mixed Comparisons
    { question: "During illness, which matters more?",
      options: {
        "acts": "Someone taking care of all your needs",
        "touch": "Someone staying close and providing physical comfort"
      }
    },
    { question: "In a long-distance relationship, which is more important?",
      options: {
        "words": "Regular expressions of love and missing you",
        "gifts": "Receiving care packages and meaningful items"
      }
    },
    { question: "At a social gathering, which matters more?",
      options: {
        "touch": "Your partner staying physically close to you",
        "time": "Your partner engaging in conversation with you"
      }
    },
    { question: "When achieving a goal, which response means more?",
      options: {
        "words": "Specific praise about your accomplishment",
        "acts": "Someone celebrating by doing something special for you"
      }
    },
    { question: "During conflict, which approach helps more?",
      options: {
        "touch": "Physical reassurance while discussing issues",
        "time": "Sitting down for an uninterrupted discussion"
      }
    },
    { question: "Which daily ritual would mean more?",
      options: {
        "gifts": "Finding small surprises in your daily routine",
        "acts": "Having daily tasks taken care of for you"
      }
    },
    { question: "What makes you feel more secure in a relationship?",
      options: {
        "words": "Regular verbal affirmation of commitment",
        "time": "Regular dedicated time together"
      }
    },
    { question: "Which gesture of love do you notice more?",
      options: {
        "touch": "Frequent physical affection",
        "gifts": "Frequent small thoughtful presents"
      }
    },
    { question: "What builds stronger connection for you?",
      options: {
        "time": "Shared activities and experiences",
        "acts": "Working together on practical tasks"
      }
    },
    { question: "Which matters more in expressing love?",
      options: {
        "words": "Saying the right things at the right time",
        "acts": "Doing the right things at the right time"
      }
    }
];

let currentQuestion = 0;
let userAnswers = {};

// Add shuffle function for options
function shuffleOptions(options) {
    const entries = Object.entries(options);
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return Object.fromEntries(entries);
}

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    
    // Add progress indicator
    const progress = `
        <div class="progress-indicator">
            Question ${currentQuestion + 1} of ${questions.length}
        </div>
    `;

    // Show current question with randomized options
    const q = questions[currentQuestion];
    const shuffledOptions = shuffleOptions(q.options);
    
    let questionHTML = `
        ${progress}
        <div class="question">
            <p>${q.question}</p>
    `;
    
    for (let key in shuffledOptions) {
        questionHTML += `
            <label>
                <input type="radio" name="q${currentQuestion}" value="${key}" required> ${shuffledOptions[key]}
            </label><br>`;
    }
    questionHTML += `</div>`;

    // Add navigation buttons - only show Submit at the very end
    questionHTML += `
        <div class="navigation">
            ${currentQuestion > 0 ? '<button type="button" id="prevBtn">Previous</button>' : ''}
            ${currentQuestion < questions.length - 1 
                ? '<button type="button" id="nextBtn" disabled>Next</button>'
                : '<button type="submit" id="submitBtn" disabled>See Results</button>'
            }
        </div>
    `;

    quizContainer.innerHTML = questionHTML;

    // Enable next/submit button when an option is selected
    const radioButtons = document.querySelectorAll(`input[name="q${currentQuestion}"]`);
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const nextBtn = document.getElementById('nextBtn');
            const submitBtn = document.getElementById('submitBtn');
            if (nextBtn) nextBtn.disabled = false;
            if (submitBtn) submitBtn.disabled = false;
            userAnswers[currentQuestion] = radio.value;
        });

        // Pre-select if answered before
        if (userAnswers[currentQuestion] === radio.value) {
            radio.checked = true;
            const nextBtn = document.getElementById('nextBtn');
            const submitBtn = document.getElementById('submitBtn');
            if (nextBtn) nextBtn.disabled = false;
            if (submitBtn) submitBtn.disabled = false;
        }
    });

    // Add event listeners for navigation
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestion++;
            loadQuiz();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentQuestion--;
            loadQuiz();
        });
    }
}

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let scores = { words: 0, touch: 0, gifts: 0, time: 0, acts: 0 };

    // Calculate scores from userAnswers
    for (let index in userAnswers) {
        scores[userAnswers[index]]++;
    }

    // Calculate percentages
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    let percentages = {};
    for (let key in scores) {
        percentages[key] = Math.round((scores[key] / total) * 100);
    }

    // Sort results by percentage
    let sortedResults = Object.entries(percentages)
        .sort(([,a], [,b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    localStorage.setItem("results", JSON.stringify(sortedResults));
    localStorage.setItem("rawScores", JSON.stringify(scores));
    window.location.href = "results.html";
});

window.onload = loadQuiz;
