from flask import Flask, jsonify
import py_eureka_client.eureka_client as eureka_client

app = Flask(__name__)

CONTEXT_PATH = '/customer-service'
SERVICE_PORT = 5000

EUREKA_SERVER = 'http://localhost:8761/eureka/'

eureka_client.init(
    eureka_server=EUREKA_SERVER,
    app_name='customer-service',
    instance_port=SERVICE_PORT
)


@app.route(f'{CONTEXT_PATH}/customers', methods=["GET"])
def get_customers():
    customer_list = [
        {
            "id": 1,
            "name": "John"
        },
        {
            "id": 2,
            "name": "Jane"
        }
    ]

    return jsonify(customer_list)


if __name__ == '__main__':
    app.run(port=SERVICE_PORT)
