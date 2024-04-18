document.getElementById("draw").addEventListener("click", function() {
    document.getElementById("Rules").classList.add("hidden");
    var card = getRandomObjectFromArray(cardList);
    document.getElementById("CardTitle").textContent = card.title;
    document.getElementById("CardText").textContent = card.text;
    document.getElementById("Card").classList.remove("hidden");
});

document.getElementById("rules").addEventListener("click", function() {
    document.getElementById("Card").classList.add("hidden");
    document.getElementById("Rules").classList.remove("hidden");
});

var cardList = [
    {
        "title":"Baldy baldy baldy ",
        "text":"male pattern baldness got you down, just shave it all off. Wear the bald cap"
    },
    {
        "title":"Ellen's Quiz Time",
        "text":"Ellen will ask a question about Matt get it wrong and you have to drink"
    },
    {
        "title":"Tattoo time",
        "text":"You are jealous of Matt's sick ink, get one of Matt's tattoos done with a Sharpie"
    },
    {
        "title":"King of Burghfield",
        "text":"You're the king of a small village, time to throw your weight around. Chose a drink, everyone has to order that as their next drink"
    },
    {
        "title":"God tier Moustache",
        "text":"Matt has an amazing tache, you should draw one on to be just like him. If you already have one you don't have to do anything ... except remove that beard. Forfitting this is worth 2 shots"
    },
    {
        "title":"Music mysteo",
        "text":"let the group record a new ring tone for you and leave your phone on loud for the rest of the night or down your drinks and another person's"
    },
    {
        "title":"Where's my phone?",
        "text":"ooopies you left your phone alone in a room with Matt, he can send one text to anyone on your phone (excluding work and parents). Or take a shot"
    },
    {
        "title":"Matt facts",
        "text":"Matt's facts are usually fake, give him a cool new fact on the topic of his choice. If he likes your fact you can give out a drink, else you must drink."
    },
    {
        "title":"Hey that's my joke",
        "text":"(don't read this out loud) whenever Joe talks you must say whatever he says but just louder or take a shot."
    },
    {
        "title":"Lil honkys training school",
        "text":"everything you say for the next 10 mins must be spoken in rhymes, or a shot to remove this curse"
    },
    {
        "title":"Lil froggy boy",
        "text":"Matt likes frogs, frogs like water and so do you. Neck a pint of water, you must finish it in one go or else you have to do a shot you naughty frog."
    },
    {
        "title":"I go to the gym, do you?",
        "text":"Matt goes to the gym and is super buff. For each push up over 10 you can do, give out that many sips. For each one under 10 drink that many."
    },
    {
        "title":"Matt has Fridays off ",
        "text":"so should you, but it's a Saturday, either way chill, this card is a freebie "
    },
    {
        "title":"Al does the griddy",
        "text":"if Al is here he must do the griddy, otherwise you have to and you have to take 3 sips as you have lost Al "
    },
    {
        "title":"Chat mpt",
        "text":"ask chat gpt to make a drinking game for us to play given our current situation and we must all play it. You are the games leader, it is up to you to get everyone to play"
    },
    {
        "title":"You are gay",
        "text":"f you read this card you are gay, order a fancy drink at the bar and let Matt have half cause he's half gay ( unless your monty and then you can have the whole pint) #birearser"
    },
    {
        "title":"Change places",
        "text":"you get to swap everyone's drinks around. Choose who gets who's."
    },
    {
        "title":"Only child",
        "text":"Matt's and only child and so now are you. You must go finish your drink on a table by yourself and you can't come back till it's finished "
    },
    {
        "title":"You've skipped leg day ",
        "text":"Matt always skips leg day but not today. Chose someone to carry to the next pub. They cannot have been picked before. 1 sip per time you stop. You're not allowed to move without carrying them"
    },
    {
        "title":"Naughty vapers",
        "text":"won't you think of the planet, if you bought a vape out today you must finish your drink. Unless someone has asked for some of it, then they must finish your drink"
    },
    {
        "title":"Vest time",
        "text":"Matt loves a vest so wear one for him (one will be supplied)"
    }
]


function getRandomObjectFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }