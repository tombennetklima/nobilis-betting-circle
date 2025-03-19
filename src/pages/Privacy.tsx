
import { useEffect } from 'react';
import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-navy-50 py-16 mb-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-navy-100 rounded-full opacity-30 -z-10 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-100 rounded-full opacity-30 -z-10 transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-primary mb-6 animate-fade-in">
            <Shield size={32} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-slide-from-top">
            Datenschutz & Rechtliche Grundlagen
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto animate-slide-from-top" style={{ animationDelay: '100ms' }}>
            Der Schutz und die sichere Verarbeitung deiner persönlichen Daten haben für uns oberste Priorität.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-slate-700 mb-6">
            Wir halten uns uneingeschränkt an die geltenden Datenschutzbestimmungen der Europäischen Union und Deutschlands. Im Folgenden findest du detaillierte Informationen dazu, wie wir deine personenbezogenen Daten erheben, speichern und verarbeiten sowie welche Rechte dir zustehen.
          </p>
        </div>
        
        {/* Legal Foundations */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Gesetzliche Grundlagen</h2>
          <p className="text-slate-700 mb-6">
            Unsere Plattform betreibt Matched Betting unter Einhaltung aller relevanten Datenschutzvorschriften, darunter:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "DSGVO",
                description: "EU-Verordnung 2016/679, die die Verarbeitung personenbezogener Daten innerhalb der EU regelt"
              },
              {
                title: "BDSG",
                description: "Nationale Gesetzgebung zur Erhebung und Verarbeitung von personenbezogenen Daten in Deutschland"
              },
              {
                title: "TTDSG",
                description: "Spezielle Vorschriften für den Datenschutz in Online-Diensten und digitalen Plattformen"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-medium text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* What Data We Collect */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Welche Daten erfassen wir?</h2>
          <p className="text-slate-700 mb-6">
            Um dir eine sichere und effiziente Nutzung unserer Plattform zu ermöglichen, erheben wir bestimmte personenbezogene Daten, darunter:
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              {
                title: "Persönliche Angaben",
                description: "Name, Geburtsdatum, Adresse, Staatsangehörigkeit",
                icon: <FileText size={20} />
              },
              {
                title: "Kontaktinformationen",
                description: "E-Mail-Adresse, Telefonnummer",
                icon: <FileText size={20} />
              },
              {
                title: "Zahlungsdetails",
                description: "Bankverbindung für Gewinnauszahlungen",
                icon: <FileText size={20} />
              },
              {
                title: "Technische Daten",
                description: "IP-Adresse, verwendeter Browser, besuchte Seiten innerhalb der Plattform",
                icon: <FileText size={20} />
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why We Collect This Data */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Warum erfassen wir diese Daten?</h2>
          <p className="text-slate-700 mb-6">
            Die Verarbeitung deiner Daten erfolgt ausschließlich zu folgenden Zwecken:
          </p>
          
          <ul className="space-y-3 mb-8">
            {[
              "Teilnahme am Matched Betting Programm und Sicherstellung eines reibungslosen Ablaufs",
              "Verwaltung und Auszahlung von Gewinnen sowie Affiliate-Provisionen",
              "Einhaltung gesetzlicher Vorgaben und steuerrechtlicher Verpflichtungen",
              "Verbesserung und Optimierung unserer Plattform, um dir ein optimales Erlebnis zu bieten"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 h-5 w-5 bg-navy-50 rounded-full flex items-center justify-center">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Security and Storage */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Sicherheit und Speicherung deiner Daten</h2>
          <p className="text-slate-700 mb-6">
            Wir setzen auf modernste Sicherheitsstandards, um deine Daten zu schützen:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Ende-zu-Ende-Verschlüsselung",
                description: "SSL/TLS für alle Datenübertragungen",
                icon: <Lock size={24} />
              },
              {
                title: "Serverstandorte in Deutschland",
                description: "Mit höchsten Datenschutzanforderungen",
                icon: <Lock size={24} />
              },
              {
                title: "Strenge Zugriffsbeschränkungen",
                description: "Nur autorisierte Mitarbeiter können deine Daten einsehen",
                icon: <Lock size={24} />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-50 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-medium text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Your Privacy Rights */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Deine Datenschutzrechte</h2>
          <p className="text-slate-700 mb-6">
            Gemäß den geltenden Datenschutzgesetzen stehen dir folgende Rechte zu:
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              {
                title: "Auskunftsrecht",
                description: "Du kannst eine Kopie deiner gespeicherten Daten anfordern"
              },
              {
                title: "Recht auf Berichtigung",
                description: "Falls deine Daten fehlerhaft oder unvollständig sind, kannst du deren Korrektur verlangen"
              },
              {
                title: "Recht auf Löschung",
                description: "Unter bestimmten Bedingungen kannst du die Löschung deiner Daten beantragen"
              },
              {
                title: "Einschränkung der Verarbeitung",
                description: "Falls eine Löschung nicht möglich ist, kannst du eine eingeschränkte Verarbeitung verlangen"
              },
              {
                title: "Widerspruchsrecht",
                description: "Du kannst der Verarbeitung deiner Daten jederzeit widersprechen"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                <h3 className="font-medium text-navy-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-slate-700 mb-4">
            Um deine Datenschutzrechte auszuüben, kontaktiere uns bitte direkt.
          </p>
        </div>
        
        {/* Data Sharing */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Datenweitergabe an Dritte</h2>
          <p className="text-slate-700 mb-6">
            Wir geben deine Daten grundsätzlich nicht an unbefugte Dritte weiter. Eine Weitergabe kann jedoch in folgenden Fällen erforderlich sein:
          </p>
          
          <ul className="space-y-3 mb-8">
            {[
              "Zahlungsabwicklungen: Deine Bankdaten werden an Zahlungsdienstleister weitergeleitet",
              "Gesetzliche Anforderungen: Falls erforderlich, werden Daten an zuständige Behörden übermittelt",
              "Technische Dienstleister: Falls notwendig, erhalten IT-Dienstleister Zugriff zur Gewährleistung eines stabilen Betriebs"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 h-5 w-5 bg-navy-50 rounded-full flex items-center justify-center">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Cookies and Tracking */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Cookies & Tracking-Technologien</h2>
          <p className="text-slate-700 mb-6">
            Unsere Plattform verwendet verschiedene Arten von Cookies und Tracking-Mechanismen:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Notwendige Cookies",
                description: "Sie gewährleisten die grundlegende Funktionalität der Website"
              },
              {
                title: "Funktionale Cookies",
                description: "Speichern individuelle Einstellungen wie bevorzugte Sprache"
              },
              {
                title: "Analyse-Cookies",
                description: "Erfassen anonyme Daten zur Optimierung unserer Plattform"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-medium text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-slate-700">
            Du hast die Möglichkeit, nicht notwendige Cookies jederzeit in den Browsereinstellungen zu deaktivieren.
          </p>
        </div>
        
        {/* Data Storage Duration */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Speicherdauer der Daten</h2>
          <p className="text-slate-700 mb-4">
            Personenbezogene Daten werden nur so lange gespeichert, wie sie für die jeweiligen Zwecke erforderlich sind. Nach Ablauf dieser Zeit werden die Daten sicher gelöscht oder anonymisiert. In bestimmten Fällen können gesetzliche Aufbewahrungsfristen eine längere Speicherung erforderlich machen.
          </p>
        </div>
        
        {/* Privacy Policy Updates */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6 line-decoration">Aktualisierung der Datenschutzerklärung</h2>
          <p className="text-slate-700 mb-4">
            Unsere Datenschutzrichtlinien werden regelmäßig aktualisiert, um neuen gesetzlichen Anforderungen zu entsprechen. Die jeweils aktuelle Version ist jederzeit auf unserer Website abrufbar.
          </p>
          <p className="text-slate-700 mb-8">
            Falls du Fragen zu unserem Datenschutz hast oder deine Rechte geltend machen möchtest, kannst du uns jederzeit kontaktieren.
          </p>
        </div>
        
        {/* Contact Section */}
        <div className="bg-navy-50 rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2">Hast du Fragen zum Datenschutz?</h3>
              <p className="text-slate-700 mb-6">
                Wenn du Fragen zu unseren Datenschutzpraktiken hast oder deine Rechte ausüben möchtest, kontaktiere uns bitte.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
