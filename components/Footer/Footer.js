import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<h2>Contact</h2>
<div>
${Button("/Icons/twitter.svg", "Twitter")}
${Button("/Icons/github.svg", "GitHub")}
${Button("/Icons/linkedin.svg", "LinkedIn")}
${Button("/Icons/telegram.svg", "Telegram")}
</div>
`;
