import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
    <img
        src={spinner}
        style={{ display: "block", width: "200px", height: "200px", margin: "auto" }}
        alt="Loading..."
    />
    // <>
    //     <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    // </>
);

export default Spinner;