import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './pages/404Page/PageNotFound';
import { ThemeProvider } from '@mui/material';
import Inbox from './pages/Inbox';
import { theme } from './helper/Theme';
import Login from './pages/Login';
import Layout from './components/Layout/Layout';

const pages = [
  {
    name: 'inbox',
    path: 'inbox',
    element: <Inbox />,
  },
]

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          {pages?.map((page, index) => {
            const { name, path, element } = page;
            return (
              <Route key={index} exact path={`/${path}`} name={name} element={
                <Layout>{element}</Layout>
              } />
            )
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
