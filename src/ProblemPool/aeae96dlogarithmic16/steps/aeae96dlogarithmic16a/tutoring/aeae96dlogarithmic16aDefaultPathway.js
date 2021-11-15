var hints = [{id: "aeae96dlogarithmic16a-h1", type: "hint", dependencies: [], title: "Change-of-Base Formula", text: "The change-of-base formula can be used to evaluate a logarithm with any base. \\n For any positive real numbers M,b, and n, where $$n!=1$$ and $$b!=1$$, $$\\log_{b}\\left(M\\right)=\\log_{n}\\left(M\\right)/\\log_{n}\\left(b\\right)$$. \\n \\n 1) Determine the new base n, remembering that the common log, $$\\log(x)$$, has base 10, and the natural log, ln(x), has base e. \\n 2) Rewrite the log as a quotient using the change-of-base formula \\n a) The numerator of the quotient will be a logarithm with base n and argument M. \\n b) The denominator of the quotient will be a logarithm with base n and argument b. \\n", variabilization: {}}, {id: "aeae96dlogarithmic16a-h2", type: "hint", dependencies: ["aeae96dlogarithmic16a-h1"], title: "New Base", text: "What is the new base that we're changing to?", variabilization: {}}, {id: "aeae96dlogarithmic16a-h3", type: "hint", dependencies: ["aeae96dlogarithmic16a-h2"], title: "Change-of-Base", text: "What form does the quotient take after the change-of-base to the new base e?", variabilization: {}}, {id: "aeae96dlogarithmic16a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\ln(4.7)}{\\ln(\\frac{1}{2})}$$"], dependencies: ["aeae96dlogarithmic16a-h3"], title: "Change-of-Base", text: "Replacing $$M=4.7$$ and $$b=\\frac{1}{2}$$ in the question, what would the equivalent expression be?", variabilization: {}}, {id: "aeae96dlogarithmic16a-h5", type: "hint", dependencies: ["aeae96dlogarithmic16a-h4"], title: "Using the Calculator", text: "Use the calculator to evaluate $$\\frac{\\ln(4.7)}{\\ln(\\frac{1}{2})}$$.", variabilization: {}}, ]; export {hints};