// PROTOTYPE — the home-page directions, in review order.

export type Variant = {
  slug: string;
  name: string;
  concept: string;
};

export const variants: Variant[] = [
  {
    slug: "01-specimen",
    name: "Specimen",
    concept:
      "Today's paper theme, art-directed: a ledger grid, dotted leaders and no blanket underlines.",
  },
  {
    slug: "02-explorer",
    name: "Explorer.exe",
    concept:
      "The page is a Windows 98 window, so the palace button is simply native.",
  },
  {
    slug: "03-floor-plan",
    name: "Floor Plan",
    concept:
      "A blueprint of the Memory Palace: every section is a room, the button is the door.",
  },
  {
    slug: "04-ion-chain",
    name: "Ion Chain",
    concept:
      "A dark lab frame where the navigation is a chain of trapped ions you address with the cursor.",
  },
  {
    slug: "05-preprint",
    name: "Preprint",
    concept:
      "Typeset as a two-column journal article, with the palace as its supplemental material.",
  },
  {
    slug: "06-broadsheet",
    name: "Broadsheet",
    concept:
      "A newspaper front page: blackletter masthead, column rules, the palace as a boxed advertisement.",
  },
  {
    slug: "07-swiss-grid",
    name: "Swiss Grid",
    concept:
      "International-style poster: an enormous name on a visible twelve-column grid.",
  },
  {
    slug: "08-transcript",
    name: "Transcript",
    concept:
      "An agent run that answers “who is Bingran You?” and asks permission to enter the palace.",
  },
  {
    slug: "09-transit-map",
    name: "Transit Map",
    concept:
      "A transit map: the Agentic line and the Ion line run side by side to one terminus.",
  },
  {
    slug: "10-atelier",
    name: "Atelier",
    concept:
      "Art-book editorial: oversized italic serif and a portrait cut as an arched doorway.",
  },
  {
    slug: "11-article",
    name: "Article",
    concept:
      "Set as the first page of a journal article, on the page geometry of the Nature paper.",
  },
];

export const PROTOTYPE_BASE = "/prototype/home";
