import {
  component$,
  useStylesScoped$,
  $,
  useResource$,
  Resource,
} from "@builder.io/qwik";
import { Icon } from "~/components/reusable/icon";
import styles from "./tip-of-the-day.css?inline";
import { PrismaClient } from "@prisma/client";

interface Tip {
  id: number;
  sentence: string;
  explanation: string;
  icons: string[];
  tags: string[];
}

export const TipOfTheDay = component$(() => {
  useStylesScoped$(styles);

  const dailyTip = useResource$<Tip>(async () => {
    const prisma = new PrismaClient();
    const collectionData = await prisma.$runCommandRaw({
      collStats: "Tip"
    });

    const totalCount = collectionData.count as number;

    const dayDate = new Date();
    const dayOfYear = Math.floor(
      (Number(dayDate) - Number(new Date(dayDate.getFullYear(), 0, 0))) / 86400000
    );

    const response = await prisma.tip.findFirst({
      take: 1,
      skip: dayOfYear % totalCount,
    });
    return response;
  });

  const handleTipOfTheDayButtonClick = $(() => {
    const dialog = document.getElementById(
      "tip-of-thy-day-dialog"
    ) as HTMLDialogElement;
    dialog.showModal();
  });

  return (
    <Resource
      value={dailyTip}
      onPending={() => <div>Loading...</div>}
      onRejected={(error) => <div>Error: {error.message}</div>}
      onResolved={(tip: Tip) => (
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
      )}
    />
  );
});
