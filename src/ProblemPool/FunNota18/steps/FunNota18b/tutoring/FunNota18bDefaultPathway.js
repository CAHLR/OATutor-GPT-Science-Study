var hints = [{id: "FunNota18b-h1", type: "hint", dependencies: [], title: "Evaluating functions", text: "Given the equation for a function, we should replace the input variable in the equation with the value provided and then calculate the result.", variabilization: {}}, {id: "FunNota18b-h2", type: "hint", dependencies: ["FunNota18b-h1"], title: "Replacement", text: "Replace the variable x with 2, and we get $$f(2)=\\frac{6\\times2-1}{5\\times2+2}$$.", variabilization: {}}, {id: "FunNota18b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{11}{12}$$"], dependencies: ["FunNota18b-h2"], title: "Calculation", text: "Calculate the expression $$\\frac{6\\times2-1}{5\\times2+2}$$. What do you get?", variabilization: {}}, ]; export {hints};