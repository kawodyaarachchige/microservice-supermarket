const express = require('express');
const {Eureka} = require('eureka-js-client')
const app = express();
const port = 3000;

const router = express.Router();

router.get('/inventory', (req, res) => {
    res.json({
        items:['Milk','Bread','Eggs'],
        message:'Welcome to inventory service'
    });
});


// Application context (node doesnt have application context like spring boot,but link to eureka server need to crete application context)
app.use('/inventory-service', router);

// create eureka client
const eurekaClient = new Eureka({
    instance:{
        instanceId:'inventory-service',
        app:'inventory-service',
        hostName: 'localhost',
        inAddr : '127.0.0.1',
        port: {
            '$': port,
            '@enabled': 'true'
        },
        dataCenterInfo: {
            name: 'MyOwn'
        }
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: "/eureka/"
    }
})

app.listen(port,()=>{
    console.log(`Inventory service running at port : ${port}`)
    eurekaClient.start((error) => {
        if (error) {
            console.log("Fail to connect to eureka server");
        }else {
            console.log("Successfully connected to eureka server");
        }
    });
})

