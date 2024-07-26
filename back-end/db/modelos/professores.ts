import mongoose from "mongoose";

const professorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    modalidade: {type: Array, required: true},
    bio: {type: String},
    titulos: {type: Array}
}, {versionKey: false});

const professor = mongoose.model("professores", professorSchema);

export default professor;