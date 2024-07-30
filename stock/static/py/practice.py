#from locale import currency
from matplotlib import pyplot as plt
import matplotlib.dates as mdates
import matplotlib.cbook as cbook

import numpy as np


year = np.array([2019, 2020, 2021, 2022, 2023, 2024, 2025])     #year = x-points
company1 = np.array([1111, 2222, 3333, 4444, 2323, 1123, 1823])                                         #company = y-points
#company2 = np.array([])
#company3 = np.array([])
#company4 = np.array([])
#company5 = np.array([])
xticks = [2019, 2020, 2021, 2022, 2023, 2024, 2025]
yticks = [500, 1000, 1500, 2000, 2500, 300, 3500, 4000, 4500, 5000]


plt.style.use('fivethirtyeight')


#plt.title("Proud 2 Serve Stock Exchange")
#plt.xlabel("Year")
#plt.ylabel("Stock Value")
# plt.legend(["Battlefield Mapstyles", "Explosives-R-Us", "Guns & Ammo", "Oscar Mike Combat Wear", "Transports: Land, Sea, Air"])

fig, ax = plt.subplots(figsize=(11, 6))

plt.plot(year, company1, color="purple", marker="*", markersize="10", linestyle="-")
#plt.plot(year, company2, color="yellow", marker="*", markersize="10", linestyle="-")
#plt.plot(year, company3, color="red", marker="*", markersize="10", linestyle="-")
#plt.plot(year, company4, color="green", marker="*", markersize="10", linestyle="-")
#plt.plot(year, company5, color="blue", marker="*", markersize="10", linestyle="-")

# plt.axis((2019, 2025, 0, 5000))

# plt.grid()

ax.set(xlim=[-1000, 50000], xlabel='Year', ylabel='Stock Value', title='Proud 2 Serve Stock Exchange')
#ax.yaxis.set_major_formatter(currency)
ax.set_yticks([0, 10e3, 20e3, 30e3, 40e3, 50e3])
fig.subplots_adjust(right=.1)

plt.rcParams.update({'figure.autolayout': True})

plt.show()