// json2html.js
export default function json2html(data) {
    // Get all unique columns from the data
    const columns = Array.from(new Set(
        data.reduce((cols, row) => {
            return cols.concat(Object.keys(row));
        }, [])
    ));

    // Build the HTML table string
    let html = '<table data-user="mayankasheshgupta@gmail.com">\n';
    
    // Add header row
    html += '  <thead>\n    <tr>';
    columns.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += '</tr>\n  </thead>\n';
    
    // Add body rows
    html += '  <tbody>\n';
    data.forEach(row => {
        html += '    <tr>';
        columns.forEach(col => {
            html += `<td>${row[col] || ''}</td>`;
        });
        html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';
    
    return html;
}
