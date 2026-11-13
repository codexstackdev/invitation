import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import gcash from "./assets/gcash.jpg";
import man from "./assets/man.jpg";
import girl from "./assets/girl.jpg";

type PageId = "invitation" | "families" | "entourage" | "details" | "movie";
type NameListProps = { names: readonly string[]; className?: string };
type SectionHeadingProps = {
  eyebrow: string;
  children: ReactNode;
  align?: "left" | "center";
};
type RolePair = { role: string; names: string };
type NavItem = { id: PageId; number: string; label: string; note: string };
type PaletteColor = { label: string; value: string };
type MovieGiftConfig = {
  title: string;
  dedication: string;
  source: string;
};
type DonationDetails = {
  paymentMethod?: string;
  accountName?: string;
  accountNumber?: string;
  qrImage?: string;
  donationUrl?: string;
};

const navItems: readonly NavItem[] = [
  {
    id: "invitation",
    number: "01",
    label: "Invite",
    note: "A day to remember",
  },
  { id: "families", number: "02", label: "Families", note: "With gratitude" },
  {
    id: "entourage",
    number: "03",
    label: "Entourage",
    note: "Our dearest people",
  },
  { id: "details", number: "04", label: "Details", note: "Everything to know" },
  {
    id: "movie",
    number: "05",
    label: "Movie",
    note: "A little something to enjoy",
  },
];

const sponsorColumns: readonly (readonly string[])[] = [
  [
    "Mr. Eufemio Tombiga",
    "Mr. Joel Balsomo",
    "Mr. Alfie De Asis",
    "Mr. Efren Mark Gan",
    "Mr. Noli Pahilona",
    "Mr. John Jo Palencia",
    "Mr. Juanito Leones",
    "Mr. Tisho Alde",
    "Mr. Marcus Siana",
    "Mr. Roberto Duarez Sr.",
    "Mr. Johnny Gumagda",
    "Mrs. Charito Caramat",
  ],
  [
    "Ms. Edna Cornelio",
    "Ms. Madjolyn Perejon",
    "Ms. Ana Liza Tiwana",
    "Mrs. Rosemarie Ramirez",
    "Mrs. Andrefe Miravalles",
    "Mrs. Lorena Alveniz",
    "Mrs. Rubie Sumblingo",
    "Mrs. Yolanda Renacibo",
    "Mrs. Hazel Suarez",
    "Mrs. Annabel Duca",
    "Mrs. Analyn Areglado",
    "Mrs. Teresa Lim",
    "Mrs. Salome Diado",
  ],
];
const groomsmen: readonly string[] = [
  "Custer Adrian Miravalles",
  "Ricarjie Braza",
  "Darwin Laurista",
  "Elvin Jusol",
  "Joren Jusol",
  "Julie Panganiban",
  "Mark Malones",
  "Renier Ace Lautrezo",
  "Frank Alarcon",
  "Carlo Paclibar",
  "Arnold Sobremesena",
];
const bridesmaids: readonly string[] = [
  "Ronalyn Mayordomo",
  "Bennelyn Jusol",
  "Rhea Joy David",
  "Aldriana Mae Jusol",
  "Danna Marie Laurista",
  "Divine Grace Arellano",
  "Grace Laurista",
  "Hangel Jusol",
  "Felgrace Lautrezo",
  "Lyka Guanzon",
  "Claudine Alveniz",
];
const roleBearers: readonly RolePair[] = [
  { role: "Little Groom", names: "Zeldris Kai Jusol" },
  { role: "Little Bride", names: "Amber Dree Miravalles" },
  { role: "Ring Bearer", names: "Caleb Austin Miravalles" },
  { role: "Coin Bearer", names: "Ric Joshua Canieso" },
  { role: "Bible Bearer", names: "Chance Gideon Aplacador" },
];
const attirePalette: readonly PaletteColor[] = [
  { label: "Dark Brown", value: "#584536" },
  { label: "Tan / Beige", value: "#c5a77b" },
  { label: "Cream", value: "#eee7d2" },
];
const movieGift: MovieGiftConfig = {
  title: "A Little Movie Gift",
  dedication: "Settle in, press play, and enjoy this little gift from us.",
  source:
  `${import.meta.env.VITE_API}11036?autoplay=true&controls=false&quality=1080&color=%23c5a77b&subtitle=english`
};

const movieGifts: readonly MovieGiftConfig[] = [
  movieGift,
  {
    title: "Movie Gift 2",
    dedication: "Thank you for sharing in our special day! Just like the beautiful love story in this film, we are so excited for our next big adventure. Cozy up and enjoy this movie night on us!",
    source: `${import.meta.env.VITE_API}976573?autoplay=true&controls=false&quality=1080&color=%23c5a77b&subtitle=english`,
  },
  {
    title: "Movie Gift 3",
    dedication: "We are so grateful to celebrate our happily ever after with you. Pop some popcorn, get cozy, and enjoy this magical love story as a little thank you from us!",
    source: `${import.meta.env.VITE_API}38757?autoplay=true&controls=false&quality=1080&color=%23c5a77b&subtitle=english`,
  },
];

const donationDetails: DonationDetails = {
  paymentMethod: "GCASH",
  accountName: "KENT J.",
  accountNumber: "09668890417",
  qrImage: gcash,
};

