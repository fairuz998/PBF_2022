import React from "react";

const Post = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail" />
            </div>
            <div className="konten-artikel">
                <div className="nim-mahasiswa">{props.nim}</div>
                <p className="isi-mahasiswa">{props.nama}</p>
                <p className="isi-mahasiswa">{props.alamat}</p>
                <p className="isi-mahasiswa">{props.hp}</p>
                <p className="isi-mahasiswa">{props.angkatan}</p>
                <p className="isi-mahasiswa">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.nimMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;