x = "dinosaur"
print(x)

from matplotlib import pyplot as plt
import matplotlib.dates as mdates
import matplotlib.cbook as cbook

import numpy as np


year = np.array([2019, 2020, 2021, 2022, 2023, 2024, 2025])     #year = x-points
print(year)
company1 = np.array([1111, 2222, 3333, 4444, 2323, 1123, 1823])                                         #company = y-points

xticks = [2019, 2020, 2021, 2022, 2023, 2024, 2025]
yticks = [500, 1000, 1500, 2000, 2500, 300, 3500, 4000, 4500, 5000]


plt.style.use('fivethirtyeight')


plt.title("Proud 2 Serve Stock Exchange")
plt.xlabel("Year")
plt.ylabel("Stock Value")
# plt.legend(["Battlefield Mapstyles", "Explosives-R-Us", "Guns & Ammo", "Oscar Mike Combat Wear", "Transports: Land, Sea, Air"])

plt.subplot(6, 8, 1)

plt.plot(year, company1, color="purple", marker="*", markersize="10", linestyle="-")


plt.axis((2019, 2025, 0, 5000))

plt.grid()

plt.tight_layout()

plt.show()


# Battlefield Mapstyles
year = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
company1 = [3000, 4500, 3700]
company2 = [2600, 1800, 2900]
company3 = []
company4 = []
company5 = []
yticks = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000]

plt.figure(figsize=(8, 6))
axis = plt.subplot(1, 1, 1)

plt.plot(year, company1, color="magenta", marker="o", linestyle="--")
plt.plot(year, company2, color="yellow", marker="o", linestyle="--")
plt.plot(year, company3, color="red", marker="o", linestyle="--")
plt.plot(year, company4, color="green", marker="o", linestyle="--")
plt.plot(year, company5, color="blue", marker="o", linestyle="--")

axis.set_yticks(yticks)

plt.xlabel("Year")
plt.ylabel("Stock Value")
plt.title("Proud 2 Serve Stock Exchange")
plt.legend(["Battlefield Mapstyles", "Explosives-R-Us", "Guns & Ammo", "Oscar Mike Combat Wear", "Transports: Land, Sea, Air"])

plt.tight_layout

plt.show()
