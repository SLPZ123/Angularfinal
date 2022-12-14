import { Curso } from '../models/curso';

export class Datos{
    static cursos: Curso[] = [
        {
            id: 1,
            nombre: 'Angular',
            comision: '32310',
            profesor: 'Andres',
            fechaInicio: new Date(2022, 0, 1),
            fechaFin: new Date(2022, 1, 28),
            inscripcionAbierta: true,
            imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
          },
          {
            id: 2,
            nombre: 'Angular',
            comision: '32320',
            profesor: 'Lucio',
            fechaInicio: new Date(2022, 2, 1),
            fechaFin: new Date(2022, 3, 30),
            inscripcionAbierta: true,
            imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
          },
          {
            id: 3,
            nombre: 'ReactJS',
            comision: '33310',
            profesor: 'SeBASTIAN',
            fechaInicio: new Date(2022, 1, 1),
            fechaFin: new Date(2022, 3, 28),
            inscripcionAbierta: false,
            imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
          },
          {
            id: 4,
            nombre: 'VueJS',
            comision: '34310',
            profesor: 'Claudio',
            fechaInicio: new Date(2022, 5, 1),
            fechaFin: new Date(2022, 6, 30),
            inscripcionAbierta: false,
            imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
          }
    ];
  }