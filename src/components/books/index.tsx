import React, {useState} from 'react'

export default function Books () {

    const  [img, setImg] = useState<String | null >('')
    

    const SubirImg = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files[0]

        if (file) {
            const url = URL.createObjectURL(file)
            setImg (url)

        }

    }

    

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Upload e Preview de Imagem</h1>
      <input
        type="file"
        accept="image/*"
        onChange={SubirImg}
        style={{ margin: "20px 0" }}
      />

      {img && (
        <div>
          <h2>Preview:</h2>
          <img
            src={img}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "5px",
            }}
          />
        </div>
      )}
    </div>
    );
}