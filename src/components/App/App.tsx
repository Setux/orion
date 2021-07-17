import React, {useEffect} from 'react';
import Routes from "../Routes";
import './App.scss';
import * as actions from '../../store/actions/actions'
import {connect, RootStateOrAny, useSelector} from "react-redux";
interface Props {
    getUser: () => void
}
const App = ({getUser}: Props) => {
    const isLogged = useSelector((state: RootStateOrAny) => state.login.isLogged)
    useEffect(() => {
        getUser()
    }, []);
    return (
        <div className="app">
            <Routes isLogged={isLogged} />
        </div>
    );
}

export default connect(null, actions)(App);
