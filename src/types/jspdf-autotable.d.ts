declare module 'jspdf-autotable' {
  import { jsPDF } from 'jspdf';

  interface AutoTableOptions {
    startY?: number;
    head?: string;
    body?: string;
    theme?: 'striped' | 'grid' | 'plain';
    headStyles?: string;
    margin?: { left?: number; right?: number; top?: number; bottom?: number };
    styles?: string;
  }

  function autoTable(doc: jsPDF, options: AutoTableOptions): void;

  export default autoTable;
}
