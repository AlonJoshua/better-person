import {
  component$,
  useStylesScoped$,
  useResource$,
  Resource,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { PrismaClient } from "@prisma/client";
import styles from "./tips-search.css?inline";
import { Icon } from "~/components/reusable/icon";

interface Tip {
  id: number;
  sentence: string;
  explanation: string;
  icons: string[];
  tags: string[];
}

interface QueryBody {
  take: number;
  skip: number;
  cursor?: {
    id: string;
  };
  where?: {
    sentence: {
      contains: string;
    };
    tags: {
      hasSome: string[];
    };
  };
}

export const TipsSearch = component$(() => {
  useStylesScoped$(styles);

  const searchQuery = useSignal<string>("");
  const searchCursor = useSignal<string>("");

  const searchedTips = useResource$<Tip[]>(async () => {
    const prisma = new PrismaClient();

    const queryBody: QueryBody = {
      take: 4,
      skip: 0,
    };

    if (searchQuery.value) {
      queryBody.where = {
        sentence: {
          contains: searchQuery.value,
        },
        tags: {
          hasSome: searchQuery.value.split(" "),
        },
      };
    }

    if (searchQuery.value) {
      queryBody.cursor = {
        id: searchCursor.value,
      };
    }

    const response = await prisma.tip.findMany(queryBody);

    searchCursor.value = response[response.length - 1].id.toString();
    return response;
  });

  useTask$(({ track }) => {
    track(searchQuery);
    console.log(searchQuery.value);
    searchCursor.value = "";
  });

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
          value={searchedTips}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={(tips: Tip[]) =>
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
      <div class="background-triangle background-triangle-right-center background-light-pink"></div>
    </div>
  );
});
