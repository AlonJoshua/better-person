import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import { Icon } from "~/components/reusable/icon";
import styles from "./tip-of-the-day.css?inline";
import type { JsonValue } from "@prisma/client/runtime/library";

interface Tip {
  tip: {
    id: string;
    sentence: string;
    explanation: string;
    icons: [string, string];
    tags: JsonValue;
  };
}

export const TipOfTheDay = component$<Tip>(({ tip }) => {
  useStylesScoped$(styles);

  const handleTipOfTheDayButtonClick = $(() => {
    const dialog = document.getElementById(
      "tip-of-thy-day-dialog"
    ) as HTMLDialogElement;
    dialog.showModal();
  });

  return (
    <div class="tip-of-the-day-section section-font-big section-font-mobile-small text-center">
      <div class="background-circle background-circle-right-bottom background-light-blue"></div>
      <div class="tip-of-the-day-content">
        <h2 class="text-font-title">Tip of the day:</h2>
        <div class="tip-text-wrapper">
          <q
            class="tip-text text-font-paragraph"
            dangerouslySetInnerHTML={tip.sentence}
          ></q>
        </div>
        <div class="tip-icons">
          <Icon name={tip.icons[0]} />
          <Icon name={tip.icons[1]} />
        </div>
        <div class="tip-cta">
          <button
            type="button"
            onClick$={handleTipOfTheDayButtonClick}
            class="tip-dialog-button text-light-grey text-bold"
          >
            Why should I care?
          </button>
          <dialog id="tip-of-thy-day-dialog" class="dialog-model">
            <form method="dialog">
              <h3>{tip.explanation}</h3>
              <button type="submit" class="tip-dialog-close-button">
                Got it!
              </button>
            </form>
          </dialog>
        </div>
      </div>
      <div class="background-square background-square-left background-light-pink"></div>
    </div>
  );
});
