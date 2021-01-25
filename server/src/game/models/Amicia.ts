import MaximumCapacityError from './MaximumCapacityError'

export default class Amicia {
  private qtdPedras;
  private qtdJarros;

  // Recursos/Alquimia
  private qtdEnxofre;
  private qtdSalitre;
  private qtdAlcool;
  private qtdEpisanguis;

  // Materiais
  private qtdTecidos;
  private qtdCouro;
  private qtdBarbantes;

  // Projeteis
  private qtdIgnifer;
  private qtdExtinguis;
  private qtdSomnum;
  private qtdLuminosa;
  private qtdOdoris;
  private qtdDevorantis;

  private nivelProjeteis;
  private maximoProjeteis = [6, 10, 14, 22];

  private nivelItens;
  private maximoItens = [8, 12, 16, 22];

  public static ERR_RECURSOS_INSUFICIENTES = 'Recursos insuficientes';
  public static ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM = 'Não é possível criar mais desse item';
  public static ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM = 'Não é possível pegar mais desse item';

  public constructor () {
    this.nivelItens = 0
    this.nivelProjeteis = 0

    this.qtdPedras = 0
    this.qtdJarros = 0

    this.qtdEnxofre = 0
    this.qtdSalitre = 0
    this.qtdAlcool = 0
    this.qtdEpisanguis = 0

    this.qtdTecidos = 0
    this.qtdCouro = 0
    this.qtdBarbantes = 0

    this.qtdIgnifer = 0
    this.qtdExtinguis = 0
    this.qtdSomnum = 0
    this.qtdLuminosa = 0
    this.qtdOdoris = 0
    this.qtdDevorantis = 0
  }

  public criarIgnifer () {
    if (this.qtdPedras < 1 || this.qtdEnxofre < 1 || this.qtdAlcool < 1) {
      this.lancarError(Amicia.ERR_RECURSOS_INSUFICIENTES)
      return
    }

    if (this.qtdIgnifer >= this.getMaximoProjeteis()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM)
      return
    }

    this.qtdPedras--
    this.qtdEnxofre--
    this.qtdAlcool--

