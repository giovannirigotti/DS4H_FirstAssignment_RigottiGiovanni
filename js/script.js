// SET OF 10 QUESTIONS - EASY DIFFICULTY
let level1Questions = [
  {
    id: 1,
    type: "singleChoice",
    question: "Who is the director of the 'Harry Potter' film series?",
    options: ["Christopher Nolan", "Steven Spielberg", "J.K. Rowling", "David Yates"],
    correct_answer: "David Yates"
  },
  {
    id: 2,
    type: "singleChoice",
    question: "Which actor played the character Jack Dawson in the film 'Titanic'?",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matthew McConaughey"],
    correct_answer: "Leonardo DiCaprio"
  },
  {
    id: 3,
    type: "trueFalse",
    question: "Arnold Schwarzenegger played the lead role in the movie 'Terminator 2: Judgment Day'.",
    correct_answer: true
  },
  {
    id: 4,
    type: "singleChoice",
    question: "Who won the Academy Award for Best Actress in 2019?",
    options: ["Meryl Streep", "Emma Stone", "Cate Blanchett", "Olivia Colman"],
    correct_answer: "Olivia Colman"
  },
  {
    id: 5,
    type: "singleChoice",
    question: "Which film features a character named Forrest Gump?",
    options: ["The Shawshank Redemption", "Forrest Gump", "The Godfather", "Pulp Fiction"],
    correct_answer: "Forrest Gump"
  },
  {
    id: 6,
    type: "trueFalse",
    question: "The 'Lord of the Rings' film series is based on a book by J.K. Rowling.",
    correct_answer: false
  },
  {
    id: 7,
    type: "singleChoice",
    question: "Who played the character Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    correct_answer: "Robert Downey Jr."
  },
  {
    id: 8,
    type: "singleChoice",
    question: "Which animated film features a talking toy cowboy named Woody?",
    options: ["Toy Story", "Finding Nemo", "Shrek", "Frozen"],
    correct_answer: "Toy Story"
  },
  {
    id: 9,
    type: "trueFalse",
    question: "The first 'Star Wars' film was released in the 1970s.",
    correct_answer: true
  },
  {
    id: 10,
    type: "multipleChoice",
    question: "Which of the following actors played James Bond?",
    options: ["Daniel Craig", "Sean Connery", "Pierce Brosnan", "Timothy Dalton"],
    correct_answer: ["Sean Connery", "Pierce Brosnan"]
  }
]

// SET OF 10 QUESTIONS - MEDIUM DIFFICULTY
let level2Questions = [
  {
    id: 1,
    type: "singleChoice",
    question: "Which movie features a character named Jack Dawson and Rose DeWitt Bukater?",
    options: ["Titanic", "The Notebook", "Gone with the Wind", "Casablanca"],
    correct_answer: "Titanic"
  },
  {
    id: 2,
    type: "multipleChoice",
    question: "Who played the role of Tony Stark in the Marvel Cinematic Universe?",
    options: ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
    correct_answer: ["Robert Downey Jr."]
  },
  {
    id: 3,
    type: "trueFalse",
    question: "The character Harry Potter has a scar on his forehead in the shape of a lightning bolt.",
    correct_answer: true
  },
  {
    id: 4,
    type: "singleChoice",
    question: "Which director is known for his work on films like 'The Dark Knight' and 'Inception'?",
    options: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
    correct_answer: "Christopher Nolan"
  },
  {
    id: 5,
    type: "singleChoice",
    question: "In the animated film 'Finding Nemo,' what type of fish is Nemo?",
    options: ["Clownfish", "Blue Tang", "Angelfish", "Pufferfish"],
    correct_answer: "Clownfish"
  },
  {
    id: 6,
    type: "trueFalse",
    question: "The film 'The Godfather' is based on a novel by Mario Puzo.",
    correct_answer: true
  },
  {
    id: 7,
    type: "singleChoice",
    question: "Who played the role of Ellen Ripley in the 'Alien' film series?",
    options: ["Sigourney Weaver", "Linda Hamilton", "Michelle Pfeiffer", "Meryl Streep"],
    correct_answer: "Sigourney Weaver"
  },
  {
    id: 8,
    type: "singleChoice",
    question: "In the film 'Forrest Gump,' what does Forrest's mother say life is like?",
    options: ["A box of chocolates", "A puzzle", "A rollercoaster", "A journey"],
    correct_answer: "A box of chocolates"
  },
  {
    id: 9,
    type: "trueFalse",
    question: "The movie 'Jurassic Park' was released in the 1980s.",
    correct_answer: false
  },
  {
    id: 10,
    type: "multipleChoice",
    question: "Which actress won the Academy Award for Best Actress for her role in 'La La Land'?",
    options: ["Emma Stone", "Meryl Streep", "Natalie Portman", "Cate Blanchett"],
    correct_answer: ["Emma Stone"]
  }
];

