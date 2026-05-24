export function initSMTGrid() {
  if (document.getElementById('smt-grid-style')) return;
  
  const style = document.createElement('style');
  style.id = 'smt-grid-style';
  style.innerHTML = `
    .smt-grid { display: grid; grid-template-columns: 1fr; gap: 20px; max-width: 1200px; margin: auto; }
    @media (min-width: 768px) { .smt-grid { grid-template-columns: 1fr 1.5fr; } }
  `;
  document.head.appendChild(style);
  console.log("%c[DarkFox] SMT-Grid Engine Online.", "color: #10b981; font-weight: bold;");
}
