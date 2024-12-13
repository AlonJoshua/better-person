import {
  component$,
  useStylesScoped$,
  Resource,
  useSignal,
  useTask$,
} from "@builder.io/qwik";

import { server$ } from '@builder.io/qwik-city';

import styles from "./tips-search.css?inline";
import { Icon } from "~/components/reusable/icon";
import type { Tip } from "~/types";
import { GetSearchedTips } from "~/db/GetSearchedTips";
interface TipsSearchProps {
  firstRenderTips: Tip[];
}

const serverTips = server$(async (query, page) => {
  return GetSearchedTips(query, page);
});

export const TipsSearch = component$<TipsSearchProps>(({ firstRenderTips }) => {
  useStylesScoped$(styles);

  const isSearching = useSignal<boolean>(false);

  const searchQuery = useSignal<string>("");
  const searchResult = useSignal<Tip[]>(firstRenderTips);

  const pagination = useSignal<number>(0);

  useTask$(({ track }) => {
    const isNewSearch = track(() => searchQuery.value);
    const isPaginated = track(() => pagination.value);
 
    const searchTips = async () => {

      if (isNewSearch) {
        isSearching.value = true;
        const tips = await serverTips(searchQuery.value, pagination.value);
        searchResult.value = tips;
        isSearching.value = false;
      }

      if (isPaginated) {
        isSearching.value = true;
        const tips = await serverTips(searchQuery.value, pagination.value);
        searchResult.value = [...searchResult.value, ...tips];
        isSearching.value = false;
      }
    };
    
    searchTips();
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
          <div class={`search-input-container-loading ${!isSearching.value ? 'search-input-container-loading-hide' : ''}`}>

          </div>
        </div>
      </div>
      <div class="tips-container">
        <Resource
          value={searchResult}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={
            (tips: Tip[]) =>
            tips.map((tip) => (
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
      <div class="pagination-container">
        <button disabled={isSearching.value} class={`tip-search-pagination-button ${isSearching.value ? 'tip-search-pagination-button-loading' : ''}`} onClick$={() => pagination.value++}>
          <span>
            More tips
          </span>
        </button>
      </div>
      <div class="background-triangle background-triangle-right-center background-light-pink"></div>
    </div>
  );
});
