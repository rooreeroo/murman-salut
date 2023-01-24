import cgi
import smtplib
import os
from email.mime.text import MIMEText
from http import HTTPStatus
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib


class MyHandler(BaseHTTPRequestHandler):

    # def not_found(self):
    #     self.send_response(HTTPStatus.OK)
    #     self.send_header("Content_Type", "text/html; charset=UTF-8")
    #     self.end_headers()

    #     self.wfile.write("<h1>404 Not Found!</h1>".encode("utf-8"))


    # def file_page(self, filename: str = 'index.html'):
    #     self.send_response(HTTPStatus.OK)
    #     self.send_header("Content_Type", "text/html; charset=utf-8")
    #     self.end_headers()

    #     with open(filename, 'rb') as f:
    #         self.wfile.write(f.read())


    # def do_GET(self):
    #     '''Обработка GET запросов к серверу'''
    #     if self.path.startswith("/say"):
    #         self.file_page("form.html")
    #     else:
    #         self.not_found()


    def _process_post_urlencoded(self) -> dict[str, str]:
        length = int(self.headers["Content-Length"])
        data = self.rfile.read(length).decode("utf-8")
        result = {}
        for pair in data.split('&'):
            pair_unencoded = urllib.parse.unquote(pair)
            key, value = pair_unencoded.split('=', 1)
            result[key] = value

        return result


    def do_POST(self):
        '''Обработка POST запросов к серверу'''
        content_type = self.headers["Content-Type"]
        if content_type == "application/x-www-form-urlencoded":
            result = self._process_post_urlencoded()
            self.send_email(result)
            #self.simple_page(str(result))
        else:
            self.log_error("Unknown content_type: %s", content_type)


    def send_email(self, message):
        sender = 'dima.greensfan@gmail.com'
        # email password, вписать пароль вместо os.getenv("EMAIL_PASSWORD")
        password = os.getenv("EMAIL_PASSWORD")

        '''если нужно отправить на другой адрес, использовать строку ниже
        и server.sendmail(sender, recipient, msg.as_string())
        recipient = dolgopolov_da@mail.ru'''

        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()

        true, false = True, False
        basket_list = []
        for i in range(len(message['items'])):
            item = f"{i+1}. {message['items'][i]['_id']} {message['items'][i]['title']}: {message['items'][i]['amount']} шт."
            basket_list.append(item)

        final_message = f'''
                Данные заказчика:
                ФИО: {message["name"]}
                Телефон: {message["phone"]}
                E-mail: {message["email"]}
                Адрес доставки: {message["address"]}

                Состав заказа:
        '''
        for i in range(len(basket_list)):
            final_message += f'\n{basket_list[i]}'

        try:
            server.login(sender, password)
            msg = MIMEText(final_message)
            msg['Subject'] = 'НОВЫЙ ЗАКАЗ НА САЙТЕ!'
            server.sendmail(sender, sender, msg.as_string())

            return 'The message was sent successfully!'
        except Exception as _ex:
            return f'{_ex}\nCheck your login or password, please!'


'''def main():
    #message = input('Type your message: ')
    print(send_email(message=message))'''


if __name__ == '__main__':
    with HTTPServer(('a87587.ftp.mchost.ru '), MyHandler) as server:
        server.serve_forever()