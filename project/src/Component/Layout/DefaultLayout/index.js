import { Container ,ThemeProvider} from "react-bootstrap";
import Header from "./Header"
function DefaultLayout({children}) {
    return ( <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
            <Header/>
            <div className="content" >
            {children}
            </div>
      </ThemeProvider>);
}

export default DefaultLayout;