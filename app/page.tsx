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

      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
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
  <div className="max-w-3xl mx-auto text-lg text-gray-800 space-y-6">
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
</section>

      <section
        ref={compRef}
        id="compétences"
        className="bg-white px-6 py-12 transition-all duration-700 text-center opacity-0 translate-y-8"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Compétences</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Administration des réseaux & de l&apos;Internet</h3>
          <ul className="pl-6 text-gray-700 space-y-1">
            <li>DHCP, DNS, SMTP, SNMP, HTTP, HTTPS</li>
            <li>OSPF, RIP, MPLS, TCP/IP, STP, HSRP</li>
            <li>Routage statique et dynamique</li>
            <li>LAN, WAN, VLAN, VPN</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Systèmes, virtualisation & annuaires</h3>
          <ul className="pl-6 text-gray-700 space-y-1">
            <li>UNIX, Linux, Windows</li>
            <li>Active Directory</li>
            <li>VirtualBox, VMware</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Supervision & sécurité réseau</h3>
          <ul className="pl-6 text-gray-700 space-y-1">
            <li>SSL/TLS, ACL, IDS/IPS, Firewall</li>
            <li>Architectures sécurisées</li>
            <li>Nagios, Syslog, ELK, GoAccess</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Pentesting & analyse de vulnérabilités</h3>
          <ul className="pl-6 text-gray-700 space-y-1">
            <li>Nmap, Nessus, Burpsuite, Wpscan, Metasploit, Hydra, Sqlmap, JTR</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Développement & automatisation</h3>
          <ul className="pl-6 text-gray-700 space-y-1">
            <li>Scripts : Bash, Shell</li>
            <li>Langages : Python, PHP, JavaScript, SQL</li>
            <li>Technologies Web : HTML, CSS</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Langues & qualités</h3>
          <ul className="pl-6 text-gray-700 space-y-1">
            <li>Français (courant)</li>
            <li>Anglais (technique)</li>
            <li>Rigueur, Esprit analytique, Autonomie, Travail en équipe</li>
          </ul>
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
  <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Projets universitaires</h2>

  <div className="space-y-6 text-gray-800 leading-relaxed">
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE24 - Attaque Man-in-the-Middle (MITM)</h3>
      <p>
        Ce projet consistait à mettre en œuvre une attaque de type Man-in-the-Middle à l&apos;aide de l&apos;empoisonnement ARP. Une machine attaquante interceptait les communications entre un client et un serveur HTTP, capturant les données saisies dans des formulaires. Des scripts Python permettaient d’enregistrer les requêtes HTTP en JSON ou dans une base SQLite. Un module de détection ARP était aussi implémenté côté serveur pour identifier les incohérences dans les tables ARP. D’autres variantes d’interception, comme DNS spoofing ou écoute DHCP, ont également été testées.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE21 - Construire un réseau informatique</h3>
      <p>
        Plusieurs LAN ont été créés sous GNS3, chacun étant connecté à un ou plusieurs routeur. Les communications inter-réseaux ont d&apos;abord été assurées en routage statique. Ensuite, les protocoles dynamiques OSPF puis RIP ont été mis en place pour gérer automatiquement les routes. Les tests de connectivité entre les différentes machines ont permis de valider l&apos;efficacité des protocoles sur la topologie simulée.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE302 - Développer des applications communicantes</h3>
      <p>
        Le projet consistait à développer un système de quiz interactif en PHP/MySQL, avec interface web, gestion de scores et classement en temps réel. L&apos;application était hébergée sur XAMPP et accessible à distance via Ngrok. Les réponses des joueurs étaient enregistrées dans la base de données, et un tableau de scores actualisé permettait de suivre l&apos;évolution de la partie.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE304 - Découvrir le Pentesting</h3>
      <p>
        À l&apos;aide de Nessus, plusieurs CVE critiques ont été identifiées sur deux machines cibles (Metasploitable et Windows XP). Des exploits ont ensuite été testés dans Metasploit, notamment sur des services comme NFS, VNC, rlogin et SMB. Le projet incluait l&apos;analyse des résultats, la documentation des failles exploitées et la génération de rapports techniques avec recommandations de corrections.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE502 - Piloter un projet informatique</h3>
      <p>
        Ce projet mettait en place une architecture avec deux clients, un serveur SNMP et une station de supervision. Un agent SNMP surveillait un service HTTP sur une machine. Lors de l&apos;arrêt du service, un message était automatiquement envoyé à la machine de supervision. Cette communication était assurée via des MIBs personnalisées, permettant une remontée d&apos;alerte centralisée.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE501 – Concevoir, réaliser et présenter une solution technique</h3>
      <p>
        Conception d&apos;une infrastructure Wi-Fi sécurisée avec un point d&apos;accès TP-Link connecté à pfSense. Une interface OPT1 a été ajoutée, et les utilisateurs accédaient au Wi-Fi via un portail captif configuré pour interagir avec un serveur FreeRADIUS. L&apos;authentification s&apos;effectuait grâce à une base MySQL. L&apos;ensemble de l&apos;architecture a été virtualisé (pfSense, FreeRADIUS, MySQL) sur VirtualBox, avec segmentation en VLANs, configuration du pare-feu, interface d&apos;administration, et intégration d&apos;une imprimante réseau.
      </p>
    </div>
    <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">SAE503 -Assurer la Sécurité et supervision avancée d&apos;un système d&apos;information</h3>
            <p>Le projet SAE503 portait sur la mise en place de mécanismes de sécurité réseau avancés à travers plusieurs exercices répartis en deux parties. Dans la première, réalisée sous Marionnet, un pare-feu Linux avec iptables a été configuré pour gérer le trafic entre un réseau privé et un réseau public, intégrant des règles de NAT, de filtrage ICMP, et la création de chaînes personnalisées. Dans la deuxième partie, l&apos;environnement MI-LXC a permis de simuler un système d&apos;information complet avec DMZ, intranet, LDAP, etc. Des attaques telles que ARP Spoofing, MITM, et usurpation DNS ont été reproduites via arpspoof, urlsnarf, et tcpdump pour observer et intercepter les paquets.</p>
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

