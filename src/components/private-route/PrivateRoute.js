import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated, loading },
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            !isAuthenticated && !loading ? (
                <Redirect to="/login" />
            ) : (
                <Component {...props} />
            )
        }
    />
);

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);