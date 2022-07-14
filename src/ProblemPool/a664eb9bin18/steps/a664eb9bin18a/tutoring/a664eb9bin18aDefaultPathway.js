var hints = [{id: "a664eb9bin18a-h1", type: "hint", dependencies: [], title: "Finding out the pattern with Pascal's Triangle.", text: "We know that the variabels in this pattern will follow the pattern in Pascal's triangle. You should use the row of Pascal's triangle where the second number is 7.", variabilization: {}}, {id: "a664eb9bin18a-h2", type: "hint", dependencies: ["a664eb9bin18a-h1"], title: "Finding out the coefficients.", text: "The coefficients according to Pascal's triangle are 1, 7, 21, 35, 35, 21, 7, 1.", variabilization: {}}, {id: "a664eb9bin18a-h3", type: "hint", dependencies: ["a664eb9bin18a-h2"], title: "Expanding the polynomial.", text: "Use the formula: $${\\left(a+b\\right)}^n$$ $$=$$ $$a^n$$ + $$___a^n-1b^1$$ + $$___a^n-2b^2$$ +... + $$___a^1 b^n-1$$ + $$b^n$$ and fill in the blanks with the values from Pascal's triangle.", variabilization: {}}, {id: "a664eb9bin18a-h4", type: "hint", dependencies: ["a664eb9bin18a-h3"], title: "Plugging in the coefficients.", text: "Plug in the x, y, and coefficents.", variabilization: {}}, {id: "a664eb9bin18a-h5", type: "hint", dependencies: ["a664eb9bin18a-h4"], title: "Simplify the equation.", text: "Simplifying the equation results in the solution: $$x^7+7x^6+21x^5+35x^4+35x^3+21x^2+7x^1+1$$.", variabilization: {}}, ]; export {hints};