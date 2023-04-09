import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"


export default ({ children }) => {

    return <>
        <Header />
        <main>
            <Container className="min-vh-100">
                {children}
            </Container>
        </main>
        <Footer />
    </>
} 