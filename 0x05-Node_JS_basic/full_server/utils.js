const fs = require('fs');

function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const content = JSON.parse(data);
                    const res = {};

                    for (const field in content) {
                        res[field] = content[field].map((student) => student.firstname);
                    }

                    resolve(res);
                } catch (error) {
                    reject(error);
                }
            }
        });
    });
}

module.exports = readDatabase;