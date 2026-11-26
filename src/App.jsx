import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Header from "./layouts/Header"
import Pedidosprovider from "./providers/Pedidosprovider"
function App() {
  return (
    <Pedidosprovider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        
      </>
    </LocalizationProvider>
    </Pedidosprovider>
  )
}

export default App
