import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    white,
    green100, green200, green300,
    blue100, blue200, blue300,
    yellow100, yellow200, yellow500, yellow600,
    red100, red200, red300
} from 'material-ui/styles/colors';

const palette = {
    primary1Color: '#006ba9',
    primary2Color: '#42ac60',
    cardColor: {
        white: {
            background: white,
            borderColor: '#d7d7d7',
            ':hover': {
                background: '#f7f7f7',
                borderColor: '#d7d7d7'
            }
        },
        green: {
            background: green100,
            borderColor: green200,
            ':hover': {
                background: green200,
                borderColor: green300
            }
        },
        blue: {
            background: blue100,
            borderColor: blue200,
            ':hover': {
                background: blue200,
                borderColor: blue300
            }
        },
        yellow: {
            background: yellow100,
            borderColor: yellow500,
            ':hover': {
                background: yellow200,
                borderColor: yellow600
            }
        },
        red: {
            background: red100,
            borderColor: red200,
            ':hover': {
                background: red200,
                borderColor: red300
            }
        }
    }
};

export default getMuiTheme({
    palette: palette,
    appBar: {
        color: palette.primary1Color
    }
});