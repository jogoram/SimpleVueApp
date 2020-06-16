 #!/usr/bin/env python
 # -*- coding: iso-8859-15 -*-
 
#Lee los datos del puerto serie y los envia por udp a la direccion
#UDP_IP y el puerto UDP_PORT
 
import sys
import serial
import time
import socket
import threading
import json
from Tkinter import *
try:
    import thread
except ImportError:
    import _thread as thread
import time
from websocket import create_connection


def imprimir(info):
   v.set(info)

def invertir(var):
   return var[::-1]

def enviar(line, pto):
    global UDP_IP
    global UDP_PORT
    if line =="":
        line = "#"
    line = line + "kg"
    imprimir(line)      
    print(line)
    # ws.send(line)
    enviarWebSocket(line)
    sock.sendto(line, (UDP_IP, UDP_PORT))

def enviarWebSocket(message):
    print(message)
    ws = create_connection("ws://localhost:8080/socket")
    ws.send(message)
    # ws.close()






   


def bascula(num,pto,modeloid, conf):
   # Acceso a puerto serial
   #no de puerto empieza en 0 para com1
   Puerto = str(pto-1)
   Cadena = "P"
   

   try:
      s = serial.Serial(Puerto, conf["baud"],conf["bits"], conf["paridad"], conf["parada"])      
      s.timeout=1;
      #print "modelo:"+str(modeloid), conf;
        
   except serial.SerialException:
      #-- Error al abrir el puerto serie
      #sys.stderr.write("Error al abrir puerto (%s)\n" % str(Puerto))
      imprimir( "Error al abrir puerto (%s)\n" % str(Puerto))
      #sys.exit(1)
    
    #-- Mostrar el nombre del dispositivo serie utilizado
   #imprimir( "Puerto (%d): %s" % (Puerto,s.portstr))
   line =""
   step = 0
   tiempo_espera = conf["tiempo_esp"]
   es_invertir = conf["es_inv"]
   es_peticion = conf["es_pet"]
   secuencia_inicio = conf["inicio"]
   secuencia_fin = conf["fin"]   
   ind_sec_in=0
   ind_sec_fi=0
   c=""
   pet=conf["pet"]
   
   es_inicio=False

   ppp = 100

   while True:     

      enviar(str(ppp), pto);
      time.sleep(5)
      ppp=ppp+3
      continue
      
      line = ""
      if es_peticion:
          s.write(pet)       
      
        
      time.sleep(tiempo_espera)
      
      while s.inWaiting()>0: #Checamos si hay datos en espera de ser leidos
             c = s.read(1)
             print (c , ind_sec_in)
             if step ==0 :
                 if secuencia_inicio[ind_sec_in] == c:
                     ind_sec_in+=1
                 else:
                     ind_sec_in = 0
                 if ind_sec_in >= len(secuencia_inicio):
                     step+=1
                     ind_sec_in = 0
                     break
                
             if step==1:
                 if secuencia_fin[ind_sec_fi] == c:
                     ind_sec_fi+=1
                 else:
                     ind_sec = 0
                     line = line + c 
                 if ind_sec_fi >= len(secuencia_fin):
                     step =0
                     ind_sec_fi = 0
                     if es_invertir:
                         line = invertir(line)
                     enviar(line, pto)
                     line=""
                                
             
                    
      #      sock.sendto(line, (UDP_IP, UDP_PORT))
         
         
   
   s.close()


root = Tk()
root.title("Báscula")
#root.iconbitmap('icono.ico')
frame = Frame(root)
root.iconify()

v = StringVar()
text = Entry(frame, textvariable=v )
text.pack(side=LEFT)


UDP_IP = "localhost"
UDP_PORT = 4002
print ("UDP target IP:", UDP_IP)
print ("UDP target port:", UDP_PORT)

sock = socket.socket(socket.AF_INET, # Internet
             socket.SOCK_DGRAM) # UDP
 
imprimir( "Conectando bascula...")
time.sleep(1)

#abrimos archivo json
with open('config.json') as data_file:    
    data = json.load(data_file)

threads = list()
#recorremos las basculas configuradas
for i in range(len(data["listBasculas"])):
   print( data["listBasculas"][i]["modeloid"],"-",data["listBasculas"][i]["modelo"],",",len(data["listBasculas"][i]["listItem"]) )
   #x=0    
   for x in range(len(data["listBasculas"][i]["listItem"])):
      pt= data["listBasculas"][i]["listItem"][x]["puerto"]
      conf = data["listBasculas"][i]["conf"]
      t = threading.Thread(target=bascula, args=(x,pt,i, conf))
      t.setDaemon(True)
      threads.append(t)
      t.start()




frame.pack()
frame.mainloop()
