import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "NEUROMARKT™️",
  description: "L'agenzia IA che pensa, crea e vende per te.",
  cta: "Attiva il tuo Agente",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Marketing IA",
    "Agente Virtuale",
    "Automazione Marketing",
    "Social Media IA",
    "Google Ads Automation",
  ],
  links: {
    email: "info@neuromarkt.com",
    twitter: "https://twitter.com/neuromarkt",
    discord: "https://discord.gg/neuromarkt",
    github: "https://github.com/neuromarkt",
    instagram: "https://instagram.com/neuromarkt",
  },
  nav: {
    links: [
      { id: 1, name: "Inizio", href: "#hero" },
      { id: 2, name: "Come funziona", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Prezzi", href: "#pricing" },
    ],
  },
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
      </svg>
    ),
    badge: "🌌 L'agenzia IA che non dorme mai",
    title: "Il tuo agente virtuale di marketing 24/7",
    description:
      "Strategia, contenuti, social e pubblicità: tutto gestito dall'intelligenza artificiale. Con NEUROMARKT™️ porti il tuo business nel futuro.",
    cta: {
      primary: {
        text: "🚀 Attiva il tuo Agente IA",
        href: "#pricing",
      },
      secondary: {
        text: "Guarda la demo",
        href: "#video",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Google",
        logo: (
          <svg
            width="92"
            height="30"
            viewBox="0 0 92 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M30.64 2.98c-4.04 0-7.57 1.38-10.24 3.66l-4.07-4.07C20.15.9 25.15-1 30.64-1c6.69 0 12.25 2.4 16.67 6.33l-6.67 6.67c-2.4-2.4-5.6-3.9-9.33-3.9z" fill="#EA4335"/>
            <path d="M15.33 15c0-4.24 1.5-7.78 4.07-10.24l-4.07-4.07C12.4 4.9 9.33 9.33 9.33 15s3.07 10.1 6.67 13.33l4.07-4.07c-2.57-2.46-4.07-6-4.07-10.24z" fill="#FBBC05"/>
            <path d="M30.64 27.02c6.69 0 12.25-2.4 16.67-6.33l-6.67-6.67c-2.4 2.4-5.6 3.9-9.33 3.9-3.73 0-6.93-1.5-9.33-3.9l-4.07 4.07c3.67 2.28 8.67 4.18 14.16 4.18z" fill="#34A853"/>
            <path d="M9.33 15c0-5.67 2.07-10.1 6.67-13.33l4.07 4.07c-2.57 2.46-4.07 6-4.07 10.24s1.5 7.78 4.07 10.24l-4.07 4.07C11.4 25.1 9.33 20.67 9.33 15z" fill="#4285F4"/>
          </svg>
        ),
      },
      {
        id: 2,
        name: "Slack",
        logo: (
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M6.4 9.6c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2v3.2H6.4V9.6z" fill="#E01E5A"/>
            <path d="M9.6 0C4.3 0 0 4.3 0 9.6s4.3 9.6 9.6 9.6h3.2V9.6C12.8 4.3 8.5 0 9.6 0z" fill="#E01E5A"/>
            <path d="M20.4 6.4c1.8 0 3.2-1.4 3.2-3.2S22.2 0 20.4 0s-3.2 1.4-3.2 3.2v3.2h3.2z" fill="#36C5F0"/>
            <path d="M30 9.6c0-5.3-4.3-9.6-9.6-9.6s-9.6 4.3-9.6 9.6v3.2h9.6v-3.2z" fill="#36C5F0"/>
            <path d="M20.4 20.4c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2v-3.2h-3.2z" fill="#2EB67D"/>
            <path d="M9.6 17.2c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6S0 32.1 0 26.8v-9.6h9.6z" fill="#2EB67D"/>
            <path d="M30 20.4c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2v-3.2h3.2v3.2z" fill="#ECB22E"/>
            <path d="M26.8 30c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6S36.4 15.1 36.4 20.4v9.6H26.8z" fill="#ECB22E"/>
            <text x="45" y="20" fontSize="16" fontWeight="bold" fill="currentColor">Slack</text>
          </svg>
        ),
      },
      {
        id: 3,
        name: "Microsoft",
        logo: (
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <rect x="0" y="0" width="12" height="12" fill="#F25022"/>
            <rect x="15" y="0" width="12" height="12" fill="#7FBA00"/>
            <rect x="0" y="15" width="12" height="12" fill="#00A4EF"/>
            <rect x="15" y="15" width="12" height="12" fill="#FFB900"/>
            <text x="35" y="20" fontSize="16" fontWeight="bold" fill="currentColor">Microsoft</text>
          </svg>
        ),
      },
      {
        id: 4,
        name: "Meta",
        logo: (
          <svg
            width="100"
            height="30"
            viewBox="0 0 100 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M20 2L10 8v14l10 6 10-6V8l-10-6z" fill="#1877F2"/>
            <text x="35" y="20" fontSize="16" fontWeight="bold" fill="currentColor">Meta</text>
          </svg>
        ),
      },
      {
        id: 5,
        name: "Amazon",
        logo: (
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M0 15c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15S0 23.3 0 15z" fill="#FF9900"/>
            <path d="M8 12l4 2 4-2v8l-4-2-4 2v-8z" fill="white"/>
            <text x="35" y="20" fontSize="16" fontWeight="bold" fill="currentColor">Amazon</text>
          </svg>
        ),
      },
      {
        id: 6,
        name: "OpenAI",
        logo: (
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <circle cx="15" cy="15" r="12" fill="#00A67E"/>
            <path d="M8 15l4 4 8-8" stroke="white" strokeWidth="2" fill="none"/>
            <text x="35" y="20" fontSize="16" fontWeight="bold" fill="currentColor">OpenAI</text>
          </svg>
        ),
      },
      {
        id: 7,
        name: "Ferrari",
        logo: (
          <svg
            width="100"
            height="30"
            viewBox="0 0 100 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M0 15c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15S0 23.3 0 15z" fill="#DC143C"/>
            <path d="M8 8l4 4 4-4v8l-4-4-4 4V8z" fill="white"/>
            <text x="35" y="20" fontSize="16" fontWeight="bold" fill="currentColor">Ferrari</text>
          </svg>
        ),
      },
      {
        id: 8,
        name: "Pirelli",
        logo: (
          <svg
            width="122"
            height="31"
            viewBox="0 0 122 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.65498 5.4192C4.49517 5.59338 4.50576 5.86062 4.67364 6.02715L25.4235 26.6055C25.5914 26.772 25.8609 26.7825 26.0365 26.624C29.079 23.8784 30.9888 19.9197 30.9888 15.5187C30.9888 7.22841 24.2123 0.507812 15.8529 0.507812C11.4152 0.507812 7.42352 2.40182 4.65498 5.4192ZM2.06157 9.32463C1.98489 9.4923 2.02355 9.68889 2.15481 9.81906L21.6 29.1035C21.7313 29.2337 21.9295 29.2721 22.0986 29.196C22.5478 28.994 22.9852 28.7708 23.4097 28.5277C23.662 28.3833 23.7007 28.0419 23.4946 27.8376L3.43132 7.94007C3.22533 7.73577 2.88109 7.77411 2.73544 8.02431C2.49037 8.44527 2.26532 8.87913 2.06157 9.32463ZM0.88189 14.8466C0.790844 14.7563 0.742401 14.6319 0.750973 14.5045C0.791115 13.9077 0.866419 13.3206 0.974847 12.745C1.03986 12.3998 1.46512 12.2801 1.71546 12.5283L18.8682 29.5393C19.1185 29.7875 18.9977 30.2093 18.6497 30.2738C18.0693 30.3813 17.4773 30.456 16.8756 30.4958C16.7471 30.5043 16.6216 30.4562 16.5306 30.3659L0.88189 14.8466ZM1.93451 19.0355C1.622 18.7256 1.11767 18.9926 1.23213 19.416C2.62655 24.5739 6.7222 28.6357 11.9231 30.0186C12.35 30.1321 12.6193 29.632 12.3068 29.322L1.93451 19.0355ZM61.7293 8.76831C62.8144 8.76831 63.6937 7.89291 63.6937 6.81306C63.6937 5.73321 62.8144 4.85781 61.7293 4.85781C60.6445 4.85781 59.7652 5.73321 59.7652 6.81306C59.7652 7.89291 60.6445 8.76831 61.7293 8.76831ZM44.9039 25.8202V4.85898H48.3948V22.7534H57.8071V25.8202H44.9039ZM69.7501 17.2669V25.8202H66.3724V10.9645H69.7077V13.5107L69.7501 13.4826C70.0892 12.6854 70.6358 12.0196 71.3896 11.485C72.1432 10.941 73.1042 10.669 74.2728 10.669C75.3091 10.669 76.2511 10.8988 77.0993 11.3584C77.9472 11.8085 78.6254 12.4697 79.1342 13.3419C79.643 14.2142 79.8974 15.2833 79.8974 16.5494V25.8202H76.5197V17.0137C76.5197 15.8882 76.2181 15.0348 75.6152 14.4533C75.0217 13.8625 74.2256 13.567 73.2267 13.567C72.586 13.567 72.0019 13.6983 71.4743 13.9609C70.9468 14.2235 70.5275 14.6268 70.2165 15.1708C69.9056 15.7147 69.7501 16.4134 69.7501 17.2669ZM100.334 25.567C101.107 25.8952 101.993 26.0594 102.991 26.0594C103.811 26.0594 104.513 25.9562 105.097 25.7498C105.681 25.5341 106.162 25.2481 106.539 24.8917C106.925 24.5353 107.231 24.1461 107.457 23.7241H107.514V25.8202H110.75V15.5928C110.75 14.8706 110.609 14.2095 110.326 13.6092C110.044 13.009 109.634 12.4885 109.097 12.0477C108.569 11.6069 107.928 11.2693 107.174 11.0348C106.421 10.7909 105.573 10.669 104.631 10.669C103.34 10.669 102.223 10.8894 101.281 11.3302C100.348 11.7617 99.6183 12.3431 99.0905 13.0747C98.5629 13.8062 98.2755 14.6315 98.2283 15.5506H101.493C101.531 15.1192 101.682 14.7347 101.945 14.397C102.209 14.0594 102.567 13.7968 103.02 13.6092C103.472 13.4123 103.995 13.3138 104.588 13.3138C105.182 13.3138 105.686 13.4123 106.101 13.6092C106.524 13.8062 106.85 14.0735 107.076 14.4111C107.302 14.7487 107.415 15.1426 107.415 15.5928V15.7054C107.415 16.043 107.297 16.2915 107.062 16.451C106.835 16.6104 106.449 16.7276 105.903 16.8026C105.366 16.8777 104.631 16.9668 103.698 17.0699C102.935 17.1543 102.2 17.281 101.493 17.4498C100.787 17.6186 100.155 17.8671 99.5993 18.1954C99.0529 18.5236 98.6195 18.9597 98.2991 19.5037C97.9788 20.0477 97.8188 20.7464 97.8188 21.5998C97.8188 22.5846 98.0447 23.4099 98.497 24.0758C98.9492 24.7323 99.5618 25.2293 100.334 25.567ZM105.804 23.0769C105.257 23.3677 104.584 23.513 103.783 23.513C102.972 23.513 102.327 23.3442 101.847 23.0066C101.366 22.6596 101.126 22.186 101.126 21.5858C101.126 21.1168 101.258 20.737 101.521 20.4462C101.795 20.1555 102.153 19.9257 102.596 19.7569C103.038 19.5881 103.519 19.4709 104.037 19.4052C104.414 19.349 104.781 19.2927 105.14 19.2364C105.497 19.1708 105.832 19.1098 106.143 19.0535C106.454 18.9879 106.718 18.9222 106.934 18.8566C107.161 18.7909 107.325 18.7206 107.429 18.6455V20.3056C107.429 20.887 107.292 21.4216 107.019 21.9093C106.755 22.3876 106.35 22.7768 105.804 23.0769ZM113.697 25.8202V10.9645H116.948V13.4123H116.99C117.263 12.5682 117.692 11.9258 118.276 11.485C118.87 11.0348 119.647 10.8097 120.608 10.8097C120.844 10.8097 121.056 10.8191 121.244 10.8379C121.442 10.8472 121.607 10.8566 121.739 10.866V13.8906C121.616 13.8718 121.4 13.8484 121.089 13.8203C120.778 13.7921 120.448 13.778 120.099 13.778C119.543 13.778 119.035 13.9046 118.573 14.1579C118.111 14.4111 117.744 14.8003 117.471 15.3255C117.207 15.8414 117.075 16.4932 117.075 17.281V25.8202H113.697ZM60.0335 25.8202V10.9645H63.4112V25.8202H60.0335ZM85.5155 25.159C86.599 25.8249 87.8853 26.1578 89.3739 26.1578C90.5234 26.1578 91.5691 25.9515 92.5114 25.5388C93.4631 25.1168 94.2544 24.54 94.8857 23.8085C95.517 23.0676 95.9269 22.2141 96.1154 21.2481H92.9355C92.7939 21.6889 92.5631 22.0781 92.2428 22.4157C91.9321 22.744 91.541 23.0019 91.07 23.1895C90.5987 23.3771 90.0524 23.4708 89.4304 23.4708C88.5919 23.4708 87.871 23.2833 87.2682 22.9081C86.6747 22.533 86.2224 22.0125 85.9114 21.3466C85.6292 20.7337 85.4749 20.0397 85.4489 19.2645H96.3132V18.3642C96.3132 17.22 96.1435 16.179 95.8044 15.2411C95.4653 14.2939 94.9846 13.4779 94.3627 12.7933C93.741 12.0993 92.9921 11.5647 92.1157 11.1896C91.2488 10.8144 90.2832 10.6268 89.2184 10.6268C87.8335 10.6268 86.6087 10.9598 85.5439 11.6257C84.4791 12.2915 83.6454 13.2107 83.0422 14.383C82.4394 15.5553 82.1378 16.8964 82.1378 18.4064C82.1378 19.907 82.43 21.2434 83.0141 22.4157C83.5982 23.5787 84.4322 24.4931 85.5155 25.159ZM92.6245 15.3255C92.3135 14.6878 91.8707 14.1954 91.2959 13.8484C90.7212 13.5014 90.043 13.3279 89.2607 13.3279C88.4881 13.3279 87.8145 13.5014 87.2397 13.8484C86.6746 14.1954 86.2318 14.6878 85.9114 15.3255C85.6828 15.7874 85.5382 16.3126 85.4777 16.9011H93.058C92.9975 16.3126 92.8529 15.7874 92.6245 15.3255Z"
            />
          </svg>
        ),
      },
    ],
  },
  featureSection: {
    title: "Semplice. Veloce. Interamente automatizzato.",
    description:
      "Scopri come NEUROMARKT™️ gestisce il tuo marketing in 4 passaggi",
    items: [
      {
        id: 1,
        title: "Analisi Intelligente",
        content:
          "Inserisci i dati della tua attività: il sistema IA analizza mercato, concorrenza e obiettivi in pochi minuti.",
        image:
          "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Strategia Generata",
        content:
          "In pochi minuti ottieni piano d'azione, contenuti e struttura pubblicitaria pronti all'uso.",
        image:
          "https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8fA%3D%3D",
      },
      {
        id: 3,
        title: "Attivazione Automatica",
        content:
          "L'IA pubblica e gestisce campagne su Facebook, Instagram, TikTok, Google Ads e LinkedIn in autonomia.",
        image:
          "https://images.unsplash.com/photo-1720378042271-60aff1e1c538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        title: "Ottimizzazione Continua",
        content:
          "Ogni settimana l'agente virtuale adatta copy, budget e pubblico in base ai risultati reali.",
        image:
          "https://images.unsplash.com/photo-1666882990322-e7f3b8df4f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      },
    ],
  },
  bentoSection: {
    title: "Un'agenzia. Infinite automazioni.",
    description:
      "Il nostro sistema unisce strategia IA, automazione social & ads, e agenti virtuali di vendita. Il tuo marketing non dorme mai.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Strategia IA Personalizzata",
        description:
          "L'intelligenza artificiale genera piani di marketing su misura, analizzando mercato, concorrenza e obiettivi in tempo reale.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Social & Ads Automation",
        description:
          "Gestione automatica di Facebook, Instagram, TikTok, LinkedIn e Google Ads. Pubblica, ottimizza e scala in autonomia.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[20, 30, 25, 45, 40, 55, 75]}
            toolTipValues={[
              1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
            ]}
          />
        ),
        title: "Analytics Evoluto",
        description:
          "Dashboard con KPI in tempo reale e suggerimenti IA. Trasforma i dati in decisioni strategiche immediate.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Agente Virtuale di Vendita",
        description:
          "Risponde ai lead, scrive messaggi personalizzati e chiude trattative 24/7. Email, WhatsApp e follow-up automatici.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Protezione e Controllo Totale",
    description:
      "Server europei, connessioni cifrate e conformità GDPR. La tua sicurezza è la nostra priorità.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:mask-none hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  size-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="size-full object-contain fill-accent"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="size-full">
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
              />
            </div>
          </div>
        ),

        title: "Sicurezza Avanzata",
        description:
          "Usiamo server europei, connessioni cifrate e sistemi conformi al GDPR per proteggere i tuoi dati.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden mask-[linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),

        title: "Controllo Completo",
        description:
          "Ogni campagna e messaggio viene approvato prima della pubblicazione. Pieno controllo umano con la velocità dell'IA.",
      },
    ],
  },
  quoteSection: {
    quote:
      "Non è solo un servizio: è come avere un reparto marketing intero, operativo 24 ore su 24. L'IA crea, pubblica, risponde e vende.",
    author: {
      name: "Andrea M.",
      role: "CEO, Servizi Digitali",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  pricing: {
    title: "Scegli la tua formula di crescita intelligente",
    description:
      "Piani flessibili che crescono con il tuo business. Inizia gratis e scala quando sei pronto.",
    pricingItems: [
      {
        name: "STARTER",
        href: "#",
        price: "€0",
        period: "mese",
        yearlyPrice: "€0",
        features: [
          "1 strategia IA gratuita",
          "1 script + messaggio WhatsApp",
          "Accesso limitato alla dashboard",
          "Supporto via email",
        ],
        description: "Perfetto per testare il sistema",
        buttonText: "Inizia Gratis",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "PRO",
        href: "#",
        price: "€249",
        period: "mese",
        yearlyPrice: "€2490",
        features: [
          "3 strategie mensili complete",
          "Gestione automatica Social + Google Ads",
          "Follow-up IA + ottimizzazione campagne",
          "Analytics avanzato",
          "Email & WhatsApp Marketing",
          "Video Marketing IA",
          "Dashboard completa",
          "Supporto prioritario",
        ],
        description: "Ideale per professionisti e PMI",
        buttonText: "Inizia Ora",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "BUSINESS+",
        href: "#",
        price: "€790",
        period: "mese",
        yearlyPrice: "€7900",
        features: [
          "Agente IA dedicato 24/7",
          "Gestione multi-canale completa",
          "Social + Google Ads + Email + CRM",
          "Report settimanale personalizzato",
          "Ottimizzazione automatica continua",
        ],
        description: "Per aziende che vogliono scalare velocemente",
        buttonText: "Contatta il Team",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Michela D.",
      role: "eCommerce Manager",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      description: (
        <p>
          Prima avevamo 5 fornitori diversi, ora solo NEUROMARKT™️:
          <Highlight>
            l&apos;IA gestisce Ads, post, clienti e analisi.
          </Highlight>{" "}
          Non potremmo più farne a meno.
        </p>
      ),
    },
    {
      id: "2",
      name: "Fabio L.",
      role: "PMI Tech",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      description: (
        <p>
          La pubblicità su Google si aggiorna da sola in base ai risultati:
          <Highlight>mai vista una precisione così.</Highlight>{" "}
          Il ROI è aumentato del 40%.
        </p>
      ),
    },
    {
      id: "3",
      name: "Sofia P.",
      role: "Marketing Director",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      description: (
        <p>
          L&apos;agente virtuale risponde ai lead anche di notte.
          <Highlight>Le conversioni sono triplicate</Highlight> senza dover
          assumere nuovo personale.
        </p>
      ),
    },
    {
      id: "4",
      name: "Marco T.",
      role: "Imprenditore Digitale",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      description: (
        <p>
          L&apos;IA scrive post social ogni giorno mantenendo il nostro stile.
          <Highlight>Risparmiamo 20 ore settimanali</Highlight> che ora
          dedichiamo alla strategia.
        </p>
      ),
    },
    {
      id: "5",
      name: "Giulia R.",
      role: "Consulente Marketing",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
      description: (
        <p>
          Le campagne Google Ads si ottimizzano automaticamente.
          <Highlight>
            Il CPA è diminuito del 35% in un mese.
          </Highlight>{" "}
          Risultati mai visti prima.
        </p>
      ),
    },
    {
      id: "6",
      name: "Alessandro B.",
      role: "CEO Agenzia Viaggi",
      img: "https://randomuser.me/api/portraits/men/42.jpg",
      description: (
        <p>
          L&apos;agente virtuale risponde su WhatsApp 24/7 ai clienti.
          <Highlight>
            Le prenotazioni notturne sono aumentate del 60%.
          </Highlight>{" "}
          Un game-changer totale.
        </p>
      ),
    },
    {
      id: "7",
      name: "Chiara M.",
      role: "Responsabile E-commerce",
      img: "https://randomuser.me/api/portraits/women/36.jpg",
      description: (
        <p>
          Prima gestivamo social, ads e email con 3 fornitori diversi.
          <Highlight>
            Ora NEUROMARKT™️ fa tutto e costa meno.
          </Highlight>{" "}
          Semplicità e risultati concreti.
        </p>
      ),
    },
    {
      id: "8",
      name: "Luca V.",
      role: "Founder Startup SaaS",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      description: (
        <p>
          L&apos;IA genera contenuti, pubblica e ottimizza in automatico.
          <Highlight>
            Il nostro traffico è triplicato in 2 mesi.
          </Highlight>{" "}
          Scalabilità incredibile senza team interno.
        </p>
      ),
    },
    {
      id: "9",
      name: "Valentina S.",
      role: "Marketing Manager",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
      description: (
        <p>
          Le email di follow-up sono personalizzate dall&apos;IA per ogni lead.
          <Highlight>
            Il tasso di conversione è passato dal 3% all&apos;8%.
          </Highlight>{" "}
          Automazione che funziona davvero.
        </p>
      ),
    },
    {
      id: "10",
      name: "Roberto C.",
      role: "Direttore Commerciale",
      img: "https://randomuser.me/api/portraits/men/62.jpg",
      description: (
        <p>
          La dashboard ci mostra KPI in tempo reale con suggerimenti IA.
          <Highlight>
            Prendiamo decisioni più velocemente e con dati certi.
          </Highlight>{" "}
          Un reparto marketing virtuale sempre attivo.
        </p>
      ),
    },
    {
      id: "11",
      name: "Francesca L.",
      role: "Proprietaria Boutique",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      description: (
        <p>
          Instagram e Facebook vengono gestiti completamente dall&apos;IA.
          <Highlight>
            L&apos;engagement è cresciuto del 120% senza sforzo.
          </Highlight>{" "}
          Finalmente tempo per i clienti in negozio.
        </p>
      ),
    },
    {
      id: "12",
      name: "Matteo G.",
      role: "Coach Business",
      img: "https://randomuser.me/api/portraits/men/48.jpg",
      description: (
        <p>
          NEUROMARKT™️ crea video, post e copy per i miei corsi online.
          <Highlight>Le iscrizioni sono raddoppiate ogni mese.</Highlight> Un
          assistente marketing che non dorme mai.
        </p>
      ),
    },
    {
      id: "13",
      name: "Elena P.",
      role: "Co-founder Tech Startup",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      description: (
        <p>
          Abbiamo lanciato 3 campagne multi-canale in una settimana.
          <Highlight>
            Senza NEUROMARKT™️ ci sarebbero voluti 2 mesi e un team intero.
          </Highlight>{" "}
          Velocità e qualità imbattibili.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Domande Frequenti",
    description:
      "Tutto quello che devi sapere su NEUROMARKT™️. Per altre domande, contattaci direttamente.",
    faQitems: [
      {
        id: 1,
        question: "Come gestite i social media?",
        answer:
          "L'IA pianifica post, scrive copy personalizzato e li pubblica automaticamente su tutti i canali social (Facebook, Instagram, TikTok, LinkedIn) mantenendo il tuo tono di voce unico.",
      },
      {
        id: 2,
        question: "Gestite anche Google Ads?",
        answer:
          "Sì. Creiamo annunci ottimizzati, analizziamo CTR in tempo reale e ottimizziamo parole chiave ogni giorno. Il sistema impara continuamente dai risultati per massimizzare il ROI.",
      },
      {
        id: 3,
        question: "Posso controllare tutto prima della pubblicazione?",
        answer:
          "Assolutamente sì. Ogni azione IA è tracciata e visualizzabile nella dashboard. Puoi approvare manualmente ogni campagna o messaggio prima che venga pubblicato.",
      },
      {
        id: 4,
        question: "Come funziona l'agente virtuale di vendita?",
        answer:
          "L'agente IA risponde automaticamente ai lead via email e WhatsApp, scrive messaggi personalizzati basandosi sul profilo del cliente e gestisce follow-up automatizzati 24/7.",
      },
      {
        id: 5,
        question: "Posso iniziare gratis?",
        answer:
          "Sì, ricevi subito una strategia IA gratuita personalizzata per la tua attività. Nessuna carta di credito richiesta per iniziare.",
      },
      {
        id: 6,
        question: "Quanto tempo ci vuole per vedere risultati?",
        answer:
          "I primi contenuti e campagne sono pronti in 24-48 ore. I risultati misurabili arrivano tipicamente entro 2-4 settimane, con ottimizzazioni continue che migliorano le performance nel tempo.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Automatizza. Comunica. Cresci.",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "🚀 Attiva il tuo Agente Virtuale Oggi",
      href: "#pricing",
    },
    subtext: "Scopri quanto può vendere la tua azienda quando tutto lavora per te",
  },
  footerLinks: [
    {
      title: "Azienda",
      links: [
        { id: 1, title: "Chi Siamo", url: "#" },
        { id: 2, title: "Contatti", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Casi Studio", url: "#" },
      ],
    },
    {
      title: "Servizi",
      links: [
        { id: 5, title: "Social Media IA", url: "#" },
        { id: 6, title: "Google Ads", url: "#" },
        { id: 7, title: "Agente Virtuale", url: "#" },
        { id: 8, title: "Analytics", url: "#" },
      ],
    },
    {
      title: "Risorse",
      links: [
        { id: 9, title: "Privacy", url: "#" },
        { id: 10, title: "Termini", url: "#" },
        { id: 11, title: "Partner", url: "#" },
        { id: 12, title: "FAQ", url: "#faq" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
