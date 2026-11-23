export type Escola = {
  nome: string;
  codigoEscola?: string;
  codigoUnidade?: string;
  municipio: string;
  rede: string;
};

export type Supervisor = {
  nome: string;
  semSupervisor?: boolean;
  atribuicoes: string[];
  escolasEstaduais: Escola[];
  escolasMunicipais: Escola[];
  escolasParticulares: Escola[];
};

export const supervisores: Supervisor[] =[
    {
        "nome":  "ALEXANDRA BORTOLOTO SEGREDO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ROMEU ALBERTI DOM",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "912086",
                                     "codigoUnidade":  "40573"
                                 },
                                 {
                                     "nome":  "DJANIRA VELHO PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "47466",
                                     "codigoUnidade":  "1138"
                                 },
                                 {
                                     "nome":  "ROSANGELA BASILE PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "911306",
                                     "codigoUnidade":  "46794"
                                 },
                                 {
                                     "nome":  "HCFMRP-USP CENTRO INTERESCOLAR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - OUTROS",
                                     "codigoEscola":  "252232",
                                     "codigoUnidade":  "27785"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO CONCEPÇÃO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "268458",
                                        "codigoUnidade":  "101131"
                                    },
                                    {
                                        "nome":  "COLÉGIO CONCEPÇÃO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "268458",
                                        "codigoUnidade":  "358299"
                                    },
                                    {
                                        "nome":  "COLÉGIO INDEPENDÊNCIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "6183",
                                        "codigoUnidade":  "356138"
                                    },
                                    {
                                        "nome":  "DUQUE EEIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "442914",
                                        "codigoUnidade":  "183038"
                                    },
                                    {
                                        "nome":  "SAO GABRIEL ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "430043",
                                        "codigoUnidade":  "166846"
                                    },
                                    {
                                        "nome":  "SATHYA SAI RIBEIRAO PRETO ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "193884",
                                        "codigoUnidade":  "91740"
                                    }
                                ]
    },
    {
        "nome":  "ALINE CORREA DE LACERDA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "WALTER PAIVA PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "49612",
                                     "codigoUnidade":  "19157"
                                 },
                                 {
                                     "nome":  "JENNY TOLEDO PIZA SCHROEDER PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "41531",
                                     "codigoUnidade":  "905"
                                 },
                                 {
                                     "nome":  "ALPHEU DOMINIGUETTI PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24089",
                                     "codigoUnidade":  "25194"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ALAYDE FIGUEIREDO CANASSA EMEFEI",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "210134",
                                      "codigoUnidade":  "20902"
                                  },
                                  {
                                      "nome":  "ANA LUCIA F P FERREIRA EMEI",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "567644",
                                      "codigoUnidade":  "282826"
                                  },
                                  {
                                      "nome":  "CARMEM MIGUEL VICARI EMEF",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "220899",
                                      "codigoUnidade":  "45922"
                                  },
                                  {
                                      "nome":  "ERMELINDA R S FIGUEIREDO EMEFEI",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "281360",
                                      "codigoUnidade":  "51015"
                                  },
                                  {
                                      "nome":  "GERALDO TROSSEL PADRE EMEF",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "220905",
                                      "codigoUnidade":  "4795"
                                  },
                                  {
                                      "nome":  "JOAQUIM DA CUNHA CORONEL EMEF",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "239781",
                                      "codigoUnidade":  "39902"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "UNIFEP UNIDADE DE FORMAÇÃO EM EDUC. PROF. UNID. RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "483497",
                                        "codigoUnidade":  "210727"
                                    }
                                ]
    },
    {
        "nome":  "ANA CLAUDIA FERNANDES",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "HERMINIA GUGLIANO PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23905",
                                     "codigoUnidade":  "31519"
                                 },
                                 {
                                     "nome":  "GETULIO VARGAS DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "903462",
                                     "codigoUnidade":  "34466"
                                 },
                                 {
                                     "nome":  "JORGE RODINI LUIZ PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "918167",
                                     "codigoUnidade":  "15761"
                                 },
                                 {
                                     "nome":  "JOSE BOMPANI VEREADOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "903474",
                                     "codigoUnidade":  "21847"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ANCHIETA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "130898",
                                        "codigoUnidade":  "2912"
                                    },
                                    {
                                        "nome":  "BENTO BENEDINI COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "142955",
                                        "codigoUnidade":  "363596"
                                    },
                                    {
                                        "nome":  "BENTO BENEDINI COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "142955",
                                        "codigoUnidade":  "3180"
                                    },
                                    {
                                        "nome":  "ESCOLA SEMENTE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "50362",
                                        "codigoUnidade":  "53433"
                                    },
                                    {
                                        "nome":  "COLÉGIO ELEVE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "7958",
                                        "codigoUnidade":  "359548"
                                    },
                                    {
                                        "nome":  "IAVEC INST AVAN VIDA ENS CRISTAO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "121733",
                                        "codigoUnidade":  "355283"
                                    },
                                    {
                                        "nome":  "IAVEC INST AVAN VIDA ENS CRISTAO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "121733",
                                        "codigoUnidade":  "75229"
                                    },
                                    {
                                        "nome":  "IAVEC INST AVAN VIDA ENS CRISTAO",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11192",
                                        "codigoUnidade":  "365798"
                                    },
                                    {
                                        "nome":  "METROPOLITANA ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "557961",
                                        "codigoUnidade":  "240640"
                                    }
                                ]
    },
    {
        "nome":  "ANA CLAUDIA SAMPAIO DOS SANTOS RIBEIRO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "CEEJA CECILIA DULTRA CARAM PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "980024",
                                     "codigoUnidade":  "40791"
                                 },
                                 {
                                     "nome":  "RUBEN CLAUDIO MOREIRA PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23942",
                                     "codigoUnidade":  "43830"
                                 },
                                 {
                                     "nome":  "MARIA VIRGINIA MANSUR BIAGI PROFA",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "919433",
                                     "codigoUnidade":  "34687"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "EMEB DO CAIC GILBERTO D VECCHIA",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "210845",
                                      "codigoUnidade":  "20854"
                                  },
                                  {
                                      "nome":  "EMEB PROFA ANNA B DE ANDRADE",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "411127",
                                      "codigoUnidade":  "161325"
                                  },
                                  {
                                      "nome":  "EMEB JOSE BRAGA MORATO",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "211291",
                                      "codigoUnidade":  "14672"
                                  },
                                  {
                                      "nome":  "EMEB PADRE BENITO U ERBASTRAIN",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "239896",
                                      "codigoUnidade":  "5128"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CRESCER CDROIJ",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "126559",
                                        "codigoUnidade":  "38694"
                                    },
                                    {
                                        "nome":  "CONTRAPONTO EMA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "264003",
                                        "codigoUnidade":  "46395"
                                    },
                                    {
                                        "nome":  "COLÉGIO RESSURREIÇÃO RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115083",
                                        "codigoUnidade":  "44812"
                                    }
                                ]
    },
    {
        "nome":  "ANA PAULA AMORIN DE CARVALHO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "FERNANDO CAMPOS ROSAS PROFESSOR",
                                     "municipio":  "CRAVINHOS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900631",
                                     "codigoUnidade":  "21884"
                                 },
                                 {
                                     "nome":  "PARQUE DOS SERVIDORES",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "925706",
                                     "codigoUnidade":  "15847"
                                 },
                                 {
                                     "nome":  "DEPUTADO ANTONIO CALIXTO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "566780",
                                     "codigoUnidade":  "277925"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLEGIO NOVO SUMAREZINHO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "184846",
                                        "codigoUnidade":  "26993"
                                    },
                                    {
                                        "nome":  "INSTITUTO DE EDUCAÇÃO TÉCNICA RIBEIRÃO PRETO LTDA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11500",
                                        "codigoUnidade":  "366235"
                                    },
                                    {
                                        "nome":  "BRASIL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114923",
                                        "codigoUnidade":  "2665"
                                    },
                                    {
                                        "nome":  "FAVINHO DE MEL EIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802116",
                                        "codigoUnidade":  "34373"
                                    },
                                    {
                                        "nome":  "PINHEIRINHO COLEGIO EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "186041",
                                        "codigoUnidade":  "33223"
                                    },
                                    {
                                        "nome":  "PINHEIRINHO COLEGIO EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "186041",
                                        "codigoUnidade":  "359987"
                                    },
                                    {
                                        "nome":  "RENOVADO CRISTAO CEI",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "169377",
                                        "codigoUnidade":  "3683"
                                    },
                                    {
                                        "nome":  "TECNURSING",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11566",
                                        "codigoUnidade":  "366304"
                                    },
                                    {
                                        "nome":  "ITEC - INSTITUTO TÉCNICO CRESCER MAIS",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "12062",
                                        "codigoUnidade":  "366914"
                                    }
                                ]
    },
    {
        "nome":  "ANDRE MARCELO RUIZ",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JOAQUIM ALVES FERREIRA MONSENHOR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "22962",
                                     "codigoUnidade":  "43774"
                                 },
                                 {
                                     "nome":  "SILVIO DE ALMEIDA",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "22925",
                                     "codigoUnidade":  "31469"
                                 },
                                 {
                                     "nome":  "CANDIDO PORTINARI",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23000",
                                     "codigoUnidade":  "37625"
                                 },
                                 {
                                     "nome":  "IRENE DIAS RIBEIRO PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900072",
                                     "codigoUnidade":  "21860"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "EMEB PROFA ALZIRA ACRA D ALMEIDA",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "239872",
                                      "codigoUnidade":  "5126"
                                  },
                                  {
                                      "nome":  "EMEB PROFA CELIA B C ALBUQUERQUE",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "239884",
                                      "codigoUnidade":  "5127"
                                  },
                                  {
                                      "nome":  "EMEB PROFA ESTHER VIANNA BOLOGNA",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "137832",
                                      "codigoUnidade":  "84549"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "SISTEMA INTEGRADO DE EDUC. INFANTIL E ENS. FUND. DE BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "118291",
                                        "codigoUnidade":  "19955"
                                    },
                                    {
                                        "nome":  "SOCIEDADE DE ENSINO FUNDAMENTAL DE BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "120595",
                                        "codigoUnidade":  "73830"
                                    },
                                    {
                                        "nome":  "COC BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802347",
                                        "codigoUnidade":  "15503"
                                    },
                                    {
                                        "nome":  "COC BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802347",
                                        "codigoUnidade":  "347514"
                                    },
                                    {
                                        "nome":  "CAMILLO DE MATTOS COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "160921",
                                        "codigoUnidade":  "20416"
                                    }
                                ]
    },
    {
        "nome":  "CAMILA APARECIDA VELOSO PERINI",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ESPLANADA DA ESTACAO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "925676",
                                     "codigoUnidade":  "6818"
                                 },
                                 {
                                     "nome":  "EDGARDO CAJADO DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24120",
                                     "codigoUnidade":  "37675"
                                 },
                                 {
                                     "nome":  "GLETE DE ALCANTARA PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23899",
                                     "codigoUnidade":  "43829"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "W MOZART ESCOLA EDUCACAO MUSICAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "255658",
                                        "codigoUnidade":  "27761"
                                    },
                                    {
                                        "nome":  "UNINFANCIA CENTRO EDUCACIONAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "128569",
                                        "codigoUnidade":  "81538"
                                    },
                                    {
                                        "nome":  "ESCOLA MIRÓ",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "123262",
                                        "codigoUnidade":  "44907"
                                    },
                                    {
                                        "nome":  "ESCOLA MIRÓ",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "7868",
                                        "codigoUnidade":  "358285"
                                    },
                                    {
                                        "nome":  "ESPACO MIRO EIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "288287",
                                        "codigoUnidade":  "113927"
                                    },
                                    {
                                        "nome":  "MONTEIRO LOBATO COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "123274",
                                        "codigoUnidade":  "2846"
                                    },
                                    {
                                        "nome":  "SEMENTINHA BASSANO VACCARINI COL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "158380",
                                        "codigoUnidade":  "191371"
                                    },
                                    {
                                        "nome":  "SEMENTINHA BASSANO VACCARINI COL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "158380",
                                        "codigoUnidade":  "364209"
                                    },
                                    {
                                        "nome":  "SEMENTINHA BASSANO VACCARINI COL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "158380",
                                        "codigoUnidade":  "32955"
                                    },
                                    {
                                        "nome":  "SCHOOL GARDEN - UNID. 3",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "9777",
                                        "codigoUnidade":  "363627"
                                    }
                                ]
    },
    {
        "nome":  "CARLOS ANDRE MARQUES BARBOSA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "MACARIO DE ALMEIDA CONEGO",
                                     "municipio":  "SANTO ANTONIO DA ALEGRIA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23036",
                                     "codigoUnidade":  "12565"
                                 },
                                 {
                                     "nome":  "GALDINO DE CASTRO",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "22330",
                                     "codigoUnidade":  "43844"
                                 },
                                 {
                                     "nome":  "GERALDO TORRANO PROFESSOR",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "903498",
                                     "codigoUnidade":  "34467"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "MOUSART ALVES SILVA DR EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "80949",
                                      "codigoUnidade":  "63236"
                                  },
                                  {
                                      "nome":  "ABEL DOS REIS EMEB",
                                      "municipio":  "CASSIA DOS COQUEIROS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "216549",
                                      "codigoUnidade":  "45785"
                                  },
                                  {
                                      "nome":  "ROMUALDO DE CARVALHO PROF EMEB",
                                      "municipio":  "CASSIA DOS COQUEIROS",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "471513",
                                      "codigoUnidade":  "203050"
                                  },
                                  {
                                      "nome":  "EMEF CÔNEGO MACÁRIO DE ALMEIDA",
                                      "municipio":  "SANTO ANTONIO DA ALEGRIA",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "6021",
                                      "codigoUnidade":  "355942"
                                  },
                                  {
                                      "nome":  "ESCOLA JOAQUIM",
                                      "municipio":  "SANTO ANTONIO DA ALEGRIA",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "8240",
                                      "codigoUnidade":  "359856"
                                  },
                                  {
                                      "nome":  "MANUEL AUGUSTO R ALECRIM EMEF",
                                      "municipio":  "SANTO ANTONIO DA ALEGRIA",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "355823",
                                      "codigoUnidade":  "144286"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CANTABILE CONSERV DE ARTE MUSICAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "195716",
                                        "codigoUnidade":  "93625"
                                    }
                                ]
    },
    {
        "nome":  "DAGMAR RIBEIRO DA SILVA COSTA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JOVEM FELIPE GUI ROCHA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "576475",
                                     "codigoUnidade":  "300326"
                                 },
                                 {
                                     "nome":  "JOAO RODRIGUES GUIAO DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24193",
                                     "codigoUnidade":  "12619"
                                 },
                                 {
                                     "nome":  "EXPEDICIONARIOS BRASILEIROS",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "907881",
                                     "codigoUnidade":  "6593"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ATHENAS COLEGIO",
                                        "municipio":  "CAJURU",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "126287",
                                        "codigoUnidade":  "13713"
                                    },
                                    {
                                        "nome":  "CHEGA QUEM CAMINHA EEE",
                                        "municipio":  "CAJURU",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "146900",
                                        "codigoUnidade":  "3199"
                                    },
                                    {
                                        "nome":  "DINAMIC COLEGIO",
                                        "municipio":  "CAJURU",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "363662",
                                        "codigoUnidade":  "145930"
                                    },
                                    {
                                        "nome":  "PIRAMIDE COLEGIO",
                                        "municipio":  "CAJURU",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "144642",
                                        "codigoUnidade":  "26530"
                                    },
                                    {
                                        "nome":  "PALAS ATENA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "808623",
                                        "codigoUnidade":  "51429"
                                    }
                                ]
    },
    {
        "nome":  "DORVAL DOS SANTOS BRITO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ALBERTO FERRIANI PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "48446",
                                     "codigoUnidade":  "12903"
                                 },
                                 {
                                     "nome":  "GLORIA DOS SANTOS FONSECA PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "909737",
                                     "codigoUnidade":  "15713"
                                 },
                                 {
                                     "nome":  "JOSE ALEIXO DA SILVA PASSOS CEL",
                                     "municipio":  "BRODOWSKI",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23838",
                                     "codigoUnidade":  "54024"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLEGIO MARANATA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "477643",
                                        "codigoUnidade":  "204966"
                                    },
                                    {
                                        "nome":  "COLEGIO MARANATA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "477643",
                                        "codigoUnidade":  "324025"
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E ENSINO FUNDAMENTAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "29497",
                                        "codigoUnidade":  "53331"
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E ENSINO FUNDAMENTAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "29497",
                                        "codigoUnidade":  "223225"
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E ENSINO FUNDAMENTAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "29497",
                                        "codigoUnidade":  "355256"
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E ENSINO FUNDAMENTAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "29497",
                                        "codigoUnidade":  "366236"
                                    },
                                    {
                                        "nome":  "LEV VIGOTSKY ATHENEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "123341",
                                        "codigoUnidade":  "44911"
                                    },
                                    {
                                        "nome":  "OBJETIVO CTO INTERESCOLAR U XXVII",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "165190",
                                        "codigoUnidade":  "39146"
                                    },
                                    {
                                        "nome":  "TERNURINHA SINAPSE COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "164975",
                                        "codigoUnidade":  "356258"
                                    },
                                    {
                                        "nome":  "TERNURINHA SINAPSE COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "164975",
                                        "codigoUnidade":  "3800"
                                    },
                                    {
                                        "nome":  "VITA ET PAX COLEGIO PRE PG UNID I",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115010",
                                        "codigoUnidade":  "32519"
                                    },
                                    {
                                        "nome":  "COC RIBEIRÃO PRETO - REDE ÚNICA DE EDUCAÇÃO UNIDADE 02",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "567632",
                                        "codigoUnidade":  "282727"
                                    }
                                ]
    },
    {
        "nome":  "ELAINE LUCIMARA AMICI KAWAKAMI",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "AYMAR BAPTISTA PRADO PROF DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "905800",
                                     "codigoUnidade":  "46804"
                                 },
                                 {
                                     "nome":  "JESUS GUILHERME GIACOMINI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "918155",
                                     "codigoUnidade":  "28380"
                                 },
                                 {
                                     "nome":  "ORLANDO JURCA DEPUTADO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900746",
                                     "codigoUnidade":  "34432"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "HELENA MARIA L MELLO PROFA EMEF",
                                      "municipio":  "LUIS ANTONIO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "367965",
                                      "codigoUnidade":  "146980"
                                  },
                                  {
                                      "nome":  "ROBERTO BRAYN EMEF",
                                      "municipio":  "LUIS ANTONIO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "200712",
                                      "codigoUnidade":  "14522"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "LICEU CONTEMPORANEO ENSINO MEDIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "431436",
                                        "codigoUnidade":  "167826"
                                    },
                                    {
                                        "nome":  "ADRIANA PAULA BALÉ",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "257059",
                                        "codigoUnidade":  "40154"
                                    },
                                    {
                                        "nome":  "INTERATIVA EEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "167940",
                                        "codigoUnidade":  "20484"
                                    },
                                    {
                                        "nome":  "COLÉGIO NOVO – UNIDADE ALTO DA BOA VISTA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "9366",
                                        "codigoUnidade":  "363164"
                                    },
                                    {
                                        "nome":  "CONTEMPORANEO LICEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "151270",
                                        "codigoUnidade":  "14021"
                                    },
                                    {
                                        "nome":  "CONTEMPORANEO LICEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "151270",
                                        "codigoUnidade":  "363225"
                                    },
                                    {
                                        "nome":  "CONTEMPORANEO LICEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "151270",
                                        "codigoUnidade":  "167825"
                                    },
                                    {
                                        "nome":  "VIANNA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "809913",
                                        "codigoUnidade":  "51556"
                                    }
                                ]
    },
    {
        "nome":  "FABIO PEREIRA SOMA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JARDIM DIVA TARLA DE CARVALHO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "350588",
                                     "codigoUnidade":  "143925"
                                 },
                                 {
                                     "nome":  "PROFESSOR LAURO BIGÉLLI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "925664",
                                     "codigoUnidade":  "46926"
                                 },
                                 {
                                     "nome":  "OTONIEL MOTA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24119",
                                     "codigoUnidade":  "37674"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "APAE DE BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "145579",
                                        "codigoUnidade":  "20221"
                                    },
                                    {
                                        "nome":  "MARIA MELLO SEGHETO EEE DA APAE",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "190056",
                                        "codigoUnidade":  "4206"
                                    },
                                    {
                                        "nome":  "APAE DE CRAVINHOS",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "190697",
                                        "codigoUnidade":  "4259"
                                    },
                                    {
                                        "nome":  "APAE DE SERRANA EEE",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "146912",
                                        "codigoUnidade":  "20199"
                                    },
                                    {
                                        "nome":  "ESPACO APRENDIZ CE",
                                        "municipio":  "LUIS ANTONIO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "301700",
                                        "codigoUnidade":  "132742"
                                    },
                                    {
                                        "nome":  "ESCOLA ÚNICA - RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "7840",
                                        "codigoUnidade":  "358243"
                                    },
                                    {
                                        "nome":  "HEITOR VILLA LOBOS EM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "258490",
                                        "codigoUnidade":  "15279"
                                    }
                                ]
    },
    {
        "nome":  "FATIMA MARA GAZIGNATO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ALBERTO SANTOS DUMONT",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23851",
                                     "codigoUnidade":  "25180"
                                 },
                                 {
                                     "nome":  "HELY LOPES MEIRELLES",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24156",
                                     "codigoUnidade":  "12615"
                                 },
                                 {
                                     "nome":  "ORLANDO VITALIANO VEREADOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "44647",
                                     "codigoUnidade":  "31823"
                                 },
                                 {
                                     "nome":  "RAFAEL LEME FRANCO PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "42870",
                                     "codigoUnidade":  "37852"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CLARETIANO COLEGIO SAO JOSE",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114406",
                                        "codigoUnidade":  "19897"
                                    },
                                    {
                                        "nome":  "CARLA PETRONI STUDIUM ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "262985",
                                        "codigoUnidade":  "15298"
                                    },
                                    {
                                        "nome":  "SANTA URSULA RP EIEFEM INSTITUTO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114960",
                                        "codigoUnidade":  "32517"
                                    },
                                    {
                                        "nome":  "MAPLE BEAR CANADIAN SCHOOL RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "5395",
                                        "codigoUnidade":  "355253"
                                    },
                                    {
                                        "nome":  "TERRA CIRANDINHA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "185361",
                                        "codigoUnidade":  "136535"
                                    },
                                    {
                                        "nome":  "TERRA CIRANDINHA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "185361",
                                        "codigoUnidade":  "4124"
                                    },
                                    {
                                        "nome":  "APAE DE RIBEIRAO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "145610",
                                        "codigoUnidade":  "38907"
                                    }
                                ]
    },
    {
        "nome":  "FLAVIA DENISE CARDINALI MENDES DA CUNHA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JOSE LIMA P DE FREITAS PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23875",
                                     "codigoUnidade":  "649"
                                 },
                                 {
                                     "nome":  "VEREADOR JOSÉ VELLONI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "576499",
                                     "codigoUnidade":  "300328"
                                 },
                                 {
                                     "nome":  "JOAO PALMA GUIAO DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900758",
                                     "codigoUnidade":  "46632"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO MONTE REI",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "10317",
                                        "codigoUnidade":  "364568"
                                    },
                                    {
                                        "nome":  "BAUHAUS CENTRO DE FORMACAO PROFISSIONAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "6959",
                                        "codigoUnidade":  "356977"
                                    },
                                    {
                                        "nome":  "COLÉGIO SPIRLANDELLI",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "7131",
                                        "codigoUnidade":  "357180"
                                    },
                                    {
                                        "nome":  "CASTELO ESCOLA DE EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115046",
                                        "codigoUnidade":  "26260"
                                    },
                                    {
                                        "nome":  "KINDERSPIEL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "164963",
                                        "codigoUnidade":  "14230"
                                    },
                                    {
                                        "nome":  "PIRILAMPO COLEGIO EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802529",
                                        "codigoUnidade":  "28127"
                                    },
                                    {
                                        "nome":  "CECILIA MEIRELES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "174488",
                                        "codigoUnidade":  "3997"
                                    },
                                    {
                                        "nome":  "CECILIA MEIRELES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "174488",
                                        "codigoUnidade":  "355203"
                                    },
                                    {
                                        "nome":  "CCM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "8802",
                                        "codigoUnidade":  "361223"
                                    }
                                ]
    },
    {
        "nome":  "GISLAINE APARECIDA JOB MORETTI",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "BAUDILIO BIAGI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "905811",
                                     "codigoUnidade":  "15705"
                                 },
                                 {
                                     "nome":  "CID DE OLIVEIRA LEITE PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24090",
                                     "codigoUnidade":  "31535"
                                 },
                                 {
                                     "nome":  "BAIRRO FRANCISCO CASTILHO",
                                     "municipio":  "CRAVINHOS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "462792",
                                     "codigoUnidade":  "198434"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE ALVARES CABRAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "290804",
                                        "codigoUnidade":  "118130"
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE LAFAIETE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "132925",
                                        "codigoUnidade":  "26396"
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE PORTUGAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "140430",
                                        "codigoUnidade":  "3109"
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE RIBEIRANIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115009",
                                        "codigoUnidade":  "44803"
                                    },
                                    {
                                        "nome":  "COLÉGIO FAAP RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "9332",
                                        "codigoUnidade":  "363132"
                                    },
                                    {
                                        "nome":  "FAAP RIBEIRAO PRETO COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "449003",
                                        "codigoUnidade":  "192726"
                                    },
                                    {
                                        "nome":  "COL BATISTA INDEPENDENTE DE RP",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "186442",
                                        "codigoUnidade":  "4237"
                                    },
                                    {
                                        "nome":  "COLEGIO EINSTEIN",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "186429",
                                        "codigoUnidade":  "4235"
                                    },
                                    {
                                        "nome":  "PEQUENO PRINCIPE COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114832",
                                        "codigoUnidade":  "358265"
                                    }
                                ]
    },
    {
        "nome":  "ISABEL CRISTINA SAMPAIO RODRIGUEZ",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "RITA FERRAZ CASELLI PROFESSORA",
                                     "municipio":  "SANTA CRUZ DA ESPERANCA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24211",
                                     "codigoUnidade":  "680"
                                 },
                                 {
                                     "nome":  "FRANCISCO MATARAZZO CONDE",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24314",
                                     "codigoUnidade":  "31546"
                                 },
                                 {
                                     "nome":  "JULIETA FERNANDA SOUSA TARANTO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "925697",
                                     "codigoUnidade":  "46927"
                                 },
                                 {
                                     "nome":  "MESSIAS DA FONSECA DOUTOR",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24200",
                                     "codigoUnidade":  "679"
                                 },
                                 {
                                     "nome":  "ABEL DOS REIS",
                                     "municipio":  "CASSIA DOS COQUEIROS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24399",
                                     "codigoUnidade":  "12626"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "JOSE ALVES PALMA DA SILVA DR EM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "108431",
                                      "codigoUnidade":  "70329"
                                  },
                                  {
                                      "nome":  "MAURILIO DE OLIVEIRA PROF EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "289802",
                                      "codigoUnidade":  "116539"
                                  },
                                  {
                                      "nome":  "EMEB NAUR JOSÉ PRATES",
                                      "municipio":  "SANTA CRUZ DA ESPERANCA",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "9952",
                                      "codigoUnidade":  "364161"
                                  },
                                  {
                                      "nome":  "OLYMPIO PEREIRA CONCEICAO EMEB",
                                      "municipio":  "SANTA CRUZ DA ESPERANCA",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "232671",
                                      "codigoUnidade":  "14880"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "TALES DE MILETO LICEU",
                                        "municipio":  "SANTA ROSA DE VITERBO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "113876",
                                        "codigoUnidade":  "72026"
                                    },
                                    {
                                        "nome":  "LUIZA DO PRADO NAP",
                                        "municipio":  "SANTA ROSA DE VITERBO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "146584",
                                        "codigoUnidade":  "26537"
                                    },
                                    {
                                        "nome":  "MIGUEL NAYME CENTRO EDUCACIONAL",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115162",
                                        "codigoUnidade":  "359992"
                                    },
                                    {
                                        "nome":  "MIGUEL NAYME CENTRO EDUCACIONAL",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115162",
                                        "codigoUnidade":  "2685"
                                    }
                                ]
    },
    {
        "nome":  "JEFFERSON LUIZ ZUCCHERMAGLIO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "EUGENIA VILHENA DE MORAIS PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24065",
                                     "codigoUnidade":  "37671"
                                 },
                                 {
                                     "nome":  "OSCAR DE MOURA LACERDA PROF DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "44659",
                                     "codigoUnidade":  "19179"
                                 },
                                 {
                                     "nome":  "HELIO LOURENCO DE OLIVEIRA PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900761",
                                     "codigoUnidade":  "6256"
                                 },
                                 {
                                     "nome":  "WALTER FERREIRA PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23887",
                                     "codigoUnidade":  "18887"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO JUBILEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "385931",
                                        "codigoUnidade":  "151163"
                                    },
                                    {
                                        "nome":  "COLÉGIO JUBILEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11166",
                                        "codigoUnidade":  "365757"
                                    },
                                    {
                                        "nome":  "ARTE DO MUSEU EEIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "123250",
                                        "codigoUnidade":  "32602"
                                    },
                                    {
                                        "nome":  "ESPAÇO ARTE DO MUSEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "4373",
                                        "codigoUnidade":  "347070"
                                    },
                                    {
                                        "nome":  "ALMEIDA GARRETT EEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "338345",
                                        "codigoUnidade":  "139646"
                                    },
                                    {
                                        "nome":  "ALMEIDA GARRETT EEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "338345",
                                        "codigoUnidade":  "358463"
                                    },
                                    {
                                        "nome":  "COLÉGIO ALMEIDA GARRETT – UNIDADE III",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "10249",
                                        "codigoUnidade":  "364499"
                                    },
                                    {
                                        "nome":  "COLEGIO ARKADIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "579890",
                                        "codigoUnidade":  "314826"
                                    },
                                    {
                                        "nome":  "COLÉGIO ARKADIA - UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "10109",
                                        "codigoUnidade":  "364344"
                                    },
                                    {
                                        "nome":  "COLEGIO MARISTA CHAMPAGNAT",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "574961",
                                        "codigoUnidade":  "297625"
                                    },
                                    {
                                        "nome":  "J MANIEZO COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "299121",
                                        "codigoUnidade":  "129836"
                                    }
                                ]
    },
    {
        "nome":  "JULIO CESAR DE LIMA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ARTHUR PIRES CORONEL",
                                     "municipio":  "LUIS ANTONIO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24223",
                                     "codigoUnidade":  "25203"
                                 },
                                 {
                                     "nome":  "EE MADRE TERESA DE CALCUTÁ",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "12000",
                                     "codigoUnidade":  "366817"
                                 },
                                 {
                                     "nome":  "EE LAUDELINA DE CAMPOS MELO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "12006",
                                     "codigoUnidade":  "366822"
                                 },
                                 {
                                     "nome":  "NEUSA MARIA DO BEM PROFESSORA",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "350643",
                                     "codigoUnidade":  "143926"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ANTONIETTA MATTOS G TAVEIROS EMEB",
                                      "municipio":  "SERRA AZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "232661",
                                      "codigoUnidade":  "4977"
                                  },
                                  {
                                      "nome":  "JACOMO ANTONIO COPELLO PROF EMEB",
                                      "municipio":  "SERRA AZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "232658",
                                      "codigoUnidade":  "33754"
                                  },
                                  {
                                      "nome":  "MARIA DO ROSARIO FREITAS EMEB",
                                      "municipio":  "SERRA AZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "279161",
                                      "codigoUnidade":  "21751"
                                  },
                                  {
                                      "nome":  "ILKA MONICI VILLELA DOS REIS EMEB",
                                      "municipio":  "SERRAZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "450236",
                                      "codigoUnidade":  "192767"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "MARISTA IR RUI LEOPOLDO DEPINE CE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "567656",
                                        "codigoUnidade":  "282728"
                                    },
                                    {
                                        "nome":  "MOURA LACERDA COLEGIO UNIDADE I",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114959",
                                        "codigoUnidade":  "38631"
                                    },
                                    {
                                        "nome":  "GRAU TÉCNICO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "9085",
                                        "codigoUnidade":  "363028"
                                    },
                                    {
                                        "nome":  "IBRESP - POLO RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA"
                                    }
                                ]
    },
    {
        "nome":  "KATIA CILENE GENARO RODRIGUES",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ALBERTO JOSE GONCALVES DOM",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23978",
                                     "codigoUnidade":  "43832"
                                 },
                                 {
                                     "nome":  "JOAO AUGUSTO DE MELLO PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23954",
                                     "codigoUnidade":  "12610"
                                 },
                                 {
                                     "nome":  "DOMINGOS JOAO B SPINELLI PROF DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "44660",
                                     "codigoUnidade":  "25479"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLEGIO ANTONIO FRATA",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "166873",
                                        "codigoUnidade":  "39223"
                                    },
                                    {
                                        "nome":  "ALBERT SABIN EEI E PG",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "126354",
                                        "codigoUnidade":  "26328"
                                    },
                                    {
                                        "nome":  "ALBERT SABIN ESCOLA ENSINO MEDIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "118503",
                                        "codigoUnidade":  "19888"
                                    },
                                    {
                                        "nome":  "BARAO DE MAUA ESCOLA EIFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114911",
                                        "codigoUnidade":  "19910"
                                    },
                                    {
                                        "nome":  "CARLOS CHAGAS FILHO EEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "152894",
                                        "codigoUnidade":  "14007"
                                    },
                                    {
                                        "nome":  "ITAMARATI COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "141537",
                                        "codigoUnidade":  "13931"
                                    },
                                    {
                                        "nome":  "COLÉGIO JS",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "300408",
                                        "codigoUnidade":  "131741"
                                    }
                                ]
    },
    {
        "nome":  "LIVIA CARVALHO DA COSTA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JOAO DE SOUZA CAMPOS CORONEL",
                                     "municipio":  "CRAVINHOS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24272",
                                     "codigoUnidade":  "681"
                                 },
                                 {
                                     "nome":  "VICENTE TEODORO DE SOUZA PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "907873",
                                     "codigoUnidade":  "28322"
                                 },
                                 {
                                     "nome":  "MEIRA JUNIOR DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24053",
                                     "codigoUnidade":  "664"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ASSOCIACAO DE AMIGOS DO AUTISTA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "190731",
                                        "codigoUnidade":  "45621"
                                    },
                                    {
                                        "nome":  "CONSTRUINDO CONHECIMENTO EEIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "567673",
                                        "codigoUnidade":  "282729"
                                    },
                                    {
                                        "nome":  "COLÉGIO CAPELLA KIDS",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "431138",
                                        "codigoUnidade":  "167627"
                                    },
                                    {
                                        "nome":  "BELA LÍRIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "8988",
                                        "codigoUnidade":  "362417"
                                    },
                                    {
                                        "nome":  "BELA LÍRIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "7202",
                                        "codigoUnidade":  "357361"
                                    },
                                    {
                                        "nome":  "LUCIANA JUNQUEIRA STUDIO DE DANCA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "252136",
                                        "codigoUnidade":  "40115"
                                    }
                                ]
    },
    {
        "nome":  "LUCIANA CANSIAN BELARMINO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "AGENOR MEDEIROS PROFESSOR",
                                     "municipio":  "SAO SIMAO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24375",
                                     "codigoUnidade":  "357954"
                                 },
                                 {
                                     "nome":  "VIRGILIO GARCIA CAPITAO",
                                     "municipio":  "SAO SIMAO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24259",
                                     "codigoUnidade":  "43846"
                                 },
                                 {
                                     "nome":  "FRANCISCO FERREIRA DE FREITAS",
                                     "municipio":  "SERRA AZUL",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24296",
                                     "codigoUnidade":  "25205"
                                 },
                                 {
                                     "nome":  "SERRA AZUL",
                                     "municipio":  "SERRA AZUL",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "85397",
                                     "codigoUnidade":  "65625"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "FAUSTO NOGUEIRA PROF EMEE",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "79273",
                                      "codigoUnidade":  "2026"
                                  },
                                  {
                                      "nome":  "FAUSTO PIRES OLIVEIRA HIST EMEF",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "242093",
                                      "codigoUnidade":  "46192"
                                  },
                                  {
                                      "nome":  "MARCILIO BONDESAN EM",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "223074",
                                      "codigoUnidade":  "27415"
                                  },
                                  {
                                      "nome":  "YOLANDA JORGE PROFA EMEF",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "466104",
                                      "codigoUnidade":  "201338"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CARLOS MONTEIRO LICEU",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "159190",
                                        "codigoUnidade":  "26781"
                                    },
                                    {
                                        "nome":  "COLEGIO JESUS MARIA JOSE",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "574922",
                                        "codigoUnidade":  "297171"
                                    }
                                ]
    },
    {
        "nome":  "MARIA APARECIDA DAL PICCOL PAES",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ANTONIO BARREIROS PROFESSOR",
                                     "municipio":  "ALTINOPOLIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "22901",
                                     "codigoUnidade":  "18842"
                                 },
                                 {
                                     "nome":  "PROFESSORA SUELI TEREZINHA DANHONE",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "412181",
                                     "codigoUnidade":  "161929"
                                 },
                                 {
                                     "nome":  "GERALDO CORREIA DE CARVALHO DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "37151",
                                     "codigoUnidade":  "37839"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "JANUARIO BENVENUTO EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "108534",
                                      "codigoUnidade":  "70331"
                                  },
                                  {
                                      "nome":  "APARECIDA ELIAS DRAIBE EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "108893",
                                      "codigoUnidade":  "70332"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CARLOS DRUMOND DE ANDRADE COLEGIO",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "124679",
                                        "codigoUnidade":  "38698"
                                    },
                                    {
                                        "nome":  "DINAMICA ESCOLA",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "176459",
                                        "codigoUnidade":  "20625"
                                    },
                                    {
                                        "nome":  "APAE DE ALTINOPOLIS CEE",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "149809",
                                        "codigoUnidade":  "20305"
                                    },
                                    {
                                        "nome":  "BATATAENSE AEFMP",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114418",
                                        "codigoUnidade":  "38608"
                                    }
                                ]
    },
    {
        "nome":  "MARIANA COLMANETTI BRIGATO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ANTONIO DIEDERICHSEN",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23848",
                                     "codigoUnidade":  "12602"
                                 },
                                 {
                                     "nome":  "ALCIDES CORREA PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23930",
                                     "codigoUnidade":  "25182"
                                 },
                                 {
                                     "nome":  "VEIGA DE MIRANDA MINISTRO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "36869",
                                     "codigoUnidade":  "12790"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "FILADELFIA DE RIBEIRAO PRETO INST",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "262250",
                                        "codigoUnidade":  "15264"
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI PRIMEIRO PASSOS UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "8960",
                                        "codigoUnidade":  "361374"
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI P PASSOS UNI III",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "562130",
                                        "codigoUnidade":  "250730"
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI P PASSOS UNID IV",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "562142",
                                        "codigoUnidade":  "250731"
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI P PASSOS UNID I",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "268161",
                                        "codigoUnidade":  "100625"
                                    },
                                    {
                                        "nome":  "LACORDAIRE COLEGIO ENSINO MEDIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "268173",
                                        "codigoUnidade":  "100626"
                                    },
                                    {
                                        "nome":  "LACORDAIRE SANT ANNA EB",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "118527",
                                        "codigoUnidade":  "32480"
                                    },
                                    {
                                        "nome":  "GENESIS COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "291493",
                                        "codigoUnidade":  "119426"
                                    },
                                    {
                                        "nome":  "CAMPOS ELISEOS CENTRO EDUCACIONAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "807655",
                                        "codigoUnidade":  "6339"
                                    }
                                ]
    },
    {
        "nome":  "MESSIAS MOTA VIEIRA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "SÓCRATES BRASILEIRO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "925688",
                                     "codigoUnidade":  "15846"
                                 },
                                 {
                                     "nome":  "ANTONIO AUGUSTO LOPES OLIVEIRA JR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "49566",
                                     "codigoUnidade":  "44066"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "INSTITUTO EDUCACIONAL PAULISTA",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "10663",
                                        "codigoUnidade":  "365170"
                                    },
                                    {
                                        "nome":  "COLÉGIO CIV",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11862",
                                        "codigoUnidade":  "366630"
                                    }
                                ]
    },
    {
        "nome":  "PATRICIA TITARELLI ALVES DE OLIVEIRA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "MIGUEL JORGE",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900771",
                                     "codigoUnidade":  "21804"
                                 },
                                 {
                                     "nome":  "GUIMARAES JUNIOR DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24028",
                                     "codigoUnidade":  "25188"
                                 },
                                 {
                                     "nome":  "CORDELIA RIBEIRO RAGOZO PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "915555",
                                     "codigoUnidade":  "34680"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ZILDA APPARECIDA M SEIXAS EMEF",
                                      "municipio":  "LUIS ANTONIO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "130163",
                                      "codigoUnidade":  "83230"
                                  },
                                  {
                                      "nome":  "LUIZ ANTONIO EMEF TEC DE QUIMICA",
                                      "municipio":  "LUIS ANTONIO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "77549",
                                      "codigoUnidade":  "1825"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO VIKTOR FRANKL (UNIDADE 2 - BOULEVARD)",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "10462",
                                        "codigoUnidade":  "364770"
                                    },
                                    {
                                        "nome":  "COLÉGIO VIKTOR FRANKL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11153",
                                        "codigoUnidade":  "365742"
                                    },
                                    {
                                        "nome":  "VIKTOR FRANKL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "168993",
                                        "codigoUnidade":  "14157"
                                    },
                                    {
                                        "nome":  "NOSSA SENHORA AUXILIADORA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114996",
                                        "codigoUnidade":  "32518"
                                    },
                                    {
                                        "nome":  "MARISTA COLEGIO DE RIBEIRAO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "114820",
                                        "codigoUnidade":  "26255"
                                    },
                                    {
                                        "nome":  "VILLA LOBOS COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "807680",
                                        "codigoUnidade":  "6345"
                                    }
                                ]
    },
    {
        "nome":  "RENATA FERNANDES SILVA RICARDO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "FABIO BARRETO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23796",
                                     "codigoUnidade":  "346851"
                                 },
                                 {
                                     "nome":  "FRANCISCO BONFIM",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23966",
                                     "codigoUnidade":  "12611"
                                 },
                                 {
                                     "nome":  "SINHA JUNQUEIRA DONA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23929",
                                     "codigoUnidade":  "25181"
                                 },
                                 {
                                     "nome":  "PROFESSOR DIVO MARINO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "925718",
                                     "codigoUnidade":  "34695"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ESCOLA DE EDUCACAO CAMPINHO DA PAZ",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "400749",
                                        "codigoUnidade":  "156651"
                                    },
                                    {
                                        "nome":  "PEQUENO PRINCIPE EEIEF",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "123687",
                                        "codigoUnidade":  "20033"
                                    },
                                    {
                                        "nome":  "EURIPEDES BARSANULFO PROF EPE",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "442884",
                                        "codigoUnidade":  "183036"
                                    },
                                    {
                                        "nome":  "FABIOLA POCH CENTRO DE DANCA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "305066",
                                        "codigoUnidade":  "133428"
                                    },
                                    {
                                        "nome":  "ADVENTISTA RIBEIRO PRETO COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "115022",
                                        "codigoUnidade":  "19915"
                                    },
                                    {
                                        "nome":  "ESCOLA PRÓ CULTURAL AMARELINHA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "100511",
                                        "codigoUnidade":  "66225"
                                    },
                                    {
                                        "nome":  "ESCOLA PRÓ CULTURAL AMARELINHA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "100511",
                                        "codigoUnidade":  "356913"
                                    }
                                ]
    },
    {
        "nome":  "RENATO DONATO HAGY",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "GERALDO TRISTAO DE LIMA PROFESSOR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "906759",
                                     "codigoUnidade":  "28261"
                                 },
                                 {
                                     "nome":  "WASHINGTON LUIZ DOUTOR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "22949",
                                     "codigoUnidade":  "25136"
                                 },
                                 {
                                     "nome":  "NAIRZINHA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "576487",
                                     "codigoUnidade":  "300327"
                                 },
                                 {
                                     "nome":  "PROFESSOR PAULO CESAR CARNIEL GIOVANNETTI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "435065",
                                     "codigoUnidade":  "173627"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "LOLIA DA FONSECA P REIS PROFA EM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "108406",
                                      "codigoUnidade":  "70328"
                                  },
                                  {
                                      "nome":  "ANDRE RUGGERI EMEBP",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "80317",
                                      "codigoUnidade":  "32157"
                                  },
                                  {
                                      "nome":  "JARDIM ONELIA MENTA EM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "108522",
                                      "codigoUnidade":  "70330"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CENTRO EDUCACIONAL DE BRODOWSKI",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "809494",
                                        "codigoUnidade":  "51514"
                                    },
                                    {
                                        "nome":  "CRER E VENCER COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "296570",
                                        "codigoUnidade":  "125326"
                                    },
                                    {
                                        "nome":  "LICEU SÃO SEBASTIÃO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "9503",
                                        "codigoUnidade":  "363312"
                                    }
                                ]
    },
    {
        "nome":  "ROSANA MORILHA DE OLIVEIRA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "BENEDITO MACIEL ARANTES PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "900734",
                                     "codigoUnidade":  "21803"
                                 },
                                 {
                                     "nome":  "FRANCISCO DA CUNHA JUNQUEIRA DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24016",
                                     "codigoUnidade":  "37670"
                                 },
                                 {
                                     "nome":  "ROMUALDO MONTEIRO DE BARROS PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "42882",
                                     "codigoUnidade":  "31744"
                                 },
                                 {
                                     "nome":  "SEBASTIAO FERNANDES PALMA PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24077",
                                     "codigoUnidade":  "43839"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "TIRADENTES EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "207421",
                                      "codigoUnidade":  "33456"
                                  },
                                  {
                                      "nome":  "AMÉLIA DA SILVA PASSOS EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "202368",
                                      "codigoUnidade":  "45654"
                                  },
                                  {
                                      "nome":  "ELVIRA YOLANDA ERVAS PROFA EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "207445",
                                      "codigoUnidade":  "357955"
                                  },
                                  {
                                      "nome":  "ELVIRA YOLANDA ERVAS PROFA EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "207445",
                                      "codigoUnidade":  "4431"
                                  },
                                  {
                                      "nome":  "NAIR DUARTE P FRANZONI PROFA EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "283848",
                                      "codigoUnidade":  "52164"
                                  },
                                  {
                                      "nome":  "JOSE DA SILVA PASSOS EM TI",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "287763",
                                      "codigoUnidade":  "113229"
                                  }
                              ],
        "escolasParticulares":  [

                                ]
    },
    {
        "nome":  "SIMONE APARECIDA PIMENTA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "SALUSTIANO LEMOS",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "48458",
                                     "codigoUnidade":  "31847"
                                 },
                                 {
                                     "nome":  "TEOFILO SIQUEIRA",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24302",
                                     "codigoUnidade":  "43847"
                                 },
                                 {
                                     "nome":  "VERGINIO MELLONI",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24326",
                                     "codigoUnidade":  "43852"
                                 },
                                 {
                                     "nome":  "SIMAO DA SILVA",
                                     "municipio":  "SAO SIMAO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24235",
                                     "codigoUnidade":  "18902"
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "WOLMAR RIBEIRO BALBAO PROFA EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "291109",
                                      "codigoUnidade":  "118725"
                                  },
                                  {
                                      "nome":  "LOURDES P MASSARO PROFA EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "224765",
                                      "codigoUnidade":  "14777"
                                  },
                                  {
                                      "nome":  "JOSE ROBERTO COSTA BRUNO EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigoEscola":  "375585",
                                      "codigoUnidade":  "150225"
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CASTELO DO CRIAR",
                                        "municipio":  "SANTA ROSA DE VITERBO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "7087",
                                        "codigoUnidade":  "357125"
                                    },
                                    {
                                        "nome":  "MILENIO INSTITUTO EDUCACIONAL",
                                        "municipio":  "SANTA ROSA DE VITERBO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "152791",
                                        "codigoUnidade":  "32864"
                                    }
                                ]
    },
    {
        "nome":  "SUSANA MACHADO MARCHI",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JARDIM DAS ROSAS",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "922687",
                                     "codigoUnidade":  "22150"
                                 },
                                 {
                                     "nome":  "JOSE COSTA DEPUTADO",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23991",
                                     "codigoUnidade":  "25187"
                                 },
                                 {
                                     "nome":  "BARROS CONEGO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23826",
                                     "codigoUnidade":  "640"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CERVANTES COLEGIO UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "504622",
                                        "codigoUnidade":  "235630"
                                    },
                                    {
                                        "nome":  "DANIA AMARAL ESPACO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "131052",
                                        "codigoUnidade":  "83626"
                                    },
                                    {
                                        "nome":  "CANTINHO ALEGRE EEIEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "186454",
                                        "codigoUnidade":  "334727"
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802220",
                                        "codigoUnidade":  "6170"
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802220",
                                        "codigoUnidade":  "331629"
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802220",
                                        "codigoUnidade":  "359477"
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "802220",
                                        "codigoUnidade":  "359478"
                                    },
                                    {
                                        "nome":  "COLÉGIO CERVANTES - UNIDADE MABEL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "10114",
                                        "codigoUnidade":  "364353"
                                    },
                                    {
                                        "nome":  "COLÉGIO CERVANTES - UNIDADE ALTO DA BOA VISTA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "9677",
                                        "codigoUnidade":  "363501"
                                    }
                                ]
    },
    {
        "nome":  "TAMIE DE LANA VIEIRA UEMURA LORENZETTO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "FRANCISCO GOMES PROFESSOR",
                                     "municipio":  "CRAVINHOS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24260",
                                     "codigoUnidade":  "25204"
                                 },
                                 {
                                     "nome":  "DR THOMAZ ALBERTO WHATELY",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "24168",
                                     "codigoUnidade":  "25195"
                                 },
                                 {
                                     "nome":  "AMELIA DOS SANTOS MUSA PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigoEscola":  "23917",
                                     "codigoUnidade":  "12603"
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "TOM JOBIM EEB",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "186065",
                                        "codigoUnidade":  "39333"
                                    },
                                    {
                                        "nome":  "CRAVINHOS CENTRO EDUCACIONAL DE",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "373424",
                                        "codigoUnidade":  "149635"
                                    },
                                    {
                                        "nome":  "VIEIRA MEDINA SISTEMA EDUCACIONAL",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "168002",
                                        "codigoUnidade":  "3738"
                                    },
                                    {
                                        "nome":  "MUNDO ENCANTADO ESCOLA DE ARTE EIEF",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "191784",
                                        "codigoUnidade":  "89529"
                                    },
                                    {
                                        "nome":  "IDEAL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "295784",
                                        "codigoUnidade":  "123334"
                                    },
                                    {
                                        "nome":  "ESCOLA CONCEPT",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "4304",
                                        "codigoUnidade":  "346984"
                                    },
                                    {
                                        "nome":  "ESPAÇO CULTURAL COLÉGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "118540",
                                        "codigoUnidade":  "2615"
                                    },
                                    {
                                        "nome":  "COLÉGIO ESPAÇO CULTURAL - UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "11457",
                                        "codigoUnidade":  "366169"
                                    },
                                    {
                                        "nome":  "WALDORF JOAO GUIMARÃES ROSA ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigoEscola":  "140442",
                                        "codigoUnidade":  "45012"
                                    }
                                ]
    }
];
