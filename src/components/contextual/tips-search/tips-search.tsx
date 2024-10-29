import {
  component$,
  useStylesScoped$,
  Resource,
  useSignal,
} from "@builder.io/qwik";
import styles from "./tips-search.css?inline";
import { Icon } from "~/components/reusable/icon";
import type { Tip } from "~/types";
interface TipsSearchProps {
  tips: Tip[];
}

export const TipsSearch = component$<TipsSearchProps>(({ tips }) => {
  useStylesScoped$(styles);

  const searchQuery = useSignal<string>("");
  const searchResult = useSignal<Tip[]>(tips);

  const filterTipsBySearchQuery = (tip: Tip) => {
    if (!searchQuery.value) {
      return true;
    }
    return tip.sentence.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      tip.tags.some((tag) => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));
  };

  return (
    <div class="tips-search-section section-font-big">
      <div class="background-circle background-circle-left-bottom background-dark-blue"></div>
      <div class="search-container">
        <h3 class="search-title">Find tips fit to your goals</h3>
        <input
          class="tip-search-input"
          type="text"
          placeholder="Search for tips"
          bind:value={searchQuery}
        />
      </div>
      <div class="tips-container">
        <Resource
          value={searchResult}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={(tips: Tip[]) =>
            tips.filter((tip => filterTipsBySearchQuery(tip)))
            .map((tip) => (
              <div class="tip-card" key={tip.id}>
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
            ))
          }
        />
      </div>
      <div class="background-triangle background-triangle-right-center background-light-pink"></div>
    </div>
  );
});
