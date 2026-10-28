# Dům – AR procházka

Navržený rodinný dům ve skutečné velikosti v rozšířené realitě (WebXR). Stránka se otevírá v Chrome na Androidu
a přes „Přidat na plochu“ se dá nainstalovat jako aplikace. Po prvním otevření funguje i bez signálu.

## Na pozemku
1. Otevřete aplikaci a klepněte na **Spustit AR**. Pomalu přejíždějte telefonem nad zemí, dokud se neobjeví kroužek.
2. Vyberte první bod (např. JZ roh pozemku), dojděte k němu, zamiřte kroužek přesně na kolík a potvrďte.
3. Totéž u druhého bodu (ideálně co nejdál od prvního, např. JV roh).
4. Dům se usadí. Aplikace ukáže, jak sedí naměřená vzdálenost bodů s plánem. Při chybě nad 0,5 m usaďte znovu.
5. Tlačítky jde doladit výšku podlahy a natočení a vypnout střechu, nábytek nebo zahradu.

Telefon musí podporovat ARCore („Google Play Services for AR“).

## Aktualizace modelu
```
python -X utf8 tools/ar_data.py
"C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" -b --factory-startup -P simulator/tools/ar_export.py
```
Potom v `sw.js` zvýšit verzi cache a nahrát změny.