// SET OF 10 QUESTIONS - HIGH DIFFICULTY
let level3Questions = [
  {
    id: 1,
    type: "singleChoice",
    question: "Who directed the surreal film 'Mulholland Drive'?",
    options: ["David Lynch", "Stanley Kubrick", "Quentin Tarantino", "Alfred Hitchcock"],
    correct_answer: "David Lynch"
  },
  {
    id: 2,
    type: "multipleChoice",
    question: "Which film features a character named Anton Chigurh, known for using a captive bolt pistol?",
    options: ["No Country for Old Men", "There Will Be Blood", "Fargo", "The Departed"],
    correct_answer: ["No Country for Old Men"]
  },
  {
    id: 3,
    type: "trueFalse",
    question: "The film 'Apocalypse Now' is based on a novel by Joseph Conrad.",
    correct_answer: false
  },
  {
    id: 4,
    type: "singleChoice",
    question: "Who directed the film 'The Grand Budapest Hotel'?",
    options: ["Wes Anderson", "Quentin Tarantino", "Christopher Nolan", "Martin Scorsese"],
    correct_answer: "Wes Anderson"
  },
  {
    id: 5,
    type: "singleChoice",
    question: "In the movie 'The Usual Suspects,' who is the mysterious criminal mastermind Keyser Söze?",
    options: ["Kevin Spacey", "Benicio del Toro", "Gabriel Byrne", "Stephen Baldwin"],
    correct_answer: "Kevin Spacey"
  },
  {
    id: 6,
    type: "trueFalse",
    question: "The character Vito Corleone is portrayed by Robert De Niro in 'The Godfather: Part II'.",
    correct_answer: false
  },
  {
    id: 7,
    type: "singleChoice",
    question: "Which film won the Academy Award for Best Picture in 2019?",
    options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
    correct_answer: "Parasite"
  },
  {
    id: 8,
    type: "singleChoice",
    question: "In the film 'Eternal Sunshine of the Spotless Mind,' who played the role of Clementine Kruczynski?",
    options: ["Kate Winslet", "Naomi Watts", "Zooey Deschanel", "Cate Blanchett"],
    correct_answer: "Kate Winslet"
  },
  {
    id: 9,
    type: "trueFalse",
    question: "The movie 'Blade Runner' is set in a dystopian future Los Angeles.",
    correct_answer: true
  },
  {
    id: 10,
    type: "multipleChoice",
    question: "Which actor played the lead role in the film 'A Clockwork Orange'?",
    options: ["Jack Nicholson", "Marlon Brando", "Anthony Hopkins", "Malcolm McDowell"],
    correct_answer: ["Malcolm McDowell"]
  }
];

// ONLOAD
window.onload = init;

function init(){
  // Hide the status div to start the quiz
  let status_div = document.querySelector("#status");
  status_div.style.display = "none";

  // Hide the core div to start the quiz
  let core_div = document.querySelector("#core");
  core_div.style.display = "none";
}

// POINTS & QUESTION COUNTER & QUESTIONS IN USE
var points = 0;
var question_number = 0;
var question_array = null;
var level = "";

