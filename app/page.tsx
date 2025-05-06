'use client';

import { useEffect, useRef } from 'react';

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-8');
        } else {
          // Réinitialise quand l'élément sort de l'écran
          element.classList.remove('opacity-100', 'translate-y-0');
          element.classList.add('opacity-0', 'translate-y-8');
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}


export default function HomePage() {
  const presRef = useScrollFadeIn();
  const compRef = useScrollFadeIn();
  const formRef = useScrollFadeIn();
  const projRef = useScrollFadeIn();
  const contRef = useScrollFadeIn();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <main className="font-sans text-gray-900 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen scroll-smooth">
      <nav className="fixed top-0 w-full bg-white shadow z-50 p-4 flex justify-center gap-8 text-blue-800 font-semibold">
        {['Présentation', 'Compétences', 'Formations', 'Projets', 'Contact'].map((section) => (
          <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-600">
            {section}
          </a>
        ))}
      </nav>

      <section className="relative h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden">
  {/* Fond animé */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-300 animate-pulse-slow opacity-40 z-0" />

  {/* Texte animé */}
  <div className="relative z-10 px-6">
    <h1 className="text-5xl font-extrabold text-blue-900 mb-4 h-14">
      <span className="typewriter-name"></span>
    </h1>
    <p className="text-xl text-gray-700 font-medium h-8">
      <span className="typewriter-role"></span>
    </p>
  </div>

  {/* Flèche vers Présentation */}
  <div className="absolute bottom-10 animate-bounce z-10">
    <a href="#présentation">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>

  <style jsx>{`
    .typewriter-name {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #2563eb;
      width: 0;
      animation: typingName 2s steps(12, end) forwards, blink 0.75s step-end infinite;
    }

    .typewriter-role {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #2563eb;
      width: 0;
      animation:
        typingRole1 2.4s steps(27, end) 2.2s forwards,
        eraseRole 0.8s steps(27, end) 4.8s forwards,
        typingRole2 3s steps(36, end) 6s forwards,
        blink 0.75s step-end infinite;
    }

    @keyframes typingName {
      from { width: 0 }
      to { width: 12ch }
    }

    @keyframes typingRole1 {
      from { width: 0 }
      to { width: 27ch }
    }

    @keyframes eraseRole {
      from { width: 27ch }
      to { width: 0ch }
    }

    @keyframes typingRole2 {
      from { width: 0 }
      to { width: 36ch }
    }

    @keyframes blink {
      50% { border-color: transparent; }
    }

    .typewriter-name::before {
      content: "TRAORE Koba";
    }

    .typewriter-role::before {
      content: "Ingénieur Réseaux & Sécurité";
    }

    .typewriter-role.typing2::before {
      content: "Futur Ingénieur Réseaux & Sécurité";
    }
  `}</style>

  <script dangerouslySetInnerHTML={{
    __html: `
      setTimeout(() => {
        const roleEl = document.querySelector('.typewriter-role');
        if (roleEl) {
          roleEl.classList.remove('typingRole1');
          roleEl.classList.add('typing2');
        }
      }, 6000);
    `
  }} />
</section>


<section
  ref={presRef}
  id="présentation"
  className="bg-blue-50 px-6 py-16 transition-all duration-700 opacity-0 translate-y-8"
>
  <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Présentation</h2>

  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-blue-100">
    <div className="text-lg text-gray-800 space-y-6">
      <p>
        Actuellement étudiant en BUT Réseaux & Télécommunications à l&apos;IUT de la Sorbonne Paris Nord,
        j&apos;ai développé de solides compétences techniques en infrastructures réseaux, sécurité informatique et virtualisation.
        Mon parcours m&apos;a permis de participer à des projets concrets tels que la mise en place de Wi-Fi sécurisé, d&apos;infrastructures de supervision ou encore des audits réseau.
      </p>
      <p>
        Admis en cycle ingénieur à l&apos;EFREI Paris pour la rentrée 2025, je suis à la recherche d&apos;une alternance à partir de septembre 2025
        afin de mettre en pratique mes compétences dans un environnement professionnel stimulant.
        Autonome, rigoureux et passionné par les systèmes et la cybersécurité, je suis prêt à relever les défis du monde de l&apos;ingénierie réseau.
      </p>
    </div>
  </div>
</section>

<section
  ref={compRef}
  id="compétences"
  className="bg-white px-6 py-12 transition-all duration-700 text-center opacity-0 translate-y-8"
>
  <h2 className="text-3xl font-bold text-blue-800 mb-10">Compétences</h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Administration des réseaux & de l&apos;Internet</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>DHCP, DNS, SMTP, SNMP, HTTP, HTTPS</li>
        <li>OSPF, RIP, MPLS, TCP/IP, STP, HSRP</li>
        <li>Routage statique et dynamique</li>
        <li>LAN, WAN, VLAN, VPN</li>
      </ul>
    </div>

    <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Systèmes, virtualisation & annuaires</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>UNIX, Linux, Windows</li>
        <li>Active Directory</li>
        <li>VirtualBox, VMware</li>
      </ul>
    </div>

    <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Supervision & sécurité réseau</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>SSL/TLS, ACL, IDS/IPS, Firewall</li>
        <li>Architectures sécurisées</li>
        <li>Nagios, Syslog, ELK, GoAccess</li>
      </ul>
    </div>

    <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Pentesting & analyse de vulnérabilités</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Nmap, Nessus, Burpsuite, Wpscan, Metasploit, Hydra, Sqlmap, JTR</li>
      </ul>
    </div>

    <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Développement & automatisation</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Scripts : Bash, Shell</li>
        <li>Langages : Python, PHP, JavaScript, SQL</li>
        <li>Technologies Web : HTML, CSS</li>
      </ul>
    </div>

    <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Langues & qualités</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Français (courant)</li>
        <li>Anglais (technique)</li>
        <li>Rigueur, Esprit analytique, Autonomie, Travail en équipe</li>
      </ul>
    </div>
  </div>
</section>


      <section
  ref={formRef}
  id="formations"
  className="bg-blue-50 px-6 py-12 transition-all duration-700 opacity-0 translate-y-8"
>
  <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Formations</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
    {/* EFREI */}
    <a
  href="https://www.cfa-numia.fr/app/uploads/2023/06/efrei-ingenieur-informatique-parcours-reseaux-et-securite-3-ans.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center group"
>
  <img src="/efrei-logo.png" alt="EFREI logo" className="w-40 h-auto mb-10 object-contain" />
  
  <div className="relative w-full min-h-[240px] rounded-xl overflow-hidden shadow-lg">
    <img
      src="/efrei-bg.jpg"
      alt="EFREI fond"
      className="absolute inset-0 w-full h-full object-cover filter blur-xs scale-100 group-hover:scale-110 transition duration-500"
    />
    
    <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
      <p className="font-semibold text-lg">
        Cycle Ingénieur Réseaux & Sécurité<br />EFREI Paris (2025–2028)
      </p>
    </div>
  </div>
</a>


    {/* BUT Sorbonne */}
    <a
      href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-reseaux-et-telecommunications-parcours-cybersecurite"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center group"
    >
      <img src="/sorbonne-logo.png" alt="Sorbonne logo" className="w-40 h-auto mb-4 object-contain" />
      <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0">
          <img
            src="/sorbonne-bg.jpg"
            alt="Sorbonne fond"
            className="w-full h-full object-cover filter blur-xs scale-100 group-hover:scale-110 transition duration-500"
          />
          
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <p className="font-semibold text-lg">
            BUT Réseaux & Télécoms<br />IUT Sorbonne Paris Nord (2024–2025)
          </p>
        </div>
      </div>
    </a>

    {/* DUT Sorbonne */}
    <a
      href="https://www.francecompetences.fr/recherche/rncp/20649/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center group"
    >
      <img src="/sorbonne-logo.png" alt="Sorbonne logo" className="w-40 h-auto mb-4 object-contain" />
      <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0">
          <img
            src="/sorbonne-bg.jpg"
            alt="Sorbonne fond"
            className="w-full h-full object-cover filter blur-xs scale-100 group-hover:scale-110 transition duration-500"
          />
          
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <p className="font-semibold text-lg">
            DUT Réseaux & Télécoms<br />IUT Sorbonne Paris Nord (2022–2024)
          </p>
        </div>
      </div>
    </a>
  </div>
</section>


<section
  ref={projRef}
  id="projets"
  className="bg-white px-6 py-12 transition-all duration-700 opacity-0 translate-y-8"
>
  <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Projets universitaires</h2>

  <div className="relative border-l-4 border-blue-300 ml-4 pl-6 space-y-12">
    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2025 – SAE503 : Assurer la sécurité & supervision avancée d'un système d'information</h3>
      <p className="text-gray-700 mt-2">
        Pare-feu iptables, NAT, filtrage ICMP sous Marionnet. Simulation réseau complet dans MI-LXC avec attaques ARP, DNS, MITM.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2025 – SAE501 : Concevoir, réaliser et présenter une solution technique</h3>
      <p className="text-gray-700 mt-2">
        Mise en place dun Wi-Fi avec portail captif, authentification FreeRADIUS et base MySQL sous pfSense. Réseau virtualisé sous VirtualBox.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2024 – SAE502 : Piloter un projet informatique</h3>
      <p className="text-gray-700 mt-2">
        Surveillance d’un service HTTP par SNMP, alerte automatique en cas de panne, remontée via MIBs personnalisées.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2024 – SAE304 : Découvrir le Pentesting</h3>
      <p className="text-gray-700 mt-2">
        Identification de CVE critiques avec Nessus, exploitation via Metasploit, documentation et recommandations correctives.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2024 – SAE302 : Développer des applications communicantes</h3>
      <p className="text-gray-700 mt-2">
        Développement d'un quiz PHP/MySQL avec scores en temps réel et hébergement distant via XAMPP/Ngrok.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2023 – SAE21 : Construire un réseau informatique</h3>
      <p className="text-gray-700 mt-2">
        Création de plusieurs LAN sous GNS3, routage statique, puis OSPF et RIP. Tests de connectivité pour valider la topologie réseau.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-6 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-bold text-blue-700">2023 – SAE24 : MITM (Man-in-the-Middle)</h3>
      <p className="text-gray-700 mt-2">
        Mise en œuvre d'une attaque MITM via empoisonnement ARP, interception HTTP, enregistrement JSON/SQLite, détection ARP et tests de spoofing DNS/DHCP.
      </p>
    </div>
  </div>
</section>



<section
  ref={contRef}
  id="contact"
  className="bg-blue-50 px-6 py-12 transition-all duration-700 opacity-0 translate-y-8"
>
  <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact</h2>

  <div className="space-y-4 text-gray-800 text-base">
    <div className="flex items-center gap-3">
      <img src="/email.png" alt="Email" className="w-6 h-6" />
      <p><strong>Email :</strong> <a href="mailto:koba.traore54@gmail.com" className="text-blue-600 underline">koba.traore54@gmail.com</a></p>
    </div>

    <div className="flex items-center gap-3">
      <img src="/localisation.png" alt="Adresse" className="w-6 h-6" />
      <p><strong>Adresse :</strong> Asnières-sur-Seine, 92600</p>
    </div>

    <div className="flex items-center gap-3">
      <img src="/globe.png" alt="Mobilité" className="w-6 h-6" />
      <p><strong>Mobilité :</strong> Île-de-France</p>
    </div>

    <div className="flex items-center gap-3">
      <img src="/vehicule.png" alt="Permis" className="w-6 h-6" />
      <p><strong>Permis B</strong></p>
    </div>

    <div className="flex items-center gap-3">
      <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
      <p><strong>LinkedIn :</strong> <a href="https://fr.linkedin.com/in/koba-traore-23958726b" className="text-blue-600 underline">linkedin.com/in/koba-traore-23958726b</a></p>
    </div>
  </div>
</section>

      <footer className="bg-black text-white py-6 mt-12">
  <div className="max-w-4xl mx-auto px-6 text-center text-lg">
    <p>&copy; {new Date().getFullYear()} TRAORE Koba. Tous droits réservés.</p>
  </div>
</footer>

    </main>
  );
}

