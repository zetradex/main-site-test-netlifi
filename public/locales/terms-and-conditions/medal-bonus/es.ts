import { MedalBonusLocaleType } from "./types";

export default {
  TheMedalBonusAgreement: "El acuerdo de bonificación de medallas",
  Chapter1: "Capítulo 1. Condiciones generales, terminología",
  Chapter1_1:
    "1.1 Este acuerdo se celebra entre la empresa Zetradex Holding LTD (en adelante, la empresa) y el cliente de la empresa. Según el acuerdo, la Compañía prevé el uso sobre la base de pago, y el cliente acepta fondos en forma de un bono no retirable (bono Medal), con el fin de comerciar y obtener ganancias que pueden retirarse bajo ciertas condiciones. .",
  Chapter1_2:
    "1.2 La recepción de un bono no impide el retiro de fondos y ganancias, pero estos eventos pueden afectar el monto adicional del bono en la cuenta comercial.",
  Chapter1_3:
    "1.3. El bono no se puede otorgar a una cuenta que ya tenga otros bonos, ya que requiere configuraciones especiales que son incompatibles con las configuraciones de otros bonos.",
  Chapter1_4:
    "1.4 El bono se puede recibir únicamente por el primer depósito, máximo 5 cuentas. Si el depósito inicial se divide en 2 partes y se acredita al mismo tiempo, el bono se otorgará a la primera parte, mientras que la segunda parte se considerará como el segundo depósito y, en consecuencia, no tiene bonificación según este Acuerdo.",
  Chapter1_5:
    "1.5 El monto del bono de medalla se ha determinado en el nivel 333% sobre el primer depósito.",
  Chapter1_6:
    "1.7 Ambos bonos no se pueden agregar a la misma cuenta, pero se pueden agregar y usar con cuentas diferentes al mismo tiempo.",
  Chapter1_7:
    "1.8 El nivel de margen es una proporción del capital con respecto al margen, en la que la plataforma determina el stop out y el margin call.",
  Chapter1_8:
    "1.9 Al recibir este bono en sus cuentas comerciales, el cliente confirma que ha leído y acepta los términos del bono.",
  Chapter2: "Capítulo 2. Derechos y obligaciones de las partes",
  Chapter2_1:
    "2.1 El Cliente tiene derecho a recibir un bono por un máximo de 5 (cinco) cuentas, así como a beneficiarse de los bonos recibidos en el curso de la negociación, dentro de las estrategias comerciales no prohibidas por las cláusulas del Acuerdo del Cliente.",
  Chapter2_2:
    "2.2. El cliente tiene derecho a solicitar un bono, si fue solicitado previamente, pero no concedido automáticamente, dentro de una semana después del depósito.",
  Chapter2_3:
    "2.3. La Compañía no tiene el derecho bajo este Acuerdo de establecer requisitos adicionales, como el volumen de lotes negociados o el plazo para la negociación.",
  Chapter2_4:
    "2.4. La Compañía no establece el máximo de bonos que se pueden agregar al primer depósito.",
  Chapter2_5:
    "2.5 La Compañía cambiará el apalancamiento a 1:1000 si fuera mayor, con el objetivo de agregar un bono a la cuenta. Después de la cancelación del bono, un cliente puede aumentar el apalancamiento a un volumen mayor que antes.",
  Chapter2_6:
    "2.6. La Compañía tiene derecho a cancelar el bono si el cliente violó los términos y condiciones del Acuerdo del Cliente y abusó de los bonos. El cliente acepta que en caso de que la Compañía detecte hechos de fraude de bonos, las transacciones del cliente pueden invalidarse y los resultados comerciales pueden cancelarse. En este caso, la Compañía no es responsable de las consecuencias, tales como paradas y pérdidas relacionadas.",
  Chapter2_7:
    "2.7 La Compañía tiene derecho a cancelar el bono si el nivel de margen es inferior al 100%, lo que indica una reducción significativa y un uso incorrecto del bono, sin importar si el nivel de margen se restablece pronto o no.",
  Chapter3:
    "Capítulo 3. Aspecto financiero, detallando el funcionamiento del bono (devengo, procedimiento de cancelación, retiros).",
  Chapter3_1:
    "3.1. Para garantizar el correcto funcionamiento del sistema de bonificación y la distribución de beneficios, la Compañía recomienda encarecidamente que todas las transacciones se cierren antes de retirar dinero.",
  Chapter3_2:
    "3.2. En caso de una reducción significativa de fondos, la Compañía verifica automáticamente la necesidad de cancelar el bono utilizando las siguientes fórmulas:",
  Chapter3_2_1: "El bono se cancelará o guardará, según la proporción:",
  Chapter3_2_3:
    "donde: Y = depósito, parte retirable del saldo, P = resultado comercial obtenido (beneficio), Z = bonificación de medalla",
  Chapter3_2_4: "Ejemplo",
  Chapter3_2_5: "Depositar 100$",
  Chapter3_2_6: "bono = $333",
  Chapter3_2_7: "Beneficio = -65$",
  Chapter3_2_8: "Verificamos con la fórmula y vemos la reducción máxima:",
  Chapter3_2_9:
    "Los bonos se cancelarán porque la ganancia = -65, que es inferior al nivel -44,74",
  Chapter3_3:
    "3.3. Al retirar, el bono se cancelará tan pronto como recibamos su solicitud debido a un cambio de proporción entre depósito y bonos.",
  Chapter3_4:
    "3.4. El beneficio recibido del bono se calcula y acredita en una cantidad proporcional entre ambas partes: depósito y bonificación cada vez que cierras un trato. Cada acuerdo afecta la distribución de ganancias entre los balances de diferentes maneras. El beneficio que pasa a formar parte del bono puede considerarse como pago por los bonos proporcionados y no puede devolverse al cliente si el servicio de provisión del bono se proporciona en su totalidad. Para reducir el pago del bono Medal, los clientes pueden recargar sus cuentas con sus propios fondos, con el objetivo de cambiar la proporción entre el dinero propio y los bonos a su favor.",
  Chapter3_5:
    "3.5. Ambas partes podrán declarar la terminación anticipada de este Acuerdo. La Compañía se compromete a cancelar el bono, a petición del Cliente, sin dar motivos. La Compañía, a su vez, también se reserva el derecho de cancelar el bono y retirarse de este acuerdo, ya que el bono es propiedad de la Compañía.",
} as MedalBonusLocaleType;
