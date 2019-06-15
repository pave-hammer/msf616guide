import { Component } from '@angular/core';

@Component({
  selector: 'war',
  templateUrl: './war.component.html',
  styleUrls: [ './war.component.css' ]
})
export class war  {
  warObj: Object = {
    introMessage: 'Here\'s an analogy that describes war pretty well - if you took chess and battleship and smashed them together, you\'d have alliance war. Good defense and speed are the keys to winning at War. "Why?" - you ask? Well, to answer that question, we have to first take a look at the rooms themselves.',
    buffDeets: [
      'There are three different kinds of buffs that rooms give (Yup, the rooms give buffs!).',
      'Global - The buff(s) these rooms provide apply to the entire alliance',
      'Adjacent - This applies to rooms that are immediately next this room itself, both left and right, as well as up and down.',
      'Room - These buff(s) only apply to the teams in that specific room.'
    ],
    buffBreakdown: {
      globalBuffs: [
        ' - Armory (worth 50 points) gives an additional 20% health, damage, armor, resistance and focus to attacking teams (+10% more to military)',
        ' - Barracks (worth 50 points) gives an additional 20% health, damage, armor, resistance, and focus to defending teams (+10% more to military)',
        ' - Medbay (worth 50 points) gives an additional 40% health to defending teams',
        ' - Hangar (worth 50 points) gives Deflect to attacking teams'
      ],
      adjacentBuffs: [
        ' - Engineering (worth 50 points) gives Defense Up to defending teams',
        ' - Security (worth 50 points) gives Defense Down to attacking teams'
      ],
      roomBuffs: [
        ' - Bridge (worth 200 points) gives Counter to defending teams',
        ' - Reactor (worth 100 points) gives Disrupt to attacking teams',
        ' - Cargo Bay (worth 50 points) gives 8 random buffs to defending teams'
      ],
      meaningMessage: 'So what does all that mean to you, the player? Well, you now have a roadmap of rooms to prioritize not only to maximize the amount of points the alliance gains but to also make it exceedingly difficult for the opposing alliance to gain the upper hand. (Note: no two wars are the same and adjustments to this strategy will need to happen according to the enemy carrier set up.)'
    },
    defensePriority: {
      introMessage: 'To start, we\'re going to be looking at what rooms we should prioritize on defense so we become much more difficult to beat. First and foremost, we don\'t really have a fully decked out alliance to work with, so prioritization will be a bit more strict. A good first goal is to make it very difficult to get through the flight decks and is currently stacked as hard as it can be. After that though, if should go as follows:',
      roomDeets: [
        ' - Barracks - losing this will bring the our defenses down dramatically in every room for the alliance. As an example, if there were a 200,000 point team defending a room and we lost our barracks, the defending teams overall power would dip to 180,000. That is a massive difference and would severely cripple our chances of being able to defend ourselves.',
        ' - Bridge - This should be self explanatory… If we lose this room, there\'s a solid chance we aren\'t going to win…',
        ' - Armory - This room gives us the punch through we need to make progress going down the enemy line. The more attack capabilities we have, the higher our chances on winning.',
        ' - Medbay and Reactor - The medbay is great to have since we\'ll get a 40% buff to health alone. Now… this may seem way more important than it actually is… 40% more health isn\'t a huge difference, but having it versus not having it could be what determines whether or not we win. The reactor is worth 100 points and even if it is lost, that by itself isn\'t going to kill our chances to win but it will certainly make it more difficult to stay in or gain the lead.'
      ]
    },
    offensePriority: {
      introMessage: 'Now, onto the offensive! The main priority right now will be to find the weakest points in the flight decks and punch through them as quickly as possible(A TON OF EMPHASIS ON QUICKLY). For now, you\'ll need to prioritize the easiest fights for room destruction. There is one exception to that rule, however, if you see any of the rooms listed below and you are confident you can make progress on that room, your priority changes to that room.',
      roomDeets: [
        ' - Armory - crippling the enemy offense makes our defense stronger and as mentioned above, defense and speed are the keys to winning in war. Take out their offense so we can last longer.',
        ' - Barracks - this is second for the very same reasons mentioned above, defense and speed are they keys to war victory so crippling the enemy alliances ability to defend themselves will greatly increase our chances of getting and staying ahead.',
        ' - Medbay/Bridge - these two shouldn\'t come as a surprise. The idea here is to go for whatever is first or weaker than the other. The medbay give 40% health and the enemy surely doesn\'t need that and the bridge gives a ton of points.',
        ' - Reactor - This room makes the list because of the point value.'
      ]
    },
    overallThoughts: {
      message: 'Overall Thoughts',
      body: 'The reason speed is mentioned at the beginning as a key to winning is simple - the faster certain rooms can be knocked out of the fight, the more likely we will be able to win because of the disadvantage given to the enemy alliance. With that said… if we are attacking the Bridge but they are able to knock out our Armory and/or Barracks, we are at the disadvantage for the remainder of the fight which might allow them to push through to our own bridge or make it impossible for us to knock out more rooms. The last insight is simple… don\'t pick fight you aren\'t 100% sure you can win. Because we don\'t have a fully decked out alliance, that means we all have to choose our fights wisely and ensure that we will gain from a fight, so make sure you\'re going to win or pick a different fight. If you aren\'t sure you can win any fight available, wait for one of the heavy hitters to punch through. That should give you a chance at finding a fight you can win. Final note, don\'t put in defensive teams that are weaker than the default… that should be pretty self explanatory, why would you make a team on defense weaker?'
    },
    teamBuilding: {
      message: 'So how should I build my teams?',
      bodyOne: 'That is a great question. There are multiple ways it can be done. #616 doesn\'t have a real guideline for your roster because we don\'t have a fully decked out alliance. Right now, most of our players heavy teams are on defense while we have about 3-4 players who are primarily offensive. A recommendation for now would be to pick 4 teams, but not your absolute best and have them strictly focus on defense. An example of how that might work may be that you take 5/6 10 to 15k characters (not teams) and place them individually in the default teams. Here\'s an image showing what that may look like.',
      //an image goes in between these paragraphs, dont forget it
      bodyTwo: 'This will force the attacking teams to account for the one character that is stronger than the others and more often than not, waste a ton of their characters making it much harder for them to continue pushing through our defense. The last fight in a room you\'re defending should be a beast team (if you can afford it). You want to shoot for over 100k - 150k total team power at least, but the higher the better. By the time they\'ve waste a ton of characters getting to the last fight, it should be extremely difficult for them to follow through.'
    },
    fin: 'This is based off of a video guide put together by ValleyFlyin where he speaks to endgame player Aus10, a member of one of the top alliances currently playing the game. The video can be found here:'
    //a link comes after this line, dont forget it
  }
}