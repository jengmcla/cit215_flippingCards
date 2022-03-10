new Vue({
    el: "#flashcards-app",
    data: {
        cards: [
            {
                question: "What year was IUPUI founded?",
                answer: "1969",
                category: "history",
                flipped: false
            },
            {
                question: "What is 2+2?",
                answer: "Fish",
                category: "math",
                flipped: false
            },
            {
                question: "Is mayonnaise an instrument?",
                answer: "No",
                category: "science",
                flipped: false
            }
        ],
        form: {
            question: "",
            answer: "",
            category: "",
            flipped: false
        }
    },
    methods: {
        submit: function () {
            this.cards.push(this.form);
            this.form = {
                question: "",
                answer: "",
                category: "",
                flipped: false
                // clears it all
            }
        },
        flip: function (index) {
            console.log(this);
            this.cards[index].flipped = true;
        },
        flipper: function (index) {
            this.cards[index].flipped = false;
        }
        // even though this usually refers to its parent (in this case function),
        // vue understands this is referring to the data
    },
});

// let app = new Vue({
//     el: "#app",
//     data: {
//         likes: 0,
//         tweets: [
//             {
//                 name: "Hi",
//                 age: "20",
//                 cool: false
//             },
//             {
//                 name: "Billy",
//                 age: "20",
//                 cool: true
//             }
//         ],
//         users: [],
//         title: "Amazon",
//         form: {
//             name: "",
//             color: "",
//             cool: true
//         }
//     },
//     methods: {
//         likeUp: function (nm) {
//             this.likes = this.likes + nm;
//             if (this.likes >= 10) {
//                 this.title = "Yahoo"
//             }
//         },
//         submit: function () {
//             this.tweets.push(this.form);
//             this.form = {
//                 name: "",
//                 color: "",
//                 cool: true
//                 // clears it all
//             }
//         }
//         // even though this usually refers to its parent (in this case function),
//         // vue understands this is referring to the data
//     }
// });
//
// // JSON objects can store functions