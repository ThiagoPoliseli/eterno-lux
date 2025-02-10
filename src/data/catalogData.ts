import { pingentes } from './categories/pingentes';
import { correntes } from './categories/correntes';
import { brincos } from './categories/brincos';
import { pulseiras } from './categories/pulseiras';
import { escapularios } from './categories/escapularios';
import { relogios } from './categories/relogios'; 
import { colecao_feminina } from './categories/colecao_feminina.ts';
import { prata925 } from './categories/prata925.ts';

export const catalogData = [
  ...pingentes,
  ...correntes,
  ...brincos,
  ...pulseiras,
  ...escapularios,
  ...prata925,
  ...relogios,
  ...colecao_feminina
];