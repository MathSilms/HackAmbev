import pandas
import numpy as np
import matplotlib.pyplot as plt
file_base_excel =  r"C:\Users\victory\Desktop\\Ambev.xlsx"

#ESTRUTURA OS DADOS PARA O EXCEL
df = pandas.read_excel(file_base_excel)                        #le conteudo excel
dados_atuais = df.values[: , 0:]           #seleciona dados uteis (toda linha, e colunas a partire da segunda, pois a preimeira e etiquetas)    
matrix ={'Data': dados_atuais[:,0], 'Lote': dados_atuais[:,1], 'Nota': dados_atuais[:,2], 'Localização': dados_atuais[:,3]} #estrutura dados em matriz para trabalhalos, fazer calculos etc..
tabela = pandas.DataFrame(matrix)                                                                  #prepara dados para salvalos
#aqui a seguir da para fazer os caclculos requeridos e usar ate numpy para fazer calculos e graficos e dashboards..
print("A média das notas totais é de:  ",sum(dados_atuais[:,2])/len(dados_atuais[:,2])) #Media das notas totais
#Notas lote 9876
df = pandas.read_excel(file_base_excel)
a = df.loc[(df['Lote']) == 9876]
b = a['Nota']
z = sum(b)/len(b)
zz = b.std()
print("A média do lote 9876 é de: ",z)
print("O desvio padrão do lote 9876 é de: ", zz)
#Notas lote 7654
df = pandas.read_excel(file_base_excel)
c = df.loc[(df['Lote']) == 7654]
d = c['Nota']
y = sum(d)/len(d)
yy = d.std()
print("A média do lote 7654 é de: ",y)
print("O desvio padrão do lote 7654 é de: ", yy)
#Notas lote 5132
df = pandas.read_excel(file_base_excel)
e = df.loc[(df['Lote']) == 5132]
f = a['Nota']
k = sum(f)/len(f)
kk = f.std()
print("A média do lote 5132 é de: ",k)
print("O desvio padrão do lote 5132 é de: ", kk)
#Notas de lote 3432
df = pandas.read_excel(file_base_excel)
g = df.loc[(df['Lote']) == 3432]
h = a['Nota']
w = sum(h)/len(h)
ww = h.std()
print("A média do lote 3432 é de: ",w)
print("O desvio padrão do lote 3432 é de: ", ww)

#Plota o Grafico BoxPlot
plt.boxplot(f) #Vetor com os dados
plt.title("BoxPlot Lote 5132")
plt.show()
plt.boxplot(h) #Vetor com os dados
plt.title("BoxPlot Lote 3432")
plt.show()

#distr frequencia notas
(unique, counts) = np.unique(dados_atuais[:,2], return_counts=True)
frequencies = np.asarray((unique,counts, counts/len(dados_atuais[:,2]))).T
print('a distribuição de frequencia é: ', frequencies)

# GRAFICO HISTOGRAMA

labels = ['Media dos Lotes']
lote9876_mean = z
lote7654_mean = y
lote5132_mean = k
lote3432_mean = w

x = np.arange(len(labels))  # the label locations
width = 1  # the width of the bars

fig, ax = plt.subplots()
rects1 = ax.bar(x - 3*width/3, lote9876_mean, 0.1, label='Lote 9876')
rects2 = ax.bar(x , lote7654_mean, 0.1, label='Lote 7654')
rects3 = ax.bar(x + 3*width/3, lote5132_mean, 0.1, label='Lote 5132')
rects4 = ax.bar(x + 2, lote3432_mean, 0.1, label='Lote 3432')

# Add some text for labels, title and custom x-axis tick labels, etc.
ax.set_ylabel('NOTA MEDIA')
ax.set_title('NOTAS MEDIAS')
ax.set_xticks(x)
ax.set_xticklabels(labels)
ax.legend()

def autolabel(rects):
    """Attach a text label above each bar in *rects*, displaying its height."""
    for rect in rects:
        height = rect.get_height()
        ax.annotate('{}'.format(height),
                    xy=(rect.get_x() + rect.get_width() / 2, height),
                    xytext=(0, 3),  # 3 points vertical offset
                    textcoords="offset points",
                    ha='center', va='bottom')

autolabel(rects1)
autolabel(rects2)
autolabel(rects3)

fig.tight_layout()

plt.show()

