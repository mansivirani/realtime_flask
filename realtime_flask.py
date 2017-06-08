from flask import Flask, render_template, request
from flask_socketio import SocketIO
import json



app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('firstversion.html')


@app.route('/realtime-data', methods=['POST'])
def send_data_to_producer():


    data = request.get_data().decode()
    print(data)
    data1 = json.loads(data)
    # print(data1)
    lat = float(data1.get('lat'))
    lng = float(data1.get('lng'))
    driver_id=data1.get('driver_id')
    driver_type=data1.get('driver_type')
    loc_and_id = {'lat': lat, 'lng': lng, 'driver_id': driver_id, 'driver_type': driver_type}
    # print(lat)


    socketio.emit('location', loc_and_id)
    return render_template('firstversion.html')


@socketio.on('connected')
def connected():
    print(request.sid, "connected")


if __name__ == '__main__':

    socketio.run(app, host='0.0.0.0', port=5000)
