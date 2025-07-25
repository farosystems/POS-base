export interface LoteOperacion {
  id_lote: number;
  fk_id_usuario: number;
  fk_id_caja: number;
  abierto: boolean | null;
  tipo_lote: 'apertura' | 'cierre';
  fecha_apertura: string; // ISO
  hora_apertura: string | null;
  fecha_cierre: string | null; // ISO o null
  hora_cierre: string | null;
  observaciones: string | null;
  saldo_inicial: number; // Saldo inicial de la caja
}

export interface CreateLoteOperacionData extends Omit<LoteOperacion, 'id_lote'> {
  // Add specific properties here if needed
}

export interface DetalleLoteOperacion {
  idd: number;
  fk_id_lote: number;
  fk_id_cuenta_tesoreria: number;
  tipo: 'ingreso' | 'egreso';
  monto: number;
}

export interface CreateDetalleLoteOperacionData extends Omit<DetalleLoteOperacion, 'idd'> {
  // Add specific properties here if needed
} 