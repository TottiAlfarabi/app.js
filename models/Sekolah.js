const mongoose = require('mongoose');


const sekolahSchema = mongoose.Schema({
    nama :{
        type : String,
        require : true,
    },
    tglLahir :{
        type : String,
        require : true,
    },
    tempatLahir :{
        type : String,
        require : true,
    },
    agama :{
        type : String,
        require : true,
    },
    umur :{
        type : String,
        require : true,
    },
    jenisKelamin :{
        type : String,
        require : true,
    },
    tahunLulus :{
        type : Number,
        require : true,
    },
    namaSekolahAsal :{
        type : String,
        require : true,
    },
    nisn :{
        type : Number,
        require : true,
    },
    email :{
        type : String,
        require : true,
    },
    nohp :{
        type : String,
        require : true,
    },
    namaAyah :{
        type : String,
        require : true,
    },
    pekerjaanAyah :{
        type : String,
        require : true,
    },
    bekerjaSebagaiAyah :{
        type : String,
        require : true,
    },
    penghasilanAyah :{
        type : String,
        require : true,
    },
    nohpAyah :{
        type : String,
        require : true,
    },
    namaIbu :{
        type : String,
        require : true,
    },
    pekerjaanIbu :{
        type : String,
        require : true,
    },
    bekerjaSebagaiIbu :{
        type : String,
        require : true,
    },
    penghasilanIbu :{
        type : String,
        require : true,
    },
    nohpIbu :{
        type : String,
        require : true,
    },
})

module.exports = mongoose.model('Sekolah', sekolahSchema )