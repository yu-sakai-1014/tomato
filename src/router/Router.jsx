import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Tomato } from "../pages/Tomato"
import { Top } from "../pages/Top"

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Top/>
                </Route>
                <Route path="/tomato">
                    <Tomato/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

