import mongoose from "mongoose";
import  { modalidadeSchema } from "./modalidades"
const professorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    modalidade: modalidadeSchema,
    bio: {type: String},
    titulos: {type: Array}
}, {versionKey: false});

const professor = mongoose.model("professores", professorSchema);

export default professor;