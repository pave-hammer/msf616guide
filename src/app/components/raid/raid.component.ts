import { Component } from '@angular/core';

@Component({
  selector: 'raid',
  templateUrl: './raid.component.html',
  styleUrls: [ './raid.component.css' ]
})
export class raid  {
  raidObj: Object = {
    introMessage: 'This is probably the most intricate idea we\'ll be running because this requires a ton of coordination and critical thinking from the entire alliance. I have tried to make it as simple as possible, but that relies on members  The biggest idea that needs to be stressed here is that there is a rating for damage dealt. I\'m not a fan of a system that actually effects the rewards a member receives when the timer runs out that puts them in direct competition with other alliance members when the content is designed to be team based. The entire idea is completely counter intuitive and adds an unnecessary element that could hurt the team. Either way, we\'re going to completely ignore it. Raids are meant to be a team effort with the goal that you are going to get a high overall percentage as shown below.',
    //image goes here, dont forget it
    raidEnergy: {
      message: 'Let\'s first go over raid energy. You refresh raid energy based on time, just like campaign energy. Here is a break down of lengths of time needed to gain certain amounts of energy:',
      energyRefresh: [
        '1 energy = 14 minutes 30 seconds',
        '2 energy = 29 minutes',
        '3 energy = 43 minutes 30 seconds',
        '4 energy = 58 minutes',
        '5 energy = 1 hour 12 minutes 30 seconds',
        '10 energy = 2 hours 25 minutes',
        '20 energy = 4 hours 50 minutes',
        '30 energy = 7 hours 15 minutes',
        '40 energy = 9 hours 40 minutes',
        '50 (full) energy = 12 hours 5 minutes'
      ],
      energyFin: 'We will start a raid while everyone has full raid energy and the raid timer will have 24 hours to complete on it (this doesn\'t apply to the special raid events, some only have 12 hours on the timer). This means that a single alliance member will be able to complete 14 mission nodes without having to spend power cores or money, assuming you started at the time of the raid being activated (this is why it\'s important to be as ready as you can be when a raid starts).'
    },
    raidStrat: {
      message: 'Another key to effective raid completion is by not getting in the way of other alliance members. This concept is a bit difficult to explain, but I will do my best.',
      //image goes here, dont forget it
      routeMessage: 'As you can see, the white highlighted lines show a "route" and direction that the player can take when they reach the highlighted mission node. These routes, as we call them, may intersect with a route that another alliance member is on. If this happens, do everything you can to stay away from each other. I\'ll explain why through some pictures. It may be easier to see this rather than just try to understand the text on this page.',
      //another image, dont forget it
      redRoute: 'As you can see, the red dots mark the farthest right route in a raid. This red route has 12 nodes in it which one single player can complete on their own. For example purposes, lets go ahead and say that there is another player on an intersecting route, marked blue as shown below: ',
      //another image, dont forget it
      redAndBlueRoutes: 'The moment the blue and red routes meet, both players will have only one route they can continue (that isn\'t the case with every single route, but this is to illustrate a point), which means the remaining 7 mission nodes will have to be split between the two of them, whereas one person could be completing the entire route. At this point, the maximum amount of nodes both players can complete is 14, which should be the max for one player. You have effectively cut the amount of missions both players can complete by a minimum of 50%, in the blue routes case, potentially much more.',
      blueMovesText: 'Now, suppose blue went to the left side of the raid map, like so:',
      //another image, dont forget it
      redBlueFin: 'Both red and blue routes the players are working on will be able to complete a total of 24 mission nodes, rather than the 14 nodes in the previous example. Note: It is important to remember that this rule only applies to raids we cannot get 100% completion on. If we get to a point where we can 100% a raid, the routes will be set, with no deviation to allow ALL players to gain rewards from the raid and I will be sure to let everyone know where they will need to be. We are a little ways away from 100% on most raids though, so don\'t worry too much about what that looks like.',
      raidStratKey: 'The key takeaway here is that raids are team based and we need to be working together for overall completion. Plan your routes so you can maximize the amount of mission nodes you can complete. The easiest way to do that is to highlight a route and see where it goes, then do a bit of counting to make sure you\'ve got the most out of that route. If you don\'t have the team power to go all 14 nodes, that\'s totally fine! Do what you can because every completed node increases the overall percentage, even just one.'
    },
    rules: 'These are reasons why you DO NOT aim for top damage. That easily promotes the idea of running other alliance members over and hurting the alliance as a whole so you can get more damage in. DO NOT DO IT. This is a fair warning and repeated infractions will get you booted from the alliance. So there is clarity on what I mean by "repeated infractions", after a player has read this and knows not to do it, you get two chances. If the rule is broken twice, that player is gone from the alliance and their "contributions" to the alliance will end, regardless of how useful/powerful that account is. We work as a team and any attitude short of that isn\'t tolerated. Apart from the obvious "don\'t be a jerk" rule, this is the only real rule to the alliance.'
  }
}