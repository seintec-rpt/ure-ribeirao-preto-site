export type Escola = {
  nome: string;
  codigo?: string[];
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
                                     "nome":  "HCFMRP-USP CENTRO INTERESCOLAR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - OUTROS",
                                     "codigo":  [
                                                    "252232"
                                                ]
                                 },
                                 {
                                     "nome":  "DJANIRA VELHO PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "47468"
                                                ]
                                 },
                                 {
                                     "nome":  "ROMEU ALBERTI DOM",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "912086"
                                                ]
                                 },
                                 {
                                     "nome":  "ROSANGELA BASILE PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "911306"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO CONCEPÇÃO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "268458",
                                                       "101131"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO CONCEPÇÃO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "268458",
                                                       "358299"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO INDEPENDÊNCIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "6183"
                                                   ]
                                    },
                                    {
                                        "nome":  "DUQUE EEIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "442914"
                                                   ]
                                    },
                                    {
                                        "nome":  "SAO GABRIEL ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "430043"
                                                   ]
                                    },
                                    {
                                        "nome":  "SATHYA SAI RIBEIRAO PRETO ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "193884"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "ALINE CORREA DE LACERDA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ALPHEU DOMINGUETTI PROFESSOR",
                                     "municipio":  "ALTINOPOLIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24089",
                                                    "25194"
                                                ]
                                 },
                                 {
                                     "nome":  "JENNY TOLEDO PIZA SCHROEDER PROFA",
                                     "municipio":  "ALTINOPOLIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "41531"
                                                ]
                                 },
                                 {
                                     "nome":  "WALTER PAIVA PROFESSOR",
                                     "municipio":  "ALTINOPOLIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "49612"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ALAYDE FIGUEIREDO CANASSA EMEFEI",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "210134"
                                                 ]
                                  },
                                  {
                                      "nome":  "ANA LUCIA F P FERREIRA EMEI",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "567644"
                                                 ]
                                  },
                                  {
                                      "nome":  "CARMEM MIGUEL VICARI EMEF",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "220899"
                                                 ]
                                  },
                                  {
                                      "nome":  "ERMELINDA R S FIGUEIREDO EMEFEI",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "281360"
                                                 ]
                                  },
                                  {
                                      "nome":  "GERALDO TROSSEL PADRE EMEF",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "220905",
                                                     "4795"
                                                 ]
                                  },
                                  {
                                      "nome":  "JOAQUIM DA CUNHA CORONEL EMEF",
                                      "municipio":  "ALTINOPOLIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "239781"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "UNIFEP",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "483497"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "ANA CLAUDIA FERNANDES",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "GETULIO VARGAS DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "903462"
                                                ]
                                 },
                                 {
                                     "nome":  "HERMINIA GUGLIANO PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23905"
                                                ]
                                 },
                                 {
                                     "nome":  "JORGE RODINI LUIZ PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "918167"
                                                ]
                                 },
                                 {
                                     "nome":  "JOSE BOMPANI VEREADOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "903474"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ANCHIETA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "130898"
                                                   ]
                                    },
                                    {
                                        "nome":  "BENTO BENEDINI COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "142955",
                                                       "3180"
                                                   ]
                                    },
                                    {
                                        "nome":  "BENTO BENEDINI COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "142955",
                                                       "363596"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO ELEVE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "7958"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA SEMENTE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "50362"
                                                   ]
                                    },
                                    {
                                        "nome":  "IAVEC INST AVAN VIDA ENS CRISTAO",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "11192"
                                                   ]
                                    },
                                    {
                                        "nome":  "IAVEC INST AVAN VIDA ENS CRISTAO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "121733",
                                                       "355283"
                                                   ]
                                    },
                                    {
                                        "nome":  "IAVEC INST AVAN VIDA ENS CRISTAO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "121733",
                                                       "75229"
                                                   ]
                                    },
                                    {
                                        "nome":  "METROPOLITANA ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "557961",
                                                       "240640"
                                                   ]
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
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "980024"
                                                ]
                                 },
                                 {
                                     "nome":  "MARIA VIRGINIA MANSUR BIAGI PROFA",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "919433"
                                                ]
                                 },
                                 {
                                     "nome":  "RUBEN CLAUDIO MOREIRA PROFESSOR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23942"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "EMEB DO CAIC GILBERTO D VECCHIA",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "210845"
                                                 ]
                                  },
                                  {
                                      "nome":  "EMEB JOSE BRAGA MORATO",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "211291"
                                                 ]
                                  },
                                  {
                                      "nome":  "EMEB PADRE BENITO U ERBASTRIN",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "239896"
                                                 ]
                                  },
                                  {
                                      "nome":  "EMEB PROFA ANNA B DE ANDRADE",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "411127"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO RESSURREIÇÃO RIBEIRÃO PRETO",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115083"
                                                   ]
                                    },
                                    {
                                        "nome":  "CONTRAPONTO EMA",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "264003"
                                                   ]
                                    },
                                    {
                                        "nome":  "CRESCER CDROJI",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "126559"
                                                   ]
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
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "900831"
                                                ]
                                 },
                                 {
                                     "nome":  "DEPUTADO ANTONIO CALIXTO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "566780"
                                                ]
                                 },
                                 {
                                     "nome":  "PARQUE DOS SERVIDORES",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "925706"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "BRASIL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114923"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO NOVO SUMAREZINHO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "184486"
                                                   ]
                                    },
                                    {
                                        "nome":  "FAVINHO DE MEL EIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802116"
                                                   ]
                                    },
                                    {
                                        "nome":  "INSTITUTO DE EDUCAÇÃO TÉCNICA RIBEIRÃO PRETO LTDA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "11500"
                                                   ]
                                    },
                                    {
                                        "nome":  "PINHEIRINHO COLEGIO EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "186041",
                                                       "33223"
                                                   ]
                                    },
                                    {
                                        "nome":  "PINHEIRINHO COLEGIO EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "186041",
                                                       "359987"
                                                   ]
                                    },
                                    {
                                        "nome":  "RENOVACAO CRISTAO CEI",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "169377"
                                                   ]
                                    },
                                    {
                                        "nome":  "TECNURSING",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "11566"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "ANDRE MARCELO RUIZ",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "CANDIDO PORTINARI",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23000"
                                                ]
                                 },
                                 {
                                     "nome":  "IRENE DIAS RIBEIRO PROFESSORA",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "900072"
                                                ]
                                 },
                                 {
                                     "nome":  "JOAQUIM ALVES FERREIRA MONSENHOR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "22962"
                                                ]
                                 },
                                 {
                                     "nome":  "SILVIO DE ALMEIDA",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "22925"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "EMEB PROFA ALZIRA ACRA D ALMEIDA",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "239872"
                                                 ]
                                  },
                                  {
                                      "nome":  "EMEB PROFA CELIA B C ALBUQUERQUE",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "239884"
                                                 ]
                                  },
                                  {
                                      "nome":  "EMEB PROFA ESTHER VIANNA BOLOGNA",
                                      "municipio":  "BATATAIS",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "137832"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CAMILLO DE MATTOS COLEGIO",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "160921"
                                                   ]
                                    },
                                    {
                                        "nome":  "COC BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802347",
                                                       "15503"
                                                   ]
                                    },
                                    {
                                        "nome":  "COC BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802347",
                                                       "347514"
                                                   ]
                                    },
                                    {
                                        "nome":  "SISTEMA INTEGRADO DE EDUC. INFANTIL E ENS. FUND. DE BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "118291"
                                                   ]
                                    },
                                    {
                                        "nome":  "SOCIEDADE DE ENSINO FUNDAMENTAL DE BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "120595"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "CARLOS ANDRE MARQUES BARBOSA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "GALDINO DE CASTRO",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "22330"
                                                ]
                                 },
                                 {
                                     "nome":  "GERALDO TORRANO PROFESSOR",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "903498"
                                                ]
                                 },
                                 {
                                     "nome":  "MACARIO DE ALMEIDA CONEGO",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23038"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ABEL DOS REIS EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "218549",
                                                     "45785"
                                                 ]
                                  },
                                  {
                                      "nome":  "EMEF CÔNEGO MACÁRIO DE ALMEIDA",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "6021"
                                                 ]
                                  },
                                  {
                                      "nome":  "ESCOLA JOAQUIM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "8240"
                                                 ]
                                  },
                                  {
                                      "nome":  "MANUEL AUGUSTO R ALECRIM EMEF",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "355823"
                                                 ]
                                  },
                                  {
                                      "nome":  "MOISART ALVES SILVA DR EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "80940"
                                                 ]
                                  },
                                  {
                                      "nome":  "ROMUALDO DE CARVALHO PROF EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "471513"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CANTABILE CONSERV DE ARTE MUSICAL",
                                        "municipio":  "CAJURU",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "195716"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "DAGMAR RIBEIRO DA SILVA COSTA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "EXPEDICIONARIOS BRASILEIROS",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "907881"
                                                ]
                                 },
                                 {
                                     "nome":  "JOAO RODRIGUES GUIAO DOUTOR",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24193"
                                                ]
                                 },
                                 {
                                     "nome":  "JOVEM FELIPE GUI ROCHA",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "576475"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ATHENAS COLEGIO",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "126287"
                                                   ]
                                    },
                                    {
                                        "nome":  "CHEGA QUEM CAMINHA EEE",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "146900"
                                                   ]
                                    },
                                    {
                                        "nome":  "DINAMIC COLEGIO",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "363862"
                                                   ]
                                    },
                                    {
                                        "nome":  "PALAS ATENA COLEGIO",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "808623"
                                                   ]
                                    },
                                    {
                                        "nome":  "PIRAMIDE COLEGIO",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "144642"
                                                   ]
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
                                     "codigo":  [
                                                    "48446"
                                                ]
                                 },
                                 {
                                     "nome":  "GLORIA DOS SANTOS FONSECA PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "909737"
                                                ]
                                 },
                                 {
                                     "nome":  "JOSE ALEIXO DA SILVA PASSOS CEL",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23838",
                                                    "54024"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COC RIBEIRÃO PRETO - REDE ÚNICA DE EDUCAÇÃO UNID 02",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "567632"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO MARANATA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "477643",
                                                       "204966"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO MARANATA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "477643",
                                                       "324025"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E EF- 29497",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "223225"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E EF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "29497",
                                                       "355256"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E EF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "29497",
                                                       "386236"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO SOL E VIDA - EDUCAÇÃO INFANTIL E EF- 29497",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "16331"
                                                   ]
                                    },
                                    {
                                        "nome":  "LEV VIGOTSKY ATHENEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "123341"
                                                   ]
                                    },
                                    {
                                        "nome":  "OBJETIVO CTO INTERESCOLAR U XXVII",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "165190"
                                                   ]
                                    },
                                    {
                                        "nome":  "TERNURINHA SINAPSE COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "164975",
                                                       "356258"
                                                   ]
                                    },
                                    {
                                        "nome":  "TERNURINHA SINAPSE COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "164975",
                                                       "3800"
                                                   ]
                                    },
                                    {
                                        "nome":  "VITA ET PAX COLEGIO PRE PG UNID I",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115010"
                                                   ]
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
                                     "codigo":  [
                                                    "905800"
                                                ]
                                 },
                                 {
                                     "nome":  "JESUS GUILHERME GIACOMINI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "918155"
                                                ]
                                 },
                                 {
                                     "nome":  "ORLANDO JURCA DEPUTADO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "900746"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "HELENA MARIA L MELLO PROFA EMEF",
                                      "municipio":  "RIBEIRAO PRETO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "367965"
                                                 ]
                                  },
                                  {
                                      "nome":  "ROBERTO BRAYN EMEF",
                                      "municipio":  "RIBEIRAO PRETO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "200712"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ADRIANA PAULA BALÉ",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "257059"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO NOVO – UNIDADE ALTO DA BOA VISTA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "9366"
                                                   ]
                                    },
                                    {
                                        "nome":  "CONTEMPORANEO LICEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "151270",
                                                       "14021"
                                                   ]
                                    },
                                    {
                                        "nome":  "CONTEMPORANEO LICEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "151270",
                                                       "167825"
                                                   ]
                                    },
                                    {
                                        "nome":  "CONTEMPORANEO LICEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "151270",
                                                       "363225"
                                                   ]
                                    },
                                    {
                                        "nome":  "LICEU CONTEMPORANEO ENSINO MEDIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "431436"
                                                   ]
                                    },
                                    {
                                        "nome":  "INTERATIVA EEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "167940"
                                                   ]
                                    },
                                    {
                                        "nome":  "VIANNA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "809913"
                                                   ]
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
                                     "codigo":  [
                                                    "350588"
                                                ]
                                 },
                                 {
                                     "nome":  "OTONIEL MOTA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24119"
                                                ]
                                 },
                                 {
                                     "nome":  "PROFESSOR LAURO BIGELLI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "925684",
                                                    "46926"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "APAE DE BATATAIS",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "145579"
                                                   ]
                                    },
                                    {
                                        "nome":  "APAE DE CRAVINHOS",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "190697"
                                                   ]
                                    },
                                    {
                                        "nome":  "APAE DE SERRANA EEE",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "146912"
                                                   ]
                                    },
                                    {
                                        "nome":  "MARIA MELLO SEGHETO EEE DA APAE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "190056"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA ÚNICA - RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "7840"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESPACO APRENDIZ CE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "301700"
                                                   ]
                                    },
                                    {
                                        "nome":  "HEITOR VILLA LOBOS EM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "258490"
                                                   ]
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
                                     "codigo":  [
                                                    "23851"
                                                ]
                                 },
                                 {
                                     "nome":  "HELY LOPES MEIRELLES",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24156"
                                                ]
                                 },
                                 {
                                     "nome":  "ORLANDO VITALIANO VEREADOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "44647"
                                                ]
                                 },
                                 {
                                     "nome":  "RAFAEL LEME FRANCO PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "42870"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "APAE DE RIBEIRAO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "145810"
                                                   ]
                                    },
                                    {
                                        "nome":  "CARLA PETRONI STUDIUM ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "262985"
                                                   ]
                                    },
                                    {
                                        "nome":  "CLARETIANO COLEGIO SAO JOSE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114406"
                                                   ]
                                    },
                                    {
                                        "nome":  "MAPLE BEAR CANADIAN SCHOOL RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "5395"
                                                   ]
                                    },
                                    {
                                        "nome":  "SANTA URSULA RP EIEFEM INSTITUTO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114960"
                                                   ]
                                    },
                                    {
                                        "nome":  "TERRA CIRANDINHA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "185361",
                                                       "136535"
                                                   ]
                                    },
                                    {
                                        "nome":  "TERRA CIRANDINHA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "185361",
                                                       "4124"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "FLAVIA DENISE CARDINALI MENDES DA CUNHA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "JOAO PALMA GUIAO DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "900758"
                                                ]
                                 },
                                 {
                                     "nome":  "JOSE LIMA P DE FREITAS PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23875"
                                                ]
                                 },
                                 {
                                     "nome":  "VEREADOR JOSÉ VELLONI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "576499"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "BAUHAUS CENTRO DE FORMACAO PROFISSIONAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "6959"
                                                   ]
                                    },
                                    {
                                        "nome":  "CASTELO ESCOLA DE EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115046"
                                                   ]
                                    },
                                    {
                                        "nome":  "CECILIA MEIRELES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "174488",
                                                       "355203"
                                                   ]
                                    },
                                    {
                                        "nome":  "CECILIA MEIRELES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "174488",
                                                       "3997"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO MONTE REI",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "10317"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO SPIRLANDELLI",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "7131"
                                                   ]
                                    },
                                    {
                                        "nome":  "KINDERSPIEL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "164963"
                                                   ]
                                    },
                                    {
                                        "nome":  "PRILAMPO COLEGIO EIEF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802529",
                                                       "28127"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "GISLAINE APARECIDA JOB MORETTI",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "BAIRRO FRANCISCO CASTILHO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "462792"
                                                ]
                                 },
                                 {
                                     "nome":  "BAUDILIO BIAGI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "905811"
                                                ]
                                 },
                                 {
                                     "nome":  "CID DE OLIVEIRA LEITE PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24090"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COL BATISTA INDEPENDENTE DE RP",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "186442"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO EINSTEIN",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "186429"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO FAAP RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "9332"
                                                   ]
                                    },
                                    {
                                        "nome":  "FAAP RIBEIRAO PRETO COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "449003",
                                                       "192726"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE ALVARES CABRAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "290804"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE LAFAIETE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "132925"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE PORTUGAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "140430"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA SEB UNIDADE RIBEIRANIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115009",
                                                       "44803"
                                                   ]
                                    },
                                    {
                                        "nome":  "PEQUENO PRINCIPE COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114832",
                                                       "358265"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "ISABEL CRISTINA SAMPAIO RODRIGUEZ",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ABEL DOS REIS",
                                     "municipio":  "CASSIA DOS COQUEIROS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24399"
                                                ]
                                 },
                                 {
                                     "nome":  "FRANCISCO MATARAZZO CONDE",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24314"
                                                ]
                                 },
                                 {
                                     "nome":  "JULIETA FERNANDA SOUSA TARANTO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "925697"
                                                ]
                                 },
                                 {
                                     "nome":  "MESSIAS DA FONSECA DOUTOR",
                                     "municipio":  "CAJURU",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24200"
                                                ]
                                 },
                                 {
                                     "nome":  "RITA FERRAZ CASELLI PROFESSORA",
                                     "municipio":  "SANTA CRUZ DA ESPERANCA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24211"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "EMEB NAUR JOSÉ PRATES",
                                      "municipio":  "SANTA CRUZ DA ESPERANCA",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "9952"
                                                 ]
                                  },
                                  {
                                      "nome":  "JOSE ALVES PALMA DA SILVA DR EM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "108431"
                                                 ]
                                  },
                                  {
                                      "nome":  "MAURILIO DE OLIVEIRA PROF EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "289802"
                                                 ]
                                  },
                                  {
                                      "nome":  "OLYMPIO PEREIRA CONCEICAO EMEB",
                                      "municipio":  "SANTA CRUZ DA ESPERANCA",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "232671",
                                                     "14880"
                                                 ]
                                  },
                                  {
                                      "nome":  "OLYMPIO PEREIRA CONCEICAO EMEB",
                                      "municipio":  "SANTA CRUZ DA ESPERANCA",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "232671",
                                                     "289725"
                                                 ]
                                  },
                                  {
                                      "nome":  "OLYMPIO PEREIRA CONCEICAO EMEB",
                                      "municipio":  "SANTA CRUZ DA ESPERANCA",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "232671",
                                                     "359517"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "MIGUEL NAYME CENTRO EDUCACIONAL",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115162",
                                                       "2685"
                                                   ]
                                    },
                                    {
                                        "nome":  "MIGUEL NAYME CENTRO EDUCACIONAL",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115162",
                                                       "359992"
                                                   ]
                                    },
                                    {
                                        "nome":  "TALES DE MILETO LICEU",
                                        "municipio":  "SANTA ROSA DE VITERBO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "113876"
                                                   ]
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
                                     "codigo":  [
                                                    "24065"
                                                ]
                                 },
                                 {
                                     "nome":  "HELIO LOURENCO DE OLIVEIRA PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "900761"
                                                ]
                                 },
                                 {
                                     "nome":  "OSCAR DE MOURA LACERDA PROF DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "44659"
                                                ]
                                 },
                                 {
                                     "nome":  "WALTER FERREIRA PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23887"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ALMEIDA GARRETT EEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "338345",
                                                       "139646"
                                                   ]
                                    },
                                    {
                                        "nome":  "ALMEIDA GARRETT EEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "338345",
                                                       "358463"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLAG",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "10249"
                                                   ]
                                    },
                                    {
                                        "nome":  "ARTE DO MUSEU EEIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "123250"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESPAÇO ARTE DO MUSEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "4373"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO ARKADIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "579890"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO ARKADIA - UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "10109"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO MARISTA CHAMPAGNAT",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "574961"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO JUBILEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "11166"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO JUBILEU",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "385931"
                                                   ]
                                    },
                                    {
                                        "nome":  "J MANIEZO COLÉGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "299121"
                                                   ]
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
                                     "codigo":  [
                                                    "24223"
                                                ]
                                 },
                                 {
                                     "nome":  "EE LAUDELINA DE CAMPOS MELO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "12006"
                                                ]
                                 },
                                 {
                                     "nome":  "EE MADRE TERESA DE CALCUTÁ",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "12000"
                                                ]
                                 },
                                 {
                                     "nome":  "NEUSA MARIA DO BEM PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "350643"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ANTONIETTA MATTOS G TAVEIROS EMEB",
                                      "municipio":  "SERRAZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "232661"
                                                 ]
                                  },
                                  {
                                      "nome":  "JACOMO ANTONIO COPELLO PROF EMEB",
                                      "municipio":  "SERRAZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "232658"
                                                 ]
                                  },
                                  {
                                      "nome":  "MARIA DO ROSARIO FREITAS EMEB",
                                      "municipio":  "SERRAZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "279161"
                                                 ]
                                  },
                                  {
                                      "nome":  "ILKA MONICI VILLELA DOS REIS EMEB",
                                      "municipio":  "SERRAZUL",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "450236"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "GRAU TÉCNICO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "9005"
                                                   ]
                                    },
                                    {
                                        "nome":  "IBRESP - POLO RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA"
                                    },
                                    {
                                        "nome":  "MARISTA IR RUI LEOPOLDO DEPINE CE",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "567656"
                                                   ]
                                    },
                                    {
                                        "nome":  "MOURA LACERDA COLEGIO UNIDADE I",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114959"
                                                   ]
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
                                     "codigo":  [
                                                    "23978"
                                                ]
                                 },
                                 {
                                     "nome":  "DOMINGOS JOAO B SPINELLI PROF DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "44660"
                                                ]
                                 },
                                 {
                                     "nome":  "JOAO AUGUSTO DE MELLO PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23954"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ALBERT SABIN EEI E PG",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "126354"
                                                   ]
                                    },
                                    {
                                        "nome":  "ALBERT SABIN ESCOLA ENSINO MEDIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "118503"
                                                   ]
                                    },
                                    {
                                        "nome":  "BARAO DE MAUA ESCOLA EIFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114911"
                                                   ]
                                    },
                                    {
                                        "nome":  "CARLOS CHAGAS FILHO EEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "152804"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO ANTONIO FRATA",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "166873"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO JS",
                                        "municipio":  "SERRANA",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "300408"
                                                   ]
                                    },
                                    {
                                        "nome":  "ITAMARATI COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "141537"
                                                   ]
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
                                     "codigo":  [
                                                    "24272"
                                                ]
                                 },
                                 {
                                     "nome":  "MEIRA JUNIOR DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24053"
                                                ]
                                 },
                                 {
                                     "nome":  "VICENTE TEODORO DE SOUZA PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "907873"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ASSOCIACAO DE AMIGOS DO AUTISTA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "190731"
                                                   ]
                                    },
                                    {
                                        "nome":  "BELA LÍRIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "7202"
                                                   ]
                                    },
                                    {
                                        "nome":  "BELA LÍRIA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "8988"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO CAPELLA KIDS",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "431138"
                                                   ]
                                    },
                                    {
                                        "nome":  "CONSTRUINDO CONHECIMENTO EEIF",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "567673"
                                                   ]
                                    },
                                    {
                                        "nome":  "LUCIANA JUNQUEIRA STUDIO DE DANCA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "252136"
                                                   ]
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
                                     "codigo":  [
                                                    "24375",
                                                    "357954"
                                                ]
                                 },
                                 {
                                     "nome":  "FRANCISCO FERREIRA DE FREITAS",
                                     "municipio":  "SERRAZUL",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24296"
                                                ]
                                 },
                                 {
                                     "nome":  "SERRAZUL",
                                     "municipio":  "SERRAZUL",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "85397"
                                                ]
                                 },
                                 {
                                     "nome":  "VIRGILIO GARCIA CAPITAO",
                                     "municipio":  "SAO SIMAO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24259"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "FAUSTO NOGUEIRA PROF EMEE",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "79273"
                                                 ]
                                  },
                                  {
                                      "nome":  "FAUSTO PIRES OLIVEIRA HIST EMEF",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "242093"
                                                 ]
                                  },
                                  {
                                      "nome":  "MARCILIO BONDESAN EM",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "223074"
                                                 ]
                                  },
                                  {
                                      "nome":  "YOLANDA JORGE PROFA EMEF",
                                      "municipio":  "SAO SIMAO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "468104"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CARLOS MONTEIRO LICEU",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "159190"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLEGIO JESUS MARIA JOSE",
                                        "municipio":  "SAO SIMAO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "574922"
                                                   ]
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
                                     "codigo":  [
                                                    "22901",
                                                    "18842"
                                                ]
                                 },
                                 {
                                     "nome":  "GERALDO CORREIA DE CARVALHO DR",
                                     "municipio":  "ALTINOPOLIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "37151"
                                                ]
                                 },
                                 {
                                     "nome":  "PROFESSORA SUELI TEREZINHA DANHONE",
                                     "municipio":  "ALTINOPOLIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "412181"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "APARECIDA ELIAS DRAIBE EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "108893"
                                                 ]
                                  },
                                  {
                                      "nome":  "JANUARIO BENVENUTO EMEB",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "108534"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "APAE DE ALTINOPOLIS CEE",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "149809"
                                                   ]
                                    },
                                    {
                                        "nome":  "BATATAENSE AEFMP",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114418"
                                                   ]
                                    },
                                    {
                                        "nome":  "CARLOS DRUMOND DE ANDRADE COLEGIO",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "124679"
                                                   ]
                                    },
                                    {
                                        "nome":  "DINAMICA ESCOLA",
                                        "municipio":  "ALTINOPOLIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "176459"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "MARIANA COLMANETTI BRIGATO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ALCIDES CORREA PROFESSOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23930"
                                                ]
                                 },
                                 {
                                     "nome":  "ANTONIO DIEDERICHSEN",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23848"
                                                ]
                                 },
                                 {
                                     "nome":  "VEIGA DE MIRANDA MINISTRO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "36869"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CAMPOS ELISEOS CENTRO EDUCACIONAL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "807655",
                                                       "6339"
                                                   ]
                                    },
                                    {
                                        "nome":  "FILADELFIA DE RIBEIRAO PRETO INST",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "262250"
                                                   ]
                                    },
                                    {
                                        "nome":  "GENESIS COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "291493"
                                                   ]
                                    },
                                    {
                                        "nome":  "LACORDAIRE COLEGIO ENSINO MEDIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "268173"
                                                   ]
                                    },
                                    {
                                        "nome":  "LACORDAIRE SANT ANNA EB",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "118527"
                                                   ]
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI P PASSOS UNI III",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "562130"
                                                   ]
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI P PASSOS UNID I",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "268161"
                                                   ]
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI P PASSOS UNID IV",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "562142"
                                                   ]
                                    },
                                    {
                                        "nome":  "QUEIROZ BRUNELLI PRIMEIRO PASSOS UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "8960"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "MESSIAS MOTA VIEIRA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "ANTONIO AUGUSTO LOPES OLIVEIRA JR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "49566"
                                                ]
                                 },
                                 {
                                     "nome":  "JARDIM PAIVA I",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "925688"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO CIV",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "11862"
                                                   ]
                                    },
                                    {
                                        "nome":  "INSTITUTO EDUCACIONAL PAULISTA",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "10663"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "PATRICIA TITARELLI ALVES DE OLIVEIRA",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "CORDELIA RIBEIRO RAGOZO PROFA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "915555"
                                                ]
                                 },
                                 {
                                     "nome":  "GUIMARAES JUNIOR DOUTOR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24028",
                                                    "25188"
                                                ]
                                 },
                                 {
                                     "nome":  "MIGUEL JORGE",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "900771"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "LUIZ ANTONIO EMEF TEC DE QUIMICA",
                                      "municipio":  "LUIS ANTONIO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "77549"
                                                 ]
                                  },
                                  {
                                      "nome":  "ZILDA APPARECIDA M SEIXAS EMEF",
                                      "municipio":  "LUIS ANTONIO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "130163"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "- 11153",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA"
                                    },
                                    {
                                        "nome":  "COLÉGIO VIKTOR FRANKL (UNIDADE 2 - BOULEVARD)",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "10462"
                                                   ]
                                    },
                                    {
                                        "nome":  "MARISTA COLEGIO DE RIBEIRAO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114820"
                                                   ]
                                    },
                                    {
                                        "nome":  "NOSSA SENHORA AUXILIADORA COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "114996"
                                                   ]
                                    },
                                    {
                                        "nome":  "VIKTOR FRANKL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "168993",
                                                       "14157"
                                                   ]
                                    },
                                    {
                                        "nome":  "VILLA LOBOS COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "807680",
                                                       "6345"
                                                   ]
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
                                     "codigo":  [
                                                    "23796",
                                                    "346851"
                                                ]
                                 },
                                 {
                                     "nome":  "FRANCISCO BONFIM",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23968"
                                                ]
                                 },
                                 {
                                     "nome":  "PROFESSOR DIVO MARINO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "925718"
                                                ]
                                 },
                                 {
                                     "nome":  "SINHA JUNQUEIRA DONA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23929"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "ADVENTISTA RIBEIRO PRETO COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "115022"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA DE EDUCACAO CAMPINHO DA PAZ",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "400749"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA PRÓ CULTURAL AMARELINHA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "100511",
                                                       "356913"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA PRÓ CULTURAL AMARELINHA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "100511",
                                                       "66225"
                                                   ]
                                    },
                                    {
                                        "nome":  "EURIPEDES BARSANULFO PROF EPE",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "442884"
                                                   ]
                                    },
                                    {
                                        "nome":  "FABIOLA POCH CENTRO DE DANCA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "305066"
                                                   ]
                                    },
                                    {
                                        "nome":  "PEQUENO PRINCIPE EEIEF",
                                        "municipio":  "BATATAIS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "123687"
                                                   ]
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
                                     "codigo":  [
                                                    "906759"
                                                ]
                                 },
                                 {
                                     "nome":  "NAIRZINHA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "576487"
                                                ]
                                 },
                                 {
                                     "nome":  "PROFESSOR PAULO CESAR CARNIEL GIOVANNETTI",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "435065"
                                                ]
                                 },
                                 {
                                     "nome":  "WASHINGTON LUIZ DOUTOR",
                                     "municipio":  "BATATAIS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "22949"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "ANDRE RUGGERI EMEBP",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "80317"
                                                 ]
                                  },
                                  {
                                      "nome":  "JARDIM ONELIA MENTA EM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "108522"
                                                 ]
                                  },
                                  {
                                      "nome":  "LOLIA DA FONSECA P REIS PROFA EM",
                                      "municipio":  "CAJURU",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "108406"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CENTRO EDUCACIONAL DE BRODOWSKI",
                                        "municipio":  "BRODOWSKI",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "809494"
                                                   ]
                                    },
                                    {
                                        "nome":  "CRER E VENCER COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "296570"
                                                   ]
                                    },
                                    {
                                        "nome":  "LICEU SÃO SEBASTIÃO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "9503"
                                                   ]
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
                                     "codigo":  [
                                                    "900734"
                                                ]
                                 },
                                 {
                                     "nome":  "FRANCISCO DA CUNHA JUNQUEIRA DR",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24016"
                                                ]
                                 },
                                 {
                                     "nome":  "ROMUALDO MONTEIRO DE BARROS PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "42882"
                                                ]
                                 },
                                 {
                                     "nome":  "SEBASTIAO FERNANDES PALMA PROF",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24077"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "AMÉLIA DA SILVA PASSOS EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "202368"
                                                 ]
                                  },
                                  {
                                      "nome":  "ELVIRA YOLANDA ERVAS PROFA EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "207445",
                                                     "357955"
                                                 ]
                                  },
                                  {
                                      "nome":  "ELVIRA YOLANDA ERVAS PROFA EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "207445",
                                                     "4431"
                                                 ]
                                  },
                                  {
                                      "nome":  "JOSE DA SILVA PASSOS EM TI",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "287763"
                                                 ]
                                  },
                                  {
                                      "nome":  "NAIR DUARTE P FRANZONI PROFA EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "283848"
                                                 ]
                                  },
                                  {
                                      "nome":  "TIRADENTES EMEF",
                                      "municipio":  "BRODOWSKI",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "207421"
                                                 ]
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
                                     "codigo":  [
                                                    "48458"
                                                ]
                                 },
                                 {
                                     "nome":  "SIMAO DA SILVA",
                                     "municipio":  "SAO SIMAO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24235"
                                                ]
                                 },
                                 {
                                     "nome":  "TEOFILO SIQUEIRA",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24302"
                                                ]
                                 },
                                 {
                                     "nome":  "VERGINIO MELLONI",
                                     "municipio":  "SANTA ROSA DE VITERBO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24326"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [
                                  {
                                      "nome":  "LOURDES P MASSARO PROFA EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "224765"
                                                 ]
                                  },
                                  {
                                      "nome":  "WOLMAR RIBEIRO BALBAO PROFA EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "291109"
                                                 ]
                                  },
                                  {
                                      "nome":  "JOSE ROBERTO COSTA BRUNO EMEF",
                                      "municipio":  "SANTA ROSA DE VITERBO",
                                      "rede":  "MUNICIPAL",
                                      "codigo":  [
                                                     "375585"
                                                 ]
                                  }
                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CASTELO DO CRIAR",
                                        "municipio":  "SANTA ROSA DE VITERBO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "7087"
                                                   ]
                                    },
                                    {
                                        "nome":  "INSTITUTO MONITOR - POLO RIBEIRÃO PRETO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA"
                                    }
                                ]
    },
    {
        "nome":  "SUSANA MACHADO MARCHI",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "BARROS CONEGO",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23826"
                                                ]
                                 },
                                 {
                                     "nome":  "JARDIM DAS ROSAS",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "922687",
                                                    "22150"
                                                ]
                                 },
                                 {
                                     "nome":  "JOSE COSTA DEPUTADO",
                                     "municipio":  "SERRANA",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23991"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "CANTINHO ALEGRE EIEFM",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "186454",
                                                       "334727"
                                                   ]
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802220",
                                                       "331629"
                                                   ]
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802220",
                                                       "359477"
                                                   ]
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802220",
                                                       "359478"
                                                   ]
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "802220",
                                                       "6170"
                                                   ]
                                    },
                                    {
                                        "nome":  "CERVANTES COLEGIO UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "504622"
                                                   ]
                                    },
                                    {
                                        "nome":  "COLÉGIO CERVANTES - UNIDADE ALTO DA BOA VISTA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "9677"
                                                   ]
                                    },
                                    {
                                        "nome":  "DANIA AMARAL ESPACO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "131052"
                                                   ]
                                    },
                                    {
                                        "nome":  "UNIDADE MABEL",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "10114"
                                                   ]
                                    }
                                ]
    },
    {
        "nome":  "TAMIE DE LANA VIEIRA UEMURA LORENZETTO",
        "atribuicoes":  [

                        ],
        "escolasEstaduais":  [
                                 {
                                     "nome":  "AMELIA DOS SANTOS MUSA PROFESSORA",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "23917"
                                                ]
                                 },
                                 {
                                     "nome":  "DR THOMAZ ALBERTO WHATELY",
                                     "municipio":  "RIBEIRAO PRETO",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24168"
                                                ]
                                 },
                                 {
                                     "nome":  "FRANCISCO GOMES PROFESSOR",
                                     "municipio":  "CRAVINHOS",
                                     "rede":  "ESTADUAL - SE",
                                     "codigo":  [
                                                    "24260"
                                                ]
                                 }
                             ],
        "escolasMunicipais":  [

                              ],
        "escolasParticulares":  [
                                    {
                                        "nome":  "COLÉGIO ESPAÇO CULTURAL - UNIDADE II",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "11457"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESCOLA CONCEPT",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "4304"
                                                   ]
                                    },
                                    {
                                        "nome":  "ESPAÇO CULTURAL COLÉGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "118540"
                                                   ]
                                    },
                                    {
                                        "nome":  "IDEAL COLEGIO",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "295784"
                                                   ]
                                    },
                                    {
                                        "nome":  "MUNDO ENCANTADO ESCOLA DE ARTE EIEF",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "191784"
                                                   ]
                                    },
                                    {
                                        "nome":  "CRAVINHOS CENTRO EDUCACIONAL DE",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "373424"
                                                   ]
                                    },
                                    {
                                        "nome":  "TOM JOBIM EEB",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "186065",
                                                       "39333"
                                                   ]
                                    },
                                    {
                                        "nome":  "VIEIRA MEDINA SISTEMA EDUCACIONAL",
                                        "municipio":  "CRAVINHOS",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "168002"
                                                   ]
                                    },
                                    {
                                        "nome":  "WALDORF JOAO G ROSA ESCOLA",
                                        "municipio":  "RIBEIRAO PRETO",
                                        "rede":  "PRIVADA",
                                        "codigo":  [
                                                       "140442"
                                                   ]
                                    }
                                ]
    }
];
