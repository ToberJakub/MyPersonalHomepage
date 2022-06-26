import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/Octions-mark-github.svg";
import { ReactComponent as FacebookIcon } from "./icons/FacebookIcon.svg";
import { ReactComponent as LinkedinIcon } from "./icons/LinkedinIcon.svg";

export const socials = [
    {
        name: "Github",
        url: "https://github.com/ToberJakub",
        Icon: styleIcon(GithubIcon),
    },
    {
    name: "Facebook",
    url: "https://www.facebook.com/kuba.tober.5/",
    Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/jakub-tober-b543b9242/",
        Icon: styleIcon(LinkedinIcon),
    },
];
