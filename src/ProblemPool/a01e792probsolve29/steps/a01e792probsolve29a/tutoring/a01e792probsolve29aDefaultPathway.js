var hints = [{id: "a01e792probsolve29a-h1", type: "hint", dependencies: [], title: "Define variables", text: "Give the first unknown number a variable (like x) and set the second number interms of x. Since the problem says consecutive numbers second number would be $$x+\\left(1\\right)$$", variabilization: {}}, {id: "a01e792probsolve29a-h2", type: "hint", dependencies: ["a01e792probsolve29a-h1"], title: "Setting an equation", text: "Based on the question the two numbers are x and $$x+\\left(1\\right)$$ which add up to 95. Try to write an equation based on what you know", variabilization: {}}, {id: "a01e792probsolve29a-h3", type: "hint", dependencies: ["a01e792probsolve29a-h2"], title: "Seperate Constants", text: "The equation equals $$x+x+\\left(1\\right)=47$$. Now we will seperate the constant numbers to one side. Remeber if you subtract from one side you are also subtracting from the other side", variabilization: {}}, {id: "a01e792probsolve29a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["94"], dependencies: ["a01e792probsolve29a-h3"], title: "Seperating constants", text: "what is 95-1", variabilization: {}}, {id: "a01e792probsolve29a-h5", type: "hint", dependencies: ["a01e792probsolve29a-h4"], title: "Seperating variable", text: "The equation equals $$x+x+\\left(1\\right)=95$$. Now we will seperate the variables to one side. Remeber if you subtract from one side you are also subtracting from the other side", variabilization: {}}, {id: "a01e792probsolve29a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x"], dependencies: ["a01e792probsolve29a-h5"], title: "Seperating variable", text: "what is $$x+x$$", variabilization: {}}, {id: "a01e792probsolve29a-h7", type: "hint", dependencies: ["a01e792probsolve29a-h6"], title: "Find x", text: "Now that we have seperated x and constants your equations should be $$2x=94$$. Now find what is the value of x by dividing both sides by 2", variabilization: {}}, {id: "a01e792probsolve29a-h8", type: "hint", dependencies: ["a01e792probsolve29a-h7"], title: "Number 2", text: "Now that you have found the first number which is x, add one to it to get the second number.", variabilization: {}}, ]; export {hints};