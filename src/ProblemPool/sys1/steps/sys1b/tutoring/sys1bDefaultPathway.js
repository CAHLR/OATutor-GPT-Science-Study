var hints = [{id: "sys1b-h1", type: "hint", dependencies: [], title: "Substitute", text: "We substitue $$x=-4$$ and $$y=-3$$ into both equations.", variabilization: {}}, {id: "sys1b-h2", type: "hint", dependencies: ["sys1b-h1"], title: "Substitute into First Equation", text: "$$x-y=-1$$ \\n $$-4-(-3)=-1$$ \\n $$-1=-1$$", variabilization: {}}, {id: "sys1b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["sys1b-h2"], title: "Substitute into First Equation", text: "Is the equation above true?", choices: ["True", "False"], variabilization: {}}, {id: "sys1b-h4", type: "hint", dependencies: ["sys1b-h3"], title: "Solution to First Equation", text: "Therefore, (-4,-3) satisfies the first equation, but it must also safisfy the second equation.", variabilization: {}}, {id: "sys1b-h5", type: "hint", dependencies: ["sys1b-h4"], title: "Substitute into Second Equation", text: "$$2x-y=-5$$ \\n $$2\\times-4-\\left(-3\\right)=-5$$ \\n $$-5=-5$$", variabilization: {}}, {id: "sys1b-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["sys1b-h5"], title: "Substitute into Second Equation", text: "Is the equation above true?", choices: ["True", "False"], variabilization: {}}, {id: "sys1b-h7", type: "hint", dependencies: ["sys1b-h6"], title: "Solution to Second Equation", text: "Therefore, (-4,-3) does satisfies the second equation.", variabilization: {}}, {id: "sys1b-h8", type: "hint", dependencies: ["sys1b-h7"], title: "Solutions of a System of Equations", text: "(-4,-3) does make both equations true. (-4,-3) is a solution.", variabilization: {}}, ]; export {hints};