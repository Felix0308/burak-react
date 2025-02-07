export enum OrderStatus {  // basketimiz orqali orderni hosil qilsak:
    PAUSE = "PAUSE",      // kutish jarayonida
    PROCESS = "PROCESS",  // dastafka qilish jarayonida (to'lov amalga oshirilgandan so'ng)
    FINISH = "FINISH",    // dastafka bo'lgandan keyingi jarayon
    DELETE = "DELETE",    // to'lov qilmasdan PAUSEDdan DELETE qilishga o'tish
}