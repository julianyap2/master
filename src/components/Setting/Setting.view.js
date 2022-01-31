import React,{useState,useEffect} from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';

const Setting = () => {
    const [name, setName] = useState("");
    const [noKtp, setNoKtp] = useState("");
    const [noPegawai, setNoPegawai] = useState("");
    const [email, setEmail] = useState("");
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [selected, setSelected] = useState()
    const [view, setView] = useState()
    const [noDihubungi, setNoDihubungi] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    useEffect(() => {
      if (!selected) {
          setView(undefined)
          return
      }
      const objectUrl = URL.createObjectURL(selected)
      setView(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
  }, [selected])

  const onSelect = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelected(undefined)
          return
      }
      setSelected(e.target.files[0])
  }

    function callback(e) {
        console.log(e);
      }
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          tabPosition="left"
          tabBarGutter={20}
          style={{ margin: "20px 20px" }}
        >
          <TabPane tab="Profile" key="1">
            <div style={{height:'60vh'}}>
              <form>
                <h2 style={{ margin: "0 100px" }}>Profile</h2>
                <br />
                <br />
                <span style={{ margin: "0 100px" }}>Foto</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 100px",
                  }}
                >
                  {selectedFile && (
                    <img src={preview} width={"75px"} height={"75px"} />
                  )}
                  <input type="file" onChange={onSelectFile} />
                </div>
                <div class="form-group row">
                  <br />
                  <label
                    for="namaLengkap"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    Nama Lengkap
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="namaLengkap"
                      className="inputan"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="email"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      className="inputan"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="noPegawai"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    No. Pegawai Pertamina
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      className="inputan"
                      id="noPegawai"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={noPegawai}
                      onChange={(e) => setNoPegawai(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ marginTop: "10px", marginLeft: "100px" }}
                >
                  Simpan Perubahan
                </button>
              </form>
            </div>
          </TabPane>
          <TabPane tab="Data Pribadi" key="2" style={{ paddingRight: "5px" }}>
            <div style={{height:'60vh'}}>
              <form>
                <h2 style={{ margin: "0 100px" }}>Data Pribadi</h2>

                <div class="form-group row">
                  <label
                    for="noDihubungi"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    Nomor Telepon
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="noDihubungi"
                      className="inputan"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={noDihubungi}
                      onChange={(e) => setNoDihubungi(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="noPegawai"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    No. Pegawai Pertamina
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      className="inputan"
                      id="noPegawai"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={noPegawai}
                      onChange={(e) => setNoPegawai(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="noKtp"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    NIK / No. KTP
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      className="inputan"
                      id="noKtp"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={noKtp}
                      onChange={(e) => setNoKtp(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="tanggalLahir"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    Tanggal Lahir
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      className="inputan"
                      id="tanggalLahir"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={tanggalLahir}
                      onChange={(e) => setTanggalLahir(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <span style={{ margin: "0 100px" }}>Upload Foto KTP</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 100px",
                  }}
                >
                  {selected && (
                    <img src={view} width={"75px"} height={"75px"} />
                  )}
                  <input type="file" onChange={onSelect} />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ marginTop: "10px", marginLeft: "100px" }}
                >
                  Simpan Perubahan
                </button>
              </form>
            </div>
          </TabPane>
          <TabPane tab="Akun" key="3">
            <div style={{height:'60vh'}}>
              <form>
              <h2 style={{ margin: "0 100px" }}>Ubah Email</h2>
              <div class="form-group row">
                  <label
                    for="email"
                    style={{ marginLeft: "100px" ,marginTop:'30px'}}
                    class="col-sm-2 col-form-label"
                  >
                    Ubah Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      className="inputan"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <h2 style={{ margin: "0 100px" ,marginTop:'60px'}}>Ubah Password</h2>
                <div class="form-group row">
                  <label
                    for="password"
                    style={{ marginLeft: "100px",marginTop:'30px' }}
                    class="col-sm-2 col-form-label"
                  >
                    Password Baru
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      className="inputan"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="password"
                    style={{ marginLeft: "100px" }}
                    class="col-sm-2 col-form-label"
                  >
                    Konfirmasi Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      className="inputan"
                      style={{ marginLeft: "100px", width: "80%" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ marginTop: "10px", marginLeft: "100px" }}
                >
                  Ubah Password
                </button>
              </form>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
}

export default Setting