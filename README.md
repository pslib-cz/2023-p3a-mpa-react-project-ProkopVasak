# [Balatro](https://store.steampowered.com/app/2379780/Balatro/)

## Téma

Balatro je karetní hra, kde se pomocí comba snažíte porazit nepřítele. Combo se násobí pomocí bonusových karet Joker(Každý dává jiný efekt) a podle použitých karet(comba jsou stejná jako v pokeru). Každé kolo má 3 nepřátele a postupně se zvišuje obtížnost a každý třetí má speciální negativní efekt(např. že hráč má o 1 ruku na použití méně nebo třeba nemůže použít srdcové karty). Od samotné hry bych udělal několik změn, třeba nahradil shop odměnami po zabití nepřítele.
## Odkazy pro vývoj

Zde budou živé linky na:
- [figma](https://www.figma.com/file/HQb08rEunsZfBK5DunHwZi/Balatro-projekt?type=design&node-id=0%3A1&mode=design&t=KB173ozSjgnmOpf6-1) návrh stránek aplikace
- odkaz na [gh-pages](https://pslib-cz.github.io/2023-p3a-mpa-react-project-ProkopVasak/) projektu
- odkaz do repozitáře projektu, pokud pracuji v teamu a zde vývoj neprobíhá

### Z čeho čerpat

- interaktivní hra (předělávka "deskovky")
- mohlo by být použitelné jako solitaire
- nebo "AI" protihráč
- inspirovat se můžete na [zatrolených hrách](https://www.zatrolene-hry.cz/katalog-her/?fType=cat&keyword=&theme=-1&category=-1&minlength=-1&maxlength=-1&localization=6%2C+7%2C+8&min_players=1&max_players=1&age=-1)...
- karetní hry méně typické - např. [Kabo](https://www.zatrolene-hry.cz/spolecenska-hra/kabo-8341/)
- učitelem oblíbená [Cartagena](https://www.zatrolene-hry.cz/spolecenska-hra/cartagena-422/) stále čeká na remake

### Techniky

- využití localStorage / sessionStorage
- čtení dat z externího RestAPI (fetch)
- operace DnD
- využití react-routeru
- funkčnost na mobilu (výjimka je předělávka komplexních deskových her)

### Co není obsahem 

- databáze
- bez vlastních backend service
- trapné věci: *klasické karetní hry*, *člověče nezlob se*, ...
