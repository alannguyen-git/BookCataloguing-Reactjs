
const initState = {
    books : [
        {
            book_id : 9780739360385, 
            book_title: 'Harry Potter and the Deathly Hallows', 
            book_body:"It all comes down to this - a final faceoff between good and evil. You plan to pull out all the stops, but every time you solve one mystery, three more evolve. Do you stay the course you started, despite your lack of progress? Do you detour and follow a new lead that may not help? Do you listen to your instincts, or your friends? Lord Voldemort is preparing for battle and so must Harry. With Ron and Hermione at his side, he's trying to hunt down Voldemort's Horcruxes, escape danger at every turn, and find a way to defeat evil once and for all. How does it all end? Find out in Harry Potter and the Deathly Hallows.",
            book_edition: "1st edition",
            book_publicationYear: 2007,
            book_publisher: "Listening Library",
            book_author: 'J.K. Rowling',
            book_category: 'Fantasy',
            book_comment: ["Harry Potter is one of the best character ever created for a novel", "I really love this"]
        },
        {
            book_id : 9780747532743, 
            book_title: "Harry Potter and the Philosopher's Stone", 
            book_body:"Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",
            book_edition: "2nd edition",
            book_publicationYear: 1997,
            book_publisher: "Bloomsbury Publishing PLC",
            book_author: 'J.K. Rowling',
            book_category: 'Fantasy',
            book_comment: ["Yessir","Ron is funny LOL"]
        },
        {
            book_id : 9780439064866, 
            book_title: 'Harry Potter and the Chamber of Secrets', 
            book_body:"In one of the most hotly anticipated sequel in memory, J.K. Rowling takes up where she left off with Harry's second year at the Hogwarts School of Witchcraft and Wizardry. Old friends and new torments abound, including a spirit named Moaning Myrtle who haunts the girls' bathroom, an outrageously conceited professor, Gilderoy Lockheart, and a mysterious force that turns Hogwarts students to stone.",
            book_edition: "3rd edition",
            book_publicationYear: 1998,
            book_publisher: "Scholastic",
            book_author: 'J.K. Rowling',
            book_category: 'Fantasy',
            book_comment: ["Give me a copy","Best book ever written"]
        }  
    ],
    externalDB : [
        {
            book_id: 9780525538882,
            book_title: 'Please give me 100%',
            book_body: "Miss Sharma is one of the best teacher Alan had ever worked with. Her dedication to teaching has helped many of her SDD students to achieve a band 6 in this subject. She can sometimes be a little harsh but it's alright, it is for the good.",
            book_edition: '1st edition',
            book_publicationYear: 2021,
            book_publisher: 'Alan the best student',
            book_author: 'Alan Nguyen',
            book_category: 'Comedy',
            book_comment: ['If you see this, please give me 100', "If I don't get 100%, I will argue with you for weeks"]
        },
        {
            book_id: 9780981079875,
            book_title: 'Miss Sharma is the best',
            book_body: 'Well Alan cannot write the best content:)) But please give me 100% I deserve it hehe',
            book_edition: '1st edition',
            book_publicationYear: 2021,
            book_publisher: 'Alan the best student',
            book_author: 'Alan Nguyen',
            book_category: 'Comedy',
            book_comment: ['I need this 100%', 'THis weighting is too high, which means I will argue till the end to get 100%']
        },
        {
            book_id: 9780439136365,
            book_title: 'Harry Potter And The Prisoner Of Azkaban',
            book_body: "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well. And the Azkban guards heard Black muttering in his sleep, 'He's at Hogwarts...he's at Hogwarts.' Harry Potter isn't safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may well be a traitor in their midst.",
            book_edition: '2nd edition',
            book_publicationYear : 2001,
            book_publisher: 'Scholastic Paperbacks',
            book_author: 'J.K. Rowling',
            book_category: 'Fantasy',
            book_comment : ['Give me a closer look on Draco','What a good uncle Harry has']
        },
        {
            book_id: 9780439785969,
            book_title: 'Harry Potter and the Half-Blood Prince',
            book_body: "The war against Voldemort is not going well; even the Muggles have been affected. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses. And yet . . . as with all wars, life goes on. Sixth-year students learn to Apparate. Teenagers flirt and fight and fall in love. Harry receives some extraordinary help in Potions from the mysterious Half-Blood Prince. And with Dumbledore's guidance, he seeks out the full, complex story of the boy who became Lord Voldemort -- and thus finds what may be his only vulnerability.",
            book_edition: '4th edition',
            book_publicationYear : 2006,
            book_publisher: 'Scholastic Paperbacks',
            book_author: 'J.K. Rowling',
            book_category: 'Fantasy',
            book_comment : ['Mr. Snape is officially my idol','Plot twistzzz']
        },
        {
            book_id: 9780439705905,
            book_title: 'Harry Potter and the Order of the Phoenix',
            book_body: "The series also has one of my favorite scenes in all of literature: when Dumbledore brings Firenze on during the rainstorm as the new divination teacher (a scene I was so disappointed they cut on the movie. The seeds were they but they cut it damn it.). The climax of the book is great, with Dumbledore's Army truly coming into their own as they fight against the Death Eaters, who are trying to take the Prophecy from the Hall of Prophecy in the Ministry For Magic. I love that whole end sequence. And the death Rowling includes is just brutal, not really how she kills off the character but the fact she killed him off at all. Interestingly enough, Arthur Weasly, who survives an attack in this novel, was originally slated to die, but Rowling could not bear to kill him off. He was also supposed to die in Book 7, but she couldn't kill him then either, and he was the only real normal fatherfigure in the series, and a good father at that. And naturally, we get to learn some vastly important information about Neville Longbottom. Following the trend of other installments in the series in regards to introducing apparently non-essential characters and information,, he turns out to much more important than you would suppose. We also begin to learn Dumbledore isn't as flawless as you would like to think.",
            book_edition: '1st edition',
            book_publicationYear : 2003,
            book_publisher: 'Scholastic Paperbacks',
            book_author: 'J.K. Rowling',
            book_category: 'Fantasy',
            book_comment : ['So coll','Dumble for life']
        },
        {
            book_id: 9780099555254,
            book_title: 'My Policeman',
            book_body: "It is in 1950s' Brighton that Marion first catches sight of Tom. He teaches her to swim in the shadow of the pier and Marion is smitten—determined her love will be enough for them both. A few years later in Brighton Museum Patrick meets Tom. Patrick is besotted with Tom and opens his eyes to a glamorous, sophisticated new world. Tom is their policeman, and in this age it is safer for him to marry Marion. The two lovers must share him, until one of them breaks and three lives are destroyed.",
            book_edition: '1st Edition',
            book_publicationYear: 2012,
            book_publisher: 'Chatto & Windus',
            book_author: 'Bethan Roberts',
            book_category: 'Drama',
            book_comment : ['One of the best novel ever written', 'I kind have a felling this book is not going to have a second part']
        }
    ]
}



const rootReducer = (state = initState, action) => {
    if( action.type === 'POST_COMMENT') {
        let index = state.books.findIndex(book => book.book_id === action.id)
        let newState = state.books
        newState[index].book_comment.push(action.comment)
        newState[index].book_comment.splice(0,1)       
        return {
            ...state,
            books : newState
        }
    } else if( action.type === 'EDIT_CATEGORY') {
        let index = state.books.findIndex( book => book.book_id === action.id)
        let newState = state.books
        newState[index].book_category = action.category
        return {
            ...state,
            books: newState
        }
    } else if( action.type === 'DOWNLOAD_BOOK') {
        let index = state.externalDB.findIndex( book => book.book_id === action.id)
        let objToBePush = state.externalDB[index]
        let newState = state.books
        newState.push(objToBePush)
        let newDB = state.externalDB.filter( book => book.book_id !== action.id)
        
       
        return {
            ...state,
            books: newState,
            externalDB: newDB
        }
    }
    return state
}

export default rootReducer