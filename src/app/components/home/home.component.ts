import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class home  {
  welcomeHeading: string = 'Welcome to the #616 Alliance farming/raid/war guide.';
  guidelineOne: string = 'This guide should not be considered the "rules" on how to play Marvel Strike Force, but is meant to be a guideline to help #616 alliance members make the most of their in-game time and energy while living busy lives.';
  guidelineTwo: string = 'Information in this guide WILL change from update to update. If you find information in this guide that may be outdated or inaccurate, don\'t worry, it\'ll be updated as discovery is made but please feel free to mention changes or alternate recommendations to the alliance.';
  guidelineThree: string = 'You can use the navigation above to view the #616 Farming/Raiding/War recommendations. Note that this is how we as an alliance operate as a whole, but as these are just recommendations, it is highly suggested that you follow the guides to ensure the entire alliance benefits from the work you put into group content. After all, raids and war are meant to be completed as a team.';

  guidelines: Array<String> = [this.guidelineOne, this.guidelineTwo, this.guidelineThree]
}