    this.qtdIgnifer = Math.min(this.qtdIgnifer + 2, this.getMaximoProjeteis())
  }

  public criarExtinguis () {
    if (this.qtdPedras < 1 || this.qtdSalitre < 1 || this.qtdEpisanguis < 1) {
      this.lancarError(Amicia.ERR_RECURSOS_INSUFICIENTES)
      return
    }

    if (this.qtdExtinguis >= this.getMaximoProjeteis()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdPedras--
    this.qtdSalitre--
    this.qtdEpisanguis--

    this.qtdExtinguis = Math.min(this.qtdExtinguis + 2, this.getMaximoProjeteis())
  }

  public criarSomnum () {
    if (this.qtdEnxofre < 3 || this.qtdSalitre < 4 || this.qtdAlcool < 4 || this.qtdTecidos < 1) {
      this.lancarError(Amicia.ERR_RECURSOS_INSUFICIENTES)
      return
    }

    if (this.qtdSomnum > 0) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM)
      return
    }

    this.qtdEnxofre -= 3
    this.qtdSalitre -= 4
    this.qtdAlcool -= 4
    this.qtdTecidos--

    this.qtdSomnum = 1
  }

  public criarLuminosa () {
    if (this.qtdEnxofre < 3 || this.qtdSalitre < 4 || this.qtdAlcool < 4 || this.qtdCouro < 1) {
      this.lancarError(Amicia.ERR_RECURSOS_INSUFICIENTES)
      return
    }

    if (this.qtdLuminosa > 0) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM)
      return
    }

    this.qtdEnxofre -= 3
    this.qtdSalitre -= 4
    this.qtdAlcool -= 4
    this.qtdCouro--

    this.qtdLuminosa = 1
  }

  public criarOdoris () {
    if (this.qtdPedras < 1 || this.qtdEnxofre < 1 || this.qtdEpisanguis < 1) {
      this.lancarError(Amicia.ERR_RECURSOS_INSUFICIENTES)
      return
    }

    if (this.qtdOdoris >= this.getMaximoProjeteis()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdPedras--
    this.qtdEnxofre--
    this.qtdEpisanguis--

    this.qtdOdoris = Math.min(this.qtdOdoris + 2, this.getMaximoProjeteis())
  }

  public criarDevorantis () {
    if (this.qtdPedras < 1 || this.qtdSalitre < 2 || this.qtdAlcool < 1) {
      this.lancarError(Amicia.ERR_RECURSOS_INSUFICIENTES)
      return
    }

    if (this.qtdDevorantis >= this.getMaximoProjeteis()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_CRIAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdPedras--
    this.qtdSalitre -= 2
    this.qtdAlcool--

    this.qtdDevorantis = Math.min(this.qtdDevorantis + 2, this.getMaximoProjeteis())
  }

  public pegarPedras () {
    if (this.qtdPedras >= this.getMaximoProjeteis()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdPedras = Math.min(this.qtdPedras + 3, this.getMaximoProjeteis())
  }

  public pegarJarro () {
    if (this.qtdJarros > 0) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdJarros = 1
  }

  public pegarEnxofre () {
    if (this.qtdEnxofre >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdEnxofre = Math.min(this.qtdEnxofre + 2, this.getMaximoItens())
  }

  public pegarSalitre () {
    if (this.qtdSalitre >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdSalitre = Math.min(this.qtdSalitre + 2, this.getMaximoItens())
  }

  public pegarAlcool () {
    if (this.qtdAlcool >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdAlcool = Math.min(this.qtdAlcool + 2, this.getMaximoItens())
  }

  public pegarEpisanguis () {
    if (this.qtdEpisanguis >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdEpisanguis = Math.min(this.qtdEpisanguis + 2, this.getMaximoItens())
  }

  public pegarTecido () {
    if (this.qtdTecidos >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdTecidos = Math.min(this.qtdTecidos + 1, this.getMaximoItens())
  }

  public pegarCouro () {
    if (this.qtdCouro >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdCouro = Math.min(this.qtdCouro + 1, this.getMaximoItens())
  }

  public pegarBarbante () {
    if (this.qtdBarbantes >= this.getMaximoItens()) {
      this.lancarError(Amicia.ERR_NAO_E_POSSIVEL_PEGAR_MAIS_DESSE_ITEM)
      return
    }
    this.qtdBarbantes = Math.min(this.qtdBarbantes + 1, this.getMaximoItens())
  }

  private lancarError (mensagem) {
    console.log(mensagem)
    throw new MaximumCapacityError(mensagem)
  }

  private getMaximoProjeteis () {
    return this.maximoProjeteis[this.nivelProjeteis]
  }

  private getMaximoItens () {
    return this.maximoItens[this.nivelItens]
  }

  public _imprimeInventario () {
    console.log('===== Inventario da Amicia =====\n')
    console.log(' - Pedras: {this.qtdPedras} \n')
    console.log(' - Jarros: {this.qtdJarros} \n')
    console.log('Recursos \n')
    console.log(' - Enxofre: {this.qtdEnxofre} \n')
    console.log(' - Salitre: {this.qtdSalitre} \n')
    console.log(' - Alcool: {this.qtdAlcool} \n')
    console.log(' - Episanguis: {this.qtdEpisanguis} \n')
    console.log('Materiais \n')
    console.log(' - Tecido: {this.qtdTecidos} \n')
    console.log(' - Couro: {this.qtdCouro} \n')
    console.log(' - Barbante: {this.qtdBarbantes} \n')
    console.log('\n')
  }

  public _imprimeProjeteis () {
    console.log('===== Projeteis da Amicia ===== \n')
    console.log(' - Ignifer: {this.qtdIgnifer} \n')
    console.log(' - Extinguis: {this.qtdExtinguis} \n')
    console.log(' - Somnum: {this.qtdSomnum} \n')
    console.log(' - Luminosa: {this.qtdLuMath.minosa} \n')
    console.log(' - Odoris: {this.qtdOdoris} \n')
    console.log(' - Devorantis: {this.qtdDevorantis} \n')
    console.log('\n')
  }
}
