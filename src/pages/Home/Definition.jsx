import React from "react";
import Button from "../../layout/Button";
import { Link } from "react-router-dom";

import hero2 from "../../assets/hero-2.png";

const Definition = () => {
    return (
        <div>
            <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
                <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-5 mt-5 mr-7 md:mt-0">
                    <img
                        loading="lazy"
                        src={hero2}
                        className="aspect-[1.07] object-contain object-center w-full overflow-hidden mt-12 max-md:max-w-full max-md:mt-10"
                    />
                </div>
                <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col px-5 mt-10 max-md:max-w-full max-md:mt-8">
                        <div className="text-black text-3xl font-bold mt-7 ">
                            MentalKu: Aplikasi untuk Kesehatan Mental Anda
                        </div>
                        <div className="text-black text-2xl leading-10 self-stretch -mr-5 mt-7 max-md:max-w-full">
                            Tahukah Anda bahwa kesehatan mental adalah bagian
                            penting dari kesehatan secara keseluruhan? Kesehatan
                            mental yang baik dapat membantu Anda menjalani
                            kehidupan yang bahagia dan produktif.
                            <br /> Jika Anda merasa sedang berjuang dengan
                            kesehatan mental Anda, Aplikasi Mentalku dapat
                            membantu. Aplikasi ini menyediakan tes topik
                            kesehatan mental yang dapat membantu Anda memahami
                            kondisi Anda.
                        </div>
                        <Link to="/testmental" duration={500}></Link>
                        <Button title="Coba Sekarang" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Definition;
