export type Message = {
    to: string;
    from: string;
    subject: string;
    html: string;
};

export const TemmplateEmail = `
    <h1> Olá, CLIENTE. </h1>
    <h2> Aqui está seu orçamento, no valor de R$ VALOR </h2>
    <p> Por favor, verifique se o orçamento em anexo contempla os doces solicitados para confirmação do pedido. </p> </br>
    <p> Lembramos que a confirmação do pedido deve ser realizada até 48h antes do evento </p>`