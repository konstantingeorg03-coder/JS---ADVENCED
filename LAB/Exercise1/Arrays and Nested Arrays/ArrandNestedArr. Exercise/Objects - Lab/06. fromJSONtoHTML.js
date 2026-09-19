function fromJSONtoHTML(input) {
    let data = JSON.parse(input);

    let keys = Object.keys(data[0]);

    let result = '<table>\n';

    result += '   <tr>';

    for (let key of keys) {
        key = String(key);

        key = key.replaceAll('&', '&amp;');
        key = key.replaceAll('<', '&lt;');
        key = key.replaceAll('>', '&gt;');
        key = key.replaceAll('"', '&quot;');

        result += `<th>${key}</th>`;
    }

    result += '</tr>\n';

    for (let obj of data) {
        result += '   <tr>';

        let values = Object.values(obj);

        for (let value of values) {
            value = String(value);

            value = value.replaceAll('&', '&amp;');
            value = value.replaceAll('<', '&lt;');
            value = value.replaceAll('>', '&gt;');
            value = value.replaceAll('"', '&quot;');

            result += `<td>${value}</td>`;
        }

        result += '</tr>\n';
    }

    result += '</table>';

    console.log(result);
}

fromJSONtoHTML(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`);

