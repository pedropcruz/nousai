const variable = {
    colors:{
        primaryColor: '#3e3e3e',
        whiteColor: '#f9f9f9'
    },
    value: {
        bv0: getBaseValue(1),
        bv1: getBaseValue(2),
        bv2: getBaseValue(3),
        bv3: getBaseValue(4),
        bv4: getBaseValue(5),
        bv5: getBaseValue(6),
        bv6: getBaseValue(7),
        bv7: getBaseValue(8),
        bv8: getBaseValue(9),
        bv9: getBaseValue(10),
        bv10: getBaseValue(11),
        bv11: getBaseValue(12),
        defaultValue: "96px",
        defaultValue0: "64px"
    },
    fonts: {
        Roboto: 'Roboto',
        RobotoMedium: 'RobotoMedium',
        RobotoBold: 'RobotoBold',
        Rufina: 'Rufina',
        RufinaBold: 'RufinaBold',
        iconFonts: 'fontello'
    },
    media: {
        sm: '(min-width: 40em)',
        md: '(min-width: 52em)',
        lg: '(min-width: 64em)'
    },
    path:{
        icons: '../fonts/icons/fontello'
    }
};

export function getBaseValue(number) {
    return (number * 4).toString() + 'px';
}

export default variable;