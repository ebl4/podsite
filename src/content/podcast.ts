export type Episode = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  publishedAt: string;
  duration: string;
  category: string;
  artwork: {
    tone: "coral" | "blue" | "lime" | "violet" | "gold";
    label: string;
  };
  featured: boolean;
};

export const podcast = {
  name: "Off Script",
  tagline: "Good questions. Unexpected places.",
  description:
    "A weekly conversation about the ideas, detours, and happy accidents that make a creative life. Hosted by Maya Torres.",
  host: "Maya Torres",
  cadence: "New conversations every Thursday",
};

const episodeSeeds = [
  ["the-art-of-the-first-take", "The art of the first take", "Musician and producer Eli Navarro on leaving room for the beautiful mistake—and why the rough version sometimes says it best.", "2026-09-24", "38 min", "Creative practice", "coral", "01 / BEGIN"],
  ["a-city-that-listens", "A city that listens", "Sound artist Nina Bell takes us on a walk through the hidden orchestra of an ordinary Tuesday.", "2026-09-17", "42 min", "Sound & place", "blue", "02 / NOTICE"],
  ["making-space-for-doubt", "Making space for doubt", "Writer Rowan Ellis on curiosity, second thoughts, and the sentence that took three years to finish.", "2026-09-10", "46 min", "On the page", "lime", "03 / WONDER"],
  ["the-long-way-round", "The long way round", "Chef Amara Wells on detours, dinner parties, and learning to trust your senses before the recipe.", "2026-09-03", "40 min", "At the table", "violet", "04 / TASTE"],
  ["objects-with-memories", "Objects with memories", "Designer Jules Mercer finds the stories hiding in the things we almost throw away.", "2026-08-27", "35 min", "Design notes", "gold", "05 / KEEP"],
  ["a-small-amount-of-chaos", "A small amount of chaos", "Choreographer Theo Park makes a case for the rehearsal room where nothing goes to plan.", "2026-08-20", "44 min", "In motion", "coral", "06 / MOVE"],
  ["the-color-of-morning", "The color of morning", "Painter Lena Brooks talks first light, neighborhood portraits, and seeing the familiar again.", "2026-08-13", "37 min", "Ways of seeing", "blue", "07 / LOOK"],
  ["notes-from-the-edit", "Notes from the edit", "Documentary editor Alex Chen on knowing what to leave out—and when a pause is the whole point.", "2026-08-06", "41 min", "Behind the cut", "lime", "08 / LISTEN"],
  ["learning-to-begin-again", "Learning to begin again", "Ceramicist Jo Rivera on starting from scratch, keeping the fragments, and making work that holds a room.", "2026-07-30", "48 min", "Studio visit", "violet", "09 / RETURN"],
  ["the-garden-is-a-teacher", "The garden is a teacher", "Landscape architect Noor Patel talks patience, public space, and letting a place tell you what it needs.", "2026-07-23", "39 min", "Outside voices", "gold", "10 / GROW"],
  ["when-the-map-runs-out", "When the map runs out", "Cartographer and author Avery Quinn on getting lost on purpose and finding a better question.", "2026-07-16", "45 min", "On the way", "coral", "11 / WANDER"],
  ["a-room-of-your-own", "A room of your own", "Architect Zoya Malik on spaces that welcome us in—and the communities that make them matter.", "2026-07-09", "43 min", "Built worlds", "blue", "12 / GATHER"],
  ["the-sound-of-a-good-story", "The sound of a good story", "Radio producer Sam Okafor on the music of a voice and the joy of not knowing where a story ends.", "2026-07-02", "52 min", "On the air", "lime", "13 / TUNE IN"],
  ["a-recipe-for-remembering", "A recipe for remembering", "Food writer Camille Reed follows a family recipe through three cities and a lifetime of small changes.", "2026-06-25", "36 min", "At the table", "violet", "14 / REMEMBER"],
  ["the-useful-imperfection", "The useful imperfection", "Printmaker Morgan Fields on ink under the fingernails, making it by hand, and keeping it human.", "2026-06-18", "40 min", "Made by hand", "gold", "15 / MAKE"],
  ["walking-as-a-way-of-thinking", "Walking as a way of thinking", "Poet and translator Ada Price takes the scenic route through rhythm, routine, and the very long walk home.", "2026-06-11", "34 min", "On the way", "coral", "16 / STEP"],
  ["the-quiet-work-of-noticing", "The quiet work of noticing", "Photographer Talia James on the trust behind a portrait and the details that change everything.", "2026-06-04", "47 min", "Ways of seeing", "blue", "17 / NOTICE"],
  ["songs-for-the-in-between", "Songs for the in-between", "Composer Nia Sol makes room for the spaces between notes, and for a life between plans.", "2026-05-28", "39 min", "Listening room", "lime", "18 / PAUSE"],
  ["the-shape-of-a-question", "The shape of a question", "Artist and educator Ellis Grant on asking better questions and building something with the answers.", "2026-05-21", "50 min", "Good questions", "violet", "19 / ASK"],
  ["leave-the-light-on", "Leave the light on", "A season-ending conversation about open doors, unfinished work, and the people who make us brave enough to begin.", "2026-05-14", "44 min", "A little further", "gold", "20 / AGAIN"],
] as const;

export const episodes: Episode[] = episodeSeeds.map(
  ([slug, title, summary, publishedAt, duration, category, tone, label], index) => ({
    slug,
    number: index + 1,
    title,
    summary,
    publishedAt,
    duration,
    category,
    artwork: { tone, label },
    featured: index === 0,
  }),
);

export const featuredEpisode = episodes.find((episode) => episode.featured)!;

export const faqs = [
  {
    question: "Where can I listen to Off Script?",
    answer:
      "Every conversation is available wherever you get your podcasts. This little corner of the internet is our home for the stories, show notes, and people behind each episode.",
  },
  {
    question: "How often do new episodes arrive?",
    answer:
      "A new conversation lands every Thursday. Follow along here or in your podcast app so you don't miss one.",
  },
  {
    question: "Who makes the show?",
    answer:
      "Off Script is hosted by Maya Torres and made with a small crew of curious listeners, sound people, and excellent coffee.",
  },
  {
    question: "Can I suggest someone for the show?",
    answer:
      "Please do. We love hearing about people who follow an interesting question wherever it leads. Send a note to hello@offscript.example.",
  },
  {
    question: "Are the conversations edited?",
    answer:
      "Lightly. We edit for time and clarity, but we leave the detours, silences, and happy accidents in whenever they help tell the story.",
  },
];

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
