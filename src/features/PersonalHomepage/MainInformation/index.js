import JakubToberProfile from "./Me.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, Icon } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
<Wrapper>
    <Avatar src={JakubToberProfile} alt="Jakub Tober" />
    <div>
        <ThisIs>This is</ThisIs>
        <Name>Jakub Tober</Name>
        <Summary>
            I'm young passionate Frontend Developer (with React), currently looking for first IT job opportunity
            <Icon src={laptopIcon} alt="" />
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
            </StyledButtonLink>
    </div>
</Wrapper>
    );