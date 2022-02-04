import React,{useState}from 'react';
import './AboutUs.styled.css';

const AboutUs = () =>{
    const [saran,setSaran] = useState('')
    
    return (
        <div className='containerSyaratPangkalan'>
        <h2
          for="judul"
          class="col-sm-2 col-form-label"
          style={{ textAlign: "center" ,marginTop:'25px'}}
        >
          Visi & Misi
        </h2>
        <ul className='isiSyaratPangkalan'>
          <li>Melakukan berbagai usaha di bidang ekonomi yang mendatangkan bagi Koperasi.</li>
          <li>Koperasi sebagai badan usaha yang dalam menjalankan usahanya berpegang pada prinsip koperasi</li>
          <li>Merintis dan mengembangkan usaha baru dan membina pelanggan dalam rangka kelangsungan dan perkembangan demokrasi ekonomi.</li>
        </ul>
        <br/>
        <h2
          for="judul"
          class="col-sm-2 col-form-label"
          style={{ textAlign: "center" ,marginTop:'25px'}}
        >
          Syarat Menjadi Anggota
        </h2>
        <ul className='isiSyaratPangkalan'>
          <li>WNI</li>
          <li>Mempunyai kemampuan penuh untuk melakukan tindakan hukum (dewasa dan tidak ada perwalian)</li>
          <li>Berstatus pensiunan karyawan pertamina Bandung dan pensiunan anak perusahaan pertamina yang sudah menjadi anggota himpunan pensiunan pertamina (HIMPANA)</li>
          <li>Telah menyatakan kesanggupan tertulis untuk melunasi simpanan pokok dan simpanan wajib yang besarnya berdasarkan hasil keputusan rapat anggota</li>
          <li>telah menyetujui anggaran dasar dan ketentuannya</li>
        </ul>
        <br/>
        <label for="name" class="col-sm-2 col-form-label" className='isiSyaratPangkalan'> 
            Saran
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              className="isiSyaratPangkalan"
              style={{width:'50%'}}
              value={saran}
              onChange={(e) => setSaran(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary" style={{marginLeft:'868px',marginBottom:'20px'}}>
          Submit
        </button>
      </div>
    );
}

export default AboutUs