export interface ISendMail {
    sendEmail(mailTo: string, preenchedor?: string): Promise<void>;
}