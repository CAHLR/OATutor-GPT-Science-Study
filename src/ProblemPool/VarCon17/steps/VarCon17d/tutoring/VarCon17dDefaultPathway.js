var hints = [{id: "VarCon17d-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon17d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$13z=39$$"], dependencies: ["VarCon17d-h1"], title: "Addition", text: "Add 8z to each side of the equation.", variabilization: {}}, {id: "VarCon17d-h3", type: "hint", dependencies: ["VarCon17d-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon17d-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$z=3$$"], dependencies: ["VarCon17d-h3"], title: "Division", text: "Divide 13 from each side.", variabilization: {}}, {id: "VarCon17d-h5", type: "hint", dependencies: ["VarCon17d-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon17d-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon17d-h5"], title: "Verification", text: "Check whether $$5\\times3$$ equals $$39-8z$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};