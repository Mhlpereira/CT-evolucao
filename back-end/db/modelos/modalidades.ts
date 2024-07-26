import mongoose from "mongoose";

const modalidadeSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    professors: {type: Array, required: true},
    horarios: {type: Array},
    dias: {type: Array}
}, {versionKey: false});

const modalidade =  mongoose.model("modalidades", modalidadeSchema);

export default modalidade;