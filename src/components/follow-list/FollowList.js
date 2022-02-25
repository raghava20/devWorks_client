import React from 'react'
import "./FollowList.css"
import { Link } from "react-router-dom"

const FollowList = ({ list, parent }) => {
    return <>
        {list.length === 0 ? (
            <h2 className="mt-3 ms-1">No {parent}</h2>
        ) : (<div>
            {list.map(follow => {
                return <div key={follow.user._id} className="followlist-container">
                    <Link to={`/profile/${follow.user._id}`} className="text-decoration-none">
                        <img src={follow.user.avatar} alt="Follow avatar" />
                        <h2>{follow.user.name}</h2>
                    </Link>
                </div>
            })}
        </div>)}

    </>
}

export default FollowList;
