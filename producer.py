from kafka import KafkaProducer


class Producer:
    producer = KafkaProducer(bootstrap_servers='113.58.187.142:9092')
    def send_data(self, topic, msg):
        self.producer.send(topic, value=msg.encode())

