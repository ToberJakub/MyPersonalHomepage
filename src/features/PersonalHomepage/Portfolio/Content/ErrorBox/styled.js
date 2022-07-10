import styled from "styled-components";

export const Wrapper = styled.arcitle`
margin-top: 96px;
display: grid;
justify-content: center;
grid-gap: 32px;
text-align: center;
color: ${({ theme }) => theme.colors.textPrimary};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 24px;
}
`;

export const Header = styled.header`
font-weight: 700;
font-size: 24px;

@media(web-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
}
`;

export const Paragraph = styled.p`
margin: 0;
font-size: 20px;
line-height: 1.4;

@media(web-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
}
`;
