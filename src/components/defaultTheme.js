import getMuiTheme from 'material-ui/styles/getMuiTheme';

const palette = {
    primary1Color: '#006ba9',
    primary2Color: '#42ac60'
};

export default getMuiTheme({
    palette: palette,
    appBar: {
        color: palette.primary1Color
    }
});