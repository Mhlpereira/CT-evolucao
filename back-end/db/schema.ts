import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    modalidade: {type: String, required: true},
    bio: {type: String},
    titulos: {type: String}
}, {versionKey: false});

const modalidadeSchema =  new mongoose.Schema