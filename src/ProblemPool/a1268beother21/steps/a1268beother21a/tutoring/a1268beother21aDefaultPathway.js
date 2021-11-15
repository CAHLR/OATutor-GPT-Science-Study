var hints = [{id: "a1268beother21a-h1", type: "hint", dependencies: [], title: "Isolating One Radical", text: "The first step is to isolate one radical, which can be accomplished by subtracting $$\\sqrt{x+\\left(2\\right)}$$ from both sides of the equation.", variabilization: {}}, {id: "a1268beother21a-h2", type: "hint", dependencies: ["a1268beother21a-h1"], title: "Squaring Both Sides of the Equation", text: "Next, after subtracting $$\\sqrt{x+\\left(2\\right)}$$ from both sides of the equation, square both sides.", variabilization: {}}, {id: "a1268beother21a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(3\\right) x+\\left(7\\right)=\\left(1\\right)-\\left(2\\right) \\sqrt{x+\\left(2\\right)}+x+\\left(2\\right)$$"], dependencies: ["a1268beother21a-h2"], title: "Equation after Squaring Both Sides", text: "After squaring both sides and expanding the right side, what is the equation?", choices: ["$$\\left(3\\right) x+\\left(7\\right)=\\left(1\\right)-\\left(2\\right) \\sqrt{x+\\left(2\\right)}+x+\\left(2\\right)$$", "$$\\left(3\\right) x+\\left(7\\right)+\\left(3\\right)=\\sqrt{x+\\left(2\\right)}$$", "$$\\left(3\\right) x+\\left(7\\right)=\\left(4\\right)-\\left(2\\right) \\sqrt{x+\\left(2\\right)}+x+\\left(2\\right)$$", "$$\\left(3\\right) x+\\left(7\\right)=\\left(1\\right)-\\left(2\\right) \\sqrt{x+\\left(2\\right)}$$"], variabilization: {}}, {id: "a1268beother21a-h4", type: "hint", dependencies: ["a1268beother21a-h3"], title: "Isolating the Remaining Radical", text: "Next, isolate the radical on the right side by moving all other terms to the left.", variabilization: {}}, {id: "a1268beother21a-h5", type: "hint", dependencies: ["a1268beother21a-h4"], title: "Eliminating the Radical", text: "Then, eliminate the remaining radical on the right side by squaring both sides again.", variabilization: {}}, {id: "a1268beother21a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(4\\right) x^2+\\left(12\\right) x+\\left(8\\right)=0$$"], dependencies: ["a1268beother21a-h5"], title: "Result after Eliminating the Radical", text: "What is the quadratic equation (set to 0) after the radical has been eliminated?", choices: ["$$\\left(4\\right) x^2+\\left(12\\right) x+\\left(8\\right)=0$$", "$$\\left(3\\right) x^2+\\left(11\\right) x+\\left(4\\right)=0$$", "$$x^2+\\left(2\\right) x+\\left(1\\right)$$"], variabilization: {}}, {id: "a1268beother21a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x=-2, -1$$"], dependencies: ["a1268beother21a-h6"], title: "Solving the New Quadratic Equation", text: "Solve for x from the new quadratic equation. What x values make the new equation 0?", choices: ["$$x=-2, -1$$", "$$x=3, -3$$", "$$x=1, 2$$", "$$x=1, -2$$"], variabilization: {}}, {id: "a1268beother21a-h8", type: "hint", dependencies: [], title: "Checking for Extraneous Solutions", text: "Plug in the answers to the quadratic equation to the original problem to see if they are valid solutions.", variabilization: {}}, ]; export {hints};