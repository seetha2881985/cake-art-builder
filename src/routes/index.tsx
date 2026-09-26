import { createFileRoute } from "@tanstack/react-router";
import heroBread from "../assets/hero-bread.jpg";
import bakerHands from "../assets/baker-hands.jpg";
import croissant from "../assets/croissant.jpg";
import sourdough from "../assets/sourdough.jpg";
import cinnamonRoll from "../assets/cinnamon-roll.jpg";
import almondCroissant from "../assets/almond-croissant.jpg";
import lemonCake from "../assets/lemon-cake.jpg";
import cardamomBun from "../assets/cardamom-bun.jpg";
import baguette from "../assets/baguette.jpg";
import ryeLoaf from "../assets/rye-loaf.jpg";
import appleDanish from "../assets/apple-danish.jpg";
import chocolateEclair from "../assets/chocolate-eclair.jpg";
import blueberryMuffin from "../assets/blueberry-muffin.jpg";
import focaccia from "../assets/focaccia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hearth & Crumb — Artisan Bakery" },
      {
        name: "description",
        content:
          "A neighborhood bakery baking sourdough, croissants and pastries fresh every morning. Order ahead for pickup or visit us on Alder Lane.",
      },
      { property: "og:title", content: "Hearth & Crumb — Artisan Bakery" },
      {
        property: "og:description",
        content:
          "Baked at dawn, gone by noon. Sourdough, croissants and seasonal pastries from our stone deck oven.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  {
    name: "Country Sourdough",
    tag: "Breads",
    description: "48-hour ferment, blistered crust, open crumb. Baked at 5am.",
    image: sourdough,
  },
  {
    name: "Sourdough Baguette",
    tag: "Breads",
    description: "Crackling shell, tender interior. Shaped by hand every morning.",
    image: baguette,
  },
  {
    name: "Dark Rye Loaf",
    tag: "Breads",
    description: "Deep, malty crumb under a cracked rye crust. A favorite with soup.",
    image: ryeLoaf,
  },
  {
    name: "Rosemary Focaccia",
    tag: "Breads",
    description: "Olive-oil dimpled, torn rosemary, flaky sea salt. Sold by the slice.",
    image: focaccia,
  },
  {
    name: "Butter Croissant",
    tag: "Pastries",
    description: "Twenty-seven layers of cultured butter, shattering and soft.",
    image: croissant,
  },
  {
    name: "Almond Croissant",
    tag: "Pastries",
    description: "Filled with frangipane, crowned with toasted almonds and sugar.",
    image: almondCroissant,
  },
  {
    name: "Chocolate Eclair",
    tag: "Pastries",
    description: "Choux piped with chocolate crème, finished with a dark ganache.",
    image: chocolateEclair,
  },
  {
    name: "Apple Danish",
    tag: "Pastries",
    description: "Flaky squares layered with spiced apples, baked until lacquered.",
    image: appleDanish,
  },
  {
    name: "Cinnamon Roll",
    tag: "Sweet",
    description: "Soft brioche, cinnamon sugar, a thin cream-cheese glaze.",
    image: cinnamonRoll,
  },
  {
    name: "Cardamom Bun",
    tag: "Sweet",
    description: "Knotted by hand with ground cardamom and pearl sugar.",
    image: cardamomBun,
  },
  {
    name: "Blueberry Muffin",
    tag: "Sweet",
    description: "Dome-topped with a sugared crust, bursting with berries.",
    image: blueberryMuffin,
  },
  {
    name: "Lemon Drizzle Cake",
    tag: "Sweet",
    description: "Bright citrus glaze, tender crumb, best with a coffee.",
    image: lemonCake,
  },
];

