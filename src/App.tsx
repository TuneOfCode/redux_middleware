import { CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import("./pages/Home"))
const styles = {
  loading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20%",
    heigth: '100vh'
  }
}
function App() {
  return (
    <Suspense fallback={<div style={styles.loading}><CircularProgress color="inherit" /></div>}>
      <Home />
    </Suspense>
  );
}

export default App;
