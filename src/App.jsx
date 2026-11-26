import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Header from "./layouts/Header"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        
      </>
    </LocalizationProvider>
  )
}

export default App
