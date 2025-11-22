const verbsData = [
    // --- Original Verbs ---
    {
        "infinitive": "hablar",
        "translation": "parler",
        "conjugations": {
            "presente": { "yo": "hablo", "tú": "hablas", "él/ella/usted": "habla", "nosotros": "hablamos", "vosotros": "habláis", "ellos/ellas/ustedes": "hablan" },
            "preterito_perfecto": { "yo": "he hablado", "tú": "has hablado", "él/ella/usted": "ha hablado", "nosotros": "hemos hablado", "vosotros": "habéis hablado", "ellos/ellas/ustedes": "han hablado" },
            "preterito_imperfecto": { "yo": "hablaba", "tú": "hablabas", "él/ella/usted": "hablaba", "nosotros": "hablábamos", "vosotros": "hablabais", "ellos/ellas/ustedes": "hablaban" },
            "preterito_indefinido": { "yo": "hablé", "tú": "hablaste", "él/ella/usted": "habló", "nosotros": "hablamos", "vosotros": "hablasteis", "ellos/ellas/ustedes": "hablaron" },
            "futuro_simple": { "yo": "hablaré", "tú": "hablarás", "él/ella/usted": "hablará", "nosotros": "hablaremos", "vosotros": "hablaréis", "ellos/ellas/ustedes": "hablarán" }
        }
    },
    {
        "infinitive": "comer",
        "translation": "manger",
        "conjugations": {
            "presente": { "yo": "como", "tú": "comes", "él/ella/usted": "come", "nosotros": "comemos", "vosotros": "coméis", "ellos/ellas/ustedes": "comen" },
            "preterito_perfecto": { "yo": "he comido", "tú": "has comido", "él/ella/usted": "ha comido", "nosotros": "hemos comido", "vosotros": "habéis comido", "ellos/ellas/ustedes": "han comido" },
            "preterito_imperfecto": { "yo": "comía", "tú": "comías", "él/ella/usted": "comía", "nosotros": "comíamos", "vosotros": "comíais", "ellos/ellas/ustedes": "comían" },
            "preterito_indefinido": { "yo": "comí", "tú": "comiste", "él/ella/usted": "comió", "nosotros": "comimos", "vosotros": "comisteis", "ellos/ellas/ustedes": "comieron" },
            "futuro_simple": { "yo": "comeré", "tú": "comerás", "él/ella/usted": "comerá", "nosotros": "comeremos", "vosotros": "comeréis", "ellos/ellas/ustedes": "comerán" }
        }
    },
    {
        "infinitive": "vivir",
        "translation": "vivre",
        "conjugations": {
            "presente": { "yo": "vivo", "tú": "vives", "él/ella/usted": "vive", "nosotros": "vivimos", "vosotros": "vivís", "ellos/ellas/ustedes": "viven" },
            "preterito_perfecto": { "yo": "he vivido", "tú": "has vivido", "él/ella/usted": "ha vivido", "nosotros": "hemos vivido", "vosotros": "habéis vivido", "ellos/ellas/ustedes": "han vivido" },
            "preterito_imperfecto": { "yo": "vivía", "tú": "vivías", "él/ella/usted": "vivía", "nosotros": "vivíamos", "vosotros": "vivíais", "ellos/ellas/ustedes": "vivían" },
            "preterito_indefinido": { "yo": "viví", "tú": "viviste", "él/ella/usted": "vivió", "nosotros": "vivimos", "vosotros": "vivisteis", "ellos/ellas/ustedes": "vivieron" },
            "futuro_simple": { "yo": "viviré", "tú": "vivirás", "él/ella/usted": "vivirá", "nosotros": "viviremos", "vosotros": "viviréis", "ellos/ellas/ustedes": "vivirán" }
        }
    },
    // ... (Retaining all previous verbs in condensed format for brevity in this file generation) ...
    {
        "infinitive": "ser",
        "translation": "être",
        "conjugations": {
            "presente": { "yo": "soy", "tú": "eres", "él/ella/usted": "es", "nosotros": "somos", "vosotros": "sois", "ellos/ellas/ustedes": "son" },
            "preterito_perfecto": { "yo": "he sido", "tú": "has sido", "él/ella/usted": "ha sido", "nosotros": "hemos sido", "vosotros": "habéis sido", "ellos/ellas/ustedes": "han sido" },
            "preterito_imperfecto": { "yo": "era", "tú": "eras", "él/ella/usted": "era", "nosotros": "éramos", "vosotros": "erais", "ellos/ellas/ustedes": "eran" },
            "preterito_indefinido": { "yo": "fui", "tú": "fuiste", "él/ella/usted": "fue", "nosotros": "fuimos", "vosotros": "fuisteis", "ellos/ellas/ustedes": "fueron" },
            "futuro_simple": { "yo": "seré", "tú": "serás", "él/ella/usted": "será", "nosotros": "seremos", "vosotros": "seréis", "ellos/ellas/ustedes": "serán" }
        }
    },
    {
        "infinitive": "estar",
        "translation": "être (état)",
        "conjugations": {
            "presente": { "yo": "estoy", "tú": "estás", "él/ella/usted": "está", "nosotros": "estamos", "vosotros": "estáis", "ellos/ellas/ustedes": "están" },
            "preterito_perfecto": { "yo": "he estado", "tú": "has estado", "él/ella/usted": "ha estado", "nosotros": "hemos estado", "vosotros": "habéis estado", "ellos/ellas/ustedes": "han estado" },
            "preterito_imperfecto": { "yo": "estaba", "tú": "estabas", "él/ella/usted": "estaba", "nosotros": "estábamos", "vosotros": "estabais", "ellos/ellas/ustedes": "estaban" },
            "preterito_indefinido": { "yo": "estuve", "tú": "estuviste", "él/ella/usted": "estuvo", "nosotros": "estuvimos", "vosotros": "estuvisteis", "ellos/ellas/ustedes": "estuvieron" },
            "futuro_simple": { "yo": "estaré", "tú": "estarás", "él/ella/usted": "estará", "nosotros": "estaremos", "vosotros": "estaréis", "ellos/ellas/ustedes": "estarán" }
        }
    },
    {
        "infinitive": "tener",
        "translation": "avoir",
        "conjugations": {
            "presente": { "yo": "tengo", "tú": "tienes", "él/ella/usted": "tiene", "nosotros": "tenemos", "vosotros": "tenéis", "ellos/ellas/ustedes": "tienen" },
            "preterito_perfecto": { "yo": "he tenido", "tú": "has tenido", "él/ella/usted": "ha tenido", "nosotros": "hemos tenido", "vosotros": "habéis tenido", "ellos/ellas/ustedes": "han tenido" },
            "preterito_imperfecto": { "yo": "tenía", "tú": "tenías", "él/ella/usted": "tenía", "nosotros": "teníamos", "vosotros": "teníais", "ellos/ellas/ustedes": "tenían" },
            "preterito_indefinido": { "yo": "tuve", "tú": "tuviste", "él/ella/usted": "tuvo", "nosotros": "tuvimos", "vosotros": "tuvisteis", "ellos/ellas/ustedes": "tuvieron" },
            "futuro_simple": { "yo": "tendré", "tú": "tendrás", "él/ella/usted": "tendrá", "nosotros": "tendremos", "vosotros": "tendréis", "ellos/ellas/ustedes": "tendrán" }
        }
    },
    {
        "infinitive": "hacer",
        "translation": "faire",
        "conjugations": {
            "presente": { "yo": "hago", "tú": "haces", "él/ella/usted": "hace", "nosotros": "hacemos", "vosotros": "hacéis", "ellos/ellas/ustedes": "hacen" },
            "preterito_perfecto": { "yo": "he hecho", "tú": "has hecho", "él/ella/usted": "ha hecho", "nosotros": "hemos hecho", "vosotros": "habéis hecho", "ellos/ellas/ustedes": "han hecho" },
            "preterito_imperfecto": { "yo": "hacía", "tú": "hacías", "él/ella/usted": "hacía", "nosotros": "hacíamos", "vosotros": "hacíais", "ellos/ellas/ustedes": "hacían" },
            "preterito_indefinido": { "yo": "hice", "tú": "hiciste", "él/ella/usted": "hizo", "nosotros": "hicimos", "vosotros": "hicisteis", "ellos/ellas/ustedes": "hicieron" },
            "futuro_simple": { "yo": "haré", "tú": "harás", "él/ella/usted": "hará", "nosotros": "haremos", "vosotros": "haréis", "ellos/ellas/ustedes": "harán" }
        }
    },
    {
        "infinitive": "ir",
        "translation": "aller",
        "conjugations": {
            "presente": { "yo": "voy", "tú": "vas", "él/ella/usted": "va", "nosotros": "vamos", "vosotros": "vais", "ellos/ellas/ustedes": "van" },
            "preterito_perfecto": { "yo": "he ido", "tú": "has ido", "él/ella/usted": "ha ido", "nosotros": "hemos ido", "vosotros": "habéis ido", "ellos/ellas/ustedes": "han ido" },
            "preterito_imperfecto": { "yo": "iba", "tú": "ibas", "él/ella/usted": "iba", "nosotros": "íbamos", "vosotros": "ibais", "ellos/ellas/ustedes": "iban" },
            "preterito_indefinido": { "yo": "fui", "tú": "fuiste", "él/ella/usted": "fue", "nosotros": "fuimos", "vosotros": "fuisteis", "ellos/ellas/ustedes": "fueron" },
            "futuro_simple": { "yo": "iré", "tú": "irás", "él/ella/usted": "irá", "nosotros": "iremos", "vosotros": "iréis", "ellos/ellas/ustedes": "irán" }
        }
    },
    // --- New Verbs (Irregulars, Stem-changers, etc.) ---
    {
        "infinitive": "dormir",
        "translation": "dormir",
        "conjugations": {
            "presente": { "yo": "duermo", "tú": "duermes", "él/ella/usted": "duerme", "nosotros": "dormimos", "vosotros": "dormís", "ellos/ellas/ustedes": "duermen" },
            "preterito_perfecto": { "yo": "he dormido", "tú": "has dormido", "él/ella/usted": "ha dormido", "nosotros": "hemos dormido", "vosotros": "habéis dormido", "ellos/ellas/ustedes": "han dormido" },
            "preterito_imperfecto": { "yo": "dormía", "tú": "dormías", "él/ella/usted": "dormía", "nosotros": "dormíamos", "vosotros": "dormíais", "ellos/ellas/ustedes": "dormían" },
            "preterito_indefinido": { "yo": "dormí", "tú": "dormiste", "él/ella/usted": "durmió", "nosotros": "dormimos", "vosotros": "dormisteis", "ellos/ellas/ustedes": "durmieron" },
            "futuro_simple": { "yo": "dormiré", "tú": "dormirás", "él/ella/usted": "dormirá", "nosotros": "dormiremos", "vosotros": "dormiréis", "ellos/ellas/ustedes": "dormirán" }
        }
    },
    {
        "infinitive": "empezar",
        "translation": "commencer",
        "conjugations": {
            "presente": { "yo": "empiezo", "tú": "empiezas", "él/ella/usted": "empieza", "nosotros": "empezamos", "vosotros": "empezáis", "ellos/ellas/ustedes": "empiezan" },
            "preterito_perfecto": { "yo": "he empezado", "tú": "has empezado", "él/ella/usted": "ha empezado", "nosotros": "hemos empezado", "vosotros": "habéis empezado", "ellos/ellas/ustedes": "han empezado" },
            "preterito_imperfecto": { "yo": "empezaba", "tú": "empezabas", "él/ella/usted": "empezaba", "nosotros": "empezábamos", "vosotros": "empezabais", "ellos/ellas/ustedes": "empezaban" },
            "preterito_indefinido": { "yo": "empecé", "tú": "empezaste", "él/ella/usted": "empezó", "nosotros": "empezamos", "vosotros": "empezasteis", "ellos/ellas/ustedes": "empezaron" },
            "futuro_simple": { "yo": "empezaré", "tú": "empezarás", "él/ella/usted": "empezará", "nosotros": "empezaremos", "vosotros": "empezaréis", "ellos/ellas/ustedes": "empezarán" }
        }
    },
    {
        "infinitive": "jugar",
        "translation": "jouer",
        "conjugations": {
            "presente": { "yo": "juego", "tú": "juegas", "él/ella/usted": "juega", "nosotros": "jugamos", "vosotros": "jugáis", "ellos/ellas/ustedes": "juegan" },
            "preterito_perfecto": { "yo": "he jugado", "tú": "has jugado", "él/ella/usted": "ha jugado", "nosotros": "hemos jugado", "vosotros": "habéis jugado", "ellos/ellas/ustedes": "han jugado" },
            "preterito_imperfecto": { "yo": "jugaba", "tú": "jugabas", "él/ella/usted": "jugaba", "nosotros": "jugábamos", "vosotros": "jugabais", "ellos/ellas/ustedes": "jugaban" },
            "preterito_indefinido": { "yo": "jugué", "tú": "jugaste", "él/ella/usted": "jugó", "nosotros": "jugamos", "vosotros": "jugasteis", "ellos/ellas/ustedes": "jugaron" },
            "futuro_simple": { "yo": "jugaré", "tú": "jugarás", "él/ella/usted": "jugará", "nosotros": "jugaremos", "vosotros": "jugaréis", "ellos/ellas/ustedes": "jugarán" }
        }
    },
    {
        "infinitive": "entender",
        "translation": "comprendre",
        "conjugations": {
            "presente": { "yo": "entiendo", "tú": "entiendes", "él/ella/usted": "entiende", "nosotros": "entendemos", "vosotros": "entendéis", "ellos/ellas/ustedes": "entienden" },
            "preterito_perfecto": { "yo": "he entendido", "tú": "has entendido", "él/ella/usted": "ha entendido", "nosotros": "hemos entendido", "vosotros": "habéis entendido", "ellos/ellas/ustedes": "han entendido" },
            "preterito_imperfecto": { "yo": "entendía", "tú": "entendías", "él/ella/usted": "entendía", "nosotros": "entendíamos", "vosotros": "entendíais", "ellos/ellas/ustedes": "entendían" },
            "preterito_indefinido": { "yo": "entendí", "tú": "entendiste", "él/ella/usted": "entendió", "nosotros": "entendimos", "vosotros": "entendisteis", "ellos/ellas/ustedes": "entendieron" },
            "futuro_simple": { "yo": "entenderé", "tú": "entenderás", "él/ella/usted": "entenderá", "nosotros": "entenderemos", "vosotros": "entenderéis", "ellos/ellas/ustedes": "entenderán" }
        }
    },
    {
        "infinitive": "pedir",
        "translation": "demander",
        "conjugations": {
            "presente": { "yo": "pido", "tú": "pides", "él/ella/usted": "pide", "nosotros": "pedimos", "vosotros": "pedís", "ellos/ellas/ustedes": "piden" },
            "preterito_perfecto": { "yo": "he pedido", "tú": "has pedido", "él/ella/usted": "ha pedido", "nosotros": "hemos pedido", "vosotros": "habéis pedido", "ellos/ellas/ustedes": "han pedido" },
            "preterito_imperfecto": { "yo": "pedía", "tú": "pedías", "él/ella/usted": "pedía", "nosotros": "pedíamos", "vosotros": "pedíais", "ellos/ellas/ustedes": "pedían" },
            "preterito_indefinido": { "yo": "pedí", "tú": "pediste", "él/ella/usted": "pidió", "nosotros": "pedimos", "vosotros": "pedisteis", "ellos/ellas/ustedes": "pidieron" },
            "futuro_simple": { "yo": "pediré", "tú": "pedirás", "él/ella/usted": "pedirá", "nosotros": "pediremos", "vosotros": "pediréis", "ellos/ellas/ustedes": "pedirán" }
        }
    },
    {
        "infinitive": "conocer",
        "translation": "connaître",
        "conjugations": {
            "presente": { "yo": "conozco", "tú": "conoces", "él/ella/usted": "conoce", "nosotros": "conocemos", "vosotros": "conocéis", "ellos/ellas/ustedes": "conocen" },
            "preterito_perfecto": { "yo": "he conocido", "tú": "has conocido", "él/ella/usted": "ha conocido", "nosotros": "hemos conocido", "vosotros": "habéis conocido", "ellos/ellas/ustedes": "han conocido" },
            "preterito_imperfecto": { "yo": "conocía", "tú": "conocías", "él/ella/usted": "conocía", "nosotros": "conocíamos", "vosotros": "conocíais", "ellos/ellas/ustedes": "conocían" },
            "preterito_indefinido": { "yo": "conocí", "tú": "conociste", "él/ella/usted": "conoció", "nosotros": "conocimos", "vosotros": "conocisteis", "ellos/ellas/ustedes": "conocieron" },
            "futuro_simple": { "yo": "conoceré", "tú": "conocerás", "él/ella/usted": "conocerá", "nosotros": "conoceremos", "vosotros": "conoceréis", "ellos/ellas/ustedes": "conocerán" }
        }
    },
    {
        "infinitive": "traducir",
        "translation": "traduire",
        "conjugations": {
            "presente": { "yo": "traduzco", "tú": "traduces", "él/ella/usted": "traduce", "nosotros": "traducimos", "vosotros": "traducís", "ellos/ellas/ustedes": "traducen" },
            "preterito_perfecto": { "yo": "he traducido", "tú": "has traducido", "él/ella/usted": "ha traducido", "nosotros": "hemos traducido", "vosotros": "habéis traducido", "ellos/ellas/ustedes": "han traducido" },
            "preterito_imperfecto": { "yo": "traducía", "tú": "traducías", "él/ella/usted": "traducía", "nosotros": "traducíamos", "vosotros": "traducíais", "ellos/ellas/ustedes": "traducían" },
            "preterito_indefinido": { "yo": "traduje", "tú": "tradujiste", "él/ella/usted": "tradujo", "nosotros": "tradujimos", "vosotros": "tradujisteis", "ellos/ellas/ustedes": "tradujeron" },
            "futuro_simple": { "yo": "traduciré", "tú": "traducirás", "él/ella/usted": "traducirá", "nosotros": "traduciremos", "vosotros": "traduciréis", "ellos/ellas/ustedes": "traducirán" }
        }
    },
    {
        "infinitive": "traer",
        "translation": "apporter",
        "conjugations": {
            "presente": { "yo": "traigo", "tú": "traes", "él/ella/usted": "trae", "nosotros": "traemos", "vosotros": "traéis", "ellos/ellas/ustedes": "traen" },
            "preterito_perfecto": { "yo": "he traído", "tú": "has traído", "él/ella/usted": "ha traído", "nosotros": "hemos traído", "vosotros": "habéis traído", "ellos/ellas/ustedes": "han traído" },
            "preterito_imperfecto": { "yo": "traía", "tú": "traías", "él/ella/usted": "traía", "nosotros": "traíamos", "vosotros": "traíais", "ellos/ellas/ustedes": "traían" },
            "preterito_indefinido": { "yo": "traje", "tú": "trajiste", "él/ella/usted": "trajo", "nosotros": "trajimos", "vosotros": "trajisteis", "ellos/ellas/ustedes": "trajeron" },
            "futuro_simple": { "yo": "traeré", "tú": "traerás", "él/ella/usted": "traerá", "nosotros": "traeremos", "vosotros": "traeréis", "ellos/ellas/ustedes": "traerán" }
        }
    },
    {
        "infinitive": "oír",
        "translation": "entendre",
        "conjugations": {
            "presente": { "yo": "oigo", "tú": "oyes", "él/ella/usted": "oye", "nosotros": "oímos", "vosotros": "oís", "ellos/ellas/ustedes": "oyen" },
            "preterito_perfecto": { "yo": "he oído", "tú": "has oído", "él/ella/usted": "ha oído", "nosotros": "hemos oído", "vosotros": "habéis oído", "ellos/ellas/ustedes": "han oído" },
            "preterito_imperfecto": { "yo": "oía", "tú": "oías", "él/ella/usted": "oía", "nosotros": "oíamos", "vosotros": "oíais", "ellos/ellas/ustedes": "oían" },
            "preterito_indefinido": { "yo": "oí", "tú": "oíste", "él/ella/usted": "oyó", "nosotros": "oímos", "vosotros": "oísteis", "ellos/ellas/ustedes": "oyeron" },
            "futuro_simple": { "yo": "oiré", "tú": "oirás", "él/ella/usted": "oirá", "nosotros": "oiremos", "vosotros": "oiréis", "ellos/ellas/ustedes": "oirán" }
        }
    },
    {
        "infinitive": "caer",
        "translation": "tomber",
        "conjugations": {
            "presente": { "yo": "caigo", "tú": "caes", "él/ella/usted": "cae", "nosotros": "caemos", "vosotros": "caéis", "ellos/ellas/ustedes": "caen" },
            "preterito_perfecto": { "yo": "he caído", "tú": "has caído", "él/ella/usted": "ha caído", "nosotros": "hemos caído", "vosotros": "habéis caído", "ellos/ellas/ustedes": "han caído" },
            "preterito_imperfecto": { "yo": "caía", "tú": "caías", "él/ella/usted": "caía", "nosotros": "caíamos", "vosotros": "caíais", "ellos/ellas/ustedes": "caían" },
            "preterito_indefinido": { "yo": "caí", "tú": "caíste", "él/ella/usted": "cayó", "nosotros": "caímos", "vosotros": "caísteis", "ellos/ellas/ustedes": "cayeron" },
            "futuro_simple": { "yo": "caeré", "tú": "caerás", "él/ella/usted": "caerá", "nosotros": "caeremos", "vosotros": "caeréis", "ellos/ellas/ustedes": "caerán" }
        }
    },
    {
        "infinitive": "abrir",
        "translation": "ouvrir",
        "conjugations": {
            "presente": { "yo": "abro", "tú": "abres", "él/ella/usted": "abre", "nosotros": "abrimos", "vosotros": "abrís", "ellos/ellas/ustedes": "abren" },
            "preterito_perfecto": { "yo": "he abierto", "tú": "has abierto", "él/ella/usted": "ha abierto", "nosotros": "hemos abierto", "vosotros": "habéis abierto", "ellos/ellas/ustedes": "han abierto" },
            "preterito_imperfecto": { "yo": "abría", "tú": "abrías", "él/ella/usted": "abría", "nosotros": "abríamos", "vosotros": "abríais", "ellos/ellas/ustedes": "abrían" },
            "preterito_indefinido": { "yo": "abrí", "tú": "abriste", "él/ella/usted": "abrió", "nosotros": "abrimos", "vosotros": "abristeis", "ellos/ellas/ustedes": "abrieron" },
            "futuro_simple": { "yo": "abriré", "tú": "abrirás", "él/ella/usted": "abrirá", "nosotros": "abriremos", "vosotros": "abriréis", "ellos/ellas/ustedes": "abrirán" }
        }
    },
    {
        "infinitive": "escribir",
        "translation": "écrire",
        "conjugations": {
            "presente": { "yo": "escribo", "tú": "escribes", "él/ella/usted": "escribe", "nosotros": "escribimos", "vosotros": "escribís", "ellos/ellas/ustedes": "escriben" },
            "preterito_perfecto": { "yo": "he escrito", "tú": "has escrito", "él/ella/usted": "ha escrito", "nosotros": "hemos escrito", "vosotros": "habéis escrito", "ellos/ellas/ustedes": "han escrito" },
            "preterito_imperfecto": { "yo": "escribía", "tú": "escribías", "él/ella/usted": "escribía", "nosotros": "escribíamos", "vosotros": "escribíais", "ellos/ellas/ustedes": "escribían" },
            "preterito_indefinido": { "yo": "escribí", "tú": "escribiste", "él/ella/usted": "escribió", "nosotros": "escribimos", "vosotros": "escribisteis", "ellos/ellas/ustedes": "escribieron" },
            "futuro_simple": { "yo": "escribiré", "tú": "escribirás", "él/ella/usted": "escribirá", "nosotros": "escribiremos", "vosotros": "escribiréis", "ellos/ellas/ustedes": "escribirán" }
        }
    },
    {
        "infinitive": "leer",
        "translation": "lire",
        "conjugations": {
            "presente": { "yo": "leo", "tú": "lees", "él/ella/usted": "lee", "nosotros": "leemos", "vosotros": "leéis", "ellos/ellas/ustedes": "leen" },
            "preterito_perfecto": { "yo": "he leído", "tú": "has leído", "él/ella/usted": "ha leído", "nosotros": "hemos leído", "vosotros": "habéis leído", "ellos/ellas/ustedes": "han leído" },
            "preterito_imperfecto": { "yo": "leía", "tú": "leías", "él/ella/usted": "leía", "nosotros": "leíamos", "vosotros": "leíais", "ellos/ellas/ustedes": "leían" },
            "preterito_indefinido": { "yo": "leí", "tú": "leíste", "él/ella/usted": "leyó", "nosotros": "leímos", "vosotros": "leísteis", "ellos/ellas/ustedes": "leyeron" },
            "futuro_simple": { "yo": "leeré", "tú": "leerás", "él/ella/usted": "leerá", "nosotros": "leeremos", "vosotros": "leeréis", "ellos/ellas/ustedes": "leerán" }
        }
    },
    {
        "infinitive": "buscar",
        "translation": "chercher",
        "conjugations": {
            "presente": { "yo": "busco", "tú": "buscas", "él/ella/usted": "busca", "nosotros": "buscamos", "vosotros": "buscáis", "ellos/ellas/ustedes": "buscan" },
            "preterito_perfecto": { "yo": "he buscado", "tú": "has buscado", "él/ella/usted": "ha buscado", "nosotros": "hemos buscado", "vosotros": "habéis buscado", "ellos/ellas/ustedes": "han buscado" },
            "preterito_imperfecto": { "yo": "buscaba", "tú": "buscabas", "él/ella/usted": "buscaba", "nosotros": "buscábamos", "vosotros": "buscabais", "ellos/ellas/ustedes": "buscaban" },
            "preterito_indefinido": { "yo": "busqué", "tú": "buscaste", "él/ella/usted": "buscó", "nosotros": "buscamos", "vosotros": "buscasteis", "ellos/ellas/ustedes": "buscaron" },
            "futuro_simple": { "yo": "buscaré", "tú": "buscarás", "él/ella/usted": "buscará", "nosotros": "buscaremos", "vosotros": "buscaréis", "ellos/ellas/ustedes": "buscarán" }
        }
    },
    {
        "infinitive": "pagar",
        "translation": "payer",
        "conjugations": {
            "presente": { "yo": "pago", "tú": "pagas", "él/ella/usted": "paga", "nosotros": "pagamos", "vosotros": "pagáis", "ellos/ellas/ustedes": "pagan" },
            "preterito_perfecto": { "yo": "he pagado", "tú": "has pagado", "él/ella/usted": "ha pagado", "nosotros": "hemos pagado", "vosotros": "habéis pagado", "ellos/ellas/ustedes": "han pagado" },
            "preterito_imperfecto": { "yo": "pagaba", "tú": "pagabas", "él/ella/usted": "pagaba", "nosotros": "pagábamos", "vosotros": "pagabais", "ellos/ellas/ustedes": "pagaban" },
            "preterito_indefinido": { "yo": "pagué", "tú": "pagaste", "él/ella/usted": "pagó", "nosotros": "pagamos", "vosotros": "pagasteis", "ellos/ellas/ustedes": "pagaron" },
            "futuro_simple": { "yo": "pagaré", "tú": "pagarás", "él/ella/usted": "pagará", "nosotros": "pagaremos", "vosotros": "pagaréis", "ellos/ellas/ustedes": "pagarán" }
        }
    },
    {
        "infinitive": "andar",
        "translation": "marcher",
        "conjugations": {
            "presente": { "yo": "ando", "tú": "andas", "él/ella/usted": "anda", "nosotros": "andamos", "vosotros": "andáis", "ellos/ellas/ustedes": "andan" },
            "preterito_perfecto": { "yo": "he andado", "tú": "has andado", "él/ella/usted": "ha andado", "nosotros": "hemos andado", "vosotros": "habéis andado", "ellos/ellas/ustedes": "han andado" },
            "preterito_imperfecto": { "yo": "andaba", "tú": "andabas", "él/ella/usted": "andaba", "nosotros": "andábamos", "vosotros": "andabais", "ellos/ellas/ustedes": "andaban" },
            "preterito_indefinido": { "yo": "anduve", "tú": "anduviste", "él/ella/usted": "anduvo", "nosotros": "anduvimos", "vosotros": "anduvisteis", "ellos/ellas/ustedes": "anduvieron" },
            "futuro_simple": { "yo": "andaré", "tú": "andarás", "él/ella/usted": "andará", "nosotros": "andaremos", "vosotros": "andaréis", "ellos/ellas/ustedes": "andarán" }
        }
    },
    {
        "infinitive": "caber",
        "translation": "entrer/tenir",
        "conjugations": {
            "presente": { "yo": "quepo", "tú": "cabes", "él/ella/usted": "cabe", "nosotros": "cabemos", "vosotros": "cabéis", "ellos/ellas/ustedes": "caben" },
            "preterito_perfecto": { "yo": "he cabido", "tú": "has cabido", "él/ella/usted": "ha cabido", "nosotros": "hemos cabido", "vosotros": "habéis cabido", "ellos/ellas/ustedes": "han cabido" },
            "preterito_imperfecto": { "yo": "cabía", "tú": "cabías", "él/ella/usted": "cabía", "nosotros": "cabíamos", "vosotros": "cabíais", "ellos/ellas/ustedes": "cabían" },
            "preterito_indefinido": { "yo": "cupe", "tú": "cupiste", "él/ella/usted": "cupo", "nosotros": "cupimos", "vosotros": "cupisteis", "ellos/ellas/ustedes": "cupieron" },
            "futuro_simple": { "yo": "cabré", "tú": "cabrás", "él/ella/usted": "cabrá", "nosotros": "cabremos", "vosotros": "cabréis", "ellos/ellas/ustedes": "cabrán" }
        }
    },
    {
        "infinitive": "haber",
        "translation": "avoir (auxiliaire)",
        "conjugations": {
            "presente": { "yo": "he", "tú": "has", "él/ella/usted": "ha", "nosotros": "hemos", "vosotros": "habéis", "ellos/ellas/ustedes": "han" },
            "preterito_perfecto": { "yo": "he habido", "tú": "has habido", "él/ella/usted": "ha habido", "nosotros": "hemos habido", "vosotros": "habéis habido", "ellos/ellas/ustedes": "han habido" },
            "preterito_imperfecto": { "yo": "había", "tú": "habías", "él/ella/usted": "había", "nosotros": "habíamos", "vosotros": "habíais", "ellos/ellas/ustedes": "habían" },
            "preterito_indefinido": { "yo": "hube", "tú": "hubiste", "él/ella/usted": "hubo", "nosotros": "hubimos", "vosotros": "hubisteis", "ellos/ellas/ustedes": "hubieron" },
            "futuro_simple": { "yo": "habré", "tú": "habrás", "él/ella/usted": "habrá", "nosotros": "habremos", "vosotros": "habréis", "ellos/ellas/ustedes": "habrán" }
        }
    },
    {
        "infinitive": "reír",
        "translation": "rire",
        "conjugations": {
            "presente": { "yo": "río", "tú": "ríes", "él/ella/usted": "ríe", "nosotros": "reímos", "vosotros": "reís", "ellos/ellas/ustedes": "ríen" },
            "preterito_perfecto": { "yo": "he reído", "tú": "has reído", "él/ella/usted": "ha reído", "nosotros": "hemos reído", "vosotros": "habéis reído", "ellos/ellas/ustedes": "han reído" },
            "preterito_imperfecto": { "yo": "reía", "tú": "reías", "él/ella/usted": "reía", "nosotros": "reíamos", "vosotros": "reíais", "ellos/ellas/ustedes": "reían" },
            "preterito_indefinido": { "yo": "reí", "tú": "reíste", "él/ella/usted": "rio", "nosotros": "reímos", "vosotros": "reísteis", "ellos/ellas/ustedes": "rieron" },
            "futuro_simple": { "yo": "reiré", "tú": "reirás", "él/ella/usted": "reirá", "nosotros": "reiremos", "vosotros": "reiréis", "ellos/ellas/ustedes": "reirán" }
        }
    },
    {
        "infinitive": "morir",
        "translation": "mourir",
        "conjugations": {
            "presente": { "yo": "muero", "tú": "mueres", "él/ella/usted": "muere", "nosotros": "morimos", "vosotros": "morís", "ellos/ellas/ustedes": "mueren" },
            "preterito_perfecto": { "yo": "he muerto", "tú": "has muerto", "él/ella/usted": "ha muerto", "nosotros": "hemos muerto", "vosotros": "habéis muerto", "ellos/ellas/ustedes": "han muerto" },
            "preterito_imperfecto": { "yo": "moría", "tú": "morías", "él/ella/usted": "moría", "nosotros": "moríamos", "vosotros": "moríais", "ellos/ellas/ustedes": "morían" },
            "preterito_indefinido": { "yo": "morí", "tú": "moriste", "él/ella/usted": "murió", "nosotros": "morimos", "vosotros": "moristeis", "ellos/ellas/ustedes": "murieron" },
            "futuro_simple": { "yo": "moriré", "tú": "morirás", "él/ella/usted": "morirá", "nosotros": "moriremos", "vosotros": "moriréis", "ellos/ellas/ustedes": "morirán" }
        }
    },
    // --- Reflexive Verbs ---
    {
        "infinitive": "levantarse",
        "translation": "se lever",
        "conjugations": {
            "presente": { "yo": "me levanto", "tú": "te levantas", "él/ella/usted": "se levanta", "nosotros": "nos levantamos", "vosotros": "os levantáis", "ellos/ellas/ustedes": "se levantan" },
            "preterito_perfecto": { "yo": "me he levantado", "tú": "te has levantado", "él/ella/usted": "se ha levantado", "nosotros": "nos hemos levantado", "vosotros": "os habéis levantado", "ellos/ellas/ustedes": "se han levantado" },
            "preterito_imperfecto": { "yo": "me levantaba", "tú": "te levantabas", "él/ella/usted": "se levantaba", "nosotros": "nos levantábamos", "vosotros": "os levantabais", "ellos/ellas/ustedes": "se levantaban" },
            "preterito_indefinido": { "yo": "me levanté", "tú": "te levantaste", "él/ella/usted": "se levantó", "nosotros": "nos levantamos", "vosotros": "os levantasteis", "ellos/ellas/ustedes": "se levantaron" },
            "futuro_simple": { "yo": "me levantaré", "tú": "te levantarás", "él/ella/usted": "se levantará", "nosotros": "nos levantaremos", "vosotros": "os levantaréis", "ellos/ellas/ustedes": "se levantarán" }
        }
    },
    {
        "infinitive": "ducharse",
        "translation": "se doucher",
        "conjugations": {
            "presente": { "yo": "me ducho", "tú": "te duchas", "él/ella/usted": "se ducha", "nosotros": "nos duchamos", "vosotros": "os ducháis", "ellos/ellas/ustedes": "se duchan" },
            "preterito_perfecto": { "yo": "me he duchado", "tú": "te has duchado", "él/ella/usted": "se ha duchado", "nosotros": "nos hemos duchado", "vosotros": "os habéis duchado", "ellos/ellas/ustedes": "se han duchado" },
            "preterito_imperfecto": { "yo": "me duchaba", "tú": "te duchabas", "él/ella/usted": "se duchaba", "nosotros": "nos duchábamos", "vosotros": "os duchabais", "ellos/ellas/ustedes": "se duchaban" },
            "preterito_indefinido": { "yo": "me duché", "tú": "te duchaste", "él/ella/usted": "se duchó", "nosotros": "nos duchamos", "vosotros": "os duchasteis", "ellos/ellas/ustedes": "se ducharon" },
            "futuro_simple": { "yo": "me ducharé", "tú": "te ducharás", "él/ella/usted": "se duchará", "nosotros": "nos ducharemos", "vosotros": "os ducharéis", "ellos/ellas/ustedes": "se ducharán" }
        }
    },
    {
        "infinitive": "lavarse",
        "translation": "se laver",
        "conjugations": {
            "presente": { "yo": "me lavo", "tú": "te lavas", "él/ella/usted": "se lava", "nosotros": "nos lavamos", "vosotros": "os laváis", "ellos/ellas/ustedes": "se lavan" },
            "preterito_perfecto": { "yo": "me he lavado", "tú": "te has lavado", "él/ella/usted": "se ha lavado", "nosotros": "nos hemos lavado", "vosotros": "os habéis lavado", "ellos/ellas/ustedes": "se han lavado" },
            "preterito_imperfecto": { "yo": "me lavaba", "tú": "te lavabas", "él/ella/usted": "se lavaba", "nosotros": "nos lavábamos", "vosotros": "os lavabais", "ellos/ellas/ustedes": "se lavaban" },
            "preterito_indefinido": { "yo": "me lavé", "tú": "te lavaste", "él/ella/usted": "se lavó", "nosotros": "nos lavamos", "vosotros": "os lavasteis", "ellos/ellas/ustedes": "se lavaron" },
            "futuro_simple": { "yo": "me lavaré", "tú": "te lavarás", "él/ella/usted": "se lavará", "nosotros": "nos lavaremos", "vosotros": "os lavaréis", "ellos/ellas/ustedes": "se lavarán" }
        }
    },
    {
        "infinitive": "llamarse",
        "translation": "s'appeler",
        "conjugations": {
            "presente": { "yo": "me llamo", "tú": "te llamas", "él/ella/usted": "se llama", "nosotros": "nos llamamos", "vosotros": "os llamáis", "ellos/ellas/ustedes": "se llaman" },
            "preterito_perfecto": { "yo": "me he llamado", "tú": "te has llamado", "él/ella/usted": "se ha llamado", "nosotros": "nos hemos llamado", "vosotros": "os habéis llamado", "ellos/ellas/ustedes": "se han llamado" },
            "preterito_imperfecto": { "yo": "me llamaba", "tú": "te llamabas", "él/ella/usted": "se llamaba", "nosotros": "nos llamábamos", "vosotros": "os llamabais", "ellos/ellas/ustedes": "se llamaban" },
            "preterito_indefinido": { "yo": "me llamé", "tú": "te llamaste", "él/ella/usted": "se llamó", "nosotros": "nos llamamos", "vosotros": "os llamasteis", "ellos/ellas/ustedes": "se llamaron" },
            "futuro_simple": { "yo": "me llamaré", "tú": "te llamarás", "él/ella/usted": "se llamará", "nosotros": "nos llamaremos", "vosotros": "os llamaréis", "ellos/ellas/ustedes": "se llamarán" }
        }
    },
    {
        "infinitive": "irse",
        "translation": "s'en aller",
        "conjugations": {
            "presente": { "yo": "me voy", "tú": "te vas", "él/ella/usted": "se va", "nosotros": "nos vamos", "vosotros": "os vais", "ellos/ellas/ustedes": "se van" },
            "preterito_perfecto": { "yo": "me he ido", "tú": "te has ido", "él/ella/usted": "se ha ido", "nosotros": "nos hemos ido", "vosotros": "os habéis ido", "ellos/ellas/ustedes": "se han ido" },
            "preterito_imperfecto": { "yo": "me iba", "tú": "te ibas", "él/ella/usted": "se iba", "nosotros": "nos íbamos", "vosotros": "os ibais", "ellos/ellas/ustedes": "se iban" },
            "preterito_indefinido": { "yo": "me fui", "tú": "te fuiste", "él/ella/usted": "se fue", "nosotros": "nos fuimos", "vosotros": "os fuisteis", "ellos/ellas/ustedes": "se fueron" },
            "futuro_simple": { "yo": "me iré", "tú": "te irás", "él/ella/usted": "se irá", "nosotros": "nos iremos", "vosotros": "os iréis", "ellos/ellas/ustedes": "se irán" }
        }
    }
,
    {
        "infinitive": "poner",
        "translation": "mettre",
        "conjugations": {
            "presente": { "yo": "pongo", "tú": "pones", "él/ella/usted": "pone", "nosotros": "ponemos", "vosotros": "ponéis", "ellos/ellas/ustedes": "ponen" },
            "preterito_perfecto": { "yo": "he puesto", "tú": "has puesto", "él/ella/usted": "ha puesto", "nosotros": "hemos puesto", "vosotros": "habéis puesto", "ellos/ellas/ustedes": "han puesto" },
            "preterito_imperfecto": { "yo": "ponía", "tú": "ponías", "él/ella/usted": "ponía", "nosotros": "poníamos", "vosotros": "poníais", "ellos/ellas/ustedes": "ponían" },
            "preterito_indefinido": { "yo": "puse", "tú": "pusiste", "él/ella/usted": "puso", "nosotros": "pusimos", "vosotros": "pusisteis", "ellos/ellas/ustedes": "pusieron" },
            "futuro_simple": { "yo": "pondré", "tú": "pondrás", "él/ella/usted": "pondrá", "nosotros": "pondremos", "vosotros": "pondréis", "ellos/ellas/ustedes": "pondrán" }
        }
    },
    {
        "infinitive": "salir",
        "translation": "sortir",
        "conjugations": {
            "presente": { "yo": "salgo", "tú": "sales", "él/ella/usted": "sale", "nosotros": "salimos", "vosotros": "salís", "ellos/ellas/ustedes": "salen" },
            "preterito_perfecto": { "yo": "he salido", "tú": "has salido", "él/ella/usted": "ha salido", "nosotros": "hemos salido", "vosotros": "habéis salido", "ellos/ellas/ustedes": "han salido" },
            "preterito_imperfecto": { "yo": "salía", "tú": "salías", "él/ella/usted": "salía", "nosotros": "salíamos", "vosotros": "salíais", "ellos/ellas/ustedes": "salían" },
            "preterito_indefinido": { "yo": "salí", "tú": "saliste", "él/ella/usted": "salió", "nosotros": "salimos", "vosotros": "salisteis", "ellos/ellas/ustedes": "salieron" },
            "futuro_simple": { "yo": "saldré", "tú": "saldrás", "él/ella/usted": "saldrá", "nosotros": "saldremos", "vosotros": "saldréis", "ellos/ellas/ustedes": "saldrán" }
        }
    },
    {
        "infinitive": "venir",
        "translation": "venir",
        "conjugations": {
            "presente": { "yo": "vengo", "tú": "vienes", "él/ella/usted": "viene", "nosotros": "venimos", "vosotros": "venís", "ellos/ellas/ustedes": "vienen" },
            "preterito_perfecto": { "yo": "he venido", "tú": "has venido", "él/ella/usted": "ha venido", "nosotros": "hemos venido", "vosotros": "habéis venido", "ellos/ellas/ustedes": "han venido" },
            "preterito_imperfecto": { "yo": "venía", "tú": "venías", "él/ella/usted": "venía", "nosotros": "veníamos", "vosotros": "veníais", "ellos/ellas/ustedes": "venían" },
            "preterito_indefinido": { "yo": "vine", "tú": "viniste", "él/ella/usted": "vino", "nosotros": "vinimos", "vosotros": "vinisteis", "ellos/ellas/ustedes": "vinieron" },
            "futuro_simple": { "yo": "vendré", "tú": "vendrás", "él/ella/usted": "vendrá", "nosotros": "vendremos", "vosotros": "vendréis", "ellos/ellas/ustedes": "vendrán" }
        }
    },
    {
        "infinitive": "decir",
        "translation": "dire",
        "conjugations": {
            "presente": { "yo": "digo", "tú": "dices", "él/ella/usted": "dice", "nosotros": "decimos", "vosotros": "decís", "ellos/ellas/ustedes": "dicen" },
            "preterito_perfecto": { "yo": "he dicho", "tú": "has dicho", "él/ella/usted": "ha dicho", "nosotros": "hemos dicho", "vosotros": "habéis dicho", "ellos/ellas/ustedes": "han dicho" },
            "preterito_imperfecto": { "yo": "decía", "tú": "decías", "él/ella/usted": "decía", "nosotros": "decíamos", "vosotros": "decíais", "ellos/ellas/ustedes": "decían" },
            "preterito_indefinido": { "yo": "dije", "tú": "dijiste", "él/ella/usted": "dijo", "nosotros": "dijimos", "vosotros": "dijisteis", "ellos/ellas/ustedes": "dijeron" },
            "futuro_simple": { "yo": "diré", "tú": "dirás", "él/ella/usted": "dirá", "nosotros": "diremos", "vosotros": "diréis", "ellos/ellas/ustedes": "dirán" }
        }
    },
    {
        "infinitive": "poder",
        "translation": "pouvoir",
        "conjugations": {
            "presente": { "yo": "puedo", "tú": "puedes", "él/ella/usted": "puede", "nosotros": "podemos", "vosotros": "podéis", "ellos/ellas/ustedes": "pueden" },
            "preterito_perfecto": { "yo": "he podido", "tú": "has podido", "él/ella/usted": "ha podido", "nosotros": "hemos podido", "vosotros": "habéis podido", "ellos/ellas/ustedes": "han podido" },
            "preterito_imperfecto": { "yo": "podía", "tú": "podías", "él/ella/usted": "podía", "nosotros": "podíamos", "vosotros": "podíais", "ellos/ellas/ustedes": "podían" },
            "preterito_indefinido": { "yo": "pude", "tú": "pudiste", "él/ella/usted": "pudo", "nosotros": "pudimos", "vosotros": "pudisteis", "ellos/ellas/ustedes": "pudieron" },
            "futuro_simple": { "yo": "podré", "tú": "podrás", "él/ella/usted": "podrá", "nosotros": "podremos", "vosotros": "podréis", "ellos/ellas/ustedes": "podrán" }
        }
    },
    {
        "infinitive": "dar",
        "translation": "donner",
        "conjugations": {
            "presente": { "yo": "doy", "tú": "das", "él/ella/usted": "da", "nosotros": "damos", "vosotros": "dais", "ellos/ellas/ustedes": "dan" },
            "preterito_perfecto": { "yo": "he dado", "tú": "has dado", "él/ella/usted": "ha dado", "nosotros": "hemos dado", "vosotros": "habéis dado", "ellos/ellas/ustedes": "han dado" },
            "preterito_imperfecto": { "yo": "daba", "tú": "dabas", "él/ella/usted": "daba", "nosotros": "dábamos", "vosotros": "dabais", "ellos/ellas/ustedes": "daban" },
            "preterito_indefinido": { "yo": "di", "tú": "diste", "él/ella/usted": "dio", "nosotros": "dimos", "vosotros": "disteis", "ellos/ellas/ustedes": "dieron" },
            "futuro_simple": { "yo": "daré", "tú": "darás", "él/ella/usted": "dará", "nosotros": "daremos", "vosotros": "daréis", "ellos/ellas/ustedes": "darán" }
        }
    },
    {
        "infinitive": "recibir",
        "translation": "recevoir",
        "conjugations": {
            "presente": { "yo": "recibo", "tú": "recibes", "él/ella/usted": "recibe", "nosotros": "recibimos", "vosotros": "recibís", "ellos/ellas/ustedes": "reciben" },
            "preterito_perfecto": { "yo": "he recibido", "tú": "has recibido", "él/ella/usted": "ha recibido", "nosotros": "hemos recibido", "vosotros": "habéis recibido", "ellos/ellas/ustedes": "han recibido" },
            "preterito_imperfecto": { "yo": "recibía", "tú": "recibías", "él/ella/usted": "recibía", "nosotros": "recibíamos", "vosotros": "recibíais", "ellos/ellas/ustedes": "recibían" },
            "preterito_indefinido": { "yo": "recibí", "tú": "recibiste", "él/ella/usted": "recibió", "nosotros": "recibimos", "vosotros": "recibisteis", "ellos/ellas/ustedes": "recibieron" },
            "futuro_simple": { "yo": "recibiré", "tú": "recibirás", "él/ella/usted": "recibirá", "nosotros": "recibiremos", "vosotros": "recibiréis", "ellos/ellas/ustedes": "recibirán" }
        }
    },
    {
        "infinitive": "ver",
        "translation": "voir",
        "conjugations": {
            "presente": { "yo": "veo", "tú": "ves", "él/ella/usted": "ve", "nosotros": "vemos", "vosotros": "veis", "ellos/ellas/ustedes": "ven" },
            "preterito_perfecto": { "yo": "he visto", "tú": "has visto", "él/ella/usted": "ha visto", "nosotros": "hemos visto", "vosotros": "habéis visto", "ellos/ellas/ustedes": "han visto" },
            "preterito_imperfecto": { "yo": "veía", "tú": "veías", "él/ella/usted": "veía", "nosotros": "veíamos", "vosotros": "veíais", "ellos/ellas/ustedes": "veían" },
            "preterito_indefinido": { "yo": "vi", "tú": "viste", "él/ella/usted": "vio", "nosotros": "vimos", "vosotros": "visteis", "ellos/ellas/ustedes": "vieron" },
            "futuro_simple": { "yo": "veré", "tú": "verás", "él/ella/usted": "verá", "nosotros": "veremos", "vosotros": "veréis", "ellos/ellas/ustedes": "verán" }
        }
    },
    {
        "infinitive": "mirar",
        "translation": "regarder",
        "conjugations": {
            "presente": { "yo": "miro", "tú": "miras", "él/ella/usted": "mira", "nosotros": "miramos", "vosotros": "miráis", "ellos/ellas/ustedes": "miran" },
            "preterito_perfecto": { "yo": "he mirado", "tú": "has mirado", "él/ella/usted": "ha mirado", "nosotros": "hemos mirado", "vosotros": "habéis mirado", "ellos/ellas/ustedes": "han mirado" },
            "preterito_imperfecto": { "yo": "miraba", "tú": "mirabas", "él/ella/usted": "miraba", "nosotros": "mirábamos", "vosotros": "mirabais", "ellos/ellas/ustedes": "miraban" },
            "preterito_indefinido": { "yo": "miré", "tú": "miraste", "él/ella/usted": "miró", "nosotros": "miramos", "vosotros": "mirasteis", "ellos/ellas/ustedes": "miraron" },
            "futuro_simple": { "yo": "miraré", "tú": "mirarás", "él/ella/usted": "mirará", "nosotros": "miraremos", "vosotros": "miraréis", "ellos/ellas/ustedes": "mirarán" }
        }
    },
    {
        "infinitive": "volver",
        "translation": "revenir",
        "conjugations": {
            "presente": { "yo": "vuelvo", "tú": "vuelves", "él/ella/usted": "vuelve", "nosotros": "volvemos", "vosotros": "volvéis", "ellos/ellas/ustedes": "vuelven" },
            "preterito_perfecto": { "yo": "he vuelto", "tú": "has vuelto", "él/ella/usted": "ha vuelto", "nosotros": "hemos vuelto", "vosotros": "habéis vuelto", "ellos/ellas/ustedes": "han vuelto" },
            "preterito_imperfecto": { "yo": "volvía", "tú": "volvías", "él/ella/usted": "volvía", "nosotros": "volvíamos", "vosotros": "volvíais", "ellos/ellas/ustedes": "volvían" },
            "preterito_indefinido": { "yo": "volví", "tú": "volviste", "él/ella/usted": "volvió", "nosotros": "volvimos", "vosotros": "volvisteis", "ellos/ellas/ustedes": "volvieron" },
            "futuro_simple": { "yo": "volveré", "tú": "volverás", "él/ella/usted": "volverá", "nosotros": "volveremos", "vosotros": "volveréis", "ellos/ellas/ustedes": "volverán" }
        }
    },
    {
        "infinitive": "descansar",
        "translation": "se reposer",
        "conjugations": {
            "presente": { "yo": "descanso", "tú": "descansas", "él/ella/usted": "descansa", "nosotros": "descansamos", "vosotros": "descansáis", "ellos/ellas/ustedes": "descansan" },
            "preterito_perfecto": { "yo": "he descansado", "tú": "has descansado", "él/ella/usted": "ha descansado", "nosotros": "hemos descansado", "vosotros": "habéis descansado", "ellos/ellas/ustedes": "han descansado" },
            "preterito_imperfecto": { "yo": "descansaba", "tú": "descansabas", "él/ella/usted": "descansaba", "nosotros": "descansábamos", "vosotros": "descansabais", "ellos/ellas/ustedes": "descansaban" },
            "preterito_indefinido": { "yo": "descansé", "tú": "descansaste", "él/ella/usted": "descansó", "nosotros": "descansamos", "vosotros": "descansasteis", "ellos/ellas/ustedes": "descansaron" },
            "futuro_simple": { "yo": "descansaré", "tú": "descansarás", "él/ella/usted": "descansará", "nosotros": "descansaremos", "vosotros": "descansaréis", "ellos/ellas/ustedes": "descansarán" }
        }
    },
    {
        "infinitive": "comprar",
        "translation": "acheter",
        "conjugations": {
            "presente": { "yo": "compro", "tú": "compras", "él/ella/usted": "compra", "nosotros": "compramos", "vosotros": "compráis", "ellos/ellas/ustedes": "compran" },
            "preterito_perfecto": { "yo": "he comprado", "tú": "has comprado", "él/ella/usted": "ha comprado", "nosotros": "hemos comprado", "vosotros": "habéis comprado", "ellos/ellas/ustedes": "han comprado" },
            "preterito_imperfecto": { "yo": "compraba", "tú": "comprabas", "él/ella/usted": "compraba", "nosotros": "comprábamos", "vosotros": "comprabais", "ellos/ellas/ustedes": "compraban" },
            "preterito_indefinido": { "yo": "compré", "tú": "compraste", "él/ella/usted": "compró", "nosotros": "compramos", "vosotros": "comprasteis", "ellos/ellas/ustedes": "compraron" },
            "futuro_simple": { "yo": "compraré", "tú": "comprarás", "él/ella/usted": "comprará", "nosotros": "compraremos", "vosotros": "compraréis", "ellos/ellas/ustedes": "comprarán" }
        }
    },
    {
        "infinitive": "vender",
        "translation": "vendre",
        "conjugations": {
            "presente": { "yo": "vendo", "tú": "vendes", "él/ella/usted": "vende", "nosotros": "vendemos", "vosotros": "vendéis", "ellos/ellas/ustedes": "venden" },
            "preterito_perfecto": { "yo": "he vendido", "tú": "has vendido", "él/ella/usted": "ha vendido", "nosotros": "hemos vendido", "vosotros": "habéis vendido", "ellos/ellas/ustedes": "han vendido" },
            "preterito_imperfecto": { "yo": "vendía", "tú": "vendías", "él/ella/usted": "vendía", "nosotros": "vendíamos", "vosotros": "vendíais", "ellos/ellas/ustedes": "vendían" },
            "preterito_indefinido": { "yo": "vendí", "tú": "vendiste", "él/ella/usted": "vendió", "nosotros": "vendimos", "vosotros": "vendisteis", "ellos/ellas/ustedes": "vendieron" },
            "futuro_simple": { "yo": "venderé", "tú": "venderás", "él/ella/usted": "venderá", "nosotros": "venderemos", "vosotros": "venderéis", "ellos/ellas/ustedes": "venderán" }
        }
    },
    {
        "infinitive": "habitar",
        "translation": "habiter",
        "conjugations": {
            "presente": { "yo": "habito", "tú": "habitas", "él/ella/usted": "habita", "nosotros": "habitamos", "vosotros": "habitáis", "ellos/ellas/ustedes": "habitan" },
            "preterito_perfecto": { "yo": "he habitado", "tú": "has habitado", "él/ella/usted": "ha habitado", "nosotros": "hemos habitado", "vosotros": "habéis habitado", "ellos/ellas/ustedes": "han habitado" },
            "preterito_imperfecto": { "yo": "habitaba", "tú": "habitabas", "él/ella/usted": "habitaba", "nosotros": "habitábamos", "vosotros": "habitabais", "ellos/ellas/ustedes": "habitaban" },
            "preterito_indefinido": { "yo": "habité", "tú": "habitaste", "él/ella/usted": "habitó", "nosotros": "habitamos", "vosotros": "habitasteis", "ellos/ellas/ustedes": "habitaron" },
            "futuro_simple": { "yo": "habitaré", "tú": "habitarás", "él/ella/usted": "habitará", "nosotros": "habitaremos", "vosotros": "habitaréis", "ellos/ellas/ustedes": "habitarán" }
        }
    },
    {
        "infinitive": "gustar",
        "translation": "aimer / plaire",
        "conjugations": {
            "presente": { "yo": "gusto", "tú": "gustas", "él/ella/usted": "gusta", "nosotros": "gustamos", "vosotros": "gustáis", "ellos/ellas/ustedes": "gustan" },
            "preterito_perfecto": { "yo": "he gustado", "tú": "has gustado", "él/ella/usted": "ha gustado", "nosotros": "hemos gustado", "vosotros": "habéis gustado", "ellos/ellas/ustedes": "han gustado" },
            "preterito_imperfecto": { "yo": "gustaba", "tú": "gustabas", "él/ella/usted": "gustaba", "nosotros": "gustábamos", "vosotros": "gustabais", "ellos/ellas/ustedes": "gustaban" },
            "preterito_indefinido": { "yo": "gusté", "tú": "gustaste", "él/ella/usted": "gustó", "nosotros": "gustamos", "vosotros": "gustasteis", "ellos/ellas/ustedes": "gustaron" },
            "futuro_simple": { "yo": "gustaré", "tú": "gustarás", "él/ella/usted": "gustará", "nosotros": "gustaremos", "vosotros": "gustaréis", "ellos/ellas/ustedes": "gustarán" }
        }
    },
    {
        "infinitive": "cambiar",
        "translation": "changer",
        "conjugations": {
            "presente": { "yo": "cambio", "tú": "cambias", "él/ella/usted": "cambia", "nosotros": "cambiamos", "vosotros": "cambiáis", "ellos/ellas/ustedes": "cambian" },
            "preterito_perfecto": { "yo": "he cambiado", "tú": "has cambiado", "él/ella/usted": "ha cambiado", "nosotros": "hemos cambiado", "vosotros": "habéis cambiado", "ellos/ellas/ustedes": "han cambiado" },
            "preterito_imperfecto": { "yo": "cambiaba", "tú": "cambiabas", "él/ella/usted": "cambiaba", "nosotros": "cambiábamos", "vosotros": "cambiabais", "ellos/ellas/ustedes": "cambiaban" },
            "preterito_indefinido": { "yo": "cambié", "tú": "cambiaste", "él/ella/usted": "cambió", "nosotros": "cambiamos", "vosotros": "cambiasteis", "ellos/ellas/ustedes": "cambiaron" },
            "futuro_simple": { "yo": "cambiaré", "tú": "cambiarás", "él/ella/usted": "cambiará", "nosotros": "cambiaremos", "vosotros": "cambiaréis", "ellos/ellas/ustedes": "cambiarán" }
        }
    },
    {
        "infinitive": "beber",
        "translation": "boire",
        "conjugations": {
            "presente": { "yo": "bebo", "tú": "bebes", "él/ella/usted": "bebe", "nosotros": "bebemos", "vosotros": "bebéis", "ellos/ellas/ustedes": "beben" },
            "preterito_perfecto": { "yo": "he bebido", "tú": "has bebido", "él/ella/usted": "ha bebido", "nosotros": "hemos bebido", "vosotros": "habéis bebido", "ellos/ellas/ustedes": "han bebido" },
            "preterito_imperfecto": { "yo": "bebía", "tú": "bebías", "él/ella/usted": "bebía", "nosotros": "bebíamos", "vosotros": "bebíais", "ellos/ellas/ustedes": "bebían" },
            "preterito_indefinido": { "yo": "bebí", "tú": "bebiste", "él/ella/usted": "bebió", "nosotros": "bebimos", "vosotros": "bebisteis", "ellos/ellas/ustedes": "bebieron" },
            "futuro_simple": { "yo": "beberé", "tú": "beberás", "él/ella/usted": "beberá", "nosotros": "beberemos", "vosotros": "beberéis", "ellos/ellas/ustedes": "beberán" }
        }
    },
    {
        "infinitive": "correr",
        "translation": "courir",
        "conjugations": {
            "presente": { "yo": "corro", "tú": "corres", "él/ella/usted": "corre", "nosotros": "corremos", "vosotros": "corréis", "ellos/ellas/ustedes": "corren" },
            "preterito_perfecto": { "yo": "he corrido", "tú": "has corrido", "él/ella/usted": "ha corrido", "nosotros": "hemos corrido", "vosotros": "habéis corrido", "ellos/ellas/ustedes": "han corrido" },
            "preterito_imperfecto": { "yo": "corría", "tú": "corrías", "él/ella/usted": "corría", "nosotros": "corríamos", "vosotros": "corríais", "ellos/ellas/ustedes": "corrían" },
            "preterito_indefinido": { "yo": "corrí", "tú": "corriste", "él/ella/usted": "corrió", "nosotros": "corrimos", "vosotros": "corristeis", "ellos/ellas/ustedes": "corrieron" },
            "futuro_simple": { "yo": "correré", "tú": "correrás", "él/ella/usted": "correrá", "nosotros": "correremos", "vosotros": "correréis", "ellos/ellas/ustedes": "correrán" }
        }
    },
    {
        "infinitive": "romper",
        "translation": "casser",
        "conjugations": {
            "presente": { "yo": "rompo", "tú": "rompes", "él/ella/usted": "rompe", "nosotros": "rompemos", "vosotros": "rompéis", "ellos/ellas/ustedes": "rompen" },
            "preterito_perfecto": { "yo": "he roto", "tú": "has roto", "él/ella/usted": "ha roto", "nosotros": "hemos roto", "vosotros": "habéis roto", "ellos/ellas/ustedes": "han roto" },
            "preterito_imperfecto": { "yo": "rompía", "tú": "rompías", "él/ella/usted": "rompía", "nosotros": "rompíamos", "vosotros": "rompíais", "ellos/ellas/ustedes": "rompían" },
            "preterito_indefinido": { "yo": "rompí", "tú": "rompiste", "él/ella/usted": "rompió", "nosotros": "rompimos", "vosotros": "rompisteis", "ellos/ellas/ustedes": "rompieron" },
            "futuro_simple": { "yo": "romperé", "tú": "romperás", "él/ella/usted": "romperá", "nosotros": "romperemos", "vosotros": "romperéis", "ellos/ellas/ustedes": "romperán" }
        }
    },
    {
        "infinitive": "comprender",
        "translation": "comprendre",
        "conjugations": {
            "presente": { "yo": "comprendo", "tú": "comprendes", "él/ella/usted": "comprende", "nosotros": "comprendemos", "vosotros": "comprendéis", "ellos/ellas/ustedes": "comprenden" },
            "preterito_perfecto": { "yo": "he comprendido", "tú": "has comprendido", "él/ella/usted": "ha comprendido", "nosotros": "hemos comprendido", "vosotros": "habéis comprendido", "ellos/ellas/ustedes": "han comprendido" },
            "preterito_imperfecto": { "yo": "comprendía", "tú": "comprendías", "él/ella/usted": "comprendía", "nosotros": "comprendíamos", "vosotros": "comprendíais", "ellos/ellas/ustedes": "comprendían" },
            "preterito_indefinido": { "yo": "comprendí", "tú": "comprendiste", "él/ella/usted": "comprendió", "nosotros": "comprendimos", "vosotros": "comprendisteis", "ellos/ellas/ustedes": "comprendieron" },
            "futuro_simple": { "yo": "comprenderé", "tú": "comprenderás", "él/ella/usted": "comprenderá", "nosotros": "comprenderemos", "vosotros": "comprenderéis", "ellos/ellas/ustedes": "comprenderán" }
        }
    },
    {
        "infinitive": "cubrir",
        "translation": "couvrir",
        "conjugations": {
            "presente": { "yo": "cubro", "tú": "cubres", "él/ella/usted": "cubre", "nosotros": "cubrimos", "vosotros": "cubrís", "ellos/ellas/ustedes": "cubren" },
            "preterito_perfecto": { "yo": "he cubierto", "tú": "has cubierto", "él/ella/usted": "ha cubierto", "nosotros": "hemos cubierto", "vosotros": "habéis cubierto", "ellos/ellas/ustedes": "han cubierto" },
            "preterito_imperfecto": { "yo": "cubría", "tú": "cubrías", "él/ella/usted": "cubría", "nosotros": "cubríamos", "vosotros": "cubríais", "ellos/ellas/ustedes": "cubrían" },
            "preterito_indefinido": { "yo": "cubrí", "tú": "cubriste", "él/ella/usted": "cubrió", "nosotros": "cubrimos", "vosotros": "cubristeis", "ellos/ellas/ustedes": "cubrieron" },
            "futuro_simple": { "yo": "cubriré", "tú": "cubrirás", "él/ella/usted": "cubrirá", "nosotros": "cubriremos", "vosotros": "cubriréis", "ellos/ellas/ustedes": "cubrirán" }
        }
    },
    {
        "infinitive": "servir",
        "translation": "servir",
        "conjugations": {
            "presente": { "yo": "sirvo", "tú": "sirves", "él/ella/usted": "sirve", "nosotros": "servimos", "vosotros": "servís", "ellos/ellas/ustedes": "sirven" },
            "preterito_perfecto": { "yo": "he servido", "tú": "has servido", "él/ella/usted": "ha servido", "nosotros": "hemos servido", "vosotros": "habéis servido", "ellos/ellas/ustedes": "han servido" },
            "preterito_imperfecto": { "yo": "servía", "tú": "servías", "él/ella/usted": "servía", "nosotros": "servíamos", "vosotros": "servíais", "ellos/ellas/ustedes": "servían" },
            "preterito_indefinido": { "yo": "serví", "tú": "serviste", "él/ella/usted": "sirvió", "nosotros": "servimos", "vosotros": "servisteis", "ellos/ellas/ustedes": "sirvieron" },
            "futuro_simple": { "yo": "serviré", "tú": "servirás", "él/ella/usted": "servirá", "nosotros": "serviremos", "vosotros": "serviréis", "ellos/ellas/ustedes": "servirán" }
        }
    },
    {
        "infinitive": "permitir",
        "translation": "permettre",
        "conjugations": {
            "presente": { "yo": "permito", "tú": "permites", "él/ella/usted": "permite", "nosotros": "permitimos", "vosotros": "permitís", "ellos/ellas/ustedes": "permiten" },
            "preterito_perfecto": { "yo": "he permitido", "tú": "has permitido", "él/ella/usted": "ha permitido", "nosotros": "hemos permitido", "vosotros": "habéis permitido", "ellos/ellas/ustedes": "han permitido" },
            "preterito_imperfecto": { "yo": "permitía", "tú": "permitías", "él/ella/usted": "permitía", "nosotros": "permitíamos", "vosotros": "permitíais", "ellos/ellas/ustedes": "permitían" },
            "preterito_indefinido": { "yo": "permití", "tú": "permitiste", "él/ella/usted": "permitió", "nosotros": "permitimos", "vosotros": "permitisteis", "ellos/ellas/ustedes": "permitieron" },
            "futuro_simple": { "yo": "permitiré", "tú": "permitirás", "él/ella/usted": "permitirá", "nosotros": "permitiremos", "vosotros": "permitiréis", "ellos/ellas/ustedes": "permitirán" }
        }
    },
    {
        "infinitive": "escuchar",
        "translation": "écouter",
        "conjugations": {
            "presente": { "yo": "escucho", "tú": "escuchas", "él/ella/usted": "escucha", "nosotros": "escuchamos", "vosotros": "escucháis", "ellos/ellas/ustedes": "escuchan" },
            "preterito_perfecto": { "yo": "he escuchado", "tú": "has escuchado", "él/ella/usted": "ha escuchado", "nosotros": "hemos escuchado", "vosotros": "habéis escuchado", "ellos/ellas/ustedes": "han escuchado" },
            "preterito_imperfecto": { "yo": "escuchaba", "tú": "escuchabas", "él/ella/usted": "escuchaba", "nosotros": "escuchábamos", "vosotros": "escuchabais", "ellos/ellas/ustedes": "escuchaban" },
            "preterito_indefinido": { "yo": "escuché", "tú": "escuchaste", "él/ella/usted": "escuchó", "nosotros": "escuchamos", "vosotros": "escuchasteis", "ellos/ellas/ustedes": "escucharon" },
            "futuro_simple": { "yo": "escucharé", "tú": "escucharás", "él/ella/usted": "escuchará", "nosotros": "escucharemos", "vosotros": "escucharéis", "ellos/ellas/ustedes": "escucharán" }
        }
    },
    {
        "infinitive": "llamar",
        "translation": "appeler",
        "conjugations": {
            "presente": { "yo": "llamo", "tú": "llamas", "él/ella/usted": "llama", "nosotros": "llamamos", "vosotros": "llamáis", "ellos/ellas/ustedes": "llaman" },
            "preterito_perfecto": { "yo": "he llamado", "tú": "has llamado", "él/ella/usted": "ha llamado", "nosotros": "hemos llamado", "vosotros": "habéis llamado", "ellos/ellas/ustedes": "han llamado" },
            "preterito_imperfecto": { "yo": "llamaba", "tú": "llamabas", "él/ella/usted": "llamaba", "nosotros": "llamábamos", "vosotros": "llamabais", "ellos/ellas/ustedes": "llamaban" },
            "preterito_indefinido": { "yo": "llamé", "tú": "llamaste", "él/ella/usted": "llamó", "nosotros": "llamamos", "vosotros": "llamasteis", "ellos/ellas/ustedes": "llamaron" },
            "futuro_simple": { "yo": "llamaré", "tú": "llamarás", "él/ella/usted": "llamará", "nosotros": "llamaremos", "vosotros": "llamaréis", "ellos/ellas/ustedes": "llamarán" }
        }
    },
    {
        "infinitive": "bailar",
        "translation": "danser",
        "conjugations": {
            "presente": { "yo": "bailo", "tú": "bailas", "él/ella/usted": "baila", "nosotros": "bailamos", "vosotros": "bailáis", "ellos/ellas/ustedes": "bailan" },
            "preterito_perfecto": { "yo": "he bailado", "tú": "has bailado", "él/ella/usted": "ha bailado", "nosotros": "hemos bailado", "vosotros": "habéis bailado", "ellos/ellas/ustedes": "han bailado" },
            "preterito_imperfecto": { "yo": "bailaba", "tú": "bailabas", "él/ella/usted": "bailaba", "nosotros": "bailábamos", "vosotros": "bailabais", "ellos/ellas/ustedes": "bailaban" },
            "preterito_indefinido": { "yo": "bailé", "tú": "bailaste", "él/ella/usted": "bailó", "nosotros": "bailamos", "vosotros": "bailasteis", "ellos/ellas/ustedes": "bailaron" },
            "futuro_simple": { "yo": "bailaré", "tú": "bailarás", "él/ella/usted": "bailará", "nosotros": "bailaremos", "vosotros": "bailaréis", "ellos/ellas/ustedes": "bailarán" }
        }
    },
    {
        "infinitive": "cantar",
        "translation": "chanter",
        "conjugations": {
            "presente": { "yo": "canto", "tú": "cantas", "él/ella/usted": "canta", "nosotros": "cantamos", "vosotros": "cantáis", "ellos/ellas/ustedes": "cantan" },
            "preterito_perfecto": { "yo": "he cantado", "tú": "has cantado", "él/ella/usted": "ha cantado", "nosotros": "hemos cantado", "vosotros": "habéis cantado", "ellos/ellas/ustedes": "han cantado" },
            "preterito_imperfecto": { "yo": "cantaba", "tú": "cantabas", "él/ella/usted": "cantaba", "nosotros": "cantábamos", "vosotros": "cantabais", "ellos/ellas/ustedes": "cantaban" },
            "preterito_indefinido": { "yo": "canté", "tú": "cantaste", "él/ella/usted": "cantó", "nosotros": "cantamos", "vosotros": "cantasteis", "ellos/ellas/ustedes": "cantaron" },
            "futuro_simple": { "yo": "cantaré", "tú": "cantarás", "él/ella/usted": "cantará", "nosotros": "cantaremos", "vosotros": "cantaréis", "ellos/ellas/ustedes": "cantarán" }
        }
    },
    {
        "infinitive": "caminar",
        "translation": "marcher",
        "conjugations": {
            "presente": { "yo": "camino", "tú": "caminas", "él/ella/usted": "camina", "nosotros": "caminamos", "vosotros": "camináis", "ellos/ellas/ustedes": "caminan" },
            "preterito_perfecto": { "yo": "he caminado", "tú": "has caminado", "él/ella/usted": "ha caminado", "nosotros": "hemos caminado", "vosotros": "habéis caminado", "ellos/ellas/ustedes": "han caminado" },
            "preterito_imperfecto": { "yo": "caminaba", "tú": "caminabas", "él/ella/usted": "caminaba", "nosotros": "caminábamos", "vosotros": "caminabais", "ellos/ellas/ustedes": "caminaban" },
            "preterito_indefinido": { "yo": "caminé", "tú": "caminaste", "él/ella/usted": "caminó", "nosotros": "caminamos", "vosotros": "caminasteis", "ellos/ellas/ustedes": "caminaron" },
            "futuro_simple": { "yo": "caminaré", "tú": "caminarás", "él/ella/usted": "caminará", "nosotros": "caminaremos", "vosotros": "caminaréis", "ellos/ellas/ustedes": "caminarán" }
        }
    },
    {
        "infinitive": "estudiar",
        "translation": "étudier",
        "conjugations": {
            "presente": { "yo": "estudio", "tú": "estudias", "él/ella/usted": "estudia", "nosotros": "estudiamos", "vosotros": "estudiáis", "ellos/ellas/ustedes": "estudian" },
            "preterito_perfecto": { "yo": "he estudiado", "tú": "has estudiado", "él/ella/usted": "ha estudiado", "nosotros": "hemos estudiado", "vosotros": "habéis estudiado", "ellos/ellas/ustedes": "han estudiado" },
            "preterito_imperfecto": { "yo": "estudiaba", "tú": "estudiabas", "él/ella/usted": "estudiaba", "nosotros": "estudiábamos", "vosotros": "estudiabais", "ellos/ellas/ustedes": "estudiaban" },
            "preterito_indefinido": { "yo": "estudié", "tú": "estudiaste", "él/ella/usted": "estudió", "nosotros": "estudiamos", "vosotros": "estudiasteis", "ellos/ellas/ustedes": "estudiaron" },
            "futuro_simple": { "yo": "estudiaré", "tú": "estudiarás", "él/ella/usted": "estudiará", "nosotros": "estudiaremos", "vosotros": "estudiaréis", "ellos/ellas/ustedes": "estudiarán" }
        }
    },
    {
        "infinitive": "quitar",
        "translation": "enlever",
        "conjugations": {
            "presente": { "yo": "quito", "tú": "quitas", "él/ella/usted": "quita", "nosotros": "quitamos", "vosotros": "quitáis", "ellos/ellas/ustedes": "quitan" },
            "preterito_perfecto": { "yo": "he quitado", "tú": "has quitado", "él/ella/usted": "ha quitado", "nosotros": "hemos quitado", "vosotros": "habéis quitado", "ellos/ellas/ustedes": "han quitado" },
            "preterito_imperfecto": { "yo": "quitaba", "tú": "quitabas", "él/ella/usted": "quitaba", "nosotros": "quitábamos", "vosotros": "quitabais", "ellos/ellas/ustedes": "quitaban" },
            "preterito_indefinido": { "yo": "quité", "tú": "quitaste", "él/ella/usted": "quitó", "nosotros": "quitamos", "vosotros": "quitasteis", "ellos/ellas/ustedes": "quitaron" },
            "futuro_simple": { "yo": "quitaré", "tú": "quitarás", "él/ella/usted": "quitará", "nosotros": "quitaremos", "vosotros": "quitaréis", "ellos/ellas/ustedes": "quitarán" }
        }
    },
    {
        "infinitive": "enseñar",
        "translation": "enseigner",
        "conjugations": {
            "presente": { "yo": "enseño", "tú": "enseñas", "él/ella/usted": "enseña", "nosotros": "enseñamos", "vosotros": "enseñáis", "ellos/ellas/ustedes": "enseñan" },
            "preterito_perfecto": { "yo": "he enseñado", "tú": "has enseñado", "él/ella/usted": "ha enseñado", "nosotros": "hemos enseñado", "vosotros": "habéis enseñado", "ellos/ellas/ustedes": "han enseñado" },
            "preterito_imperfecto": { "yo": "enseñaba", "tú": "enseñabas", "él/ella/usted": "enseñaba", "nosotros": "enseñábamos", "vosotros": "enseñabais", "ellos/ellas/ustedes": "enseñaban" },
            "preterito_indefinido": { "yo": "enseñé", "tú": "enseñaste", "él/ella/usted": "enseñó", "nosotros": "enseñamos", "vosotros": "enseñasteis", "ellos/ellas/ustedes": "enseñaron" },
            "futuro_simple": { "yo": "enseñaré", "tú": "enseñarás", "él/ella/usted": "enseñará", "nosotros": "enseñaremos", "vosotros": "enseñaréis", "ellos/ellas/ustedes": "enseñarán" }
        }
    },
    {
        "infinitive": "intentar",
        "translation": "essayer",
        "conjugations": {
            "presente": { "yo": "intento", "tú": "intentas", "él/ella/usted": "intenta", "nosotros": "intentamos", "vosotros": "intentáis", "ellos/ellas/ustedes": "intentan" },
            "preterito_perfecto": { "yo": "he intentado", "tú": "has intentado", "él/ella/usted": "ha intentado", "nosotros": "hemos intentado", "vosotros": "habéis intentado", "ellos/ellas/ustedes": "han intentado" },
            "preterito_imperfecto": { "yo": "intentaba", "tú": "intentabas", "él/ella/usted": "intentaba", "nosotros": "intentábamos", "vosotros": "intentabais", "ellos/ellas/ustedes": "intentaban" },
            "preterito_indefinido": { "yo": "intenté", "tú": "intentaste", "él/ella/usted": "intentó", "nosotros": "intentamos", "vosotros": "intentasteis", "ellos/ellas/ustedes": "intentaron" },
            "futuro_simple": { "yo": "intentaré", "tú": "intentarás", "él/ella/usted": "intentará", "nosotros": "intentaremos", "vosotros": "intentaréis", "ellos/ellas/ustedes": "intentarán" }
        }
    },
    {
        "infinitive": "olvidar",
        "translation": "oublier",
        "conjugations": {
            "presente": { "yo": "olvido", "tú": "olvidas", "él/ella/usted": "olvida", "nosotros": "olvidamos", "vosotros": "olvidáis", "ellos/ellas/ustedes": "olvidan" },
            "preterito_perfecto": { "yo": "he olvidado", "tú": "has olvidado", "él/ella/usted": "ha olvidado", "nosotros": "hemos olvidado", "vosotros": "habéis olvidado", "ellos/ellas/ustedes": "han olvidado" },
            "preterito_imperfecto": { "yo": "olvidaba", "tú": "olvidabas", "él/ella/usted": "olvidaba", "nosotros": "olvidábamos", "vosotros": "olvidabais", "ellos/ellas/ustedes": "olvidaban" },
            "preterito_indefinido": { "yo": "olvidé", "tú": "olvidaste", "él/ella/usted": "olvidó", "nosotros": "olvidamos", "vosotros": "olvidasteis", "ellos/ellas/ustedes": "olvidaron" },
            "futuro_simple": { "yo": "olvidaré", "tú": "olvidarás", "él/ella/usted": "olvidará", "nosotros": "olvidaremos", "vosotros": "olvidaréis", "ellos/ellas/ustedes": "olvidarán" }
        }
    },
    {
        "infinitive": "seguir",
        "translation": "suivre",
        "conjugations": {
            "presente": { "yo": "sigo", "tú": "sigues", "él/ella/usted": "sigue", "nosotros": "seguimos", "vosotros": "seguís", "ellos/ellas/ustedes": "siguen" },
            "preterito_perfecto": { "yo": "he seguido", "tú": "has seguido", "él/ella/usted": "ha seguido", "nosotros": "hemos seguido", "vosotros": "habéis seguido", "ellos/ellas/ustedes": "han seguido" },
            "preterito_imperfecto": { "yo": "seguía", "tú": "seguías", "él/ella/usted": "seguía", "nosotros": "seguíamos", "vosotros": "seguíais", "ellos/ellas/ustedes": "seguían" },
            "preterito_indefinido": { "yo": "seguí", "tú": "seguiste", "él/ella/usted": "siguió", "nosotros": "seguimos", "vosotros": "seguisteis", "ellos/ellas/ustedes": "siguieron" },
            "futuro_simple": { "yo": "seguiré", "tú": "seguirás", "él/ella/usted": "seguirá", "nosotros": "seguiremos", "vosotros": "seguiréis", "ellos/ellas/ustedes": "seguirán" }
        }
    },
    {
        "infinitive": "creer",
        "translation": "croire",
        "conjugations": {
            "presente": { "yo": "creo", "tú": "crees", "él/ella/usted": "cree", "nosotros": "creemos", "vosotros": "creéis", "ellos/ellas/ustedes": "creen" },
            "preterito_perfecto": { "yo": "he creído", "tú": "has creído", "él/ella/usted": "ha creído", "nosotros": "hemos creído", "vosotros": "habéis creído", "ellos/ellas/ustedes": "han creído" },
            "preterito_imperfecto": { "yo": "creía", "tú": "creías", "él/ella/usted": "creía", "nosotros": "creíamos", "vosotros": "creíais", "ellos/ellas/ustedes": "creían" },
            "preterito_indefinido": { "yo": "creí", "tú": "creíste", "él/ella/usted": "creyó", "nosotros": "creímos", "vosotros": "creísteis", "ellos/ellas/ustedes": "creyeron" },
            "futuro_simple": { "yo": "creeré", "tú": "creerás", "él/ella/usted": "creerá", "nosotros": "creeremos", "vosotros": "creeréis", "ellos/ellas/ustedes": "creerán" }
        }
    },
    {
        "infinitive": "crear",
        "translation": "créer",
        "conjugations": {
            "presente": { "yo": "creo", "tú": "creas", "él/ella/usted": "crea", "nosotros": "creamos", "vosotros": "creáis", "ellos/ellas/ustedes": "crean" },
            "preterito_perfecto": { "yo": "he creado", "tú": "has creado", "él/ella/usted": "ha creado", "nosotros": "hemos creado", "vosotros": "habéis creado", "ellos/ellas/ustedes": "han creado" },
            "preterito_imperfecto": { "yo": "creaba", "tú": "creabas", "él/ella/usted": "creaba", "nosotros": "creábamos", "vosotros": "creabais", "ellos/ellas/ustedes": "creaban" },
            "preterito_indefinido": { "yo": "creé", "tú": "creaste", "él/ella/usted": "creó", "nosotros": "creamos", "vosotros": "creasteis", "ellos/ellas/ustedes": "crearon" },
            "futuro_simple": { "yo": "crearé", "tú": "crearás", "él/ella/usted": "creará", "nosotros": "crearemos", "vosotros": "crearéis", "ellos/ellas/ustedes": "crearán" }
        }
    },
    {
        "infinitive": "esperar",
        "translation": "attendre / espérer",
        "conjugations": {
            "presente": { "yo": "espero", "tú": "esperas", "él/ella/usted": "espera", "nosotros": "esperamos", "vosotros": "esperáis", "ellos/ellas/ustedes": "esperan" },
            "preterito_perfecto": { "yo": "he esperado", "tú": "has esperado", "él/ella/usted": "ha esperado", "nosotros": "hemos esperado", "vosotros": "habéis esperado", "ellos/ellas/ustedes": "han esperado" },
            "preterito_imperfecto": { "yo": "esperaba", "tú": "esperabas", "él/ella/usted": "esperaba", "nosotros": "esperábamos", "vosotros": "esperabais", "ellos/ellas/ustedes": "esperaban" },
            "preterito_indefinido": { "yo": "esperé", "tú": "esperaste", "él/ella/usted": "esperó", "nosotros": "esperamos", "vosotros": "esperasteis", "ellos/ellas/ustedes": "esperaron" },
            "futuro_simple": { "yo": "esperaré", "tú": "esperarás", "él/ella/usted": "esperará", "nosotros": "esperaremos", "vosotros": "esperaréis", "ellos/ellas/ustedes": "esperarán" }
        }
    },
    {
        "infinitive": "saber",
        "translation": "savoir",
        "conjugations": {
            "presente": { "yo": "sé", "tú": "sabes", "él/ella/usted": "sabe", "nosotros": "sabemos", "vosotros": "sabéis", "ellos/ellas/ustedes": "saben" },
            "preterito_perfecto": { "yo": "he sabido", "tú": "has sabido", "él/ella/usted": "ha sabido", "nosotros": "hemos sabido", "vosotros": "habéis sabido", "ellos/ellas/ustedes": "han sabido" },
            "preterito_imperfecto": { "yo": "sabía", "tú": "sabías", "él/ella/usted": "sabía", "nosotros": "sabíamos", "vosotros": "sabíais", "ellos/ellas/ustedes": "sabían" },
            "preterito_indefinido": { "yo": "supe", "tú": "supiste", "él/ella/usted": "supo", "nosotros": "supimos", "vosotros": "supisteis", "ellos/ellas/ustedes": "supieron" },
            "futuro_simple": { "yo": "sabré", "tú": "sabrás", "él/ella/usted": "sabrá", "nosotros": "sabremos", "vosotros": "sabréis", "ellos/ellas/ustedes": "sabrán" }
        }
    },
    {
        "infinitive": "pensar",
        "translation": "penser",
        "conjugations": {
            "presente": { "yo": "pienso", "tú": "piensas", "él/ella/usted": "piensa", "nosotros": "pensamos", "vosotros": "pensáis", "ellos/ellas/ustedes": "piensan" },
            "preterito_perfecto": { "yo": "he pensado", "tú": "has pensado", "él/ella/usted": "ha pensado", "nosotros": "hemos pensado", "vosotros": "habéis pensado", "ellos/ellas/ustedes": "han pensado" },
            "preterito_imperfecto": { "yo": "pensaba", "tú": "pensabas", "él/ella/usted": "pensaba", "nosotros": "pensábamos", "vosotros": "pensabais", "ellos/ellas/ustedes": "pensaban" },
            "preterito_indefinido": { "yo": "pensé", "tú": "pensaste", "él/ella/usted": "pensó", "nosotros": "pensamos", "vosotros": "pensasteis", "ellos/ellas/ustedes": "pensaron" },
            "futuro_simple": { "yo": "pensaré", "tú": "pensarás", "él/ella/usted": "pensará", "nosotros": "pensaremos", "vosotros": "pensaréis", "ellos/ellas/ustedes": "pensarán" }
        }
    },
    {
        "infinitive": "necesitar",
        "translation": "avoir besoin",
        "conjugations": {
            "presente": { "yo": "necesito", "tú": "necesitas", "él/ella/usted": "necesita", "nosotros": "necesitamos", "vosotros": "necesitáis", "ellos/ellas/ustedes": "necesitan" },
            "preterito_perfecto": { "yo": "he necesitado", "tú": "has necesitado", "él/ella/usted": "ha necesitado", "nosotros": "hemos necesitado", "vosotros": "habéis necesitado", "ellos/ellas/ustedes": "han necesitado" },
            "preterito_imperfecto": { "yo": "necesitaba", "tú": "necesitabas", "él/ella/usted": "necesitaba", "nosotros": "necesitábamos", "vosotros": "necesitabais", "ellos/ellas/ustedes": "necesitaban" },
            "preterito_indefinido": { "yo": "necesité", "tú": "necesitaste", "él/ella/usted": "necesitó", "nosotros": "necesitamos", "vosotros": "necesitasteis", "ellos/ellas/ustedes": "necesitaron" },
            "futuro_simple": { "yo": "necesitaré", "tú": "necesitarás", "él/ella/usted": "necesitará", "nosotros": "necesitaremos", "vosotros": "necesitaréis", "ellos/ellas/ustedes": "necesitarán" }
        }
    }
];
