import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './Main';
import { connect } from 'react-redux';


const mapStateToProps=state=>{
    return {
      mode:state.mode
    }
  }




 function Preparation(props) {
    const darkTheme = createTheme({
        palette: {
          mode: props.mode,
        },
      });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Main/>
      </main>
    </ThemeProvider>
  );
}


export default connect(mapStateToProps)(Preparation)