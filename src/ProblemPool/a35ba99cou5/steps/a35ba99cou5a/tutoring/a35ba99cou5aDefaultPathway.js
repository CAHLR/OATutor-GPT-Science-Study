var hints = [{id: "a35ba99cou5a-h1", type: "hint", dependencies: [], title: "Add the Number of Options", text: "We can add the number of positive number options to the number of odd number options to find the total number of options.", variabilization: {}}, {id: "a35ba99cou5a-h2", type: "hint", dependencies: ["a35ba99cou5a-h1"], title: "Number of Positives", text: "There are 4 positive numbers: 20, 36, 48, 72.", variabilization: {}}, {id: "a35ba99cou5a-h3", type: "hint", dependencies: ["a35ba99cou5a-h2"], title: "Number of Odds", text: "There are 2 odd numbers: -23, -7.", variabilization: {}}, {id: "a35ba99cou5a-h4", type: "hint", dependencies: ["a35ba99cou5a-h2", "a35ba99cou5a-h3"], title: "Add the Number of Options", text: "# of positive number options+# of odd number options \\n $$\\left(4\\right)+\\left(2\\right)=6$$", variabilization: {}}, {id: "a35ba99cou5a-h5", type: "hint", dependencies: ["a35ba99cou5a-h4"], title: "Total Ways", text: "There are 6 ways to choose a positive or an odd number from B.", variabilization: {}}, ]; export {hints};