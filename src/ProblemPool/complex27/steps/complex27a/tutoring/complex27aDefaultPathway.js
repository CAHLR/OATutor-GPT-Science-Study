var hints = [{id: "complex27a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute $$2+i$$ wherever you see x, and we get the expression $$y={\\left(2+i\\right)}^2+3\\left(2+i\\right)+5$$.", variabilization: {}}, {id: "complex27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3+4i$$"], dependencies: ["complex27a-h1"], title: "Quadratic Term", text: "Evaluate the term $${\\left(2+i\\right)}^2$$. What do you get?", subHints: [{id: "complex27a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3+4i$$"], dependencies: [], title: "Quadratic Term", text: "$${\\left(2+i\\right)}^2=\\left(2+i\\right) \\left(2+i\\right)=2^2+2i+2i+i^2$$. What does this evaluate to?", variabilization: {}}], variabilization: {}}, {id: "complex27a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$6+3i$$"], dependencies: ["complex27a-h1"], title: "X term", text: "Substitute $$2+i$$ for the 3x term. What is $$3\\left(2+i\\right)$$?", variabilization: {}}, {id: "complex27a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$14+7i$$"], dependencies: ["complex27a-h2", "complex27a-h3"], title: "Combine like terms.", text: "Combine the like terms (real and non real). What expression do you get?", variabilization: {}}, ]; export {hints};