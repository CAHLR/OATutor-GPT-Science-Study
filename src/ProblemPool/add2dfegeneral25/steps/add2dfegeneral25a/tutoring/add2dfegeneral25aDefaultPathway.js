var hints = [{id: "add2dfegeneral25a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: [], title: "Identifying the GCF", text: "Is there a GCF?", choices: ["YesINo"], subHints: [{id: "add2dfegeneral25a-h1-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(5\\right) x^3$$"], dependencies: [], title: "Identifying the GCF", text: "What is the GCF? Make sure to factor it out.", variabilization: {}}], variabilization: {}}, {id: "add2dfegeneral25a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Binomial"], dependencies: ["add2dfegeneral25a-h1"], title: "Identifying Polynomial Type", text: "Is it a binomial, trinomial, or are there more than three terms?", choices: ["BinomialITrinomialIMore than 3"], variabilization: {}}, {id: "add2dfegeneral25a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(5\\right) x^3 \\left(\\left(2\\right) x+\\left(7\\right)\\right)$$"], dependencies: ["add2dfegeneral25a-h2"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};