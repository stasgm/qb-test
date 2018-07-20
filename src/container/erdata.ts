export interface IAttribute {
    name: string,
    type?: string,    
    lName: object,
    required?: boolean,    
    semCategories?: string,
    calculated?: boolean,    
    sequence?: string,
    minValue?: any,
    maxValue?: any,
    maxLength?: number,
    autoTrim?: boolean,    
    defaultValue?: any,
    values?: any[],
    references?: any[],
    precision?: number,
    scale?: number,
    attributes?: any[],
    presLen?: number,
}

export interface IEntity {
    parent?: string,
    name: string,
    lName: object,    
    isAbstract: boolean,
    attributes?: IAttribute[],
    semCategories?: string,
}
  
export const entityList: Array<IEntity> = [
    {
        "name": "WG_HOLIDAY",
        "lName": {
          "ru": {
            "name": "Государственные праздники",
            "fullName": "Государственные праздники."
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "HOLIDAYDATE",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата праздника"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Праздник"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          }
        ]
      },
      {
        "name": "GD_PLACE",
        "lName": {
          "ru": {
            "name": "Административно-территориальные единицы"
          }
        },
        "isAbstract": false,
        "semCategories": "place",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PLACETYPE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Тип"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "Область"
              },
              {
                "value": "Район"
              }
            ],
            "defaultValue": "Область"
          },
          {
            "name": "PARENT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Ссылка на родителя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование",
                "fullName": "Наименование."
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "TELPREFIX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефонный префикс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "CODE"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$BER_DIM",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$ETTN_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны ISO3166"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$EVAT_OFFSHORE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Офшор"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_EAEU",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Входит в ЕАЭС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$ETTN_CODE_INT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Код страны ISO3166(число)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          }
        ]
      },
      {
        "name": "Folder",
        "lName": {
          "ru": {
            "name": "Папка"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в папку"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          }
        ]
      },
      {
        "name": "Company",
        "lName": {
          "ru": {
            "name": "Организация"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в папку"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Краткое наименование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "GD_COMPANYACCOUNT",
            "type": "DetailAttribute",
            "lName": {
              "ru": {
                "name": "Банковские счета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPANYACCOUNT"
            ]
          },
          {
            "name": "ADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "REGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "ZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт (ссылка)"
              }
            },
            "required": false,
            "semCategories": "objectlocation",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NOTE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Описание"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "EXTERNALKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Внешний ключ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EMAIL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Электронный адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "URL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Сайт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "POBOX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Абонентский ящик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "FAX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Факс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COMPANYACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Расчетный счет",
                "fullName": "Ссылка на р\\с"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPANYACCOUNT"
            ]
          },
          {
            "name": "HEADCOMPANY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Головная организация",
                "fullName": "Ссылка на головную орг."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ]
          },
          {
            "name": "FULLNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Полное наименование"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 180,
            "autoTrim": true
          },
          {
            "name": "COMPANYTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Тип организации",
                "fullName": "Тип компании"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "DIRECTORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Директор"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "CHIEFACCOUNTANTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Глв. бух"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "LOGO",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Логотип"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$WG_PERSDIRKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Начальник ОК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$INV_NDSDODGER",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Не плательщик НДС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$PLUSCOMPANYTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дополнительный тип организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$EVAT_OFFSHORE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент офшора"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_EAEU",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент ЕАЭС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_NATIVE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент РБ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_ISBIGCOMPANY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Крупный плательщик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LEGALNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Регистрационный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "TAXID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OKPO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ОКПО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OKNH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ОКНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SOATO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "СОАТО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SOOU",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "СООУ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "LICENCE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Лицензия"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "OKULP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "OKULP"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "GD_HOLDING",
            "type": "SetAttribute",
            "lName": {
              "ru": {
                "name": "Холдинг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ],
            "attributes": [],
            "presLen": 0
          }
        ]
      },
      {
        "parent": "Company",
        "name": "OurCompany",
        "lName": {
          "ru": {
            "name": "Рабочая организация"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в папку"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Краткое наименование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "GD_COMPANYACCOUNT",
            "type": "DetailAttribute",
            "lName": {
              "ru": {
                "name": "Банковские счета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPANYACCOUNT"
            ]
          },
          {
            "name": "ADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "REGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "ZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт (ссылка)"
              }
            },
            "required": false,
            "semCategories": "objectlocation",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NOTE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Описание"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "EXTERNALKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Внешний ключ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EMAIL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Электронный адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "URL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Сайт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "POBOX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Абонентский ящик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "FAX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Факс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COMPANYACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Расчетный счет",
                "fullName": "Ссылка на р\\с"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPANYACCOUNT"
            ]
          },
          {
            "name": "HEADCOMPANY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Головная организация",
                "fullName": "Ссылка на головную орг."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ]
          },
          {
            "name": "FULLNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Полное наименование"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 180,
            "autoTrim": true
          },
          {
            "name": "COMPANYTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Тип организации",
                "fullName": "Тип компании"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "DIRECTORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Директор"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "CHIEFACCOUNTANTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Глв. бух"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "LOGO",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Логотип"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$WG_PERSDIRKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Начальник ОК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$INV_NDSDODGER",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Не плательщик НДС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$PLUSCOMPANYTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дополнительный тип организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$EVAT_OFFSHORE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент офшора"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_EAEU",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент ЕАЭС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_NATIVE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент РБ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_ISBIGCOMPANY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Крупный плательщик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LEGALNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Регистрационный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "TAXID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OKPO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ОКПО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OKNH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ОКНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SOATO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "СОАТО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SOOU",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "СООУ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "LICENCE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Лицензия"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "OKULP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "OKULP"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "GD_HOLDING",
            "type": "SetAttribute",
            "lName": {
              "ru": {
                "name": "Холдинг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ],
            "attributes": [],
            "presLen": 0
          },
          {
            "name": "AC_COMPANYACCOUNT",
            "type": "SetAttribute",
            "lName": {
              "ru": {
                "name": "План счетов для организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ],
            "attributes": [
              {
                "name": "ISACTIVE",
                "type": "BooleanAttribute",
                "lName": {
                  "ru": {
                    "name": "Активен"
                  }
                },
                "required": false,
                "semCategories": "",
                "calculated": false,
                "defaultValue": false
              },
              {
                "name": "RESERVED",
                "type": "IntegerAttribute",
                "lName": {
                  "ru": {
                    "name": "Зарезервировано"
                  }
                },
                "required": false,
                "semCategories": "",
                "calculated": false,
                "minValue": -2147483648,
                "maxValue": 2147483647,
                "defaultValue": 0
              }
            ],
            "presLen": 0
          }
        ]
      },
      {
        "parent": "Company",
        "name": "Bank",
        "lName": {
          "ru": {
            "name": "Банк"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в папку"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Краткое наименование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "GD_COMPANYACCOUNT",
            "type": "DetailAttribute",
            "lName": {
              "ru": {
                "name": "Банковские счета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPANYACCOUNT"
            ]
          },
          {
            "name": "ADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "REGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "ZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт (ссылка)"
              }
            },
            "required": false,
            "semCategories": "objectlocation",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NOTE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Описание"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "EXTERNALKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Внешний ключ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EMAIL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Электронный адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "URL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Сайт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "POBOX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Абонентский ящик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "FAX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Факс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COMPANYACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Расчетный счет",
                "fullName": "Ссылка на р\\с"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPANYACCOUNT"
            ]
          },
          {
            "name": "HEADCOMPANY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Головная организация",
                "fullName": "Ссылка на головную орг."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ]
          },
          {
            "name": "FULLNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Полное наименование"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 180,
            "autoTrim": true
          },
          {
            "name": "COMPANYTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Тип организации",
                "fullName": "Тип компании"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "DIRECTORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Директор"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "CHIEFACCOUNTANTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Глв. бух"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "LOGO",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Логотип"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$WG_PERSDIRKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Начальник ОК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$INV_NDSDODGER",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Не плательщик НДС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$PLUSCOMPANYTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дополнительный тип организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$EVAT_OFFSHORE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент офшора"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_EAEU",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент ЕАЭС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_NATIVE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Резидент РБ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$EVAT_ISBIGCOMPANY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Крупный плательщик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LEGALNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Регистрационный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "TAXID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OKPO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ОКПО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OKNH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ОКНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SOATO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "СОАТО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SOOU",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "СООУ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "LICENCE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Лицензия"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "OKULP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "OKULP"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "GD_HOLDING",
            "type": "SetAttribute",
            "lName": {
              "ru": {
                "name": "Холдинг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ],
            "attributes": [],
            "presLen": 0
          },
          {
            "name": "BANKCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код банка"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "BANKBRANCH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "BANKBRANCH"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "BANKMFO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "МФО банка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SWIFT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "SWIFT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_BANKBIK",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "БИК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "OLDBANKCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "OLDBANKCODE"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "OLDBANKMFO",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "OLDBANKMFO"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          }
        ]
      },
      {
        "name": "Department",
        "lName": {
          "ru": {
            "name": "Подразделение"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в организацию (подразделение)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company",
              "Department"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "ADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "REGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "ZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт (ссылка)"
              }
            },
            "required": false,
            "semCategories": "objectlocation",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NOTE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Описание"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "EXTERNALKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Внешний ключ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EMAIL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Электронный адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "URL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Сайт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "POBOX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Абонентский ящик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "FAX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Факс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          }
        ]
      },
      {
        "name": "Person",
        "lName": {
          "ru": {
            "name": "Физическое лицо"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в папку"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФИО"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "ADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "REGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "ZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт (ссылка)"
              }
            },
            "required": false,
            "semCategories": "objectlocation",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NOTE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Описание"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "EXTERNALKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Внешний ключ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EMAIL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Электронный адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "URL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Сайт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "POBOX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Абонентский ящик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "FAX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Факс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "FIRSTNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Имя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SURNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Фамилия"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "MIDDLENAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Отчество"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "NICKNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Коротко"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "RANK",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Должность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HPLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "HADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дом. адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "HCITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Город (домашний)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HREGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область (проживания)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс (проживания)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HCOUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна (прожив)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HDISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район (проживания)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HPHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дом. телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "WCOMPANYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Рабочая компания (ссылка)",
                "fullName": "Ключ рабочей компании"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "WCOMPANYNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Рабочая компания"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "WDEPARTMENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение",
                "fullName": "Рабочее подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "WPOSITIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Должность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "WG_POSITION"
            ]
          },
          {
            "name": "SPOUSE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Супруг(а)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CHILDREN",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дети"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SEX",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Пол"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "M"
              },
              {
                "value": "F"
              },
              {
                "value": "N"
              }
            ]
          },
          {
            "name": "BIRTHDAY",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PASSPORTNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Номер паспорта"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PASSPORTEXPDATE",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата действия пасп"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PASSPORTISSDATE",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата выдачи"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PASSPORTISSUER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Кто выдал"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PASSPORTISSCITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Город выдачи"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PERSONALNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Персональный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "VISITCARD",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Визитная карточка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PHOTO",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Фотография"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$ACCOUNT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Банковский счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "USR$WG_BCOUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 32,
            "autoTrim": true
          },
          {
            "name": "USR$BANK",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Банк"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Bank"
            ]
          },
          {
            "name": "USR$WG_BREGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$WG_BCITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Нас. пункт рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 32,
            "autoTrim": true
          },
          {
            "name": "USR$WG_BDISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 32,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_PASTCAT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Разряд из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$INSURANCENUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страховой номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "USR$IBANACCOUNT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Счет IBAN"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          }
        ]
      },
      {
        "parent": "Person",
        "name": "Employee",
        "lName": {
          "ru": {
            "name": "Сотрудник предприятия"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Организация или подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company",
              "Department"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФИО"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "ADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "DISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "REGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "ZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "COUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Населенный пункт (ссылка)"
              }
            },
            "required": false,
            "semCategories": "objectlocation",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "NOTE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Описание"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "EXTERNALKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Внешний ключ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EMAIL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Электронный адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "URL",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Сайт"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "POBOX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Абонентский ящик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "FAX",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Факс"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "LAT",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LAT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -90,
            "maxValue": 90,
            "precision": 10,
            "scale": 8
          },
          {
            "name": "LON",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "LON"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -180,
            "maxValue": 180,
            "precision": 11,
            "scale": 8
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "FIRSTNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Имя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SURNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Фамилия"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "MIDDLENAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Отчество"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "NICKNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Коротко"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "RANK",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Должность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HPLACEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_PLACE"
            ]
          },
          {
            "name": "HADDRESS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дом. адрес"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "HCITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Город (домашний)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HREGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область (проживания)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HZIP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Индекс (проживания)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HCOUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна (прожив)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HDISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район (проживания)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "HPHONE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дом. телефон"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "WCOMPANYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Рабочая компания (ссылка)",
                "fullName": "Ключ рабочей компании"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "WCOMPANYNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Рабочая компания"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "WDEPARTMENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение",
                "fullName": "Рабочее подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "WPOSITIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Должность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "WG_POSITION"
            ]
          },
          {
            "name": "SPOUSE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Супруг(а)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "CHILDREN",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Дети"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "SEX",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Пол"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "M"
              },
              {
                "value": "F"
              },
              {
                "value": "N"
              }
            ]
          },
          {
            "name": "BIRTHDAY",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PASSPORTNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Номер паспорта"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PASSPORTEXPDATE",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата действия пасп"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PASSPORTISSDATE",
            "type": "DateAttribute",
            "lName": {
              "ru": {
                "name": "Дата выдачи"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PASSPORTISSUER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Кто выдал"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "PASSPORTISSCITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Город выдачи"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "PERSONALNUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Персональный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "VISITCARD",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Визитная карточка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "PHOTO",
            "type": "BlobAttribute",
            "lName": {
              "ru": {
                "name": "Фотография"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$ACCOUNT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Банковский счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "USR$WG_BCOUNTRY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страна рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 32,
            "autoTrim": true
          },
          {
            "name": "USR$BANK",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Банк"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Bank"
            ]
          },
          {
            "name": "USR$WG_BREGION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Область рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$WG_BCITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Нас. пункт рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 32,
            "autoTrim": true
          },
          {
            "name": "USR$WG_BDISTRICT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Район рождения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 32,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_PASTCAT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Разряд из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$INSURANCENUMBER",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Страховой номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "USR$IBANACCOUNT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Счет IBAN"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          }
        ]
      },
      {
        "name": "Group",
        "lName": {
          "ru": {
            "name": "Группа"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "ParentAttribute",
            "lName": {
              "ru": {
                "name": "Входит в папку"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder"
            ]
          },
          {
            "name": "CONTACTLIST",
            "type": "SetAttribute",
            "lName": {
              "ru": {
                "name": "Контакты"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company",
              "Person"
            ],
            "attributes": [],
            "presLen": 0
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "EDITORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Кто исправил"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CONTACTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Контакт",
                "fullName": "CONTACTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$WG_LISTNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$INV_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$DEP_OLDCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "код Секрета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 8,
            "autoTrim": true
          },
          {
            "name": "USR$INV_TYPEDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$INV_DEPOTTYPE"
            ]
          },
          {
            "name": "USR$WAGE_OLDEMPLKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ сотрудника из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$WB_PERCFORCLASS",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "% доплаты за классность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$DISTANCE",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Расстояние",
                "fullName": "Расстояние до организации"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "USR$COD",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для Ветразя"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$WAGE_OLDDEPTKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Ключ подразделения из ЗА"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$MN_USEPORTION",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать порционность"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$IMNSKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Налоговая инспекция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$WG_IMNS"
            ]
          },
          {
            "name": "USR$MN_EXTRACATEGORYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наценочную категория"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$MN_EXTRACATEGORY"
            ]
          },
          {
            "name": "USR$MN_FIELDPRICEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Поле цены"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "USR$WB_TABELNUM",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Табельный номер ПЛ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$MN_REMAINSPRICE",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Выбор цены остатков"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "L"
              },
              {
                "value": "F"
              },
              {
                "value": "M"
              },
              {
                "value": "X"
              },
              {
                "value": "A"
              }
            ]
          },
          {
            "name": "USR$VMK_GLOBALDEPOT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Наименование склада ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$VMK_GLOBALGROUP"
            ]
          },
          {
            "name": "USR$ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$FA_OKEDKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКЭД"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$FA_OKED"
            ]
          },
          {
            "name": "USR$MN_SMID",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код в клипере"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$SORT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Сортировка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$TRANSACTIONKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Типовая операция"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_TRANSACTION"
            ]
          },
          {
            "name": "USR$BRANCH_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код филиала"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_EXPENSES",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$VBPF_FSZN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат ФСЗН"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$BRI_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Счет учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_SOCIN",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат страх."
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$ACC_EXPENSES"
            ]
          },
          {
            "name": "USR$MN_USETAX",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Использовать налоги",
                "fullName": "Использовать налоги с продаж и услуг"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$WAGE_CODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для ветразя из з\\п"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$TRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "USR$TRADEAGENTKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VMK_FT_GROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа магазинов для фирменной торговли"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$CONTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Person"
            ]
          },
          {
            "name": "USR$VBPF_ISOBOSOB",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Обособленное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "CREATORKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "CREATORKEY"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "CREATIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Создано"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$VMK_FT_PERCGROUP",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Группа наценок ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$MAIN_DEPTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Основное подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VMK_ISGLASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Стекло"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_OKONH",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код ОКОНХ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 5,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_NAME_FT_CON",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "ФТ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_FT_GOODNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Наименование для платежки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 120,
            "autoTrim": true
          },
          {
            "name": "USR$VMK_INCLUDECASS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Включать в кассу главного"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MATCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код склада"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_SPENDDEPART",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение для затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Department"
            ]
          },
          {
            "name": "USR$VBPF_MATRESPONSIBLE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Материально-ответственный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_ISMATRESP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Является мат.ответственным"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_KINDUCHET",
            "type": "EnumAttribute",
            "lName": {
              "ru": {
                "name": "Вид учета по подразделению"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "values": [
              {
                "value": "0"
              },
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "3"
              },
              {
                "value": "4"
              }
            ]
          },
          {
            "name": "USR$SHCODE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код для терминалов"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 10,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_UNP",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "УНП для ЖО"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$VBPF_TIME_WAIT",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Организ.время задержки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767,
            "defaultValue": 0
          },
          {
            "name": "USR$VBPF_UPLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Начало раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_DNLIMTIME0",
            "type": "TimeAttribute",
            "lName": {
              "ru": {
                "name": "Окончание раб.дня"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false
          },
          {
            "name": "USR$VBPF_COSTASDEPOT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Цена как со склада магазина"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_MAINCONTACT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Заведущий складом"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "USR$TYPE_UNITS_PLAN_DEP"
            ]
          },
          {
            "name": "USR$VBPF_DOPTRADEAGENTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Торговый агент (дополнительный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Folder",
              "Company",
              "Department",
              "Person",
              "Group"
            ]
          },
          {
            "name": "USR$VISIBLE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Видимое в ЛК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISDENOM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Магазин деноминирован"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AVECOST",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Расчитывать среднюю цену"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_ISGSM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "ГСМ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$CODE_NOT_REZIDENT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Код страны не резидента",
                "fullName": "Код страны не резидента\r\n(для фирменной торговли)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          }
        ]
      },
      {
        "name": "GD_COMPANYACCOUNT",
        "lName": {
          "ru": {
            "name": "GD_COMPANYACCOUNT"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "COMPANYKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Организация"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Company"
            ]
          },
          {
            "name": "BANKKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Банк"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "references": [
              "Bank"
            ]
          },
          {
            "name": "PAYERNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Плательщик"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 60,
            "autoTrim": true
          },
          {
            "name": "ACCOUNT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "CURRKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Валюта"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_CURR"
            ]
          },
          {
            "name": "ACCOUNTTYPEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Тип счета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_COMPACCTYPE"
            ]
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено",
                "fullName": "Отменен"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "ACCOUNTTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Тип счета (текст)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          },
          {
            "name": "USR$BALANCE_ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Балансовый счет"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "USR$VBPF_EXPENSESKEY",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Статья затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "OLDACCOUNT",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "OLDACCOUNT"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "IBAN",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "IBAN"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          }
        ]
      },
      {
        "name": "AC_ACCOUNT",
        "lName": {
          "ru": {
            "name": "План счетов"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "PARENT",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Родитель"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "NAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Расшифровка счета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 180,
            "autoTrim": true
          },
          {
            "name": "ALIAS",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Счет"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "maxLength": 40,
            "autoTrim": true
          },
          {
            "name": "ANALYTICALFIELD",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Аналитика для расширенного сальдо"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AT_RELATION_FIELDS"
            ]
          },
          {
            "name": "ACTIVITY",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Активный(Пассивный)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 1,
            "autoTrim": true
          },
          {
            "name": "ACCOUNTTYPE",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Часть плана счета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 1,
            "autoTrim": true
          },
          {
            "name": "MULTYCURR",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Мультивалютный"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "OFFBALANCE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Забалансовый"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "AFULL",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Полный доступ"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "ACHAG",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Просмотр и редактирование"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "AVIEW",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Только просмотр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "defaultValue": -1
          },
          {
            "name": "FULLNAME",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "FULLNAME"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 221,
            "autoTrim": true
          },
          {
            "name": "DESCRIPTION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "DESCRIPTION"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "autoTrim": false
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_CUSTOMER",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Клиент"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647,
            "defaultValue": 0
          },
          {
            "name": "USR$FA_GROUPKEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Шифр"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_DEPARTMENT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Подразделение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$FA_INVCARDKEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Инвентарный номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_DOCUMENT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Документ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_GOOD",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Товар"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_SERVICE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Услуга"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_EMPLOYEE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Сотрудник"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_CONTRACT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Договор"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VATTYPE_KEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Тип НДС"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_ECONOMICACTIVITY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Вид деятельности"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_EXPENSES",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Статьи затрат"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GIVC_CUSDISTRICT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Район"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$SHPZ",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Шифр производ.затрат/направл.деятельности"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_SALETAXRATE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Ставка налога с продаж"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GIVC_CONTRACTKEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Договор Закупка"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$AGR_CHANNEL",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Каналы выбытия"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GIVC_OPTDELIVERY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Условие поставки"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VMK_CONTRACT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Договор ВМК"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$AGR_ANNIMAL_GROUP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Группы животных"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GIVC_ACTSTATE",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Состояние акта"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VMK_GROUPGOOD",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Группа ТМЦ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$AGR_ANNIMAL_SPECIES",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Виды животных и птицы"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$SUBSISTEM",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Подсистема животноводства"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$COST_CALC",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Механизм расчета стоимости"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$BREED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Порода животных и птицы"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$COLOUR",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Масть породы животных"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$KIS_TYPEBUSINESS",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Вид деятельности"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VMK_DEMANDKEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Платежное требование"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$GS_DOCUMENTADD",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Дополнительный документ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$BRD_SORT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Сорт яйца"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_OBJECTKEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Объект учета"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_TYPEEGG",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Тип яйца"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_AGEGROUPKEY",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Возрастная группа"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$LOAN_CONTRACT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Кредитный договор"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$VBPF_TYPESUMCREDIT",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Типы сумм по кредитам"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "USR$TYPE_UNITS_PLAN_DEP",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Тип подразделения (плановый отдел)"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          },
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "Изменено"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "minValue": "2000-01-01T00:00:00.000Z",
            "maxValue": "2100-12-31T00:00:00.000Z",
            "defaultValue": "CURRENT_TIMESTAMP(0)"
          },
          {
            "name": "USR$GSM_CAR",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Автомобиль"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          }
        ]
      },
      {
        "name": "AC_ACCVALUE",
        "lName": {
          "ru": {
            "name": "AC_ACCVALUE"
          }
        },
        "isAbstract": false,
        "semCategories": "",
        "attributes": [
          {
            "name": "ID",
            "type": "SequenceAttribute",
            "lName": {
              "ru": {
                "name": "Идентификатор"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "sequence": "GD_G_UNIQUE"
          },
          {
            "name": "ACCOUNTKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "ACCOUNTKEY"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "references": [
              "AC_ACCOUNT"
            ]
          },
          {
            "name": "VALUEKEY",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "VALUEKEY"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "references": [
              "GD_VALUE"
            ]
          }
        ]
      }
/*     {
        id: 1,
        name: 'Company',
        attributes: [
        {
            id: 0,
            name: 'ID',
            type: 'string',
        },
        ]
    },
    {    
        id: 2,
        name: 'Department',
        attributes: [
        {
            id: 0,
            name: 'ID',
            type: 'string',
        },
        ]
    },
    {    
        id: 3,
        name: 'People',
        attributes: [
        {
            id: 0,
            name: 'ID',
            type: 'string',
        },
        ]    
    },
    {    
        id: 4,
        name: 'Account',
        attributes: [
        {
            id: 0,
            name: 'ID',
            type: 'string',
        },
        ]
    },   */
];

/* import * as fs from 'fs';

let erModel: any;

const handleJSONFile = (err: NodeJS.ErrnoException, data: any) => {
    if (err) {
        throw err;
    }
    erModel = JSON.parse(data);    
    entityList = <IEntity[]>erModel.entities;
}

fs.readFile('./model/mock/er.json', handleJSONFile);

export {entityList}; 
*/