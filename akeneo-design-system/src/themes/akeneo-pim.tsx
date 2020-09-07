const colorRange = {
    grey60: '#f9f9fb',
    grey70: '#e8ebee',
    grey80: '#d9dde2',
    grey100: '#a1a9b7',
    grey120: '#67768a',
    grey140: '#11324d',
    purple20: '#eadcf1',
    purple40: '#d4bae3',
    purple60: '#be97d5',
    purple80: '#a974c7',
    purple100: '#9452ba',
    purple120: '#764194',
    purple140: '#58316f',
    green20: '#e1f0e3',
    green40: '#c2e1c7',
    green60: '#a3d1ab',
    green80: '#85c28f',
    green100: '#67b373',
    green120: '#528f5c',
    green140: '#3d6b45',
    blue10: '#f5f9fc',
    blue20: '#dee9f4',
    blue40: '#bdd3e9',
    blue60: '#9bbddd',
    blue80: '#7aa7d2',
    blue100: '#5992c7',
    blue120: '#47749f',
    blue140: '#355777',
    red10: '#faefed',
    red20: '#f6dfdc',
    red40: '#eebfb9',
    red60: '#e59f95',
    red80: '#dc7f72',
    red100: '#d4604f',
    red120: '#a94c3f',
    red140: '#7f392f',
    yellow10: '#fef7ec',
    yellow20: '#fef0d9',
    yellow40: '#fde1b2',
    yellow60: '#fbd28b',
    yellow80: '#fac365',
    yellow100: '#f9b53f',
    yellow120: '#c79032',
    yellow140: '#956c25',
    white: '#ffffff',
};

export default {
    name: 'Akeneo Pim',
    palette: {
        checkbox: {
            backgroundColor: 'transparent',
            borderColor: colorRange.blue100,
            checked: {
                backgroundColor: colorRange.blue100,
            },
            checkedAndDisabled: {
                backgroundColor: colorRange.blue20,
                borderColor: colorRange.blue40,
            },
            disabled: {
                backgroundColor: colorRange.grey60,
                borderColor: colorRange.grey100,
            },
        },
        formLabel: {
            color: colorRange.grey140,
            disabled: {
                color: colorRange.grey100
            },
        }
    },
};
