import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Define the translations object with type annotations
  translations: {
    [key: string]: {
      bodyText: string;
      textTitle: string;
      statistics: string[];
      services: string[];
      serviceTitles: string[];
      contactUSTitle: string;
      addressTitle: string;
      companyTitle: string;
      menuButtons: string[];
      recentText: string[];
      aboutUsTop: string[];
      projectTop: string[];
      serviceTop: string[];
      contactTop: string[];
      contactForm: any;
      serviceTextTitle: string[];
      serviceTextBody: string[];
      contactMeth: string[];
      projectLoc: any;
      copyRight: string[];
    };
  } = {
    en: {
      bodyText:
        'For over 25 years, Arra Zef has been producing exceptional products in the Langhe area, blending traditional aesthetics with contemporary efficiency. We specialize in new builds, restorations and heritage renovations, ensuring every project reflects quality and innovation. Our commitment to detail and modern technology ensures lasting value and comfort in every home we build.',
      textTitle: 'Transforming Tradition with Modern Comfort.',
      statistics: [
        'Years of experience in the construction industry',
        'Employer with over 25 years of experience',
        'Residential properties completed through the years',
        'Million euros value on investments',
      ],
      services: [
        'We specialize in building durable, energy-efficient homes that combine modern design with traditional craftsmanship.',
        'We preserve the charm of historic buildings while integrating modern technology and comfort, restoring them to their former glory.',
        'Transform your spaces with our innovative renovation solutions, designed to enhance both style and functionality.',
        'We handle everything from start to finish, delivering completed projects with all the details taken care of, so you can step right in.',
        'Our expert team provides reliable iron scaffolding rental services, ensuring your construction projects run smoothly.',
      ],
      serviceTitles: [
        'Construction',
        'Restoration',
        'Renovation',
        'Keys on Hand',
        'Iron Scaffolding Rental',
      ],
      contactUSTitle: `Contact Info <div class="footer-line"></div>`,
      addressTitle: `Address <div class="footer-line"></div>`,
      companyTitle: `Company <div class="footer-line"></div>`,
      menuButtons: ['Home', 'About', 'Projects', 'Services', 'Contact'],
      recentText: [
        'Recent Projects',
        'VIEW ALL',
        'View Project',
        'Our Services',
        'See all services.',
      ],
      aboutUsTop: [
        'About Us',
        `Building with passion, precision, and a commitment to excellence &#8722; learn more about who we are and what drives us.`,
      ],
      projectTop: [
        'Our Projects',
        `Discover the craftsmanship behind every project &#8722; see our work in action!`,
        'View Project ',
      ],
      serviceTop: [
        'Our Services',
        'Crafting Spaces, Building Futures',
        `From new builds to restorations, we offer services that bring your vision to life with precision and passion.`,
      ],
      contactTop: ['Contact Us', `Let's make good work together`],
      contactForm: [
        `<div class="form-container">
                <span class="form-name">Name</span>
                <input
                  type="text"
                  class="form-message-text js-name"
                  placeholder="Your name"
                />
              </div>
              <div class="form-container">
                <span class="form-email-text form-email-text-lowercase"
                  >Email</span
                >
                <input
                  type="text"
                  class="form-message-text js-email"
                  placeholder="Your email"
                />
              </div>
              <div class="form-container">
                <span class="form-phone-text">Phone</span>
                <input
                  type="text"
                  class="form-message-text js-phone-number"
                  placeholder="Contact number"
                />
              </div>
              <div class="form-container">
                <span class="form-subject">Subject</span>
                <input
                  type="text"
                  class="form-message-text js-subject"
                  placeholder="Subject"
                />
              </div>
              <div class="form-container-text">
                <span class="form-message-title">Message</span>
                <textarea
                  class="form-message-text-text js-message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button class="form-button js-form-button">
                <span class="form-button-text">Send Message</span>
              </button> `,
      ],
      serviceTextTitle: [
        'Construction',
        'Restoration',
        'Renovation',
        'Keys on Hand',
        `Iron Scaffolding Rental`,
        `Demolition Services`,
        'Maintenance',
      ],
      serviceTextBody: [
        `We offer complete construction services, skillfully combining traditional craftsmanship and modern techniques to deliver top-quality residential, commercial, and custom projects, ensuring timely completion and adherence to your budget. Our focus is on creating durable, aesthetically pleasing structures that meet your vision.`,
        `We expertly restore historic buildings, preserving their original charm while updating them with modern standards of safety, energy efficiency, and comfort, ensuring their long-term beauty and functionality. Our team is dedicated to honoring the past while creating spaces for the future.`,
        `Our renovation services cover everything from minor updates to full transformations, blending your vision with our expertise to create spaces that are both modern and enduring in design. We work closely with you to ensure every detail is aligned with your goals, resulting in a stunning finished product.`,
        `Our turnkey solution manages the entire construction or renovation process from start to finish, handling all the details so you can step into a fully finished project without stress or hassle. We take care of every aspect, from planning to execution, ensuring a seamless experience.`,
        `We provide high-quality iron scaffolding rentals for construction projects of all sizes. Our durable scaffolding solutions ensure safety and stability for workers and materials at any height. With flexible rental terms and professional installation, we support your construction needs with reliable equipment and service.`,
        `Our building destruction service offers safe and efficient demolition for both residential and commercial structures. We ensure a controlled and systematic process, taking into account environmental regulations and site preparation for future projects. Our experienced team manages all phases of the demolition, from planning to debris removal.`,
        `Our team provides comprehensive maintenance services, from inspections to repairs, upgrades, and garden care, including creating garden arrangements and automating watering systems to keep your property and outdoor spaces in perfect condition. We ensure your property remains safe, efficient, and visually appealing while preventing potential issues before they escalate.`,
      ],
      contactMeth: [`Location`, 'Email', `Phone`],

      projectLoc: [`All projects`],
      copyRight: [
        `&copy; Copyright 2024 Arra Zef SRL. All Rights Reserved. Images by
              <a class="freepik" href="https://www.freepik.com" target="_blank">
                Freepik</a
              >`,
        `Construction Web Design by Florjan Plepaj`,
      ],
    },
    it: {
      bodyText:
        "Da oltre 25 anni, Arra Zef costruisce edifici eccezionali nelle langhe, fondendo l'estetica tradizionale con efficienza contemporanea. Siamo specializzati in nuove costruzioni, restauri e ristrutturazioni del patrimonio, garantendo ogni progetto rifletta qualità e innovazione. Il nostro impegno per i dettagli e la tecnologia moderna garantisce valore duraturo e comfort in ogni casa che costruiamo.",
      textTitle: 'Trasformare la Tradizione con il Comfort Moderno',
      statistics: [
        'Anni di esperienza nel settore delle costruzioni',
        'Operai che hanno lavorato con 25 anni di esperienza.',
        'Proprietà residenziali completate nel corso degli anni.',
        'Valore di milioni di euro sugli investimenti',
      ],
      services: [
        'Siamo specializzati nella costruzione di case durevoli ed energeticamente efficienti che combinano design moderno con artigianato tradizionale.',
        'Preserviamo il fascino degli edifici storici integrando la tecnologia moderna e il comfort, restaurandoli al loro antico splendore.',
        'Trasforma i tuoi spazi con le nostre innovative soluzioni di ristrutturazione, progettate per migliorare sia lo stile che la funzionalità.',
        'Ci occupiamo di tutto, dalla A alla Z, consegnando progetti completati con ogni dettaglio curato, così puoi entrare senza pensieri.',
        'Il nostro team di esperti offre servizi di noleggio ponteggi in ferro affidabili, garantendo il buon svolgimento dei tuoi progetti di costruzione.',
      ],
      serviceTitles: [
        'Costruzione',
        'Restauro',
        'Ristrutturazione',
        'Chiavi in mano',
        'Noleggio Ponteggi in Ferro',
      ],
      contactUSTitle: `Informazioni di Contatto <div class="footer-line"></div>`,
      addressTitle: `Indirizzo <div class="footer-line"></div>`,
      companyTitle: `Azienda <div class="footer-line"></div>`,
      menuButtons: ['Home', 'Chi Siamo', 'Progetti', 'Servizi', 'Contatti'],
      recentText: [
        'Progetti Recenti',
        'VEDI TUTTI ',
        'Vedi Progetto',
        'I Nostri Servizi',
        'Vedi tutti i servizi',
      ],
      aboutUsTop: [
        'Chi Siamo',
        ` Costruiamo con passione, precisione e un impegno verso l'eccellenza &#8722; scopri di più su chi siamo e cosa ci motiva.`,
      ],
      projectTop: [
        'I Nostri Progetti',
        "Scopri l'artigianato dietro ogni progetto &#8722; vedi il nostro lavoro in azione!",
        'Vedi Progetto',
      ],
      serviceTop: [
        'I Nostri Servizi',
        'Creare Spazi, Costruire Futuri',
        `Dalle nuove costruzioni ai restauri, offriamo servizi che realizzano la tua visione con precisione e passione.`,
      ],
      contactTop: ['Contattaci', `Collaboriamo per realizzare buoni lavori.`],
      contactForm: [
        `<div class="form-container">
        <span class="form-name">Nome</span>
        <input
        type="text"
        class="form-message-text js-name"
        placeholder="Il tuo nome"
        />
        </div>
        <div class="form-container">
        <span class="form-email-text form-email-text-lowercase">Email</span>
        <input
        type="text"
        class="form-message-text js-email"
        placeholder="La tua email"
        />
        </div>
        <div class="form-container">
        <span class="form-phone-text">Telefono</span>
        <input
        type="text"
        class="form-message-text js-phone-number"
        placeholder="Numero di contatto"
        />
        </div>
        <div class="form-container">
        <span class="form-subject">Oggetto</span>
        <input
        type="text"
        class="form-message-text js-subject"
        placeholder="Oggetto"
        />
        </div>
        <div class="form-container-text">
        <span class="form-message-title">Messaggio</span>
        <textarea
        class="form-message-text-text js-message"
        cols="30"
        rows="10"
        ></textarea>
        </div>
        <button class="form-button js-form-button">
        <span class="form-button-text">Invia Messaggio</span>
        </button>
        `,
      ],
      serviceTextTitle: [
        'Costruzione',
        'Restauro',
        'Ristrutturazione',
        'Chiavi in Mano',
        'Noleggio Ponteggi in Ferro',
        'Demolizione Di Strutture',
        'Manutenzione',
      ],
      serviceTextBody: [
        `Offriamo servizi completi di costruzione, combinando abilmente l'artigianato tradizionale con tecniche moderne per realizzare progetti residenziali, commerciali e su misura di alta qualità, garantendo il rispetto dei tempi e del budget. Ci concentriamo sulla creazione di strutture durevoli ed esteticamente piacevoli che rispecchino la tua visione.`,
        `Restauriamo edifici storici con maestria, preservando il loro fascino originale e aggiornandoli agli standard moderni di sicurezza, efficienza energetica e comfort, assicurando la loro bellezza e funzionalità a lungo termine. Il nostro team è dedicato a onorare il passato, creando al contempo spazi per il futuro.`,
        `I nostri servizi di ristrutturazione coprono tutto, da piccoli aggiornamenti a trasformazioni complete, fondendo la tua visione con la nostra competenza per creare spazi moderni e duraturi nel design. Lavoriamo a stretto contatto con te per garantire che ogni dettaglio sia allineato ai tuoi obiettivi, producendo un risultato finale straordinario.`,
        `La nostra soluzione chiavi in mano gestisce l'intero processo di costruzione o ristrutturazione dall'inizio alla fine, occupandosi di tutti i dettagli affinché tu possa entrare in un progetto completamente finito senza stress o difficoltà. Ci occupiamo di ogni aspetto, dalla pianificazione all'esecuzione, garantendo un'esperienza senza soluzione di continuità.`,
        `Offriamo noleggio di ponteggi in ferro di alta qualità per progetti di costruzione di qualsiasi dimensione. Le nostre soluzioni di ponteggio garantiscono sicurezza e stabilità per lavoratori e materiali a qualsiasi altezza. Con termini di noleggio flessibili e installazione professionale, supportiamo le tue esigenze di costruzione con attrezzature affidabili e un servizio eccellente.`,
        `Il nostro servizio di demolizione di edifici offre soluzioni sicure ed efficienti per la demolizione di strutture residenziali e commerciali. Garantiamo un processo controllato e sistematico, rispettando le normative ambientali e preparando il sito per futuri progetti. Il nostro team esperto gestisce tutte le fasi della demolizione, dalla pianificazione alla rimozione dei detriti.`,
        `Il nostro team offre servizi di manutenzione completi, dalle ispezioni alle riparazioni, agli aggiornamenti e alla cura del giardino, inclusa la creazione di composizioni di giardini e l'automazione dei sistemi di irrigazione per mantenere la tua proprietà e gli spazi esterni in condizioni perfette. Garantiamo che la tua proprietà rimanga sicura, efficiente e visivamente gradevole, prevenendo potenziali problemi prima che si aggravino.`,
      ],
      contactMeth: [`Posizione`, `Email`, `Telefono`],
      projectLoc: [`Tutti i progetti`],
      copyRight: [
        `&copy; Copyright 2024 Arra Zef SRL. Tutti i diritti riservati. Immagini di
              <a class="freepik" href="https://www.freepik.com" target="_blank">
                Freepik</a
              >`,
        `Design Web per l'edilizia di Florjan Plepaj`,
      ],
    },
  };

  // Use a more specific type for the language parameter
  updateLanguage(language: 'en' | 'it') {
    const langData = this.translations[language];
    if (!langData) return;

    const bodyText = document.querySelector(
      '.js-text-body-info'
    ) as HTMLElement;
    if (bodyText) bodyText.innerText = langData.bodyText;

    const textTitle = document.querySelector('.js-text-title') as HTMLElement;
    if (textTitle) textTitle.innerText = langData.textTitle;

    const statsElements = document.querySelectorAll('.js-statistics-text-text');
    if (statsElements.length > 0) {
      statsElements.forEach((el, index) => {
        (el as HTMLElement).innerText = langData.statistics[index];
      });
    }

    // Continue with the rest of your logic...
  }

  languageIt() {
    const flag2 = document.querySelector('.js-flag-2') as HTMLElement;
    if (flag2) {
      flag2.addEventListener('click', () => {
        this.updateLanguage('it');
      });
    }
  }

  languageEn() {
    const flag1 = document.querySelector('.js-flag-1') as HTMLElement;
    if (flag1) {
      flag1.addEventListener('click', () => {
        this.updateLanguage('en');
      });
    }
  }

  constructor() {
    window.addEventListener('load', () => this.loadLanguagePreference());
  }

  setLanguage(language: 'en' | 'it') {
    localStorage.setItem('selectedLanguage', language);
    this.updateLanguage(language);
  }

  loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'it';
    this.updateLanguage(savedLanguage as 'en' | 'it');
  }
}
