import { Container ,ThemeProvider} from "react-bootstrap";

function DefaultLayout({children}) {
    return ( <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Container fluid>
            <div>
            {children}
            </div>
        </Container>
      </ThemeProvider>);
}

export default DefaultLayout;