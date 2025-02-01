import React, { useState } from 'react';
import './index.scss';
import Color from "color-thief-react";

export default function Books({ namebook, nameauthor, genderbook }) {
  const [img, setImg] = useState<string | null>(null);

  const SubirImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImg(url);
    }
  };

  return (



    

   /*  <div className="bloco_main">

      <div className="img_book">
        {img ? (
          <img src={img} alt="Book" />
        ) : (
          <input type="file" onChange={SubirImg} />
        )}
      </div>



      <div className="info_book">
        <h3>
          {namebook} {/* nome de exemplo de livro  *///}
      //  </h3 >

  {/* <div className="gender">
    <p>{genderbook}</p>
  </div>
   */}    //</div>
    //</div>
    
  );
}

