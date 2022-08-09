import { CircularProgress } from '@mui/material';
import AppState from 'app/context/AppState';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import("./pages/Home"))
const styles = {
  loading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35%",
    heigth: '100vh'
  }
}
function App() {
  return (
    <AppState>
      <Suspense fallback={<div style={styles.loading}><CircularProgress color="inherit" /></div>}>
        <Home />
      </Suspense>
    </AppState>
  );
}

export default App;
