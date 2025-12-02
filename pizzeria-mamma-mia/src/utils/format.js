// Función helper para formatear moneda (CLP)
export const formatCurrency = (amount) => {
  return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};
