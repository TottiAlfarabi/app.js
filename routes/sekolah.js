const express = require("express");
const router = express.Router();
const DataSekolah = require("../models/Sekolah");

router.post("/", async (req, res) => {
  const sekolahPost = new DataSekolah({
    nama: req.body.nama,
    tglLahir: req.body.tglLahir,
    tempatLahir: req.body.tempatLahir,
    agama: req.body.agama,
    umur: req.body.umur,
    jenisKelamin: req.body.jenisKelamin,
    tahunLulus: req.body.tahunLulus,
    namaSekolahAsal: req.body.namaSekolahAsal,
    nisn: req.body.nisn,
    email: req.body.email,
    nohp: req.body.nohp,
    namaAyah: req.body.namaAyah,
    pekerjaanAyah: req.body.pekerjaanAyah,
    bekerjaSebagaiAyah: req.body.bekerjaSebagaiAyah,
    penghasilanAyah: req.body.penghasilanAyah,
    nohpAyah: req.body.nohpAyah,
    namaIbu: req.body.namaIbu,
    pekerjaanIbu: req.body.pekerjaanIbu,
    bekerjaSebagaiIbu: req.body.bekerjaSebagaiIbu,
    penghasilanIbu: req.body.penghasilanIbu,
    nohpIbu: req.body.nohpIbu,
  });

  try {
    const sekolah = await sekolahPost.save();
    res.json(sekolah);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const sekolah = await DataSekolah.find();
    res.json(sekolah);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put("/:sekolahId", async (req, res) => {
  const data = {
    nama: req.body.nama,
    tglLahir: req.body.tglLahir,
    tempatLahir: req.body.tempatLahir,
    agama: req.body.agama,
    umur: req.body.umur,
    jenisKelamin: req.body.jenisKelamin,
    tahunLulus: req.body.tahunLulus,
    namaSekolahAsal: req.body.namaSekolahAsal,
    nisn: req.body.nisn,
    email: req.body.email,
    nohp: req.body.nohp,
    namaAyah: req.body.namaAyah,
    pekerjaanAyah: req.body.pekerjaanAyah,
    bekerjaSebagaiAyah: req.body.bekerjaSebagaiAyah,
    penghasilanAyah: req.body.penghasilanAyah,
    nohpAyah: req.body.nohpAyah,
    namaIbu: req.body.namaIbu,
    pekerjaanIbu: req.body.pekerjaanIbu,
    bekerjaSebagaiIbu: req.body.bekerjaSebagaiIbu,
    penghasilanIbu: req.body.penghasilanIbu,
    nohpIbu: req.body.nohpIbu,
  };

  try {
    const sekolah = await DataSekolah.updateOne(
      { _id: req.params.sekolahId },
      data
    );
    res.json(sekolah);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.delete("/:sekolahId", async (req, res) => {
  try {
    const sekolah = await DataSekolah.deleteOne(
      { _id: req.params.sekolahId },
      data
    );
    res.json(sekolah);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

module.exports = router;
