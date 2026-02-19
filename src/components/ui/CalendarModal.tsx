import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  // Date de référence pour la navigation (initialisée au mois actuel)
  const [viewDate, setViewDate] = useState(new Date(2026, 0, 1)); // Janvier 2026 selon votre design

  if (!isOpen) return null;

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  // Fonction pour générer les données d'un mois
  const getMonthData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Premier jour du mois
    const firstDay = new Date(year, month, 1).getDay();
    // Ajustement pour que Lundi soit le premier jour (0) au lieu de Dimanche
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    
    // Nombre de jours dans le mois
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    return {
      name: monthNames[month],
      year,
      daysInMonth: Array.from({ length: daysInMonth }, (_, i) => i + 1),
      offset: Array.from({ length: offset }, (_, i) => i)
    };
  };

  const currentMonth = getMonthData(viewDate);
  const nextMonthDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
  const nextMonth = getMonthData(nextMonthDate);

  const handlePrev = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNext = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 px-4">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl overflow-hidden">
        <h2 className="text-center text-black font-bold text-xl mb-12" style={{ fontFamily: 'Inter' }}>
          Vos besoins :
        </h2>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start mb-12 relative">
          {/* Bouton Précédent */}
          <button 
            onClick={handlePrev}
            className="absolute -left-2 top-0 text-xl cursor-pointer hover:opacity-50 transition-opacity z-10"
          >
            {"<"}
          </button>

          {/* Affichage Premier Mois */}
          <div className="flex-1">
            <h3 className="text-center text-sm mb-8">{currentMonth.name} {currentMonth.year}</h3>
            <div className="grid grid-cols-7 gap-y-4 text-center">
              {days.map(d => <span key={d} className="text-gray-400 text-xs mb-2">{d}</span>)}
              {currentMonth.offset.map(i => <div key={`off-${i}`}></div>)}
              {currentMonth.daysInMonth.map(date => (
                <span key={date} className="text-sm cursor-pointer hover:font-bold py-1">{date}</span>
              ))}
            </div>
          </div>

          {/* Affichage Second Mois */}
          <div className="flex-1">
            <h3 className="text-center text-sm mb-8">{nextMonth.name} {nextMonth.year}</h3>
            <div className="grid grid-cols-7 gap-y-4 text-center">
              {days.map(d => <span key={d} className="text-gray-400 text-xs mb-2">{d}</span>)}
              {nextMonth.offset.map(i => <div key={`off-next-${i}`}></div>)}
              {nextMonth.daysInMonth.map(date => (
                <span key={date} className="text-sm cursor-pointer hover:font-bold py-1">{date}</span>
              ))}
            </div>
          </div>

          {/* Bouton Suivant */}
          <button 
            onClick={handleNext}
            className="absolute -right-2 top-0 text-xl cursor-pointer hover:opacity-50 transition-opacity z-10"
          >
            {">"}
          </button>
        </div>

        {/* Boutons d'options d'affichage */}
        <div className="flex flex-wrap gap-3 items-center mt-8">
          {["Disponible maintenant", "Dates exact", "+/- 3 jours", "+/- 7 jours", "+/- 15 jours"].map((label) => (
            <button key={label} className="px-6 py-2 rounded-full border border-gray-300 text-gray-400 text-sm hover:border-black hover:text-black transition-all">
              {label}
            </button>
          ))}
          
          <button 
            onClick={onClose}
            className="ml-auto text-black font-semibold hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'Inter' }}
          >
            Validé
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CalendarModal;