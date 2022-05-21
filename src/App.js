import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

function App() {
  return (
      <Box>
          {/* navbar */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
      </Box>
  );
}

export default App;
