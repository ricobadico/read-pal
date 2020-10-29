
export default (req,res) => {

    const database = {
        savedtexts: [
        {
            id: '00000', 
            text: "A beautiful young woman named Buttercup lives on a farm in the fictional kingdom of Florin. Whenever she instructs the farmhand Westley, he complies and answers, 'As you wish'. She eventually realizes that he truly means 'I love you' and that she loves him in return. He leaves to seek his fortune so they can marry, but his ship is attacked by the Dread Pirate Roberts, who is infamous for never leaving survivors, and Westley is believed dead."
        },
        {
            id: '00001',
            text: "The water chevrotain is a small animal that resembles a deer (Cervidae). This species is larger than its Asian counterparts, maintaining a size similar to a rabbit. The water chevrotain has a body length of between 45 and 85 cm and a tail length ranging from 7.5 to 17 cm. Animals of this species weigh 7-15 kg, however, the average weight for males is only 9.7 kg, whereas females average 12 kg. The weight at birth is unknown."
        }
        ]
    }
    // Grab id from the webpage
    const idToCheck = JSON.parse(req.body).id; 

    //check for the id in the database (TODO: setup SQL database and select from that)
    for(let entry in database.savedtexts){
        if (database.savedtexts[entry].id == idToCheck){
            res.statusCode = 200;
            res.json(database.savedtexts[entry].text);
        }
    }
    res.statusCode = 404;
    res.json("Page not found.");
}

