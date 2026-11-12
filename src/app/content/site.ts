// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Source: the app's Figma (AI Veo v1 — Design [MVP], OB+Paywalls) — the app isn't
// in the App Store yet (iTunes lookup for 6816889253 returned 0 results, 2026-11-12).
// PLACEHOLDER values are hidden on the site; fill them when the owner sends
// Privacy / Terms (operator) and after release (lookup → minIOS, category).

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
  brand: "AI Veo",
  email: "ethanmartin95@hotmail.com",
  year: new Date().getFullYear(),
  operator: PLACEHOLDER,
  // DRAFT — replace with the wording from the owner's Terms once they arrive.
  disclaimer: "AI Veo is an independent app. Veo is a trademark of Google LLC; AI Veo is not affiliated with or endorsed by Google.",
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
    text: "Talk an idea through in the AI chat. It turns rough thoughts into prompts, images and videos, and asks before it starts a generation.",
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
  "Download your videos",
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
  { img: "/images/phone-news.webp", label: "New Veo 3.1" },
];

export const appFeatures = [
  { title: "Text to video", text: "Write what you want to see (a scene, a mood, a camera move) and tap Generate.", img: "/images/phone-home.webp" },
  { title: "Image to video", text: "Add a photo to the prompt and the app brings it to life as a video.", img: "/images/phone-photo.webp" },
  { title: "Smart Prompt Builder", text: "Describe the idea simply, pick a style, and the app writes a detailed prompt for you.", img: "/images/phone-prompt.webp" },
  { title: "Veo AI chat", text: "Turn ideas into prompts, images and videos in a conversation.", img: "/images/phone-chat.webp" },
  { title: "Result & download", text: "Play the video full screen, share it, or save it to your iPhone.", img: "/images/phone-result.webp" },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Model", "Veo 3.1"],
  ["Modes", "Text to video · Image to video"],
  ["Output", "768p · 9:16"],
  ["Tools", "Prompt Builder · AI chat · Examples · Library"],
  ["Purchases", "Pro subscription through the App Store"],
  ["Compatibility", `iOS ${app.minIOS} or later`],
  ["Category", app.category],
];

export const faq = [
  { q: "How do I make my first video?", a: "Open the app, type what you want to see in the Prompt field, or add a photo, and tap Generate. When the video is ready it opens on the Result screen." },
  { q: "Can I turn a photo into a video?", a: "Yes. Tap the image button in the Prompt card, choose a photo from your library and tap Generate. The app asks for access to your photos the first time." },
  { q: "What does the Prompt Builder do?", a: "Describe your idea in a few words and pick a style such as Cinematic, Product or Nature. Tap Generate Prompt and the app writes a detailed prompt you can use or copy." },
  { q: "Where do I find my videos?", a: "Finished generations are saved under Your Generations in Library. Open one to play it again, share it or download it." },
  { q: "Can I stop a generation?", a: "Yes. Tap the close button on the Generating screen and confirm Stop. The generation is canceled." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple Account. Open Settings on your iPhone, tap your name, then Subscriptions, choose AI Veo and tap Cancel. Deleting the app doesn’t cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "On the subscription screen tap Restore. Use the same Apple Account the purchase was made with. Refunds are handled by Apple." },
  { q: "Something went wrong. Who do I write to?", a: `Email ${site.email} with a short description and, if you can, a screenshot of the screen.` },
];
