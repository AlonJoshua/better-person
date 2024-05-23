import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import { BirthdayCake } from "~/components/reusable/icons/birthday-cake/birthday-cake";
import { Ghost } from "~/components/reusable/icons/ghost/ghost";
import styles from "./tip-of-the-day.css?inline";

export const TipOfTheDay = component$(() => {
  useStylesScoped$(styles);

  const handleTipOfTheDayButtonClick = $(() => {
    const dialog = document.getElementById("tip-of-thy-day-dialog") as HTMLDialogElement;
    dialog.showModal();
  });

  return (
    <div class="tip-of-the-day-section section-font-big section-font-mobile-small text-center">
      <div class="background-circle background-circle-right-bottom background-light-blue"></div>
      <div class="tip-of-the-day-content">
        <h2 class="text-font-title">Tip of the day:</h2>
        <div class="tip-text-wrapper">
          <q class="tip-text text-font-paragraph">
            Don’t drive like you run away from a <span class="text-pink">packman ghost</span>,<br/> Drive like you’re carrying a <span class="text-green-blue">birthday cake</span> in your trunk.
          </q>
        </div>
        <div class="tip-icons">
          <Ghost />
          <BirthdayCake />
        </div>
        <div class="tip-cta">
          <button type="button" onClick$={handleTipOfTheDayButtonClick} class="tip-dialog-button text-light-grey text-bold">
            Why should I care?
          </button>
          <dialog id="tip-of-thy-day-dialog" class="dialog-model">
            <form method="dialog">
              <h3>
                We are all in a rush to get somewhere, 
                the problem is that we are rushing inside big metal boxes at hyper speed next to each other at different rates, 
                and we stop thinking about how dangerous this is the moment we receive our driving license.
                If you ever tried to pass sensitive baggage in your car (like a birthday cake), 
                have you ever noticed that you were suddenly affected by a mysterious slowness? 
                Remember that you are counted as a birthday cake to someone, and drive safely to your destination.
              </h3>
              <button type="submit" class="tip-dialog-close-button">Got it!</button>
            </form>
          </dialog>
        </div>
      </div>
      <div class="background-square background-square-left background-light-pink"></div>
    </div>
  )
});