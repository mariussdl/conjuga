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
];
