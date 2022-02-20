import React from 'react'
import Pagination from "rc-pagination";

export default function Paginator({ onChange, total, current, pageSize }) {
    return <Pagination onChange={onChange} total={total} current={current} pageSize={pageSize}></Pagination>
}
