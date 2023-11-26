import React from 'react';
// import score 

const recomendationData = '../../../public/data/Recomendation.json';


const fetchData= () => {
    fetch(recomendationData)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        penilaian_depresi(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  fetchData();
  
  const penilaian_depresi = () => {
    // Logika penilaian_depresi
    let depression_category = "";
    let depression_recomendation = [];

    if (newScore >= 0 && newScore <= 9) {
      depression_category("NORMAL");
      depression_recomendation(data.normal_depresi);

    } else if (newScore >= 10 && newScore <= 13) {
      depression_category("RINGAN");
      depression_recomendation(data.ringan_depresi);

    } else if (newScore >= 14 && newScore <= 20) {
      depression_category("SEDANG");
      depression_recomendation(data.sedang_depresi);

    } else if (newScore >= 21 && newScore <= 27) {
      depression_category("PARAH");
      depression_recomendation(data.parah_depresi);

    } else if (newScore > 28) {
      depression_category("SANGAT PARAH");
      depression_recomendation(data.sangat-parah_depresi);
    }
  };

  return (
    <div>
      <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
        Status anda saat ini menunjukkan
      </p><br></br>
      <div className="text-center text-6xl font-semibold leading-[96px] whitespace-nowrap justify-center items-center bg-teal-700 bg-opacity-10 self-center w-[534px] max-w-full mt-9 px-5 py-2.5 max-md:text-4xl max-md:leading-[66px]">
        {depressionCategory}
      </div>
      <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
        Kami menyarankan beberapa opsi yang dapat anda lakukan untuk mengembalikan mood anda
      </p>
      <div className="flex">
        <div className="w-1/3 p-4 bg-blue-200">
          <ul>
            {depressionRecomendation.map(item => (
              <li key={item.id}>{item.saran}</li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          <img
            src="https://placekitten.com/800/600"
            alt="alamat gambar"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );

export default penilaian_depresi;
