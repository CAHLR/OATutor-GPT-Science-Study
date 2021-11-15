var hints = [{id: "add2dfegeneral11a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["no"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral11a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["binomial"], dependencies: ["add2dfegeneral11a-h1"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["binomial", "trinomial", "other"], variabilization: {}}, {id: "add2dfegeneral11a-h3", type: "hint", dependencies: ["add2dfegeneral11a-h2"], title: "Binomial", text: "Since it's a binomial, check to see whether the expression is a sum or difference.", variabilization: {}}, {id: "add2dfegeneral11a-h4", type: "hint", dependencies: ["add2dfegeneral11a-h3"], title: "Difference of squares", text: "$$a^2-b^2=\\left(a-b\\right) \\left(a+b\\right)$$", variabilization: {}}, {id: "add2dfegeneral11a-h5", type: "hint", dependencies: ["add2dfegeneral11a-h4"], title: "Check", text: "If you are left with $$\\left(k^2+\\left(4\\right)\\right) \\left(k^2-\\left(4\\right)\\right)$$, look at the expression to see if you can further factor the expression. $$k^2-\\left(4\\right)$$ can be further factored!", variabilization: {}}, {id: "add2dfegeneral11a-h6", type: "hint", dependencies: ["add2dfegeneral11a-h5"], title: "Difference of squares again", text: "$$k^2-\\left(4\\right)$$ is a difference of squares and can be furthered factored into $$\\left(k+\\left(2\\right)\\right) \\left(k-\\left(2\\right)\\right)$$.", variabilization: {}}, ]; export {hints};