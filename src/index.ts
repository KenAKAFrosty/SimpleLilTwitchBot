import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

main();
async function main() {

    setInterval(async () => {
        console.log('hi!');
    }, 4000);

    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}