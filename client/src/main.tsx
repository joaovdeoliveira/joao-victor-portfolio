import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function injectAnalyticsScript() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as
    | string
    | undefined;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as
    | string
    | undefined;

  if (!endpoint || !websiteId) {
    return;
  }

  const normalizedEndpoint = endpoint.replace(/\/+$/, "");
  const scriptId = "analytics-umami-script";

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.defer = true;
  script.src = `${normalizedEndpoint}/umami`;
  script.setAttribute("data-website-id", websiteId);
  document.body.appendChild(script);
}

injectAnalyticsScript();

createRoot(document.getElementById("root")!).render(<App />);
