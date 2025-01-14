import {
  component$,
  useStylesScoped$,
  Resource,
  useSignal,
  useTask$,
  $,
} from "@builder.io/qwik";

import styles from "./tips-search.css?inline";
import { Icon } from "~/components/reusable/icon";
import type { Tip } from "~/types";
interface TipsSearchProps {
  firstRenderTips: Tip[];
}

export const TipsSearch = component$<TipsSearchProps>(({ firstRenderTips }) => {
  useStylesScoped$(styles);

  const isSearching = useSignal<boolean>(false);

  const searchQuery = useSignal<string>("");
  const searchResult = useSignal<Tip[]>(firstRenderTips);
  const filteredTips = useSignal<Tip[]>(firstRenderTips);

  useTask$(({ track }) => {
    const isNewSearch = track(() => searchQuery.value);

    const searchTips = async () => {
      if (isNewSearch) {
        isSearching.value = true;
        filteredTips.value = searchResult.value.filter((tip) => {
          return (
            tip.sentence
              .toLowerCase()
              .includes(searchQuery.value.toLowerCase()) ||
            tip.tags.includes(searchQuery.value)
          );
        });
        isSearching.value = false;
      }
    };

    searchTips();
  });

  const handleTipButtonClick = $((e: PointerEvent) => {
    const target = e.target as HTMLElement;
    const tipCard = target.closest(".tip-card")!;
    const tipId = (tipCard as HTMLElement).dataset.tipId;
    const dialog = document.getElementById(`tip-dialog-${tipId}`) as HTMLDialogElement;
    dialog.showModal();
  });

  return (
    <div class="tips-search-section section-font-big">
      <div class="background-circle background-circle-left-bottom background-dark-blue"></div>
      <div class="search-container">
        <h3 class="search-title">Find tips fit to your goals</h3>
        <div class="search-input-container">
          <input
            class="tip-search-input"
            type="text"
            placeholder="Search for tips"
            bind:value={searchQuery}
          />
          <div
            class={`search-input-container-loading ${!isSearching.value ? "search-input-container-loading-hide" : ""}`}
          ></div>
        </div>
      </div>
      <div class={`tips-container ${filteredTips.value.length ? "" : "tips-container-no-tips"}`}>
        <Resource
          value={filteredTips}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={(tips: Tip[]) =>
            tips.length ? (
              tips.map((tip) => (
                <div key={tip.id} class="tip-card" data-tip-id={tip.id}>
                  <dialog class="dialog-model text-center section-font-mobile-small" id={`tip-dialog-${tip.id}`}>
                    <form method="dialog">
                      <h3>{tip.explanation}</h3>
                      <button type="submit" class="tip-dialog-close-button">
                        Got it!
                      </button>
                    </form>
                  </dialog>
                  <div class="tip-content-wrapper" onClick$={handleTipButtonClick}>
                    <p class="tip-content">
                      <q dangerouslySetInnerHTML={tip.sentence}></q>
                      <span class="tip-card-info">
                        <Icon name="Question" />
                      </span>
                    </p>
                    <div class="tip-card-footer">
                      <div class="tip-search-tags">
                        <span class="tag">{tip.tags[0]}</span>
                        <span class="tag">{tip.tags[1]}</span>
                      </div>
                      <div class="tip-icons">
                        <span class="icon">
                          <Icon name={tip.icons[0]} />
                        </span>
                        <span class="icon">
                          <Icon name={tip.icons[1]} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div class="tip-card">
                <p class="tip-content">
                  <q>No tips found, sorry...</q>
                  <span class="tip-card-info">
                    <Icon name="Question" />
                  </span>
                </p>
                <div class="tip-card-footer">
                  <div class="tip-search-tags">
                    <span class="tag">Oh my</span>
                    <span class="tag">Bummer</span>
                  </div>
                  <div class="tip-icons">
                    <span class="icon">
                      <Icon name="Question" />
                    </span>
                    <span class="icon">
                      <Icon name="Question" />
                    </span>
                  </div>
                </div>
              </div>
            )
          }
        />
      </div>
      <div class="background-triangle background-triangle-right-center background-light-pink"></div>
    </div>
  );
});
