import json
import traceback
from producer import Producer

class stream_data():
    producer = Producer()

    def on_data(self, data):
        try:
            data_json = json.loads(data, encoding = 'utf-8')
            self.producer.send_data('location', data_json)

        except:
            pass


    def on_error(self, status_code):
        if status_code == 420:
            return False
