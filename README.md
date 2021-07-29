# RentCarApplication

Stworzona przeze mnie aplikacja dedykowana jest wypożyczalnią samochodów. Jej głównym zadaniem jest wspomaganie ich pracy. Jednym z najważniejszych procesów zachodzących w wypożyczali samochodów jest proces tworzenia nowej rezerwacji.

![1](https://user-images.githubusercontent.com/57317746/127503531-3c458777-273c-4337-8ca5-989e8574c1a9.png)

Podczas tworzenia aplikacji zależało mi na tym aby proces tworzenia rezerwacji odbywał się w jak najkrótszym czasie oraz był intuicyjny dla użytkownika. Wprowadzanie nowej rezerwacji może odbywać się na dwa sposoby. Pierwszy z nich pozwala na utworzenie rezerwacji z poziomu modułu samochodów. Przechodząc do szczegółowych informacji dotyczących wybranego samochodu jest możliwość utworzenie rezerwacji z tym konkretnym pojazdem. Po wybraniu opcji rezerwuj wyświetli się okno modalne do tworzenia rezerwacji zawierające automatycznie wybrany pojazd. Następnie należy uzupełnić resztę pól. Drugim sposobem na utworzenie rezerwacji jest przejście do moduły rezerwacji i wybranie opcji utwórz rezerwację, która spowoduje otwarcie okna modalnego zawierającego pola do uzupełnienia związane z wynajmem samochodu.

![2](https://user-images.githubusercontent.com/57317746/127503534-f1e9445a-8310-4bfb-8595-e5acd165f86d.png)
![3](https://user-images.githubusercontent.com/57317746/127503535-48a15dff-09cb-45b1-8a6f-7979b3b94a97.png)

Pola formularza o nazwie „Samochód” oraz „Klient” zawierają listę rozwijaną  z możliwymi opcjami do wyboru. W przypadku pola „Samochód”  są to wszystkie dostępne samochody w wypożyczalni prezentowane w formie miniaturki zdjęcia samochodu oraz marki i modelu. Natomiast w przypadku pola „Klient” lista zawiera wszystkich klientów, którzy zostali dodani do modułu klienci. Zastosowanie takiego rozwiązania pozwala na zaoszczędzenie czasu, gdyż nie ma konieczności każdorazowego wprowadzania danych klienta oraz samochodu. Jedynie w przypadku gdy dany klient pierwszy raz korzysta z usług wypożyczalni wtedy jest konieczność dodania go przed utworzeniem rezerwacji.
Kolejnym wartym uwagi polem formularza w oknie modalnym służącym do tworzenie rezerwacji jest pole „Okres wypożyczenia”, które służy do określenia czasu trwania wynajmu samochodu.

![4](https://user-images.githubusercontent.com/57317746/127503537-cdeb821f-e990-4cf6-be4b-71d138194007.png)

Pole zawiera także ikonkę kalendarza, której kliknięcie powoduje otwarcie kolejnego okna modalnego zawierającego kalendarz. Został on tak zaprojektowany i wykonany aby na podstawie wybranego samochodu i rezerwacji, które już wcześniej zostały do niego przypisane automatycznie zablokował możliwość wyboru dni, które wchodzą w skład okresu wypożyczenia tych  rezerwacji. Wybranie okresy w kalendarzu odbywa się poprzez zaznaczenie przedziału dat.
 

![5](https://user-images.githubusercontent.com/57317746/127503538-4c779d52-0c4d-4fd7-a1b1-281b0ee0c607.png)

Kolejnymi polami są „Koszt wynajmu” oraz „Kaucja”. Są to pola automatycznie uzupełniające się. Na podstawie wybranego samochodu, jego klasy, a co za tym idzie ceny wypożyczenia za dobę oraz zakresu czasu trwania wynajmu obliczana jest wartość dla pola „Koszt wynajmu”. W przypadku pola „Kaucja” wartość uzupełniana jest na podstawie klasy wybranego samochodu. Dzięki takim rozwiązaniom już w trakcie tworzenia rezerwacji, podczas zmieniania okresu wypożyczenia lub samochodu jest możliwość podejrzenia dynamicznie zmieniającej się wartości kosztów związanych z wynajmem. Ułatwia to dopasowanie oferty do potrzeb i możliwości finansowych klienta. Po wypełnieniu wszystkich pól i zapisaniu rezerwacji, można do niej przejść z poziomy modułu rezerwacji i wyświetlić dotyczące jej szczegółowe informacje.

![6](https://user-images.githubusercontent.com/57317746/127503540-bb574f78-a15c-48cd-a2db-31568ba1f5b4.png)

Szczegółowe informacje zawierają cztery ściśle powiązane ze sobą sekcje. Zarówno sekcja z danymi pojazdu jak i sekcja z danymi osobowymi klienta pozwalają na przejście do odpowiadającego im modułu aplikacji poprzez kliknięcie w ich obszar. W przypadku sekcji zawierającej dane pojazdu przekierowanie nastąpi do szczegółowych informacji dotyczących konkretnego samochodu, natomiast w przypadku danych osobowych do szczegółowych informacji dotyczących danego klienta. Takie rozwiązanie jest bardzo intuicyjne i pozwala w krótkim czasie przełączać się pomiędzy modułami aplikacji. Po utworzeniu rezerwacji pojawia się możliwość wygenerowania umowy najmu.
 

![7](https://user-images.githubusercontent.com/57317746/127503541-1597f8ed-2be1-484f-8c74-7d5a33aeb4c2.png)

Umowa najmu generowana jest na podstawie danych dotyczących rezerwacji bez konieczności wpisywania ich ręcznie. Wygenerowana umowa dołączana jest do listy plików znajdującej się w szczegółowych informacjach dotyczących rezerwacji. Z poziomu tej listy mamy możliwość pobrania umowy w formacie PDF bezpośrednio na dysk lub otwarcia jej w nowym oknie przeglądarki z możliwością wydrukowania. Projektując i tworząc aplikację zależało mi na tym aby z aplikacji wygodnie i intuicyjnie korzystało się zarówno na dużych monitorach komputerów jak i na małych ekranach urządzeń mobilnych.
 

![8](https://user-images.githubusercontent.com/57317746/127503542-7b472cbc-42b1-4aaf-91a0-57cb8ec6a15f.png)

Aplikacja wyświetlana na dużych ekranach przechowuje dane dotyczące samochodów, klientów oraz rezerwacji w formie tabelarycznej. Ten sposób prezentacji danych jest intuicyjny oraz prosty. Dane można w bardzo łatwy sposób wyszukiwać oraz filtrować. Jednakże korzystanie z  dużych tabel na ekranach urządzeń mobilnych nie jest przyjazne użytkownikowi. Często wiąże się z koniecznością ciągłego przewijania ekranu.


![10](https://user-images.githubusercontent.com/57317746/127504095-3a9d164f-9f6f-475f-a293-f1393f2d7200.png)


W celu zapewnienia komfortowego korzystania z aplikacji na urządzeniach mobilnych dane dotyczące samochodów, klientów oraz rezerwacji  prezentowane są w formie listy prostokątów zawierających wiersze z identycznymi informacjami jak w przypadku tabeli na urządzeniach z większym ekranem. Dzięki zastosowaniu takiego rozwiązania korzystanie z aplikacji na urządzeniu mobilnym jest intuicyjne oraz nie odbiega pod względem oferowanych funkcji od wersji na urządzenia z większym ekranem.
