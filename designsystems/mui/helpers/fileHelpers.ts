// download file from data uri
export function downloadFile(data: Blob, fileName: string) {
  const blob = new Blob([data], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}`);
  document.body.appendChild(link);
  link.click();
}

// utility to extract file type from data uri
export function getMime(dataUrl: string) {
  return dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';'));
}
