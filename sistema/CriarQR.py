#Criar QRCode
import pyqrcode 
qr = pyqrcode.create("3432")
qr.png(r"C:\Users\victory\Desktop\ab.png", scale=8)