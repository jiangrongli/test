import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import Home from '../pages/Home/Home';
// import Page1 from '../pages/Page1/Page1';
// import Counter from '../Counter/Counter';
// import UserInfo from '../pages/UserInfo/UserInfo';

import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!../pages/Home/Home";
import Page1 from "bundle-loader?lazy&name=page1!../pages/Page1/Page1";
import Counter from "bundle-loader?lazy&name=counter!../Counter/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!../pages/UserInfo/UserInfo";
import Hook from "bundle-loader?lazy&name=userInfo!../pages/Hook/hook";
import LifeCycle from "bundle-loader?lazy&name=userInfo!../pages/LifeCycle/lifeCycle";

const Loading = function () {
    return <div>Loading...</div>;
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>{(Component) => (Component ? <Component {...props} /> : <Loading />)}</Bundle>
);
const getRouter = () => (
    <Router>
        <div>
            <ul>
                {/* <li><Link to="/">首页3</Link></li> */}
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                {/* <li><Link to="/counter">Counter</Link></li> */}
                {/* <li><Link to="/userInfo">userInfo</Link></li> */}
                <li>
                    <Link to="/hook">hook</Link>
                </li>
                <li>
                    <Link to="/lifeCycle">lifeCycle</Link>
                </li>
            </ul>
            <Switch>
                {/* <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1} />
                <Route path="/counter" component={Counter} />
                <Route path="/userinfo" component={UserInfo} /> */}

                {/* <Route exact path="/" component={createComponent(Home)}/> */}
                <Route path="/page1" component={createComponent(Page1)} />
                {/* <Route path="/counter" component={createComponent(Counter)} /> */}
                {/* <Route path="/userinfo" component={createComponent(UserInfo)} /> */}
                <Route path="/hook" component={createComponent(Hook)} />
                <Route path="/lifeCycle" component={createComponent(LifeCycle)} />
            </Switch>
        </div>
    </Router>
);

export default getRouter;
