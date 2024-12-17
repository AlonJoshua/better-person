import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./intro.css?inline";
import { Icon } from "~/components/reusable/icon";

export const Intro = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="intro-section">
      <div class="background-circle background-circle-right-top background-light-green"></div>
      <div class="intro-section-content">
        <Icon name="Ant" />
        <h2 class="subtitle">Small Tips, Big Impact.</h2>
        <h1 class="title">Be a Better Person, One Laugh at a Time!</h1>
        <p class="intro-text">
          We all have our flaws, miscommunications and blind spots in our own behavior. It means that somethings, 
          <span class="text-blue"> interactions might not go the way we expected to be</span>, 
          or can go wrong without us to even realizing it.
          <br/>
          <br/>
          Let set together a new goal - <span class="text-purple">improve our daily interaction</span>, one by one.
          At your own pace, try to apply those tips bellow in your daily lives, and see if you getting better results interacting with your enviroment.
        </p>
      </div>
      <div class="background-circle background-circle-left-bottom background-light-green"></div>
    </div>
  );
});
