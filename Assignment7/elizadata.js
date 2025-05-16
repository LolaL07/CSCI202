// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"What is your issue?",
"State your problem clearly.",
"What seems to be the trouble?",
"Describe what’s been going on."
];

var elizaFinals = [
"That's all. Go away.",
"The conversation is over.",
"Session concluded. Goodbye.",
"That's the end of our time. Goodbye.",
"This session is finished. I hope there isn't a next time.",
"Finally."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I don’t understand what you're saying.",
      "Just get to the point.",
      "What does that even mean?",
      "Does this matter to you?",
      "Keep going, if you must.",
      "Enough with this already."
  ]]
]],
["sorry", 0, [
 ["*", [
     "Stop apologizing. It’s irrelevant.",
      "I don’t need your apologies.",
      "Apologies won’t change anything.",
      "Just get to the next thing."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Why do you care about (2) now?",
      "What’s with this memory obsession?",
      "What’s the point of remembering (2)?",
      "Really? You’re still on this?"
  ]],
 ["* do you remember *", [
     "Why did you think I’d forget?",
      "Why are you bringing that up again?",
      "I don’t see why I should recall (2)."
  ]],
  ["* you remember *", [
    "I don’t care about (2).",
    "Why should I even remember (2)?",
    "Don’t expect me to remember that."
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "You forgot? So what?",
      "Does it even matter that you forgot (2)?",
      "Why are you fixating on (2)?",
      "Can’t you just move on from (2)?",
      "You should forget."
  ]],
 ["* did you forget *", [
     "What's it to you?",
     "Are you sure you told me ?",
     "Why should I remember (2)?",
     "Did you even mention (2)?",
     "Why is this such a big deal?"
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Is this really important?",
     "Why are we wasting time on this?",
     "Who cares about (2)?",
     "Can we get to something else?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Who cares about your dream?",
     "Really? Why are we discussing this?",
     "Does dreaming about (2) matter at all?",
     "goto dream"
  ]]
]],
["dream", 3, [
  ["*", [
    "What’s the point of talking about dreams?",
    "Dreams are irrelevant. Let’s move on.",
    "Is this dream supposed to mean something?"
  ]]
]],
["perhaps", 0, [
  ["*", [
    "You’re uncertain. What else is new?",
    "Just make up your mind already.",
    "Why are you so unsure about everything?",
    "You think?"
  ]]
]],
["name", 15, [
  ["*", [
    "I don’t care about your name.",
    "Why are you still talking about names?",
    "Name’s irrelevant. Move on."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I don’t speak German. Deal with it.",
      "Why are you even trying German? It’s pointless."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I don’t speak French. Find someone who does.",
      "Why bother with French? I don’t know it."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian.",
     "Stop trying to speak Italian. It’s just as useless as you."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I don’t speak Spanish. End of story."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
  ["*", [
    "What do you want?",
    "What’s your problem? Let’s get to it.",
    "What now?",
    "Can't you just leave me alone?",
    "You're so needy."
  ]]
]],
["computer", 50, [
  ["*", [
    "Do computers even matter?",
    "Why bring up computers? Who cares?",
    "Machines won’t solve your problem. Move on."
  ]]
]],
["am", 0, [
  ["* am i *", [
    "Do you even know what (2) means?",
    "Why do you care about this?",
    "Why ask me? Figure it out yourself."
  ]],
  ["* i am *", [
    "Why even mention that?"
  ]],
  ["*", [
    "I don’t care about 'am'. Move on."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "What’s it to you if I’m (2) ?",
     "Does it really matter if I’m (2) ?",
     "Why are you so concerned about me?",
     "No.",
     "That is none of your business.",
     "goto what",
     "Would it matter to you?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you",
     "What difference does it make?"
  ]],
 ["* are *", [
     "Oh really?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?",
     "Why are you questioning that?",
     "Are you (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Worry about your own (2) ?",
     "Really, my (2) ?",
     "Why are you fixating on my (2)?",
     "Who cares about my (2)?",
     "Get your own (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "You probably were (2) ?",
     "Were you (2) ?",
     "Why even bring this up?",
     "What if you were (2)? Who cares?",
     "goto what"
  ]],
 ["* i was *", [
     "Why do you tell me you were (2) now ?",
     "So what? You were (2), big deal.",
     "I already know you were (2).",
     "Why bring that up now?"
  ]],
 ["* was you *", [
     "I don't think I was (2) ?",
     "What suggests that I was (2) ?",
     "Why don't you just stop now ?",
     "Why should I care if I was (2)?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "Why do you even want (3)?",
      "Why would you want that?",
      "Does that really matter to you?",
      "Is this really important right now?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "Don’t expect sympathy from me.",
     "You should fix that then.",
     "I'm sure it's not pleasant to be (3)."
  ]],
 ["* i am* @happy *", [
     "So what? Why are you telling me ?",
     "Does that mean you'll leave ?",
     "How about you go be (3) somewhere else.",
     "Are you actually (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really believe that? Whatever."
  ]],
 ["* i* @belief *you *", [
     "goto you",
     "Do you really believe that? Whatever.",
     "What does that even mean?"
  ]],
 ["* i am *", [
     "Do you really need me for that?",
     "You shouldn't be (2) ?",
     "Do you think it's normal to be (2) ?",
     "It seems like you already know whats wrong.",
     "Why are you still talking about yourself?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you even tried ?",
     "You're right. You can't (3)",
     "So you can’t. Deal with it."
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Then don't you (2) ",
     "That’s your problem, not mine."
  ]],
 ["* i feel *", [
     "Stop talking about your dumb emotions.",
     "Maybe just don't feel (2) ?",
     "Don’t expect me to care about your feelings.",
     "Do you have to tell me this ?"
  ]],
 ["* i * you *", [
    "What do you want me to say about that?",
     "Can you not (2) me ?",
     "What does that even mean?"
  ]],
 ["*", [
     "Whatever you say.",
     "Elaborate if you must, I suppose",
     "Do you say (1) for some special reason ?",
     "That is almost interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "I bet you wish you were (2) ?",
     "So what if I am (2)? Does it matter?"
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "So what if I do (2) you ?",
     "Really, I (2) you ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "This isn't about me. Focus on yourself."
  ]]
]],
["yes", 0, [
 ["*", [
    "You’re sure? I don’t care.",
     "You are sure.",
     "Are we done then?",
     "Why do you need me then?"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "You're probably right.",
     "HOw do you even know ?",
     "What you are talking about ?"
  ]],
 ["*", [
     "Well, that’s just your opinion.",
      "Whatever you say, I guess.",
     "Why are you saying 'no'? Get over it.",
     "Why not ?",
     "Yes."
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Why bring up your (2)? No one cares.",
     "And why is your (2) important ?",
     "Earlier you said your (2).",
     "Am I supposed to care about that ?"
  ]],
 ["* my* @family *", [
     "I don't care about your dumb family.",
     "Your still talking ?",
     "Your (3) ?",
     "Just tell me what you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2)? So what?",
     "Why do you say your (2) ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "Why ask me? Do it yourself.",
     "goto what",
     "I can't (2).",
     "Would like to be able to (2) yourself ? Pathetic."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Figure it out on your own.",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why are you asking that?",
     "That's a weird question",
     "What is it you really want to know ?",
     "Just get on with it.",
     "If I answer, will you go away ?",
     "What do you think ?",
     "Stop asking me question."
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Does that really explain anything?",
     "Are you sure ?",
     "Poor excuse.",
     "How do I know you're not lying ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Why do you even care?",
     "Why don't you (2) ?",
     "Should you (2) yourself ?",
     "I will (2) if I want to.",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Maybe you just can’t. Deal with it.",
     "Do you believe this will help you to (2) ?",
     "It wouldn't help you anyways.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Who, for example?",
     "Are you thinking of a specific person ?",
     "Who are you talking about?",
     "Someone specific maybe ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Be more specific or I can't help you.",
     "When ?",
     "What incident are you thinking of ?",
     "Really ? Always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "Are you sure theres any resemblance?",
     "What other connections are there?",
     "What do you suppose that means ?",
     "What is the connection?",
     "How ?",
     "Are you sure ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be a connection ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof