// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Sources: the app's Figma (AI Veo v1 — Design [MVP], OB+Paywalls) and the owner's
// Privacy Policy / Terms of Use (effective November 16, 2026 — content/legal.ts).
// The app isn't in the App Store yet (iTunes lookup for 6816889253: 0 results, 2026-11-16).
// PLACEHOLDER values are hidden on the site; after release run the lookup → minIOS, category.

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
  brand: "AI Veo",
  email: "ethanmartin95@hotmail.com",
  year: new Date().getFullYear(),
  operator: "Ethan Martin",
  location: "St. Louis, Missouri, United States",
  // wording follows section 3 of the owner's Privacy Policy and Terms of Use
  disclaimer: "AI Veo is operated by Ethan Martin. The app uses the relevant VEO name and brand elements on the basis of a signed Brand Name and Trademark Authorization Agreement dated 22 September 2026 between Google LLC and Ethan Martin. All ownership rights in Google LLC trademarks and brand assets remain with Google LLC.",
};

export const app = {
  id: "6816889253",
  url: "https://apps.apple.com/app/id6816889253",
  minIOS: PLACEHOLDER,
  category: PLACEHOLDER,
};

export const isSet = (v: string) => !!v && v !== PLACEHOLDER;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Bento under the hero — the three onboarding promises of the app.
export const bento = [
  { icon: "type", title: "Text to video", text: "Describe any scene or idea and get a video back from your words." },
  { icon: "image", title: "Image to video", text: "Pick a photo from your gallery and watch it turn into a moving clip." },
];

// Alternating rows — one app screen each.
export const rows = [
  {
    tag: "Veo AI Helper",
    title: "Imagine. Chat. Create.",
    text: "Talk an idea through in the AI chat. It helps with the wording, generates images, and can turn an image it made into a video.",
    img: "/images/phone-chat.webp",
    alt: "AI Veo chat screen with the line Imagine. Chat. Create.",
  },
  {
    tag: "Examples",
    title: "Start from a template",
    text: "Browse the popular generations of the week. Open one, tap Use template and its prompt is filled in for you.",
    img: "/images/phone-examples.webp",
    alt: "Examples screen with a grid of popular generations",
  },
  {
    tag: "Result",
    title: "Watch it, then keep it",
    text: "Every result opens full screen with its prompt underneath. Play it back, share it or download it to your iPhone.",
    img: "/images/phone-result.webp",
    alt: "Result screen with a generated video and a Download button",
  },
];

// Style chips are the app's own (Smart Prompt Builder). Prompts are DRAFT sample text.
export const styles = [
  { name: "Cinematic", img: "/images/ex-house.webp", prompt: "A glass pavilion in the desert at dusk, warm light inside, the camera slowly circles the building." },
  { name: "Product", img: "/images/ex-perfume.webp", prompt: "A perfume bottle resting on glowing embers, sparks rising, slow push-in on the label." },
  { name: "Portrait", img: "/images/ex-cream.webp", prompt: "A woman lifts the lid of a giant cream jar on a sunny lawn, playful and bright." },
  { name: "Dreamy", img: "/images/ex-flight.webp", prompt: "A man floats above pink clouds while small planes circle around him." },
  { name: "Sci-Fi", img: "/images/ex-car.webp", prompt: "A transparent sports car with a visible engine, the camera orbits the bodywork." },
  { name: "Action", img: "/images/ex-battle.webp", prompt: "Banners and broken spears on a smoky battlefield at sunset, embers drifting through the air." },
];

export const pro = [
  "Text to video",
  "Image to video",
  "Smart Prompt Builder",
  "Veo AI chat",
  "Save to Photos and share",
];

export const steps = [
  { title: "Get AI Veo", text: "Download it from the App Store." },
  { title: "Write or upload", text: "Type a prompt or pick a photo." },
  { title: "Tap Generate", text: "Watch the result and download it." },
];

