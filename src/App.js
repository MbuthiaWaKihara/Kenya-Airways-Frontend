import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';

//mui
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//redux
import store from './redux/store';
import { Provider } from 'react-redux';

//components
import TopNavBar from './components/TopNavBar';

//pages 
import Landing from './pages/Landing';
import Inquiry from './pages/Inquiry';
import AboutUs from './pages/AboutUs';
import FlightSearchResults from './pages/FlightSearchResults';

axios.defaults.baseUrl = "https://5b9e59d7479f.ngrok.io/Plane_Ticketing/api";

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#E42529',
          light: '#e85154',
          dark: '#9e1a1d',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#ffffff',
          light: '#f13577',
          dark: '#a6043e',
          contrastText: '#000000',
        },
        background: {
          default: '#EDEDED',
        },
      },
      typography: {
        useNextVariants: true,
      },
});



const App = () => {
    return (
        <>
            <Provider store={store}>
                <MUIThemeProvider theme={theme}>
                    <Router>
                      <TopNavBar />
                      <Switch>
                        <Route path="/" exact render={props => <Landing {...props}/>}/>
                        <Route path="/aboutus" exact render={props => <AboutUs {...props}/>}/>
                        <Route path="/inquiry" exact render={props => <Inquiry {...props}/>}/>
                        <Route path="/search-flight" exact render={props => <FlightSearchResults {...props}/>}/>
                      </Switch>
                    </Router>
                </MUIThemeProvider>
            </Provider>
        </>
    )
}

export default App;
