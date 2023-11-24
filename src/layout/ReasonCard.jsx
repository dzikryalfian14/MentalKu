import React from "react";

const ReasonCard = (props) => {
    return (
        <div className=" flex flex-col items-center justify-between bg-orange-300 border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
            <div>
                <h3 className="font-semibold text-lg text-center my-5">
                    {props.title}
                </h3>
            </div>
        </div>
    );
};

export default ReasonCard;
