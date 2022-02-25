import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

export function withRouter(Child) {
    return (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Child {...props} navigate={navigate} location={location} params={params} />;
    }
}