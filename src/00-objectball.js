function gameObject(){
    return{
        home:{
            teamName: "Brooklyn Nets",
            colors:["blacks","white"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                     points:22,
                    rebounds:12,
                    assists:12,
                     steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                     points:12,
                    rebounds:12,
                    assists:12,
                     steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                     points:17,
                    rebounds:19,
                    assists:10,
                     steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                     points:26,
                    rebounds:12,
                    assists:6,
                     steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                     points:19,
                    rebounds:2,
                    assists:2,
                     steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            colors:[" Turquoise","Purple"] ,
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                     points:10,
                    rebounds:1,
                    assists:1,
                     steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                "Bismack Biyombo":{
                    number:0,
                    shoe:16,
                     points:12,
                    rebounds:4,
                    assists:7,
                     steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                     points:22,
                    rebounds:12,
                    assists:12,
                     steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                     points:33,
                    rebounds:3,
                    assists:2,
                     steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                     points:6,
                    rebounds:12,
                    assists:12,
                     steals:22,
                    blocks:5,
                    slamDunks:12,
                },
        }
    }
}
} 

function numPointsScored(playerName){
    const data=gameObject();
    for(let team in data){
        if (data [team].players[playerName]){
            return data[team].players[playerName].points;
        }
    }
}
function shoeSize(playerName){
    const data=gameObject();
    for(let team in data){
        if (data [team].players[playerName]){
            return data[team].players[playerName].shoe;
        }
    }
}
function teamColors(playerName){
    const data=gameObject();
    for(let team in data){
        if (data [team].teamName===teamName){
            return data[team].colors;
        }
    }
}
function teamNames(){
    const data=gameObject();
           return [data.home.teamName, data.away.teamName];
        
}
function playerNumbers(teamName){
    const data=gameObject();
    for(let team in data){
        if (data [team].teamName===teamName){
            return Object.values(data[team].players).map(player=>player.Number)
        }
    }
}
function playerStats(playerName){
    const data=gameObject();
    for(let team in data){
        if (data [team].players[playerName]){
            return data[team].players[playerName];
        }
    }
}
function bigShoeRebounds(){
    const dataout=gameObject();
    const allPlayers={
        ...dataout.home.players, ...dataout.away.players};
        let largestShoePlayer=Object.keys(allPlayers)[0];
        for(let player in allPlayers){
            if(allPlayers[player].shoe>allPlayers[largestShoePlayer].shoe){
                largestShoePlayer=player
            }
        }
        return allPlayers[largestShoePlayer].rebounds;
}

