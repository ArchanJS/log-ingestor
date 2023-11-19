// import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// configs
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: 'false' }));

app.use(cors());
app.use(morgan('dev'));

// db setup
mongoose.connect('mongodb://localhost:27017/loging')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

// creating model
const Log = mongoose.model('logs', new mongoose.Schema({
    level: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    resourceId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    traceId: {
        type: String,
        required: true,
    },
    spanId: {
        type: String,
        required: true,
    },
    commit: {
        type: String,
        required: true,
    },
    metadata: {
        parentResourceId: {
            type: String,
            required: true,
        },
    }
}));

// post request to create logs
app.post('/',async(req,res)=>{
    try {
        const log = await Log.create(req.body);
        res.status(201).json({message:'Log created'});
    } catch (err) {
        console.log(err);
        res.status(500).json({error:JSON.stringify(err)});
    }
})

// get request to get logs
app.get('/',async(req,res)=>{
    try {
        let query=req.query;
        let dataQuery={};
        Object.keys(query).forEach((key)=>{
            let dataKey=key;
            if(dataKey === 'parentResourceId') dataKey='metadata.'+dataKey;
            dataQuery[`${dataKey}`]={ '$regex':  query[dataKey], '$options': 'i'};
        })
        const logs = await Log.find(dataQuery);
        res.status(200).send(logs);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:JSON.stringify(err)});
    }
})

// starts server
app.listen(3000,()=>{
    console.log("Server started at port: 3000");
})