export class Address {

  constructor(
    public id: number, // Identificador único do endereço
    public rua: string, // Nome da rua
    public numero: string, // Número da residência
    public bairro: string, // Bairro
    public complemento: string, // Complemento do endereço (ex: apartamento)
    public cidade: string, // Nome da cidade
    public uf: string // Sigla do estado (ex: RN para Rio Grande do Norte)
  ) {}


}
