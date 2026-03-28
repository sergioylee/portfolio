export interface Entry {
  period: string;
  title: string;
  description: string;
}

export const experience: Entry[] = [
  {
    period: "Jan 2026 – present",
    title: "Tech Lead — SGS",
    description:
      "Didn't see this one coming. I got promoted mid-restructuring, either a compliment or a warning sign. Turns out I'm pretty good at communicating, prioritizing, and keeping things unblocked; skills I never particularly wanted. I'd rather be deep in a debugger. Hoping I won't become yet another frustrated engineer. I still get my hands dirty though, whenever someone needs the heavy artillery B).",
  },
  {
    period: "Jan 2025 – Jan 2026",
    title: "Full-Stack Developer — SGS",
    description:
      "Joined to modernize my stack. I didn't even know Git on day one, let alone .NET Core, TypeScript, or Vue, yet, within a year I was leading the team. Corporate scale this time: bigger codebases, bigger teams, bigger userbases, and the coordination overhead that comes with all of that. Is migrating a massive legacy system while keeping it alive in production a sort of parenting?",
  },
  {
    period: "Apr 2023 – Jan 2025",
    title: "Full-Stack Developer — FlashData",
    description:
      "Team of ~10 people, no frameworks, no off-the-shelf solutions, everything from scratch. The team was raw but that was its charm. Full ownership from requirements to maintenance, plenty of legacy code nobody had documented, and technologies most people would rather pretend don't exist. I learned more here than anywhere else.",
  },
  {
    period: "Nov 2021 – Apr 2023",
    title: "Private Computer Science Teacher",
    description:
      "Moved to Spain and while work permit was in progress: taught what I already knew. Tutored a dozen university students in C, C++ and Java, algorithms, and system programming while studying web development on the side. Turns out people will pay you to explain pointers!",
  },
  {
    period: "Jun 2020 – Nov 2021",
    title: "Cofounder — Thyrosgaming",
    description:
      "Started as a personal mission to game at 60fps on a tight budget. The pandemic hit, demand for custom PCs exploded, and within three months my brother and I had cleared 100+ builds. Taught me more about hardware, supply chains, and running a business than anything else.",
  },
];

export const education: Entry[] = [
  {
    period: "Sep 2024 – Ongoing",
    title: "B.Sc. Computer Science — Open University of Catalonia",
    description: "I want a phd.",
  },
  {
    period: "Nov 2022 – Apr 2023",
    title: "Course Full Stack Web Development — University of Helsinki",
    description: "The one everyone recommends.",
  },
  {
    period: "Mar 2019 – Nov 2021",
    title: "B.Sc. Electronics Engineering — University of Buenos Aires",
    description: "Dropped out for love.",
  },
];
