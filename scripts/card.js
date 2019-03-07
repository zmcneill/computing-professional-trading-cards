function myCard() {
    var card = document.getElementById("card");
    var paragraph = document.getElementById("pCard");
    var title = document.getElementById("hCard");
    var image = document.getElementById("imgCard");
    var cards = [];
   
    if (card.style.display === "none") {
        //Generates random number (0-9) to pick chacter each time it is called
        var character = (~~(Math.random() * 5));

        //Generates random number to pick color each time is called
        var rareTest = Math.random();
        var rare = "";
        var name = "";
        var bio = "";
        var colorRed = "";
        var colorBlue = "";
        var colorGreen = "";

        if (rareTest >= 0.0 && rareTest < 0.6) {
            colorRed = 54;
            colorGreen = 158;
            colorBlue = 148;
            rare = "Common"
        } else if (rareTest >= 0.6 && rareTest < 0.9) {
            colorRed = 186;
            colorGreen = 10;
            colorBlue = 20;
            rare = "Rare"
        } else if (rareTest >= 0.9) {
            colorRed = 255;
            colorGreen = 215;
            colorBlue = 0;
            rare = "Ultra Rare"
        }
        //displays card settings
        card.style.display = "inline-block";
        card.style.backgroundColor = 'rgb(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')';

        switch (character) {
            case 0:
                image.src = "../images/0.jpg";
                name = "Josh";
                bio = "Josh is the Lead TA for Computing Professionals.";
                break;
            case 1:
                image.src = "../images/1.jpg";
                name = "Dr. Dale-Marie Wilson";
                bio = "Dr. Wilson runs Computing Professionals.";
                break;
            case 2:
                image.src = "../images/2.jpg";
                name = "The Lecture Hall"
                bio = "The Lecture Hall is where Dr. Wilson teaches.";
                break;
            case 3:
                image.src = "../images/3.jpg";
                name = "The Cone Lab"
                bio = "The Cone Lab is where TA's help with activities."
                break;
            case 4:
                image.src = "../images/4.jpg";
                name = "Woodward Hall"
                bio = "Woodward Hall is where awesome students like you show up to learn about computing!"
                break;

        }
        //set character bio p tag
        paragraph.innerHTML = bio;
        title.innerHTML = name + "</br><h2>" + rare + "</h2>";
        var aCard = new Card(card, paragraph, title, image);

    } else {
        card.style.display = "none";
    }
}

function Card(card, paragraph, title, image){

        this.card=card;
        this.paragraph=paragraph;
        this.title=title;
        this.image=image;

}


