import {Book} from "../models/Book";

export class BooksService {
  booksList: Book[] = [
    {
      name: 'Martine à la ferme ',
      description: [
        'Martine rend visite à la ferme de son cousin Jean-Pierre. C\'est l\'occasion pour elle de découvrir tous ses animaux : les poussins, les lapins, le petit mouton, les oies, le veau et le poulain, sans oublier Moustache, le chat et Médor, le chien. Martine se fait plein de nouveaux amis.'
      ],
      isLend: false
    },
    {
      name: 'Martine en voyage ',
      description: [
        'Martine et son amie Annie sont deux petites filles étourdies qui ne veulent pas apprendre à lire ni à compter. Lorsque maman s’absente, elles décident de partir en voyage. Elles prennent le train jusqu’au port mais le bateau pour les conduire en Afrique est parti sans elles ! Ne sachant pas se repérer, les petites filles sont perdues…'
      ],
      isLend: false
    },
    {
      name: 'Martine en avion ',
      description: [
        'Cet été, Martine et sa maman vont passer leurs vacances en Italie. Martine est triste le jour du départ, Patapouf ne fait pas partie du voyage ! Toutefois, en arrivant en Italie, c’est une belle surprise qui les attend...n'
      ],
      isLend: false
    }
  ];
}
