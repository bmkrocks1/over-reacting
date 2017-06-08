import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import appTheme from './appTheme';
import { MenuContainer, BoardContainer } from './containers';
import 'flexboxgrid/dist/flexboxgrid.css';
import '../scss/app.scss';

const App = () =>
    <MuiThemeProvider muiTheme={appTheme}>
        <div>
            <MenuContainer />
            <BoardContainer />
        </div>
    </MuiThemeProvider>

export default App;