// App page — screens in the order a first session goes.
export const screens = [
  { img: "/images/phone-home.webp", label: "Explore" },
  { img: "/images/phone-prompt.webp", label: "Prompt Builder" },
  { img: "/images/phone-generating.webp", label: "Generating" },
  { img: "/images/phone-result.webp", label: "Result" },
  { img: "/images/phone-chat.webp", label: "AI chat" },
  { img: "/images/phone-news.webp", label: "What’s new" },
];

export const appFeatures = [
  { title: "Text to video", text: "Write what you want to see (a scene, a mood, a camera move) and tap Generate.", img: "/images/phone-home.webp" },
  { title: "Image to video", text: "Add a photo from your library, or take one with the camera, and the app brings it to life as a video.", img: "/images/phone-photo.webp" },
  { title: "Smart Prompt Builder", text: "Describe the idea simply, pick a style, and the app writes a detailed prompt for you.", img: "/images/phone-prompt.webp" },
  { title: "Veo AI chat", text: "Get help with prompts, generate images in the conversation, then animate one into a video.", img: "/images/phone-chat.webp" },
  { title: "Result & download", text: "Play the video full screen, save it to Photos or send it anywhere through the share sheet.", img: "/images/phone-result.webp" },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Modes", "Text to video · Image to video · Image generation in chat"],
  ["Output", "768p · 9:16"],
  ["Tools", "Prompt Builder · AI chat · Examples · Library"],
  ["AI providers", "OpenAI (text and images) · MiniMax (video)"],
  ["Account", "Not required"],
  ["Storage", "Library, chats and prompt history stay on your iPhone"],
  ["Age", "16 and older"],
  ["Purchases", "Subscription through the App Store"],
  ["Developer", "Ethan Martin"],
  ["Compatibility", `iOS ${app.minIOS} or later`],
  ["Category", app.category],
];

export const faq = [
  { q: "How do I make my first video?", a: "Open the app, type what you want to see in the Prompt field, or add a photo, and tap Generate. When the video is ready it opens on the Result screen." },
  { q: "Can I turn a photo into a video?", a: "Yes. Tap the image button in the Prompt card, choose a photo from your library or take one with the camera, and tap Generate. The app asks for access to your photos or camera the first time." },
  { q: "What does the Prompt Builder do?", a: "Describe your idea in a few words and pick a style such as Cinematic, Product or Nature. Tap Generate Prompt and the app writes a detailed prompt you can use or copy." },
  { q: "Where do I find my videos?", a: "Finished generations are under Your Generations in Library, stored on your iPhone. Deleting the app removes them, so save the ones you want to keep to Photos." },
  { q: "Can I stop a generation?", a: "Yes. Tap the close button on the Generating screen and confirm Stop. The generation is canceled." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple Account. Open Settings on your iPhone, tap your name, then Subscriptions, choose AI Veo and tap Cancel. Deleting the app doesn’t cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "On the subscription screen tap Restore. Use the same Apple Account the purchase was made with. Refunds are handled by Apple." },
  { q: "Do I need an account?", a: "No. AI Veo works without registration or login." },
  { q: "Who processes my prompts and photos?", a: "When you ask for a result, the inputs it needs are sent to AI providers: OpenAI for text assistance and image generation, MiniMax for video generation. They return the result to the app and handle requests under their own policies, so avoid submitting anything you don’t want processed." },
  { q: "Can I delete my chat history?", a: "Yes. Chat threads and Prompt Builder history are stored only on your device and can be deleted with the controls in the app." },
  { q: "What can’t I create with AI Veo?", a: "Sexual content, anything involving minors, deceptive impersonation and material you don’t have the rights to use. The full list is in the Terms of Use." },
  { q: "Who can use AI Veo?", a: "The app is intended for users aged 16 and older." },
  { q: "Something went wrong. Who do I write to?", a: `Email ${site.email} with a short description and, if you can, a screenshot of the screen.` },
];
