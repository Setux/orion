import {Redirect, Route} from 'react-router-dom';
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

interface Props {
    isLogged: boolean
}
const Routes = ({isLogged}: Props) => {
    return (
        <>
            <Route path='/' render={() => {
                if (isLogged) {
                    return <Redirect to='/home' />
                } else {
                    return <Redirect to='/login' />
                }
            }} />
            <Route path="/home" component={HomePage} exact/>
            <Route path="/login" component={LoginPage} exact/>
        </>
    )
};

export default Routes;