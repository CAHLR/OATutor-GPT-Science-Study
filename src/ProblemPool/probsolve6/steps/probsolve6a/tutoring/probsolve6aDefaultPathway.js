var hints = [{id: "probsolve6a-h1", type: "hint", dependencies: [], title: "Translate the problem into an equation", text: "The first step is to translate the question into a mathematical equation.", variabilization: {}}, {id: "probsolve6a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["n,n+2,n+4"], dependencies: ["probsolve6a-h1"], title: "Writing consecutive numbers", text: "Which of the following represent consecutive numbers in terms of n?", choices: ["n,n+2,n+4", "n,2n,3n", "n,n+1,n+2"], variabilization: {}}, {id: "probsolve6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["102"], dependencies: ["probsolve6a-h2"], title: "Total sum", text: "What should the numbers add up to?", variabilization: {}}, {id: "probsolve6a-h4", type: "hint", dependencies: ["probsolve6a-h3"], title: "Solving the equation", text: "The next step is to solve for n", variabilization: {}}, {id: "probsolve6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["32"], dependencies: ["probsolve6a-h4"], title: "Solving for n", text: "What is the value of n in the equation $$3n+6=102$$?", variabilization: {}}, {id: "probsolve6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["34"], dependencies: ["probsolve6a-h5"], title: "Finding the consecutive numbers", text: "What is $$n+2$$?", variabilization: {}}, {id: "probsolve6a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["probsolve6a-h6"], title: "Finding the consecutive numbers", text: "What is $$n+4$$?", variabilization: {}}, ]; export {hints};