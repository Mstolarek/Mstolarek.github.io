import { MainLayout } from "./Components/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import { HomePage } from "./Pages/HomePage";
import { Helmet } from "react-helmet";
import { theme } from "./Constants/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { SolutionsPage } from "./Pages/SolutionsPage/SolutionsPage";
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage";
import { ContactsPage } from "./Pages/ContactPage/ContactsPage";
import { NavProvider } from "./Context/NavContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavProvider>
        <MainLayout>
          <Helmet>
            <title>EV Lab</title>
          </Helmet>
          <HomePage />
          <ProductsPage />
          <SolutionsPage />

          <ContactsPage />
        </MainLayout>
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
