import { Component } from '@angular/core';

@Component({
  selector: 'farm',
  templateUrl: './farm.component.html',
  styleUrls: [ './farm.component.css' ]
})
export class farm  {
  string: string = 'hello world'
  farmObj: Object = {
    introMessage: 'This part of the guide is going to change the most as updates come out. This is just a set of recommendations on what teams to focus on at what times so you can try to maximize character gain, all without spending a dime, because fuck that.',
    guideMessage: 'This guide is broken up into "phases". When you move on from one phase to the next will ultimately be up to you. Following this guide, however, may be the ticket to moving on faster and give you direction so you can work towards end game rather than feeling like you\'re floundering around hoping you\'re doing well enough. You\'ll want these characters at least 5 stars before you focus primarily on gear rating and ability level (the stars won\'t give you as big of a power boost as gear rating and ability level will). I have an image for a visual that I will put at the end so you have a quick reference to go to after reading the reasoning behind these recommendations or you can watch the video this guide was based off of(the link is at the end).',
    phaseOneIntro: 'Let\'s start with Phase 1. The goal when moving through phase one is to have a reliable Arena Team, Raid Team, Blitz Team capable of getting to the higher tiers (tier 6-7 in blitz for example), and as a bonus be able to do quite a bit of the block party event for ability boosting materials.',
    phaseOneDeets: 'Right off the bat, you should be going for the full Defenders team (with either punisher or shield medic). The primary reason this is the Defenders are great in most areas of content. They can be effective in farming Arena, Raid, and Blitz credits so you can beef other characters up. Other characters you want to aim for in phase one are Yondu, Mordo, Gamora, Kree Oracle, Shield Trooper. Those characters (along with others that you\'ll get naturally through playing the game) will allow you to complete certain missions that will unlock the ability to gain more characters.',
    phaseOneBench: [
      'Speaking of missions, these are the benchmarks you\'ll want to aim for in the campaign while yourself working through phase 1.',
      'Heros 5-6',
      'Villians 4-3',
      'Nexus 5-6',
      'Cosmic 1-6 (shoot for 2-6)'
    ],
    phaseTwo: 'Phase 2. The goal here is to start beefing up your Kree and Shield teams. "Why is that?" - Great question! With the Kree team at 5 stars and the appropriate power levels, you\'ll be able to unlock Nick Fury for a shield minion team (which is currently the second best team in the game as of now aside from brotherhood). Rounding out a shield team will gain you Iron Man. Other characters to farm for during this event to help with other events are Drax and Rocket.',
    phaseThree: 'Phase 3. By this time you should be setup nicely to get Iron Man and Nick Fury if you haven\'t had the chance to get them yet. Here you can start getting the characters set up for Star Lord. Apart from the obvious Guardians you want to farm, start hitting Yondu hard to help round that team out in preparation for the Star Lord event. Don\'t neglect your Kree team here so you have great options for campaigns, events, raids, and blitz. Other characters to aim for are Mystique, Deadpool, Bullseye.',
    phaseThreeBench: [
      'Mission benmarks in phase 3 are:',
      'Mystic 2-3 (shoot for 2-6)'
    ],
    phaseFour: "Phase 4. The goal in this phase is to get the remaining Avengers and Brotherhood characters. At this point, you should be pretty well stacked out with the better teams in the game. All of those characters should be at least 5 stars, gear rating 8+ with abilities at level 4+. There is an order here, but it's not as important as the previous phases. I'll let you take a look at the image to see what characters you may need more than others.",
    //image goes here, dont forget it
    finOne: 'This guide is based on a video made by ValleyFlyin, who is an endgame player and very knowledgeable about the game itself. Please refer to his video if you\'d like a better explanation than I have provided. ValleyFlyin is not the only one that has free to play farming guides, but his is the most updated at the creation of this guide.',
    //link goes here, dont forget it
    finTwo: 'He does a great job justifying character priority. The only change I would personally make with this guide (this is a personal choice that may suit your needs as well) is rather than go for the Guardians during phase three and the Avengers in phase four, is aiming for build your spider verse team so you can unlock Shuri for the Wakandan team. I would argue that the Wakandan team is more useful than both the Guardians and Avengers teams. Alternatively, you can farm the Wakandan team before the brotherhood. Magneto probably the second most difficult character to get as a free to play player, with Ultron (the single best character in the game right now) being the hardest and requiring you to finish the Dark Dimension (endgame content).'
  }
}