// UTILS
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function tempAlert(msg, duration, success) {
  var el = document.createElement("div");
  el.style.position = "fixed";
  el.style.fontWeight = "bold";
  el.style.top = "50%";
  el.style.left = "50%";
  el.style.transform = "translate(-50%, -50%)";
  el.style.padding = "20px";
  el.style.borderRadius = "10px";
  el.style.textAlign = "center";

  // Impostazione del colore di sfondo in base al parametro success
  if (success) {
      el.style.backgroundColor = "rgba(106, 195, 113, 0.9)"; // Verde
  } else {
      el.style.backgroundColor = "rgba(177, 96, 96, 0.9)"; // Rosso
  }

  el.innerHTML = msg;

  setTimeout(function () {
      el.parentNode.removeChild(el);
  }, duration);

  document.body.appendChild(el);
}

// RULES MANAGEMENT
function showRules() {
  document.getElementById('rulesModal').style.display = 'flex';
}

function closeRulesModal() {
  document.getElementById('rulesModal').style.display = 'none';
}

function startQuiz(event) {
  // POINT RESET
  points = 0;

  let questions = null;

  // SET UP INTERFACE
  let quiz_info = document.querySelector("#quiz_info");
  let b_points = document.querySelector("#b_points");
  let i_question = document.querySelector("#i_question");
  
  // Show element begin div        
  let status_div = document.querySelector("#status");
  status_div.style.display = "block";

  // Show element begin div        
  let core_div = document.querySelector("#core");
  core_div.style.display = "block";
  
  // Hide the begin div to start the quiz
  let begin_div = document.querySelector("#begin");
  begin_div.style.display = "none";

  // Chose the difficulty based on the button pressed
  // also selecting the correct set of questions taken in a random order
  switch (event.target.id) {
      case 'easy': //EASY
          console.log("Starting easy quiz!");
          quiz_info.textContent = "Easy quiz"
          questions = shuffleArray(level1Questions);
          level = "level1";
          break;
      case 'medium': //MEDIUM
          console.log("Starting medium quiz!");            
          quiz_info.textContent = "Medium quiz"
          questions = shuffleArray(level2Questions);
          level = "level2";
          break;
      case 'hard': //HARD     
          console.log("Starting hard quiz!");
          quiz_info.textContent = "Hard quiz"
          questions = shuffleArray(level3Questions);
          level = "level3";
          break;
      default:
        alert("ERROR: not able to start the quiz.");
        return;
    }

    b_points.textContent = points + " points";
    i_question.textContent = (question_number+1) + "/10";

    // Start the game (initialize environment variables)
    //question_number = 1;
    question_array = questions;

    play();
}

function play(){

  console.log(question_number);
  let actual_question = question_array[question_number];

  if(question_number == 10){
      // reset
      // Show element begin div        
      let begin_div = document.querySelector("#begin");
      begin_div.style.display = "block";
      
      let b_points = document.querySelector("#b_points");    
      let i_question = document.querySelector("#i_question");
      let quiz_info = document.querySelector("#quiz_info");

      quiz_info.textContent = "Quiz Finished."
      b_points.textContent = points + " total points";
      i_question.textContent = "Select a game mode to restart.";

      points = 0;
      question_number = 0;
      question_array = null;
      level = "";

      // Hide the core div show the results the quiz
      let core_div = document.querySelector("#core");
      core_div.style.display = "none";

      return;
  }

  // Charging the image
  let img = document.querySelector("#q_img");
  let img_src = "./assets/imgs/" + level + "/" + actual_question.id + ".jpg"; 
  img.src = img_src;
  
  // Create the question div based on question type and the Question text
  let question_paragraph = document.querySelector("#question");
  let question_text = "";

  switch (actual_question.type) {
      case 'singleChoice':
          question_text += "Single Choice: \n";
          createSingleChoice(actual_question.options);
          break;
      case 'multipleChoice':            
          question_text += "Multiple Choice: \n";   
          createMultipleChoice(actual_question.options);
          break;
      case 'trueFalse':
          question_text += "True or False: \n";
          createTrueFalse();
          break;
      default:
        alert("ERROR: not able to start the quiz.");
        return;
  }

  question_paragraph.textContent = question_text + actual_question.question; 

  // Update the class of the button as flag to manage the check logic
  let check_button = document.querySelector("#check");
  check_button.className = actual_question.type;
}

