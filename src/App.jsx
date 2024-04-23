import { useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from './scences/global/TopBar';
import Sidebar_nav from './scences/global/Sidebar_nav';
import Dashboard from './scences/dashboard';

// import Team from './scences/dashboard';
// import Invoices from './scences/dashboard';
// import Contacts from './scences/dashboard';
// import Bar from './scences/dashboard';
// import Form from './scences/dashboard';
// import Line from './scences/dashboard';
// import Pie from './scences/dashboard';
// import FAQ from './scences/dashboard';
// import Geography from './scences/dashboard';
// import Calendar from './scences/calendar';


function App() {
  const [theme, colorMode] = useMode();



  return (
    <>
      <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}>

        <CssBaseline/>

        <div className="app">
        {/* <h1>This is admin dashboard</h1> */}
          <main className="content">

            <TopBar/>
            <Sidebar_nav/>
            {/* <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes> */}
          </main>
        </div>

      </ThemeProvider>

      </ColorModeContext.Provider>
      
    </>
  )
}

export default App
