







const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px, 16px, 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px"
};
export const themeLight = {
    ...comon,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineshaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGrey,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    title: {
        border: colorNames.porclain,
        borderHover: colorNames.tropicalBlue,
        header: colorNames.scienceBlue,
    },
    themeSwitch: {
        background: colorNames.doveGrey,
        icon: colorNames.white,
    }
    }
}