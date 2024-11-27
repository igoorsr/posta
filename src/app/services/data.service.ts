import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsKey = 'posts';
  private curriculosKey = 'curriculos';

  constructor() { }

  // Função para obter todos os posts
  getPosts(): any[] {
    return JSON.parse(localStorage.getItem(this.postsKey) || '[]');
  }

  // Função para adicionar um novo post
  addPost(post: any): void {
    const posts = this.getPosts();
    posts.push(post);
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  // Função para editar um post existente
  editPost(index: number, post: any): void {
    const posts = this.getPosts();
    posts[index] = post;
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  // Função para excluir um post
  deletePost(index: number): void {
    const posts = this.getPosts();
    posts.splice(index, 1);
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  // Função para obter todos os currículos
  getCurriculos(): any[] {
    return JSON.parse(localStorage.getItem(this.curriculosKey) || '[]');
  }

  // Função para adicionar um novo currículo
  addCurriculo(curriculo: any): void {
    const curriculos = this.getCurriculos();
    curriculos.push(curriculo);
    localStorage.setItem(this.curriculosKey, JSON.stringify(curriculos));
  }

  // Função para editar um currículo existente
  editCurriculo(index: number, curriculo: any): void {
    const curriculos = this.getCurriculos();
    curriculos[index] = curriculo;
    localStorage.setItem(this.curriculosKey, JSON.stringify(curriculos));
  }

  // Função para excluir um currículo
  deleteCurriculo(index: number): void {
    const curriculos = this.getCurriculos();
    curriculos.splice(index, 1);
    localStorage.setItem(this.curriculosKey, JSON.stringify(curriculos));
  }
}