function createSingleChoice(options){
  let option_div = document.querySelector("#options");

  for (let i = 0; i < options.length; i++) {
      var tmp_button = document.createElement("button");
      tmp_button.textContent = options[i];
      tmp_button.id = options[i];
      tmp_button.setAttribute('onclick', "manageSingleChoice(event)");


      option_div.append(tmp_button);
  }    
}

function createMultipleChoice(options){    
  let option_div = document.querySelector("#options");

  for (let i = 0; i < options.length; i++) {
      var tmp_div = document.createElement("div");

      var tmp_input = document.createElement("input");
      tmp_input.type = "checkbox";
      tmp_input.className = "ck";
      tmp_input.id = options[i];
      tmp_input.setAttribute('onclick', "manageMultipleChoice(event)");

      var tmp_label = document.createElement("label");
      tmp_label.for = options[i];
      tmp_label.textContent = options[i];

      tmp_div.append(tmp_input);
      tmp_div.append(tmp_label);
      option_div.append(tmp_div);
  }    

}

function createTrueFalse(){
  let option_div = document.querySelector("#options");

  var tmp_button_true = document.createElement("button");
  tmp_button_true.textContent = "True";
  tmp_button_true.id = "true";
  tmp_button_true.setAttribute('onclick', "manageTrueFalse(event)");
  
  var tmp_button_false = document.createElement("button");
  tmp_button_false.textContent = "False";
  tmp_button_false.id = "false";
  tmp_button_false.setAttribute('onclick', "manageTrueFalse(event)");

  option_div.append(tmp_button_true);
  option_div.append(tmp_button_false);
}

function manageSingleChoice(event){
  let choice = document.querySelector("#choice");
  choice.textContent = event.target.id;
}

function manageMultipleChoice(event){
  let choice = document.querySelector("#choice");

  choice.textContent = "";

  document.querySelectorAll(".ck").forEach(element => {
      if(element.checked == true){
          choice.textContent += element.id + "; ";
      }
  });
}

function manageTrueFalse(event){
  let choice = document.querySelector("#choice");
  choice.textContent = event.target.id;
}

function checkQuestion(){
  let type = document.querySelector("#check").className;
  let choice_text = document.querySelector("#choice").textContent;
  let actual_question = question_array[question_number];
  let answer = actual_question.correct_answer;

  // CONTROL ANSWER PRESENCE
  if(choice_text == "" || choice_text == null){    
      console.log("ERROR: select your answer to proceed!"); 
      alert("ERROR: select your answer to proceed!");
      return;
  }
  
  switch (type) {
      case 'singleChoice':
          if(choice_text == answer){
              points += 1;
              tempAlert("YOUR ANSWER IS RIGHT", 2000, true);
          }else{
              let opt = "THE RIGHT ANSWER WAS: " + answer;                
              tempAlert(opt, 4000, false);
          }
          break;
      case 'multipleChoice':   
          let answer_string = "";
          answer.forEach(element => {
              answer_string += element + "; "
          });
          if(choice_text == answer_string){
              points += 1;
              tempAlert("YOUR ANSWER IS RIGHT", 2000, true);
          }else{
              let opt = "THE RIGHT ANSWER WERE: " + answer_string;                
              tempAlert(opt, 4000, false);
          }
          break;
      case 'trueFalse':

          if((choice_text == "true" && answer == true)||(choice_text == "false" && answer == false)){
              points += 1;
              tempAlert("YOUR ANSWER IS RIGHT", 2000, true);
          }else{
              let opt = "THE RIGHT ANSWER WAS: " + answer;                
              tempAlert(opt, 4000, false);
          }
          break;
      default:
        alert("ERROR: not able to check the question.");
        return;
  }

  // UPDATE INTERFACE    
  let b_points = document.querySelector("#b_points");    
  let i_question = document.querySelector("#i_question");    
  let option_div = document.querySelector("#options");
  let choice_p = document.querySelector("#choice");
  let quiz_info = document.querySelector("#quiz_info");
  
  choice_p.textContent = "";
  option_div.textContent = "";
  question_number = question_number + 1;
  
  b_points.textContent = points + " points";
  i_question.textContent = (question_number+1) + "/10";

  play();

}  