import * as XLSX from 'xlsx';

/**
 * Exports data to an MS Excel file (.xlsx) and triggers a download in the browser.
 * 
 * @param data Array of objects to export
 * @param filename Name of the file to be downloaded (default: 'export.xlsx')
 * @param headers Optional custom headers mapping (e.g., { releaseTitle: 'Title' })
 */
export const exportToExcel = (data: Record<string, unknown>[], filename: string = 'export.xlsx', headers?: Record<string, string>) => {
  if (!data || !data.length) {
    console.error('No data to export');
    return;
  }

  // If headers are provided, transform the data to use the header names as keys
  const dataWithHeaders = data.map(item => {
    if (!headers) return item;
    
    const newItem: Record<string, unknown> = {};
    Object.keys(headers).forEach(key => {
      newItem[headers[key]] = item[key];
    });
    return newItem;
  });

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(dataWithHeaders);
  
  // Create workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Generate Excel file and trigger download
  XLSX.writeFile(workbook, filename.endsWith('.xlsx') ? filename : `${filename}.xlsx`);
};

/**
 * Backwards compatibility or alternative for CSV export
 */
export const exportToCSV = (data: Record<string, unknown>[], filename: string = 'export.csv', headers?: Record<string, string>) => {
  if (!data || !data.length) {
    console.error('No data to export');
    return;
  }

  // Define headers
  const columnHeaders = headers ? Object.values(headers) : Object.keys(data[0]);
  const keys = headers ? Object.keys(headers) : Object.keys(data[0]);

  // Create CSV rows
  const csvRows = [
    columnHeaders.join(','), // Header row
    ...data.map(item => 
      keys.map(key => {
        const val = item[key];
        const escaped = ('' + (val ?? '')).replace(/"/g, '""');
        return `"${escaped}"`;
      }).join(',')
    )
  ];

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
