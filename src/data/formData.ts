export const formData: onboardingQuestion[] = [
  {
    type: "input",
    heading: "Welcome! First things first...",
    note: "you can always change them later.",
    inputs: [
      {
        name: "fullName",
        label: "Full Name",
        required: true,
      },
      {
        name: "displayName",
        label: "Display name",
        required: true,
      },
    ],
    ctaText: "create workspace",
  },
  {
    type: "input",
    heading: "let's set up a home for all your work",
    note: "you can always create another workspace later.",
    inputs: [
      {
        name: "workspaceName",
        label: "workspace Name",
        required: true,
      },
      {
        name: "workspaceUrl",
        label: "workspace url",
        required: true,
      },
    ],
    ctaText: "create workspace",
  },
  {
    type: "selector",
    stateKey: "planToUse",
    heading: "How are you planning to use Eden?",
    note: "we'll streamline your setup experience accordingly.",
    options: [
      {
        logo: "person.png",
        heading: "for myself",
        description: "Write better. Think more clearly. Stay organized.",
      },
      {
        logo: "people.png",
        heading: "with my team",
        description: "Wikis, docs, tasks & projects, all in one place.",
      },
    ],
    ctaText: "create workspace",
  },
];
