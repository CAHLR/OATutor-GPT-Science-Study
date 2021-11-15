var hints = [{id: "a2d8720LinEqua7a-h1", type: "hint", dependencies: [], title: "Find LCD", text: "We have three denominators: x, 2 and 2x. The product of the first two denominators is equal to the third denominator.", variabilization: {}}, {id: "a2d8720LinEqua7a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x"], dependencies: ["a2d8720LinEqua7a-h1"], title: "LCD", text: "What is the LCD of this equation?", variabilization: {}}, {id: "a2d8720LinEqua7a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4-3x=7$$"], dependencies: ["a2d8720LinEqua7a-h2"], title: "Eliminating", text: "Simplify $$\\left(2\\right) x \\left(\\frac{2}{x}-\\frac{3}{2}\\right)=\\left(2\\right) x \\frac{7}{\\left(2\\right) x}$$.", variabilization: {}}, {id: "a2d8720LinEqua7a-h4", type: "hint", dependencies: ["a2d8720LinEqua7a-h3"], title: "Solve equation", text: "Then we should solve the linear equation obtained.", variabilization: {}}, {id: "a2d8720LinEqua7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=-1$$"], dependencies: ["a2d8720LinEqua7a-h4"], title: "Linear equation", text: "Solve the linear equation $$4-3x=7$$", variabilization: {}}, ]; export {hints};