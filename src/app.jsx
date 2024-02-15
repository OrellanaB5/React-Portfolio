import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@mui/material';

function App() {
    return (
        <>
            <Header />
            <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}

export default App;
