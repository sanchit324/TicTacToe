/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function Block({value=null,onClick }) {
    return(
        <div className="border-solid w-24 h-24 flex align-center justify-center text-6xl font-bold items-center border-rounded px-1 py-1 m-1 bg-teal-200 text-white-900"
        onClick={onClick}>{value}</div>
    )
}


export default Block;