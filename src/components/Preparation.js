import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

function Preparation(props) {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode ||"light"
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        {props.children}
      </main>
    </ThemeProvider>
  );
}

export default connect(mapStateToProps)(Preparation);
