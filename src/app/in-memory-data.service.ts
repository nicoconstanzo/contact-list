import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
    { id: 1, email: 'ljackson4@gmail.com', firstName: 'Luke', lastName: 'Jackson', address: '87, rue Clement Marotm, 66000 PERPIGNAN', phone: '04.30.17.10.87' },
    { id: 2, email: 'danielbrewer@corp.com', firstName: 'Daniel', lastName: 'Brewer', address: '68, rue Sébastopol, 91700 SAINTE-GENEVIÈVE-DES-BOIS', phone: '01.30.32.88.25' },
    { id: 3, email: 'pcollins@hotmail.com', firstName: 'Pamela', lastName: 'Collins', address: '41, Square de la Couronne, 75002 PARIS', phone: '01.20.72.26.37' },
    { id: 4, email: 'lr2016@google.com', firstName: 'Louis', lastName: 'Reynolds', address: '32, avenue de Amandier, 93140 BONDY', phone: '01.30.49.14.81' },
    { id: 5, email: 'eeejensen@msn.com', firstName: 'Eloise', lastName: 'Jensen', address: '51, rue de la Mare aux Carats, 34080 MONTPELLIER', phone: '04.73.20.24.38' },
    { id: 6, email: 'sandovaljanet@aol.com', firstName: 'Janet', lastName: 'Sandoval', address: '15, cours Franklin Roosevelt, 13009 MARSEILLE', phone: '04.86.30.66.66' },
    { id: 7, email: 'jeconner@gm.com', firstName: 'Jerald', lastName: 'Conner', address: '28, Avenue des Tuileries, 59190 HAZEBROUCK', phone: '03.51.48.19.63' },
    { id: 8, email: 'hopep@email.com', firstName: 'Hope', lastName: 'Price', address: '96, avenue Voltaire, 92240 MALAKOFF', phone: '01.47.46.61.71' },
    { id: 9, email: 'rrenaud@email.com', firstName: 'Roland', lastName: 'Renaud', address: '43, rue des six frères Ruellan, 13300 SALON-DE-PROVENCE', phone: '04.32.02.62.99' },
    ];
    return {contacts};
  }
}
