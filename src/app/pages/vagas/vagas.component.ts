// src/app/pages/vagas/vagas.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vaga } from '../../models/vagas.models';

@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent {
  vagas: Vaga[] = [
    {
      id: 1,
      titulo: 'Desenvolvedor Front-End',
      descricao: 'Desenvolvimento de interfaces web com tecnologias modernas como React, Angular e Vue.',
      requisitos: 'Experiência com HTML, CSS, JavaScript e frameworks modernos. Noções de UX/UI.',
      local: 'São Paulo, SP',
    },
    {
      id: 2,
      titulo: 'Desenvolvedor Back-End',
      descricao: 'Desenvolvimento de APIs e serviços utilizando Node.js, Spring Boot e bancos de dados relacionais.',
      requisitos: 'Experiência com Java, Node.js, bancos de dados SQL/NoSQL. Conhecimento em arquitetura de microsserviços.',
      local: 'Remoto',
    },
    {
      id: 3,
      titulo: 'Analista de Dados',
      descricao: 'Análise de grandes volumes de dados, criação de dashboards e relatórios utilizando Power BI e Python.',
      requisitos: 'Conhecimento em SQL, Python, Power BI e estatísticas. Experiência com dados em nuvem será um diferencial.',
      local: 'Rio de Janeiro, RJ',
    },
    {
      id: 4,
      titulo: 'DevOps Engineer',
      descricao: 'Automatização de processos de deploy, monitoramento e integração contínua utilizando Docker, Kubernetes e AWS.',
      requisitos: 'Experiência com Docker, Kubernetes, CI/CD e AWS. Conhecimento em scripts de automação (Bash, Python).',
      local: 'São Paulo, SP',
    }
  ];

  candidatar(vagaId: number) {
    alert(`Você se candidatou para a vaga com ID: ${vagaId}`);
  }
}
