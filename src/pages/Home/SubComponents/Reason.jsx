import React from "react";
import ReasonCard from "../../../layout/ReasonCard";
import HeadingReason from "../../../layout/HeadingReason";

const Reason = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
            <HeadingReason title1="Kenapa harus" title2="MentalKu?" />

            <div className=" flex flex-wrap justify-center gap-6 mt-6">
                <ReasonCard title="Peningkatan Kecerdasan" />
                <ReasonCard title="Peningkatan Angka Gangguan Mental" />
                <ReasonCard title="Tautan Hidup Modern" />
                <ReasonCard title="Kecenderungan Generasi Muda" />
                <ReasonCard title="Tantangan Kesehatan Mental di Tempat Kerja" />
                <ReasonCard title="Deskriminasi Stigma" />
            </div>
        </div>
    );
};

export default Reason;
