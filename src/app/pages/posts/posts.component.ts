import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importando o FormsModule
import { CommonModule } from '@angular/common';  // Importando o CommonModule

@Component({
  selector: 'app-posts',
  standalone: true,  // Tornando o componente independente
  imports: [FormsModule, CommonModule],  // Importando FormsModule e CommonModule
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: { titulo: string; texto: string }[] = [];  // Lista de posts com título e texto
  newPost: { titulo: string; texto: string } = { titulo: '', texto: '' }; // Novo post com título e texto
  editMode: boolean = false;  // Verifica se está em modo de edição
  editIndex: number = -1;  // Índice do post sendo editado

  // Função para adicionar o post
  addPost(): void {
    if (this.newPost.titulo.trim() && this.newPost.texto.trim()) {
      this.posts.push({ ...this.newPost }); // Adiciona o novo post à lista
      this.newPost = { titulo: '', texto: '' }; // Limpa os campos de entrada
    }
  }

  // Função para editar o post
  editPost(index: number): void {
    this.editMode = true;
    this.editIndex = index;
    this.newPost = { ...this.posts[index] };  // Preenche os campos com o post que será editado
  }

  // Função para salvar o post editado
  savePost(): void {
    if (this.newPost.titulo.trim() && this.newPost.texto.trim()) {
      this.posts[this.editIndex] = { ...this.newPost };  // Salva a edição no post
      this.editMode = false; // Desativa o modo de edição
      this.newPost = { titulo: '', texto: '' }; // Limpa os campos de entrada
    }
  }

  // Função para cancelar a edição
  cancelEdit(): void {
    this.editMode = false; // Desativa o modo de edição
    this.newPost = { titulo: '', texto: '' }; // Limpa os campos de entrada
  }

  // Função para excluir o post
  deletePost(index: number): void {
    this.posts.splice(index, 1); // Remove o post da lista
  }
}
