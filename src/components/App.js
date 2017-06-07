import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import defaultTheme from './defaultTheme';
import { MenuContainer, BoardContainer } from './containers';
import 'flexboxgrid/dist/flexboxgrid.css';
import '../scss/app.scss';

const App = () =>
    <MuiThemeProvider muiTheme={defaultTheme}>
        <div id="page">
            <MenuContainer />
            <BoardContainer />
        </div>
    </MuiThemeProvider>

export default App;