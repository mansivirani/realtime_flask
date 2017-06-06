from kafka import KafkaConsumer
import threading
import requests


class Consumer(threading.Thread):

    def run(self):
        consumer = KafkaConsumer(auto_offset_reset='earliest', enable_auto_commit=False, consumer_timeout=60000)
        consumer.subscribe(['location'])

        while(True):
            for message in consumer:
                print ("%s:%d:%d: key = %s value=%s" % (message.topic, message.partition,
                                          message.offset, message.key,
                                          message.value))

    def stop(self):
        self._stop_event.set()
