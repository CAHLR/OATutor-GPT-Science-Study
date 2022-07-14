var hints = [{id: "aadff92AppQuad11a-h1", type: "hint", dependencies: [], title: "Set Up Equation For Problem", text: "Let the width of the driveway be w, we can write the length in terms of w as $$5+3w$$.", variabilization: {}}, {id: "aadff92AppQuad11a-h2", type: "hint", dependencies: ["aadff92AppQuad11a-h1"], title: "Equation For Rectangle Area", text: "Area of $$Rectangle=width length=w \\left(5+3w\\right)=50$$", variabilization: {}}, {id: "aadff92AppQuad11a-h3", type: "hint", dependencies: ["aadff92AppQuad11a-h2"], title: "Solve For Unknown Using Quadratic Formula", text: "The quadratic formula states $${ax}^2+bx+c=0$$, then $$x=\\frac{\\left(-b\\pm\\sqrt{b^2-4ac}\\right)}{2a}$$.", variabilization: {}}, {id: "aadff92AppQuad11a-h4", type: "hint", dependencies: ["aadff92AppQuad11a-h3"], title: "Solve For Unknown Using Quadratic Formula", text: "Given $$w \\left(5+3w\\right)=50$$, use quadratic formula to solve for w. We get the width $$w=\\frac{10}{3}$$ or -5. Given that width of rectangle has to be positive, we can omit the negative answer. Therefore, the width is $$\\frac{10}{3}$$.", variabilization: {}}, {id: "aadff92AppQuad11a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["aadff92AppQuad11a-h4"], title: "Find the Length", text: "Given the width is $$\\frac{10}{3}$$, the length is five feet more than three times the width. What is the length?", variabilization: {}}, ]; export {hints};