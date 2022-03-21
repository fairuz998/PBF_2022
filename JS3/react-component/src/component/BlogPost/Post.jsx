import React from "react";

// Pertemuan 4 Praktikum 1 (16)
// const Post = (props) => {
//     return (
//         <div className="artikel">
//             <div className="gambar-artikel">
//                 <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
//             </div>
//             <div className="konten-artikel">
//                 <div className="judul-artikel">Judul Artikel</div>
//                 <p className="isi-artikel">Isi Artikel</p>
//             </div>
//         </div>
//     )
// }
// export default Post;

// Pertemuan 4 Praktikum 1 (16)
const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                {/* Pertemuan 4 Praktikum 3 (1) */}
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;