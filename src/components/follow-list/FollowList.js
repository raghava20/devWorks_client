import React from 'react'


const FollowList = ({ list, parent }) => {
    return <>
        {list.length === 0 ? (
            <h2>No {parent}</h2>
        ) : (<div>
            {list.map(follow => {
                return <div>
                    <img src={follow.user._id} alt="Follow avatar" />
                    <h2>{follow.user.name}</h2>
                </div>
            })}
        </div>)}

    </>
}

export default FollowList;