const ease = [0.22, 1, 0.36, 1] as const;
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.42, ease } },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};
const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.075, delayChildren: 0.06 } },
};
const rise = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 280"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 267C73 220 105 156 190 22M63 216C39 194 29 169 34 145M102 168C143 171 169 153 192 124M141 108C115 98 101 77 101 53M59 219C42 232 37 252 42 268M166 67C185 63 202 50 210 31"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M34 145C16 132 19 112 36 106C54 114 55 133 34 145ZM192 124C188 102 204 91 219 101C224 117 210 130 192 124ZM101 53C84 42 84 26 99 20C115 30 114 44 101 53ZM42 268C25 262 21 245 34 236C49 243 52 257 42 268ZM210 31C203 14 212 4 226 10C232 24 223 34 210 31Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="267" r="2.4" fill="currentColor" />
      <circle cx="190" cy="22" r="2.4" fill="currentColor" />
    </svg>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif text-[#aa9055] ${className}`}
      aria-hidden="true"
    >
      ✳
    </span>
  );
}

function SectionHeading({
  eyebrow,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a8450]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl font-normal italic leading-[1.05] tracking-[-0.035em] text-[#334b3d] sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function NameList({ names, className = "" }: NameListProps) {
  return (
    <ul
      className={`space-y-2 text-sm leading-relaxed text-[#59675a] ${className}`}
    >
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

type PhotoPlaceholderProps = {
  title: string;
  hint: string;
  src?: string;
  alt?: string;
  className?: string;
};

function PhotoPlaceholder({
  title,
  hint,
  src,
  alt = title,
  className = "",
}: PhotoPlaceholderProps) {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
      className={`group relative isolate grid place-items-center overflow-hidden border border-[#b9ad8a] bg-[#dfe6d9] ${className}`}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          initial={reduceMotion ? false : { scale: 1.04 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="absolute inset-0 h-full pointer-events-none w-full object-cover object-center"
        />
      ) : (
        <div
          role="img"
          aria-label={`${title} photo placeholder`}
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#e9ede4_0%,#d7e0d3_48%,#c6d2c4_100%)] px-5 text-center"
        >
          <span className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-[#9eaa93]/50" />
          <span className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full border border-[#9eaa93]/40" />
          <Botanical className="absolute -right-3 top-0 w-36 rotate-12 text-[#82917a]/40 sm:w-48" />
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#a18d5c]/70 bg-[#f7f7ef]/60 text-[#927b45]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="15"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="8.5"
                cy="10"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="m4 18 5-5 3 3 3-4 5 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
          <span className="relative font-serif text-xl italic text-[#405747] sm:text-2xl">
            {title}
          </span>
          <span className="relative mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7d866f]">
            {hint}
          </span>
          <span className="relative mt-4 border border-[#a18d5c]/60 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.18em] text-[#8b794d]">
            Photo to be added
          </span>
        </div>
      )}
    </motion.figure>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-[#d9cfb4]" />
      <Mark className="text-[11px]" />
      <span className="h-px flex-1 bg-[#d9cfb4]" />
    </div>
  );
}

function InvitationPage({
  reduceMotion,
  onMovieClick,
}: {
  reduceMotion: boolean;
  onMovieClick: () => void;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="grid items-center gap-12 xl:grid-cols-[1.03fr_0.97fr] xl:gap-16"
    >
      <motion.div variants={rise} className="relative py-8 sm:py-12 xl:py-16">
        <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.27em] text-[#9a8450]">
          <span className="h-px w-8 bg-[#b49b60]" />A celebration of love
        </p>
        <p className="font-serif text-2xl italic text-[#71806e] sm:text-3xl">
          Jusol - Laurista
        </p>
        <h1 className="mt-1 font-serif text-[clamp(4.5rem,11vw,8.75rem)] font-normal italic leading-[0.91] tracking-[-0.075em] text-[#344b3d]">
          Nuptials<span className="text-[#b49b60]">.</span>
        </h1>
        <p className="mt-7 font-serif text-3xl italic text-[#71806e] sm:text-4xl">
          Kent <span className="text-[#b49b60]">&amp;</span> Toni Marie
        </p>
        <Rule className="my-8 max-w-sm" />
        <p className="max-w-xl font-serif text-lg leading-[1.85] text-[#5f6c60] sm:text-xl">
          Together with our families, we joyfully invite you to celebrate the
          beginning of our forever as we join our hearts in the Sacrament of
          Marriage.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
              The wedding day
            </p>
            <p className="mt-2 font-serif text-xl text-[#3e5646]">
              Tuesday, December 29, 2026
            </p>
          </div>
          <span className="hidden h-10 w-px bg-[#d5ceb8] sm:block" />
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
              Ceremony begins
            </p>
            <p className="mt-2 font-serif text-xl text-[#3e5646]">10:00 AM</p>
          </div>
        </div>
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-2 left-0 h-px bg-[#b49b60]"
            initial={{ width: 0 }}
            animate={{ width: "58%" }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          />
        )}
      </motion.div>

      <motion.div
        variants={rise}
        className="relative mx-auto w-full max-w-145 xl:mx-0 xl:justify-self-end"
      >
        <div className="absolute -right-3 -top-3 h-full w-full border border-[#b8a878]/60 sm:-right-5 sm:-top-5" />
        <div className="relative bg-[#f1f2e9] p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <PhotoPlaceholder
              title="Kent"
              hint="Groom portrait"
              className="aspect-3/4 w-full"
              src={man}
            />
            <PhotoPlaceholder
              title="Toni Marie"
              hint="Bride portrait"
              className="aspect-3/4 w-full"
              src={girl}
            />
          </div>
          <div className="grid gap-4 px-3 pb-3 pt-5 sm:grid-cols-2 sm:px-5 sm:pb-4">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8e7945]">
                Ceremony · 10:00 AM
              </p>
              <p className="mt-2 font-serif text-lg leading-snug text-[#405544]">
                San Diego Pro-Cathedral Parish
              </p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8e7945]">
                Reception to follow
              </p>
              <p className="mt-2 font-serif text-lg leading-snug text-[#405544]">
                Carmencita Hall, Baldivia, Silay City
              </p>
            </div>
          </div>
        </div>
        <p className="relative mt-4 text-right text-[9px] font-medium uppercase tracking-[0.22em] text-[#87907e]">
          A day made more beautiful with you
        </p>
      </motion.div>

      <motion.section
        variants={rise}
        className="mt-8 border-t border-[#d9d2bf] pt-8 xl:col-span-2 xl:mt-0 xl:pt-10"
        aria-labelledby="couple-moments-heading"
      >
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.23em] text-[#9a8450]">
              A little more of our story
            </p>
            <h2
              id="couple-moments-heading"
              className="font-serif text-3xl italic text-[#405747] sm:text-4xl"
            >
              Couple Moments
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#778170]">
            A few favorite memories, soon to be shared with you.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <PhotoPlaceholder
            title="A favorite memory"
            hint="Couple moment · 01"
            className="aspect-4/3 w-full"
            src={pic1}
          />
          <PhotoPlaceholder
            title="A day to remember"
            hint="Couple moment · 02"
            className="aspect-4/3 w-full"
            src={pic2}
          />
          <PhotoPlaceholder
            title="Us, together"
            hint="Couple moment · 03"
            className="aspect-4/3 w-full"
            src={pic3}
          />
          <PhotoPlaceholder
            title="Another favorite memory"
            hint="Couple moment · 04"
            className="aspect-4/3 w-full"
            src={pic4}
          />
        </div>
      </motion.section>

      <motion.button
        type="button"
        variants={rise}
        onClick={onMovieClick}
        whileHover={reduceMotion ? undefined : { y: -3 }}
        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
        className="group mt-2 flex w-full items-center gap-4 border border-[#cfc5a8] bg-[#f2f0e5] p-4 text-left transition-colors hover:bg-[#ebe8d9] sm:gap-6 sm:p-6 xl:col-span-2"
        aria-label="Open your movie gift"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#33443a] text-[#e0cf9b] transition-transform group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 4.8c0-.78.86-1.26 1.53-.85l10.1 6.2a1 1 0 0 1 0 1.7l-10.1 6.2A1 1 0 0 1 7 17.2V4.8Z" />
          </svg>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a8450]">
            A little bonus for you
          </span>
          <span className="mt-1 block font-serif text-xl italic text-[#405747] sm:text-2xl">
            Open your movie gift
          </span>
          <span className="mt-1 block text-xs text-[#778170]">
            A complimentary film, ready to enjoy.
          </span>
        </span>
        <span
          aria-hidden="true"
          className="font-serif text-2xl text-[#a38b52] transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </motion.button>
    </motion.div>
  );
}

function FamiliesPage() {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div
        variants={rise}
        className="flex flex-col justify-between gap-5 border-b border-[#d9d2bf] pb-8 md:flex-row md:items-end"
      >
        <SectionHeading eyebrow="With gratitude & love">
          Our Families
        </SectionHeading>
        <p className="max-w-sm font-serif text-lg italic leading-relaxed text-[#778170]">
          The love and support of our families brought us here.
        </p>
      </motion.div>
      <motion.div variants={rise} className="grid gap-5 md:grid-cols-2">
        {[
          {
            label: "Parents of the Groom",
            names: ["Mr. Benny Jusol", "Mrs. Ellen Jusol"],
          },
          {
            label: "Parents of the Bride",
            names: ["Mr. Sotero Laurista", "Mrs. Leah Laurista"],
          },
        ].map((family) => (
          <div
            key={family.label}
            className="group border border-[#dcd5c1] bg-[#f8f7ef] p-7 transition-colors hover:bg-[#f1f2e9] sm:p-9"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#9a8450]">
              {family.label}
            </p>
            <p className="mt-5 font-serif text-2xl leading-relaxed text-[#405747]">
              {family.names[0]}
              <br />
              <span className="text-[#9a8450]">&amp;</span> {family.names[1]}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div variants={rise}>
        <div className="mb-6 flex items-center gap-5">
          <h3 className="shrink-0 font-serif text-3xl italic text-[#405747]">
            Principal Sponsors
          </h3>
          <span className="h-px flex-1 bg-[#d9d2bf]" />
        </div>
        <div className="grid gap-8 rounded-sm border border-[#e1dccd] bg-[#f8f7ef] p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
          <NameList names={sponsorColumns[0]} />
          <NameList names={sponsorColumns[1]} />
          {/* <div className="flex flex-col justify-center border-t border-[#d9d2bf] pt-6 sm:col-span-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
              With special thanks
            </p>
            <p className="mt-3 font-serif text-2xl italic text-[#405747]">
              Arnold Sobremesena
            </p>
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

function EntouragePage() {
  const secondary: readonly RolePair[] = [
    { role: "Candle", names: "Mr. Jester De Pedro & Mrs. Sharilyn De Pedro" },
    { role: "Veil", names: "Mr. Vincent Pace & Mrs. Maricar Pace" },
    {
      role: "Cord",
      names: "Mr. Ceferino Miravalles IV & Mrs. Mechie Miravalles",
    },
  ];
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-10"
    >
      <motion.div
        variants={rise}
        className="flex flex-col justify-between gap-5 border-b border-[#d9d2bf] pb-8 md:flex-row md:items-end"
      >
        <SectionHeading eyebrow="Standing beside us">
          The Entourage
        </SectionHeading>
        <p className="max-w-sm font-serif text-lg italic leading-relaxed text-[#778170]">
          Our dearest people, sharing in the joy of our day.
        </p>
      </motion.div>
      <motion.div
        variants={rise}
        className="grid gap-px border border-[#ddd6c3] bg-[#ddd6c3] md:grid-cols-2"
      >
        <div className="bg-[#f8f7ef] p-6 sm:p-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
            Best Man
          </p>
          <p className="mt-3 font-serif text-2xl text-[#405747]">
            Mr. Michael James Pace
          </p>
        </div>
        <div className="bg-[#f8f7ef] p-6 sm:p-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
            Maid of Honor
          </p>
          <p className="mt-3 font-serif text-2xl text-[#405747]">
            Ms. Jenny Lauren Arquizal
          </p>
        </div>
      </motion.div>
      <motion.div variants={rise}>
        <div className="mb-5 flex items-center gap-5">
          <h3 className="shrink-0 font-serif text-3xl italic text-[#405747]">
            Secondary Sponsors
          </h3>
          <span className="h-px flex-1 bg-[#d9d2bf]" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {secondary.map((person) => (
            <div
              key={person.role}
              className="border-t border-[#b9a66f] bg-[#f8f7ef] px-5 py-5"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
                {person.role}
              </p>
              <p className="mt-3 font-serif text-lg leading-relaxed text-[#536454]">
                {person.names}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={rise}
        className="grid gap-8 border-y border-[#d9d2bf] py-8 md:grid-cols-2"
      >
        <div>
          <h3 className="mb-5 font-serif text-3xl italic text-[#405747]">
            Groomsmen
          </h3>
          <NameList
            names={groomsmen}
            className="columns-1 sm:columns-2 md:columns-1 xl:columns-2"
          />
        </div>
        <div>
          <h3 className="mb-5 font-serif text-3xl italic text-[#405747]">
            Bridesmaids
          </h3>
          <NameList
            names={bridesmaids}
            className="columns-1 sm:columns-2 md:columns-1 xl:columns-2"
          />
        </div>
      </motion.div>
      <motion.div variants={rise}>
        <div className="mb-5 flex items-center gap-5">
          <h3 className="shrink-0 font-serif text-3xl italic text-[#405747]">
            Children Role Bearers
          </h3>
          <span className="h-px flex-1 bg-[#d9d2bf]" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roleBearers.map((child) => (
            <div
              key={child.role}
              className="border border-[#e0dac8] bg-[#f8f7ef] p-5"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a8450]">
                {child.role}
              </p>
              <p className="mt-2 font-serif text-lg text-[#526253]">
                {child.names}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={rise}
        className="flex flex-col gap-3 border-l-2 border-[#b49b60] pl-5 sm:flex-row sm:items-baseline sm:gap-8"
      >
        <h3 className="font-serif text-2xl italic text-[#405747]">
          Flower Girls
        </h3>
        <p className="max-w-3xl text-sm leading-7 text-[#59675a]">
          Chelsea Chase Jacosalem · Ronica Chandria Delejero · Angel Kaye
          Bolivar · Eliana Gabrielle Bautista · Laiza Reyes
        </p>
      </motion.div>
    </motion.div>
  );
}

function DetailsPage() {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div
        variants={rise}
        className="flex flex-col justify-between gap-5 border-b border-[#d9d2bf] pb-8 md:flex-row md:items-end"
      >
        <SectionHeading eyebrow="A few thoughtful details">
          For Our Guests
        </SectionHeading>
        <div className="max-w-sm">
          <p className="font-serif text-lg italic leading-relaxed text-[#778170]">
            We can't wait to celebrate this beginning with you.
          </p>
          <a href="#donation-details" className="mt-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8b794d] underline decoration-[#b9a66f]/60 underline-offset-4 hover:text-[#405747] focus:outline-none focus:ring-2 focus:ring-[#aa9258] focus:ring-offset-2">
            Jump to donation details <span aria-hidden="true">↓</span>
          </a>
        </div>
      </motion.div>
      <motion.section
        variants={rise}
        className="grid gap-5 md:grid-cols-2"
        aria-label="Wedding venue photos"
      >
        <div className="space-y-3">
          <PhotoPlaceholder
            title="San Diego Pro-Cathedral Parish"
            hint="Ceremony venue"
            className="aspect-video w-full"
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5NNJCJ4klq775q3MBDt3hnslpvaP1sFof_nPzNKmQQG4VoBaN0q9QZw&s=10"}
          />
          <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#8d815d]">
            Ceremony venue
          </p>
        </div>
        <div className="space-y-3">
          <PhotoPlaceholder
            title="Carmencita Hall"
            hint="Reception · Baldivia, Silay City"
            className="aspect-video w-full"
            src={"https://pix10.agoda.net/hotelImages/27855412/-1/d34759f19ce94c2829b3decc829511e4.jpg?ca=21&ce=0&s=800x600"}
          />
          <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#8d815d]">
            Reception venue
          </p>
        </div>
      </motion.section>
      <div className="grid gap-5 lg:grid-cols-2">
        <motion.section
          variants={rise}
          className="border border-[#ddd6c3] bg-[#f8f7ef] p-6 sm:p-8"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
            01 / What to wear
          </p>
          <h3 className="mt-3 font-serif text-3xl italic text-[#405747]">
            Attire Guide
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#5f6c60]">
            We would love to see you in your best and most comfortable formal
            attire that suits our motif.
          </p>
          <p className="mb-4 mt-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#968653]">
            Earth tones / Neutral tones
          </p>
          <div className="flex flex-wrap gap-5">
            {attirePalette.map((color) => (
              <div key={color.label} className="flex items-center gap-3">
                <span
                  className="h-10 w-10 rounded-full border border-[#d2cbb9] shadow-sm"
                  style={{ backgroundColor: color.value }}
                />
                <span className="text-xs text-[#59675a]">{color.label}</span>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section
          variants={rise}
          className="border border-[#ddd6c3] bg-[#e8ece2] p-6 sm:p-8"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
            02 / A note from us
          </p>
          <h3 className="mt-3 font-serif text-3xl italic text-[#405747]">
            Gift Guide
          </h3>
          <p className="mt-4 font-serif text-base leading-8 text-[#59675a]">
            We feel so blessed and grateful to have you celebrating these
            special moments with us. Your presence and prayers are the best gift
            we could ask for. But if you desire to give nonetheless, monetary
            gift is the one we humbly suggest, for our future.
          </p>
        </motion.section>
        <motion.section
          variants={rise}
          className="border border-[#cfc5a8] bg-[#f4f1e6] p-6 sm:p-8 lg:col-span-2"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
                03 / Kindly respond
              </p>
              <h3 className="mt-3 font-serif text-3xl italic text-[#405747]">
                RSVP
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#59675a]">
                We are so excited to celebrate this special day with our closest
                family and friends. To be assured of seats, we request the favor
                of your response on or before{" "}
                <strong className="font-semibold text-[#405747]">
                  December 13, 2026.
                </strong>{" "}
                You can contact us through Messenger or via this phone number:
              </p>
            </div>
            <a
              href="tel:09912255388"
              className="inline-flex min-h-14 items-center justify-center border border-[#aa9258] px-6 font-serif text-xl tracking-wide text-[#56644d] transition hover:bg-[#e9e5d5] focus:outline-none focus:ring-2 focus:ring-[#aa9258] focus:ring-offset-2"
            >
              09912255388{" "}
              <span className="ml-3 text-sm" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </motion.section>
      </div>
      <motion.section
        variants={rise}
        id="donation-details"
        className="scroll-mt-8 border border-[#cfc5a8] bg-[#f4f1e6] p-6 sm:p-8"
        aria-labelledby="donation-heading"
      >
        <div className="grid gap-7 lg:grid-cols-[1fr_220px] lg:items-center">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
              03 / Optional giving
            </p>
            <h3 id="donation-heading" className="mt-3 font-serif text-3xl italic text-[#405747]">
              A Gift for Our Future
            </h3>
            <p className="mt-4 max-w-2xl font-serif text-base leading-8 text-[#59675a]">
              Your presence is the greatest gift. If you would also like to contribute toward our new beginning, we would receive it with heartfelt gratitude. Please know that a gift is entirely optional.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border border-[#ded7c5] bg-[#faf9f3] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9a8450]">Payment method</p>
                <p className="mt-2 font-serif text-lg text-[#405747]">{donationDetails.paymentMethod || "Add bank or e-wallet"}</p>
              </div>
              <div className="border border-[#ded7c5] bg-[#faf9f3] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9a8450]">Account name</p>
                <p className="mt-2 font-serif text-lg text-[#405747]">{donationDetails.accountName || "Add account name"}</p>
              </div>
              <div className="border border-[#ded7c5] bg-[#faf9f3] p-4 sm:col-span-2">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9a8450]">Account / reference number</p>
                <p className="mt-2 font-serif text-lg text-[#405747]">{donationDetails.accountNumber || "Add account or reference details"}</p>
              </div>
            </div>
            {donationDetails.donationUrl && (
              <a href={donationDetails.donationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center border border-[#aa9258] px-5 font-serif text-lg text-[#56644d] transition hover:bg-[#e9e5d5] focus:outline-none focus:ring-2 focus:ring-[#aa9258] focus:ring-offset-2">
                Send a gift <span className="ml-3 text-sm" aria-hidden="true">↗</span>
              </a>
            )}
          </div>
          <div className="mx-auto w-full max-w-55 border border-[#ded7c5] bg-[#faf9f3] p-3 text-center">
            <div className="flex aspect-square items-center justify-center overflow-hidden border border-dashed border-[#b9a66f] bg-[#f0efe5]">
              {donationDetails.qrImage ? (
                <img src={donationDetails.qrImage} alt="Donation QR code" className="h-full w-full object-cover pointer-events-none p-2" />
              ) : (
                <div className="px-4"><span className="mx-auto flex h-12 w-12 items-center justify-center border border-[#b9a66f] text-2xl text-[#9a8450]" aria-hidden="true">▦</span><p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#827b5e]">Add donation QR image</p></div>
              )}
            </div>
            <p className="mt-3 text-[8px] uppercase tracking-[0.16em] text-[#8c8977]">Optional wedding contribution</p>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={rise}
        className="border-t border-[#d9d2bf] pt-7"
      >
        <div className="mb-5 flex items-center gap-5">
          <h3 className="shrink-0 font-serif text-3xl italic text-[#405747]">
            A few reminders
          </h3>
          <span className="h-px flex-1 bg-[#d9d2bf]" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["01", "Be on time"],
            ["02", "Have fun!"],
            ["03", "Finish the event"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="flex items-center gap-4 bg-[#e8ece2] px-5 py-4"
            >
              <span className="font-serif text-xl italic text-[#a48d54]">
                {number}
              </span>
              <span className="text-sm text-[#536253]">{label}</span>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.p
        variants={rise}
        className="border-t border-[#d9d2bf] pt-7 text-center font-serif text-lg italic text-[#778170]"
      >
        We look forward to celebrating with you.{" "}
        <span className="ml-1 text-[#405747]">Kent &amp; Toni Marie</span>
      </motion.p>
    </motion.div>
  );
}

function MovieGiftPage() {
  const [selectedGiftIndex, setSelectedGiftIndex] = useState(0);
  const selectedGift = movieGifts[selectedGiftIndex];
  const hasSource = Boolean(selectedGift.source);
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="mx-auto max-w-5xl space-y-8"
    >
      <motion.div variants={rise} className="text-center">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a8450]">
          A little something, with love
        </p>
        <h2 className="font-serif text-4xl italic leading-tight text-[#334b3d] sm:text-5xl">
          Your Movie Gift
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-serif text-lg leading-7 text-[#778170]">
          A cozy film night, on us. We made a little space here for you to enjoy
          a movie while celebrating with us.
        </p>
      </motion.div>

      <motion.div variants={rise} className="relative mx-auto max-w-4xl">
        <div
          className="absolute -inset-2 rounded-sm border border-[#b49b60]/60 sm:-inset-3"
          aria-hidden="true"
        />
        <div className="relative overflow-hidden border border-[#34443a] bg-[#17231c] p-2 shadow-[0_24px_70px_rgba(30,44,34,0.22)] sm:p-4">
          <div className="relative aspect-video overflow-hidden bg-[#0d1510]">
            {hasSource ? (
              <iframe
                className="h-full w-full border-0"
                src={selectedGift.source}
                title={selectedGift.title}
                sandbox="allow-scripts allow-same-origin allow-orientation-lock allow-presentation allow-fullscreen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_50%_42%,rgba(114,132,99,0.35),transparent_58%),linear-gradient(145deg,#233229,#101813_70%)] px-5 text-center">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#c1aa6e]/60 text-[#d4bd7c]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor"><path d="M7 4.8c0-.78.86-1.26 1.53-.85l10.1 6.2a1 1 0 0 1 0 1.7l-10.1 6.2A1 1 0 0 1 7 17.2V4.8Z"/></svg>
                </span>
                <p className="font-serif text-2xl italic text-[#f3f0e4]">{selectedGift.title}</p>
                <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#c6b77f]">Add a movie source to this gift slot</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between gap-2 px-2 py-3 sm:flex-row sm:items-center sm:px-3 sm:py-4">
            <div>
              <p className="font-serif text-lg italic text-[#f3f0e4]">
                {selectedGift.title}
              </p>
              <p className="mt-1 text-xs text-[#c1c9bc]/70">
                {selectedGift.dedication}
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 border border-[#b39a5d]/40 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#d4bd7c]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${hasSource ? "bg-emerald-400" : "bg-[#c2a95f]"}`}
              />
              {hasSource ? "Ready to play" : "Movie coming soon"}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.section variants={rise} className="mx-auto max-w-4xl" aria-labelledby="movie-selection-heading">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">Choose your gift</p>
            <h3 id="movie-selection-heading" className="mt-2 font-serif text-2xl italic text-[#405747]">Select a movie</h3>
          </div>
          <p className="text-xs text-[#778170]">Pick one of the three films to load it above.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {movieGifts.map((gift, index) => {
            const isSelected = index === selectedGiftIndex;
            const isAvailable = Boolean(gift.source);
            return (
              <motion.button
                key={`${gift.title}-${index}`}
                type="button"
                onClick={() => setSelectedGiftIndex(index)}
                aria-pressed={isSelected}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`flex min-h-24 flex-col justify-between border p-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#aa9258] focus:ring-offset-2 ${isSelected ? "border-[#aa9258] bg-[#e8ece2] shadow-sm" : "border-[#ddd6c3] bg-[#f8f7ef] hover:border-[#b9a66f]"}`}
              >
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9a8450]">Movie gift · 0{index + 1}</span>
                <span className="mt-2 font-serif text-lg italic text-[#405747]">{gift.title}</span>
                <span className={`mt-3 text-[8px] font-semibold uppercase tracking-[0.16em] ${isAvailable ? "text-[#647756]" : "text-[#968b6b]"}`}>{isAvailable ? "Ready to play" : "Add movie source"}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {!hasSource && (
        <motion.div
          variants={rise}
          className="mx-auto max-w-3xl border border-[#ddd6c3] bg-[#f8f7ef] px-5 py-4 text-center sm:px-8"
        >
          <p className="font-serif text-lg italic text-[#405747]">
            The screen is ready for your movie.
          </p>
          <p className="mt-2 text-xs leading-6 text-[#778170]">
            To enable playback, add a movie file under{" "}
            <code className="rounded bg-[#e9ece4] px-1.5 py-0.5 text-[#59675a]">
              public/videos/
            </code>{" "}
            and set{" "}
            <code className="rounded bg-[#e9ece4] px-1.5 py-0.5 text-[#59675a]">
              movieGifts[index].source
            </code>{" "}
            in the movieGifts array above. You can also use a public, embeddable video URL.
            Make sure the movie is licensed or otherwise available for free
            viewing.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

type EnvelopeIntroProps = { onOpen: () => void; reduceMotion: boolean };

function EnvelopeIntro({ onOpen, reduceMotion }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const openEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, reduceMotion ? 0 : 1250);
  };

  return (
    <motion.main
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -12 }}
      transition={{ duration: reduceMotion ? 0 : 0.55 }}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#e8ece3] px-5 py-10 text-[#35483a]"
    >
      <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full border border-[#b7a878]/30" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full border border-[#b7a878]/25" />
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.15 }}
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a8450]"
        >
          A personal invitation for you
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.25 }}
          className="mt-4 font-serif text-4xl italic text-[#405747] sm:text-5xl"
        >
          Kent &amp; Toni Marie
        </motion.h1>
        <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#7e8878]">
          Jusol - Laurista Nuptials{" "}
          <span className="mx-2 text-[#b49b60]">·</span> December 29, 2026
        </p>

        <div className="mx-auto mt-9 w-full max-w-175 perspective-[1400px] sm:mt-12">
          <motion.button
            type="button"
            disabled={isOpening}
            onClick={openEnvelope}
            whileHover={
              reduceMotion || isOpening ? undefined : { y: -4, scale: 1.005 }
            }
            whileTap={reduceMotion || isOpening ? undefined : { scale: 0.99 }}
            aria-label="Open the wedding invitation envelope"
            className="relative block aspect-[1.35/1] w-full cursor-pointer overflow-visible text-left outline-none focus-visible:ring-2 focus-visible:ring-[#a78f52] focus-visible:ring-offset-4 sm:aspect-[1.7/1]"
          >
            <div className="absolute inset-0 border border-[#ad9a66] bg-[#cdd8ca] shadow-[0_30px_65px_rgba(46,63,48,0.20)]" />
            <motion.div
              animate={{
                y: isOpening ? -46 : 22,
                opacity: isOpening ? 1 : 0.94,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
              className="absolute left-[9%] right-[9%] top-[7%] z-10 flex h-[85%] flex-col items-center justify-center border border-[#ded5bb] bg-[#fbfaf4] px-4 text-center shadow-[0_8px_24px_rgba(55,65,48,0.12)] sm:left-[13%] sm:right-[13%]"
            >
              <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#9a8450] sm:text-[9px]">
                You are joyfully invited
              </span>
              <span className="mt-3 font-serif text-3xl italic text-[#405747] sm:text-5xl">
                Kent <span className="text-[#b49b60]">&amp;</span> Toni Marie
              </span>
              <span className="mt-2 font-serif text-sm italic text-[#7b856f] sm:text-lg">
                December 29, 2026
              </span>
              <span className="mt-5 h-px w-20 bg-[#c8b781]" />
            </motion.div>
            <div
              className="absolute inset-0 z-20 bg-[#bdcbbd]"
              style={{
                clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            <motion.div
              animate={{ rotateX: isOpening ? -170 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.85, ease }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformOrigin: "50% 0%",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              className="absolute inset-x-0 top-0 z-30 h-[58%] border-t border-[#d6c89d]/70 bg-linear-to-b from-[#d5decf] to-[#b9c9b9]"
            />
            <span className="absolute inset-x-0 top-[53%] z-40 flex -translate-y-1/2 justify-center">
              <motion.span
                animate={{
                  scale: isOpening ? 0.6 : 1,
                  opacity: isOpening ? 0 : 1,
                  y: isOpening ? 8 : 0,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[#9b8247] bg-[#b29b5e] font-serif text-xl italic text-[#f8f5e8] shadow-lg sm:h-18 sm:w-18 sm:text-2xl"
              >
                K<span className="text-[#e8d9ae]">&amp;</span>T
              </motion.span>
            </span>
          </motion.button>
        </div>
        <motion.p
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 8 : 0 }}
          className="mt-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#827b5e]"
        >
          {isOpening ? "Opening your invitation…" : "Tap the envelope to open"}
        </motion.p>
      </div>
    </motion.main>
  );
}

export default function WeddingInvitation() {
  const [activePage, setActivePage] = useState<PageId>("invitation");
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const activeItem =
    navItems.find((item) => item.id === activePage) ?? navItems[0];
  const selectPage = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };
  const content = () => {
    switch (activePage) {
      case "invitation":
        return (
          <InvitationPage
            reduceMotion={reduceMotion}
            onMovieClick={() => selectPage("movie")}
          />
        );
      case "families":
        return <FamiliesPage />;
      case "entourage":
        return <EntouragePage />;
      case "details":
        return <DetailsPage />;
      case "movie":
        return <MovieGiftPage />;
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!hasOpenedEnvelope ? (
        <EnvelopeIntro
          key="envelope"
          onOpen={() => setHasOpenedEnvelope(true)}
          reduceMotion={reduceMotion}
        />
      ) : (
        <motion.main
          key="invitation"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
          className="min-h-screen bg-[#e9ece4] text-[#35483a] selection:bg-[#c5b783]/40"
        >
          <div className="mx-auto max-w-[1600px] px-4 pb-6 pt-4 sm:px-7 sm:pt-7 lg:px-10 lg:pb-10">
            <header className="mb-5 flex items-center justify-between border-b border-[#cfd4c7] pb-4 sm:mb-8 sm:pb-5">
              <a
                href="#home"
                onClick={(event) => {
                  event.preventDefault();
                  selectPage("invitation");
                }}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b4a16c] font-serif text-sm italic text-[#8e7945]">
                  K<span className="text-[#b4a16c]">&amp;</span>T
                </span>
                <span className="font-serif text-lg italic text-[#405747] sm:text-xl">
                  Kent &amp; Toni Marie
                </span>
              </a>
              <p className="hidden text-[9px] font-medium uppercase tracking-[0.23em] text-[#828a79] sm:block">
                December 29, 2026 <span className="mx-2 text-[#ae985e]">·</span>{" "}
                Silay City
              </p>
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8b7a4d] sm:hidden">
                29 · 12 · 26
              </span>
            </header>

            <div className="grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[290px_minmax(0,1fr)]">
              <aside className="lg:sticky lg:top-8 lg:flex lg:h-[calc(100vh-64px)] lg:min-h-155 lg:flex-col lg:justify-between">
                <div className="hidden border border-[#d6d7ca] bg-[#f3f3eb] p-7 lg:block xl:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#9a8450]">
                    You are invited
                  </p>
                  <h2 className="mt-5 font-serif text-4xl italic leading-[1.1] text-[#405747]">
                    A day for
                    <br />
                    our forever.
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-[#778170]">
                    Join us as we celebrate love, family, and the beginning of
                    our married life.
                  </p>
                  <Rule className="my-7" />
                  <p className="font-serif text-base italic text-[#65735e]">
                    Jusol - Laurista Nuptials
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.19em] text-[#92917d]">
                    Tuesday · December 29, 2026
                  </p>
                </div>
                <nav
                  aria-label="Invitation sections"
                  className="grid grid-cols-5 border border-[#d6d7ca] bg-[#f3f3eb] p-1 lg:mt-4 lg:grid-cols-1 lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectPage(item.id)}
                      aria-current={activePage === item.id ? "page" : undefined}
                      className={`relative flex min-h-14.5 items-center gap-4 px-2 text-left transition-colors sm:px-4 lg:min-h-19 lg:border-b lg:border-[#d5d6c9] ${activePage === item.id ? "text-[#405747]" : "text-[#8b9283] hover:text-[#53664f]"}`}
                    >
                      {activePage === item.id && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-x-1 bottom-0 h-0.5 bg-[#aa9258] lg:inset-y-4 lg:inset-x-0 lg:h-auto lg:w-0.5"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                        />
                      )}
                      <span
                        className={`hidden font-serif text-lg italic sm:block lg:text-xl ${activePage === item.id ? "text-[#a18a53]" : ""}`}
                      >
                        {item.number}
                      </span>
                      <span className="min-w-0 flex-1 text-center text-[9px] font-medium sm:text-left sm:text-xs lg:text-left">
                        <span className="block truncate">{item.label}</span>
                        <span className="mt-1 hidden text-[10px] font-normal text-[#939786] lg:block">
                          {item.note}
                        </span>
                      </span>
                      <span className="hidden text-[#a18a53] lg:block">
                        {activePage === item.id ? "↗" : ""}
                      </span>
                    </button>
                  ))}
                </nav>
                <div className="hidden px-2 text-[9px] uppercase leading-5 tracking-[0.16em] text-[#939786] lg:block">
                  Made with love
                  <br />
                  <span className="text-[#a18a53]">&amp;</span> shared with you
                </div>
              </aside>

              <section className="relative h-auto min-h-162.5 max-h-none overflow-visible border border-[#d6d7ca] bg-[#f7f7ef] px-5 py-8 sm:px-9 sm:py-10 lg:min-h-[calc(100vh-64px)] lg:px-10 lg:py-12 xl:px-14 xl:py-14">
                <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-linear(circle,rgba(198,192,158,0.15),transparent_70%)]" />
                <div className="relative z-10 mb-8 flex items-center justify-between border-b border-[#e1dece] pb-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8450]">
                    {activeItem.number}{" "}
                    <span className="mx-2 text-[#c4b78d]">/</span>{" "}
                    {activeItem.note}
                  </p>
                  <p className="hidden text-[9px] uppercase tracking-[0.18em] text-[#939786] sm:block">
                    Kent &amp; Toni Marie
                  </p>
                </div>
                <div className="relative z-10">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activePage}
                      variants={pageVariants}
                      initial={reduceMotion ? false : "initial"}
                      animate="animate"
                      exit={reduceMotion ? undefined : "exit"}
                    >
                      {content()}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <footer className="relative z-10 mt-12 flex items-center justify-between border-t border-[#e1dece] pt-4 text-[9px] uppercase tracking-[0.16em] text-[#929585]">
                  <span>Jusol - Laurista Nuptials</span>
                  <span>
                    {activeItem.number}{" "}
                    <span className="text-[#b49b60]">·</span> 05
                  </span>
                </footer>
              </section>
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
