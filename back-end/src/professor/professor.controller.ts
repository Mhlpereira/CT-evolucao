import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import professor from "db/modelos/professores";

@Controller
export class ProfessorController{

    @Get()
    @HttpCode(HttpStatus.OK)    
    async listarProfessores  (){

    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async cadastrarProfessor(@Body() criarProfessorDTO){

    }

}