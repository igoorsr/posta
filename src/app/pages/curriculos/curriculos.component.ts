import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Define a interface do currículo
interface Curriculo {
  nome: string;
  profissao: string;
  experiencia: string;
  educacao: string;
  habilidades: string;
  endereco: string;
  dataNascimento: string;
  telefone: string;
  foto: string | null;
}

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class CurriculosComponent {
  curriculos: Curriculo[] = [];
  newCurriculo: Curriculo = {
    nome: '',
    profissao: '',
    experiencia: '',
    educacao: '',
    habilidades: '',
    endereco: '',
    dataNascimento: '',
    telefone: '',
    foto: null,
  };
  editMode = false;
  editIndex: number | null = null;

  // Método para adicionar um novo currículo
  addCurriculo() {
    this.curriculos.push({ ...this.newCurriculo });
    this.newCurriculo = {
      nome: '',
      profissao: '',
      experiencia: '',
      educacao: '',
      habilidades: '',
      endereco: '',
      dataNascimento: '',
      telefone: '',
      foto: null,
    };
  }

  // Método para salvar as edições de um currículo
  saveCurriculo() {
    if (this.editIndex !== null) {
      this.curriculos[this.editIndex] = { ...this.newCurriculo };
      this.cancelEdit();
    }
  }

  // Método para ativar a edição de um currículo
  editCurriculo(index: number) {
    this.editMode = true;
    this.editIndex = index;
    const curriculo = this.curriculos[index];
    this.newCurriculo = { ...curriculo };
  }

  // Método para cancelar a edição
  cancelEdit() {
    this.editMode = false;
    this.editIndex = null;
    this.newCurriculo = {
      nome: '',
      profissao: '',
      experiencia: '',
      educacao: '',
      habilidades: '',
      endereco: '',
      dataNascimento: '',
      telefone: '',
      foto: null,
    };
  }

  // Método para excluir um currículo
  deleteCurriculo(index: number) {
    this.curriculos.splice(index, 1);
  }

  // Método para lidar com a mudança da foto de perfil
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newCurriculo.foto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
