#Ler QRCode
from pyzbar.pyzbar import decode
from PIL import Image
import pandas as pd
from datetime import date
import random
import speech_recognition as sr

file_name = r"C:\Users\victory\Desktop\\BancoDeDados.xlsx"   #Diretorio do Banco de dados
my_sheet = "Plan1" #Nome da planilha
df = pd.read_excel(file_name)
qr = decode(Image.open(r"C:\Users\victory\Desktop\ab.png"))
a = date.today() #Data do dia atual
b = qr[0].data.decode('ascii') #Codigo do Lote lido pelo QR Code
c =  float(input("Nota da qualidade da bebida"))#Notas de 0 a 5
d = str(input("Nome da Cidade de Localização: "))#Nome do estado
while True:
    registrazione = sr.Recognizer()

    with sr.Microphone() as source:
        print('Ative o microfone e fale alguma coisa')
        audio = registrazione.listen(source)

        try:
            testo = registrazione.recognize_google(audio, language="pt-PT")
            e = {}.format(testo)
        except:
            print('Desculpe, não entendi!')
            e = str(input("Digite sua opinião... "))
df_data = {'Data': [a],'Lote': [b],'Nota': [c],'Localização': [d], 'Comentario': [e]}
df1 = pd.DataFrame(df_data)    
df = df.append(df1)       
df.to_excel(file_name, sheet_name = my_sheet, index=False)
