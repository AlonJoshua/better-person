import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./intro.css?inline";
import { Icon } from "~/components/reusable/icon";
import ImageOne from '~/assets/me-and-noam.jpg?w=300&h=400&jsx'
import ImageTwo from "~/assets/me-and-kim.jpg?w=533.33&h=400&jsx";

export const Intro = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="intro-section">
      <div class="background-circle background-circle-right-top background-light-green"></div>
      <div class="intro-section-content">
        
        <h1 class="title">Warning! cuteness ahead of you!</h1>

        <div class="image-container">
          <div class="image-1">
            <ImageOne />
          </div>
          <div class="image-2">
            <ImageTwo />
          </div>
        </div>

        <p class="intro-text">
          While have a full-time job as a father/partner, I am also a front-end developer with a lot of affection for back-end development. Which I guess, makes me a full-stack dude?
          <br/>
          <br/>
          I love to play games of all kinds (video, cards, sports), so I think it’s natural for me to look at the world of programming with pink gamification glasses.
          <br/>
          <br/>
          This approach helped me learn quickly during my journey to find my place in the development world.
          <br/>
          <br/> 
          I know for sure that when my 4.5-year-old kid asks me what I do for work, telling him:
          <br/>
          <br/>
          <q class="text-purple">Just centering some divs, baby</q> 
          <br/>
          <br/>
          makes me very proud and him very confused.
          <br/>
          <br/>
          I also love creating new things, such as this website! My partner isn't quite sure about its purpose, but that's because &nbsp;
          <span class="text-blue">she's always the better person</span> and doesn't need any tips from me.
          <br/>
          <br/>
          <Icon name="HeartFace" />
          <br/>
          <br/>

        </p>
      </div>
      <div class="background-circle background-circle-left-bottom background-light-green"></div>
    </div>
  );
});
