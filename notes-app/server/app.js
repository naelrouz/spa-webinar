/**
 * Created by IVNovoselov on 12.05.2016.
 */

"use strict";

import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Hi World!');
});


app.get('/fu', (req,res) => {
    res.send('FU');
});

const server = app.listen(8080, () => {
        console.log('Server up and running on port 8080');
});