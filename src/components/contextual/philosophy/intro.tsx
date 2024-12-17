import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./intro.css?inline";
import { Icon } from "~/components/reusable/icon";

export const Intro = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="intro-section">
      <div class="background-circle background-circle-right-top background-light-green"></div>
      <div class="intro-section-content">
        
        <h1 class="title">The fascinating world of morality</h1>
        <p class="intro-text">
          In his book, <a href="https://thehonesttruthaboutdishonesty.com/" target="_blank">the (honsest) truth about dishonesty</a>, Dan Ariely presents us with one very intriguing fact:  
          <span class="text-purple"> the majority of people lie, but just a little bit—enough so they won’t consider themselves liars</span>, 
          <br/>
          <br/>
          This understanding blew my mind, but it also got me thinking: there is a parallel phenomenon in other aspects of human behavior, like morality.
          <span class="text-blue">The majority of people act in a morally questionable way, but just a little bit—enough so they won’t consider themselves bad people.</span>
          <br/>
          <br/>
          <Icon name="ThinkingFace" />
          <br/>
          <br/>

          This phenomenon has many psychological reasons for its existence. This website tries to address it by focusing on raising awareness and developing empathy (putting oneself in someone else’s shoes) through explanations and fostering better behavior using summarized jokes.
        </p>
      </div>
      <div class="background-circle background-circle-left-bottom background-light-green"></div>
    </div>
  );
});