const hours = [
  { day: "Tuesday – Friday", time: "6am – 2pm" },
  { day: "Saturday – Sunday", time: "7am – 3pm" },
  { day: "Monday", time: "Closed" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
              H
            </span>
            <span className="font-display text-xl font-medium tracking-tight">
              Hearth &amp; Crumb
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#menu" className="transition-colors hover:text-foreground">
              Menu
            </a>
            <a href="#story" className="transition-colors hover:text-foreground">
              Our Story
            </a>
            <a href="#visit" className="transition-colors hover:text-foreground">
              Visit
            </a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Order for pickup
          </a>
        </div>
      </header>

      {/* Marquee ribbon */}
      <div className="overflow-hidden border-b border-primary/30 bg-primary py-2.5">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex items-center">
              {[
                "Fresh from the oven every morning",
                "No preservatives, ever",
                "Made by hand, daily",
                "Stone deck oven since 2014",
              ].map((text) => (
                <span
                  key={`${dup}-${text}`}
                  className="flex items-center gap-8 pr-8 text-xs font-bold uppercase tracking-[0.25em] whitespace-nowrap text-primary-foreground"
                >
                  {text}
                  <span className="text-primary-foreground/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 size-[30rem] rounded-full bg-accent/50 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-secondary/80 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-14 pb-20 lg:grid-cols-2 lg:pt-20">
        <div>
          <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Neighborhood bakery · Est. 2014
          </p>
          <h1 className="animate-fade-up mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl [animation-delay:120ms]">
            Baked at dawn,
            <span className="block italic text-primary">gone by noon.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-md text-lg leading-relaxed text-muted-foreground [animation-delay:240ms]">
            Sourdough, rye, and buttery pastries pulled from a stone deck oven
            every morning. No shortcuts, no preservatives — just flour, water,
            salt, and a lot of patience.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
            <a
              href="#order"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
            >
              Order for pickup
            </a>
            <a
              href="#menu"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              See the menu
            </a>
          </div>
          <p className="animate-fade-up mt-7 flex items-center gap-2 text-sm text-muted-foreground [animation-delay:480ms]">
            <span className="text-primary" aria-hidden>
              ✦ ✦ ✦ ✦ ✦
            </span>
            Loved by the neighborhood since 2014
          </p>
        </div>
        <div className="animate-fade-up relative [animation-delay:240ms]">
          <img
            src={heroBread}
            alt="Freshly baked sourdough loaves and croissants on a flour-dusted wooden table"
            width={1024}
            height={1280}
            className="w-full rounded-3xl object-cover shadow-xl ring-1 ring-border"
          />
          <img
            src={croissant}
            alt="Golden butter croissants stacked on a bakery tray"
            loading="lazy"
            width={512}
            height={384}
            className="absolute -top-8 -right-6 hidden w-44 rotate-6 rounded-2xl object-cover shadow-2xl ring-4 ring-background lg:block"
          />
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-card px-5 py-4 shadow-lg ring-1 ring-border md:-left-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Out of the oven
            </p>
            <p className="mt-1 font-display text-xl font-medium">6:00 am sharp</p>
          </div>
        </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                The counter
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
                Baked this morning
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Everything is made in-house each morning. When it's gone, it's
              gone.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <article
                key={item.name}
                className="group rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {item.tag}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <img
            src={bakerHands}
            alt="Baker's hands shaping dough on a flour-dusted wooden counter"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full rounded-3xl object-cover shadow-lg ring-1 ring-border"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our story
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              A small oven, a long night.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hearth &amp; Crumb started in a garage with a secondhand deck oven
              and a stubborn belief that bread should taste like the day it was
              made. Twelve years on, we still mix by hand, still proof
              overnight, and still open the door at 6am to the smell of crust.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We buy our flour from a mill two towns over and our butter from a
              family farm. It's slower this way. We think that's the point.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "2014", label: "Founded" },
                { value: "48h", label: "Sourdough ferment" },
                { value: "100%", label: "Made in-house" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-accent p-4 ring-1 ring-border">
                  <p className="font-display text-3xl font-medium text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Visit us
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-balance">
              Find the warm door.
            </h2>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Hours
            </h3>
            <ul className="space-y-2 text-sm">
              {hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{row.day}</span>
                  <span className={row.time === "Closed" ? "text-muted-foreground/60" : "font-semibold"}>
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Location
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              48 Alder Lane
              <br />
              Maplewood, OR 97210
              <br />
              <a href="tel:+15035550142" className="font-semibold text-foreground hover:text-primary">
                (503) 555-0142
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section id="order" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-foreground p-10 text-background shadow-xl md:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-background/60">
                  Order ahead
                </p>
                <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
                  Skip the line.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-background/70">
                  Call or text us by 4pm the day before and we'll have your
                  order boxed and waiting at the counter. No app, no account —
                  just a phone call to a real person.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+15035550142"
                  className="rounded-full bg-background px-7 py-4 text-center text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Call (503) 555-0142
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-background/25 px-7 py-4 text-center text-sm font-bold transition-colors hover:bg-background/10"
                >
                  Browse the full menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="font-display text-lg text-foreground">Hearth &amp; Crumb</span>
          <span>Baked with patience since 2014.</span>
          <span>48 Alder Lane, Maplewood</span>
        </div>
      </footer>
    </div>
  );
}
