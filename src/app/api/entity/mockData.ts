import { IEntity } from '@src/app/model';

export const entityList: IEntity[] = [
  {
    "name": "GD_CONST",
    "lName": {
      "ru": {
        "name": "Константы",
        "fullName": "Константы"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Константа",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "COMMENT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Комментарий",
            "fullName": "COMMENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 120,
        "autoTrim": true
      },
      {
        "name": "CONSTTYPE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип константы",
            "fullName": "CONSTTYPE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 7,
        "defaultValue": 0
      },
      {
        "name": "DATATYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "DATATYPE",
            "fullName": "DATATYPE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 1,
        "autoTrim": true
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "FIN_VERSIONINFO",
    "lName": {
      "ru": {
        "name": "Версия программы",
        "fullName": "Версия программы"
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
        "name": "VERSIONSTRING",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Версия",
            "fullName": "Версия"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "RELEASEDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата версии",
            "fullName": "Дата версии"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "COMMENT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Комментарий",
            "fullName": "COMMENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 254,
        "autoTrim": true
      }
    ]
  },
  {
    "name": "GD_LINK",
    "lName": {
      "ru": {
        "name": "Прикрепление",
        "fullName": "Прикрепление"
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
        "name": "OBJECTKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "OBJECTKEY",
            "fullName": "OBJECTKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "LINKEDKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "LINKEDKEY",
            "fullName": "LINKEDKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "LINKEDCLASS",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "LINKEDCLASS",
            "fullName": "LINKEDCLASS"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "LINKEDSUBTYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "LINKEDSUBTYPE",
            "fullName": "LINKEDSUBTYPE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "LINKEDNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "LINKEDNAME",
            "fullName": "LINKEDNAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "LINKEDUSERTYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "LINKEDUSERTYPE",
            "fullName": "LINKEDUSERTYPE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "LINKEDORDER",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "LINKEDORDER",
            "fullName": "LINKEDORDER"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "GD_USER",
    "lName": {
      "ru": {
        "name": "GD_USER",
        "fullName": "GD_USER"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Логин",
            "fullName": "Учетная запись пользователя системы."
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "PASSW",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Пароль",
            "fullName": "Пароль"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "INGROUP",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Входит в группы",
            "fullName": "Группа"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": 1
      },
      {
        "name": "FULLNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Полное наименование пользователя",
            "fullName": "FULLNAME"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "IBNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Пользователь Interbase",
            "fullName": "Пользователь Interbase"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "IBPASSWORD",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Пароль Interbase",
            "fullName": "Пароль Interbase"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "CONTACTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Контакт",
            "fullName": "CONTACTKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Folder",
          "Company",
          "Department",
          "Person",
          "Group"
        ]
      },
      {
        "name": "EXTERNALKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Внешний ключ",
            "fullName": "EXTERNALKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "LOCKEDOUT",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Пользователь отключен",
            "fullName": "Отключен"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "MUSTCHANGE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Пароль должен быть изменен",
            "fullName": "Должен быть изменен"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "CANTCHANGEPASSW",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Нельзя изменять пароль",
            "fullName": "Нелья изменять пароль"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "PASSWNEVEREXP",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Срок действия пароля никогда не истекает",
            "fullName": "Пароль никогда не истекает"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "EXPDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата истечения пароля",
            "fullName": "Дата истечения пароля"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WORKSTART",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "Начало работы",
            "fullName": "Начало работы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "WORKEND",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "Окончание работы",
            "fullName": "Окончание работы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "ALLOWAUDIT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Позволять аудит действий пользователя",
            "fullName": "Позволять аудит"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767,
        "defaultValue": 0
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "ICON",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Значок",
            "fullName": "ICON"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$KIS_BLANKKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Шаблон",
            "fullName": "Шаблон"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$USERRIGHT_BLANK"
        ]
      },
      {
        "name": "USR$VBPF_EDITONLYSELFDOC",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Изменять только свои документы",
            "fullName": "Изменять только свои документы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$VBPF_VIEWONLYSELFDOC",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр только своих док",
            "fullName": "Просмотр только своих док"
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
    "name": "GD_JOURNAL",
    "lName": {
      "ru": {
        "name": "Журнал событий",
        "fullName": "Журнал событий"
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
        "name": "CONTACTKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Контакт",
            "fullName": "CONTACTKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "OPERATIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата операции",
            "fullName": "Дата операции"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "SOURCE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Информация",
            "fullName": "Информация"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "OBJECTID",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Объект",
            "fullName": "Ключ объекта"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "DATA",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Данные",
            "fullName": "DATA"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "CLIENTADDRESS",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "CLIENTADDRESS",
            "fullName": "CLIENTADDRESS"
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
    "name": "GD_SUBSYSTEM",
    "lName": {
      "ru": {
        "name": "Подсистемы",
        "fullName": "Подсистемы"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Подсистема",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание подсистемы",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "GROUPSALLOWED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Дозволенные группы",
            "fullName": "GROUPSALLOWED"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": 1
      },
      {
        "name": "AUDITLEVEL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Уровень аудита",
            "fullName": "AUDITLEVEL"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767,
        "defaultValue": 2
      },
      {
        "name": "AUDITCACHE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Кэш аудита",
            "fullName": "AUDITCACHE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767,
        "defaultValue": 1
      },
      {
        "name": "AUDITMAXDAYS",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Сколько дней хранить",
            "fullName": "AUDITMAXDAYS"
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
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "GD_PLACE",
    "lName": {
      "ru": {
        "name": "Административно-территориальные единицы",
        "fullName": "Административно-территориальные единицы"
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
            "name": "Ссылка на родителя",
            "fullName": "PARENT"
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
        "name": "PLACETYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Тип административно-территориальной единицы",
            "fullName": "Тип места"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 10,
        "defaultValue": "''",
        "autoTrim": true
      },
      {
        "name": "TELPREFIX",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Телефонный префикс",
            "fullName": "Телефонный префикс"
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
            "name": "CODE",
            "fullName": "CODE"
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
            "name": "Расстояние",
            "fullName": "Расстояние"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "USR$ETTN_CODE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код страны ISO3166",
            "fullName": "Код страны ISO3166"
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
            "name": "Офшор",
            "fullName": "Офшор"
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
            "name": "Входит в ЕАЭС",
            "fullName": "Входит в ЕАЭС"
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
        "maxValue": 32767
      },
      {
        "name": "LAT",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "LAT",
            "fullName": "LAT"
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
            "name": "LON",
            "fullName": "LON"
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
    "name": "GD_USERGROUP",
    "lName": {
      "ru": {
        "name": "Группы пользователей",
        "fullName": "Группы пользователей"
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
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Группа",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "ICON",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Пиктограммка",
            "fullName": "ICON"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "GD_CURR",
    "lName": {
      "ru": {
        "name": "Валюты",
        "fullName": "Валюты"
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
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "ISNCU",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "НДЕ",
            "fullName": "ISNCU"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "ISEQ",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Эквивалент",
            "fullName": "ISEQ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "CODE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код валюты",
            "fullName": "Код валюты"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 8,
        "autoTrim": true
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "SHORTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Короткое наименование",
            "fullName": "Короткое наименование"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 8,
        "autoTrim": true
      },
      {
        "name": "SIGN",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Знак валюты",
            "fullName": "Знак валюты"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 8,
        "autoTrim": true
      },
      {
        "name": "PLACE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Размещение знака",
            "fullName": "Размещение знака"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "DECDIGITS",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Кол-во десятых",
            "fullName": "Кол-во десятых"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 16,
        "defaultValue": 2
      },
      {
        "name": "FULLCENTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Полное наименование копеек",
            "fullName": "FULLCENTNAME"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "SHORTCENTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Краткое наименование копеек",
            "fullName": "SHORTCENTNAME"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "CENTBASE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "База копеек",
            "fullName": "Наиенование центов"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767,
        "defaultValue": 10
      },
      {
        "name": "ICON",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Пиктограммка",
            "fullName": "ICON"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ISO",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "ИСО",
            "fullName": "ISO"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 3,
        "autoTrim": true
      },
      {
        "name": "NAME_0",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование для 0",
            "fullName": "Наименование для 0"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "NAME_1",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование для 5",
            "fullName": "Наименование для 5"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "CENTNAME_0",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование для 0 (копейки)",
            "fullName": "Наименование для 0"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "CENTNAME_1",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование для 5 (копейки)",
            "fullName": "Наименование для 5"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "GD_SQL_STATEMENT",
    "lName": {
      "ru": {
        "name": "GD_SQL_STATEMENT",
        "fullName": "GD_SQL_STATEMENT"
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
        "name": "CRC",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "CRC",
            "fullName": "CRC"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "KIND",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "KIND",
            "fullName": "KIND"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "DATA",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "DATA",
            "fullName": "DATA"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "GD_SQL_LOG",
    "lName": {
      "ru": {
        "name": "GD_SQL_LOG",
        "fullName": "GD_SQL_LOG"
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
      }
    ]
  },
  {
    "name": "GD_CURRRATE",
    "lName": {
      "ru": {
        "name": "Курсы валют",
        "fullName": "Курсы валют"
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
        "name": "FROMCURR",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Из валюты",
            "fullName": "Из валюты"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CURR"
        ]
      },
      {
        "name": "TOCURR",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "В валюту",
            "fullName": "В валюту"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CURR"
        ]
      },
      {
        "name": "FORDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "На дату",
            "fullName": "На дату"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "COEFF",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Курс",
            "fullName": "Курс"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 9.223372036854776e+28,
        "precision": 15,
        "scale": 10
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "REGULATORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "REGULATORKEY",
            "fullName": "REGULATORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANY",
          "Company"
        ]
      },
      {
        "name": "AMOUNT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "AMOUNT",
            "fullName": "AMOUNT"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767,
        "defaultValue": 1
      },
      {
        "name": "VAL",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "VAL",
            "fullName": "VAL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 9.223372036854776e+28,
        "precision": 15,
        "scale": 10
      }
    ]
  },
  {
    "name": "WG_POSITION",
    "lName": {
      "ru": {
        "name": "WG_POSITION",
        "fullName": "WG_POSITION"
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
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "RESERVED",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$CATEGORYKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Категория персонала"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$WG_STAFFCATEGORY"
        ]
      },
      {
        "name": "USR$WAGE_OLDPOSTKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Ключ должности из ЗА",
            "fullName": "Ключ должности из ЗА"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "USR$UNFIXED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "За ненорм. день",
            "fullName": "За ненорм. день"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 365
      },
      {
        "name": "USR$UNHEALTHY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "За вредные условия",
            "fullName": "За вредные условия"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 365
      },
      {
        "name": "USR$BASELONG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Основной удлиненный",
            "fullName": "Основной удлиненный"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 365
      },
      {
        "name": "USR$BASEMIN",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Основной минимальный",
            "fullName": "Основной минимальный"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 365
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "USR$OKPDTR",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код по ОКПДТР"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 10,
        "autoTrim": true
      },
      {
        "name": "USR$CODE_PU6",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код для ПУ-6",
            "fullName": "Код для ПУ-6"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "USR$PIECEWORK",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Сдельная"
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
            "name": "Дата праздника",
            "fullName": "HOLIDAYDATE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Праздник",
            "fullName": "NAME"
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
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "GD_DOCUMENTLINK",
    "lName": {
      "ru": {
        "name": "Связанные документы",
        "fullName": "Связанные документы"
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
        "name": "SUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в НДЕ",
            "fullName": "SUMNCU"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "SUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в валюте",
            "fullName": "SUMCURR"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "SUMEQ",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в эквиваленте",
            "fullName": "SUMEQ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "FLT_COMPONENTFILTER",
    "lName": {
      "ru": {
        "name": "Фильтры",
        "fullName": "Фильтры"
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
        "name": "FILTERNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Фильтр",
            "fullName": "Наименование фильтра"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "FORMNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Форма",
            "fullName": "Наименование формы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "APPLICATIONNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Приложение",
            "fullName": "Приложение"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "CRC",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "CRC",
            "fullName": "CRC"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "FULLNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Полное наименование",
            "fullName": "FULLNAME"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 255,
        "autoTrim": true
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "FLT_LASTFILTER",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "Последний фильтр",
            "fullName": "Последний фильтр"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_USER"
        ],
        "attributes": [
          {
            "name": "LASTFILTER",
            "type": "EntityAttribute",
            "lName": {
              "ru": {
                "name": "Последний фильтр",
                "fullName": "Последний фильтр"
              }
            },
            "required": true,
            "semCategories": "",
            "calculated": false,
            "references": [
              "FLT_SAVEDFILTER"
            ]
          },
          {
            "name": "CRC32",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "CRC32",
                "fullName": "CRC32"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          },
          {
            "name": "DBVERSION",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Версия INTERBASE",
                "fullName": "Версия INTERBASE"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 20,
            "autoTrim": true
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "WG_TBLCAL",
    "lName": {
      "ru": {
        "name": "График рабочего времени",
        "fullName": "График рабочего времени"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "График рабочего времени",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "MON",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Пн",
            "fullName": "MON"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "TUE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Вт",
            "fullName": "TUE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "WED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Ср",
            "fullName": "WED"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "THU",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Чт",
            "fullName": "THU"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "FRI",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Пт",
            "fullName": "FRI"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "SAT",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Сб",
            "fullName": "SAT"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "SUN",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Вс",
            "fullName": "SUN"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "HOLIDAYISWORK",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "ПразднРаб",
            "fullName": "HOLIDAYISWORK"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "W1_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W1_OFFSET",
            "fullName": "W1_OFFSET"
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
        "name": "W1_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_START1",
            "fullName": "W1_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_END1",
            "fullName": "W1_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_START2",
            "fullName": "W1_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_END2",
            "fullName": "W1_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_START3",
            "fullName": "W1_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_END3",
            "fullName": "W1_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_START4",
            "fullName": "W1_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W1_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W1_END4",
            "fullName": "W1_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W2_OFFSET",
            "fullName": "W2_OFFSET"
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
        "name": "W2_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_START1",
            "fullName": "W2_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_END1",
            "fullName": "W2_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_START2",
            "fullName": "W2_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_END2",
            "fullName": "W2_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_START3",
            "fullName": "W2_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_END3",
            "fullName": "W2_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_START4",
            "fullName": "W2_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W2_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W2_END4",
            "fullName": "W2_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W3_OFFSET",
            "fullName": "W3_OFFSET"
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
        "name": "W3_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_START1",
            "fullName": "W3_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_END1",
            "fullName": "W3_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_START2",
            "fullName": "W3_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_END2",
            "fullName": "W3_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_START3",
            "fullName": "W3_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_END3",
            "fullName": "W3_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_START4",
            "fullName": "W3_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W3_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W3_END4",
            "fullName": "W3_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W4_OFFSET",
            "fullName": "W4_OFFSET"
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
        "name": "W4_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_START1",
            "fullName": "W4_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_END1",
            "fullName": "W4_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_START2",
            "fullName": "W4_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_END2",
            "fullName": "W4_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_START3",
            "fullName": "W4_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_END3",
            "fullName": "W4_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_START4",
            "fullName": "W4_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W4_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W4_END4",
            "fullName": "W4_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W5_OFFSET",
            "fullName": "W5_OFFSET"
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
        "name": "W5_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_START1",
            "fullName": "W5_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_END1",
            "fullName": "W5_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_START2",
            "fullName": "W5_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_END2",
            "fullName": "W5_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_START3",
            "fullName": "W5_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_END3",
            "fullName": "W5_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_START4",
            "fullName": "W5_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W5_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W5_END4",
            "fullName": "W5_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W6_OFFSET",
            "fullName": "W6_OFFSET"
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
        "name": "W6_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_START1",
            "fullName": "W6_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_END1",
            "fullName": "W6_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_START2",
            "fullName": "W6_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_END2",
            "fullName": "W6_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_START3",
            "fullName": "W6_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_END3",
            "fullName": "W6_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_START4",
            "fullName": "W6_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W6_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W6_END4",
            "fullName": "W6_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W7_OFFSET",
            "fullName": "W7_OFFSET"
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
        "name": "W7_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_START1",
            "fullName": "W7_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_END1",
            "fullName": "W7_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_START2",
            "fullName": "W7_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_END2",
            "fullName": "W7_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_START3",
            "fullName": "W7_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_END3",
            "fullName": "W7_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_START4",
            "fullName": "W7_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W7_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W7_END4",
            "fullName": "W7_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_OFFSET",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "W8_OFFSET",
            "fullName": "W8_OFFSET"
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
        "name": "W8_START1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_START1",
            "fullName": "W8_START1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_END1",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_END1",
            "fullName": "W8_END1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_START2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_START2",
            "fullName": "W8_START2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_END2",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_END2",
            "fullName": "W8_END2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_START3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_START3",
            "fullName": "W8_START3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_END3",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_END3",
            "fullName": "W8_END3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_START4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_START4",
            "fullName": "W8_START4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "W8_END4",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "W8_END4",
            "fullName": "W8_END4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": "1900-01-01T00:00:00.000Z"
      },
      {
        "name": "USR$DAYCICLECOUNT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Дней в цикле",
            "fullName": "Дней в цикле"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767,
        "defaultValue": 7
      },
      {
        "name": "USR$WAGE_OLDKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Ключ из ЗА",
            "fullName": "Ключ из ЗА"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$CALENDARTYPE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип рабочего графика",
            "fullName": "Тип рабочего графика"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "USR$FIRSTDAYDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата первого дня",
            "fullName": "Дата первого дня"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "USR$HOLIDAYISWORK",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$DAYSDATA",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Данные о днях",
            "fullName": "Данные о днях"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "USR$ISLINKDAYWEEK",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Привязывать ко дням недели",
            "fullName": "Привязывать ко дням недели"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "USR$MON",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$TUE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$WED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$THU",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$FRI",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$SAT",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$SUN",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Исключить",
            "fullName": "Исключить"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "WG_TBLCALDAY",
    "lName": {
      "ru": {
        "name": "График рабочего времени (день)",
        "fullName": "WG_TBLCALDAY"
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
        "name": "TBLCALKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "График рабочего времени",
            "fullName": "TBLCALKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "WG_TBLCAL"
        ]
      },
      {
        "name": "THEDAY",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата",
            "fullName": "THEDAY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WORKDAY",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Рабочий день",
            "fullName": "WORKDAY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "WSTART1",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Нач1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WEND1",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Кон1"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WSTART2",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Нач2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WEND2",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Кон2"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WSTART3",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Нач3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WEND3",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Кон3"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WSTART4",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Нач4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WEND4",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Кон4"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "WDURATION",
        "type": "FloatAttribute",
        "lName": {
          "ru": {
            "name": "WDURATION",
            "fullName": "WDURATION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "DOW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "DOW",
            "fullName": "DOW"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "TEMP_COMPUTED",
        "type": "FloatAttribute",
        "lName": {
          "ru": {
            "name": "TEMP_COMPUTED",
            "fullName": "TEMP_COMPUTED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "GD_CONTACT",
    "lName": {
      "ru": {
        "name": "Контакты",
        "fullName": "Контакты"
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
            "name": "Родитель",
            "fullName": "PARENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Folder",
          "Company",
          "Department",
          "Person",
          "Group"
        ]
      },
      {
        "name": "CONTACTTYPE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип контакта",
            "fullName": "CONTACTTYPE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование",
            "fullName": "NAME"
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
            "name": "Адрес",
            "fullName": "ADDRESS"
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
            "name": "Район",
            "fullName": "DISTRICT"
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
            "name": "Населенный пункт",
            "fullName": "CITY"
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
            "name": "Область",
            "fullName": "REGION"
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
            "name": "Индекс",
            "fullName": "ZIP"
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
            "name": "Страна",
            "fullName": "COUNTRY"
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
            "name": "Населенный пункт (ссылка)",
            "fullName": "PLACEKEY"
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
        "name": "NOTE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "NOTE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "EXTERNALKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Внешний ключ",
            "fullName": "EXTERNALKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "EMAIL",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Электронный адрес",
            "fullName": "EMAIL"
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
            "name": "Сайт",
            "fullName": "URL"
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
            "name": "Абонентский ящик",
            "fullName": "POBOX"
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
            "name": "Телефон",
            "fullName": "PHONE"
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
            "name": "Факс",
            "fullName": "FAX"
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
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
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
          "GD_CONTACT",
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
            "name": "Счет затрат",
            "fullName": "Счет затрат"
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
            "name": "Тип подразделения",
            "fullName": "Тип подразделения"
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
            "name": "Ключ сотрудника из ЗА",
            "fullName": "Ключ сотрудника из ЗА"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
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
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
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
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$COD",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код для Ветразя",
            "fullName": "USR$COD"
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
            "name": "Ключ подразделения из ЗА",
            "fullName": "Ключ подразделения из ЗА"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "USR$MN_USEPORTION",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Использовать порционность",
            "fullName": "Использовать порционность"
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
            "name": "Наценочную категория",
            "fullName": "Наценочную категория"
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
            "name": "Поле цены",
            "fullName": "Поле цены"
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
            "name": "Выбор цены остатков",
            "fullName": "Выбор цены остатков"
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
        ],
        "defaultValue": "L"
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
        "maxValue": 2147483647
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
            "name": "Код филиала",
            "fullName": "Код филиала"
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
            "name": "Статья затрат",
            "fullName": "Статья затрат"
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
            "name": "Статьи затрат ФСЗН",
            "fullName": "Статьи затрат ФСЗН"
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
            "name": "Счет учета",
            "fullName": "Счет учета"
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
            "name": "Статьи затрат страх.",
            "fullName": "Статьи затрат страх."
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
            "name": "Код для ветразя из з\\п",
            "fullName": "Код для ветразя из з\\п"
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
            "name": "USR$TRADEAGENTKEY",
            "fullName": "USR$TRADEAGENTKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
        "maxValue": 2147483647
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
          "GD_CONTACT",
          "Person"
        ]
      },
      {
        "name": "USR$VBPF_ISOBOSOB",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Обособленное подразделение",
            "fullName": "Обособленное подразделение"
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
            "name": "CREATORKEY",
            "fullName": "CREATORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "CREATIONDATE",
            "fullName": "CREATIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "USR$VMK_FT_PERCGROUP",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Группа наценок ФТ",
            "fullName": "Группа наценок ФТ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
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
          "GD_CONTACT",
          "Department"
        ]
      },
      {
        "name": "USR$VMK_ISGLASS",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Стекло",
            "fullName": "Стекло"
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
            "name": "ФТ",
            "fullName": "ФТ"
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
            "name": "Наименование для платежки",
            "fullName": "Наименование для платежки"
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
            "name": "Включать в кассу главного",
            "fullName": "Включать в кассу главного"
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
            "name": "Код склада",
            "fullName": "Код склада"
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
            "name": "Подразделение для затрат",
            "fullName": "Подразделение для затрат"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Department"
        ]
      },
      {
        "name": "USR$VBPF_MATRESPONSIBLE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Материально-ответственный",
            "fullName": "Материально-ответственный"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_ISMATRESP",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Является мат.ответственным",
            "fullName": "Является мат.ответственным"
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
            "name": "Вид учета по подразделению",
            "fullName": "Вид учета по подразделению"
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
            "name": "Код для терминалов",
            "fullName": "Код для терминалов"
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
            "name": "УНП для ЖО",
            "fullName": "УНП для ЖО"
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
            "name": "Организ.время задержки",
            "fullName": "Организ.время задержки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "USR$VBPF_UPLIMTIME0",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "Начало раб.дня",
            "fullName": "Начало раб.дня"
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
            "name": "Окончание раб.дня",
            "fullName": "Окончание раб.дня"
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
            "name": "Цена как со склада магазина",
            "fullName": "Цена как со склада магазина"
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
            "name": "Заведущий складом",
            "fullName": "Заведущий складом"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "Тип подразделения (плановый отдел)",
            "fullName": "Тип подразделения (плановый отдел)"
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
          "GD_CONTACT",
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
            "name": "Видимое в ЛК",
            "fullName": "Видимое в ЛК"
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
            "name": "Магазин деноминирован",
            "fullName": "Магазин деноминирован"
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
            "name": "LAT",
            "fullName": "LAT"
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
            "name": "LON",
            "fullName": "LON"
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
            "name": "ГСМ",
            "fullName": "ГСМ"
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
        "name": "USR$SHORTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование для товарооборота",
            "fullName": "Наименование для товарооборота"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 120,
        "autoTrim": true
      },
      {
        "name": "USR$VBPF_NP",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Номер птичника",
            "fullName": "Номер птичника"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$ENCASHMENT",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Инкасация"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Company"
        ]
      },
      {
        "name": "USR$VBPF_MERCHANDISER",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Мерчандайзер",
            "fullName": "Мерчандайзер"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Person"
        ]
      },
      {
        "name": "GD_CONTACTLIST",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "Список контактов",
            "fullName": "Список контактов"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Folder",
          "Company",
          "Department",
          "Person",
          "Group"
        ],
        "attributes": [
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано",
                "fullName": "RESERVED"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "GD_COMPANY",
    "lName": {
      "ru": {
        "name": "Компания",
        "fullName": "Компания"
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
          "GD_COMPANY",
          "Company"
        ]
      },
      {
        "name": "FULLNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Полное наименование",
            "fullName": "FULLNAME"
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
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "CHIEFACCOUNTANTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Глв. бух",
            "fullName": "Глв. бух"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "LOGO",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Логотип",
            "fullName": "Логотип"
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
          "GD_CONTACT",
          "Person"
        ]
      },
      {
        "name": "USR$INV_NDSDODGER",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Не плательщик НДС",
            "fullName": "Не плательщик НДС"
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
        "name": "USR$TRADEAGENTKEY",
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
          "GD_CONTACT",
          "Person"
        ]
      },
      {
        "name": "USR$EVAT_OFFSHORE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Резидент офшора",
            "fullName": "Резидент офшора"
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
            "name": "Резидент ЕАЭС",
            "fullName": "Резидент ЕАЭС"
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
            "name": "Резидент РБ",
            "fullName": "Резидент РБ"
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
            "name": "Крупный плательщик",
            "fullName": "Крупный плательщик"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "GD_HOLDING",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "Холдинг",
            "fullName": "Холдинг"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANY",
          "Company"
        ],
        "attributes": [],
        "presLen": 0
      }
    ]
  },
  {
    "name": "GD_PEOPLE",
    "lName": {
      "ru": {
        "name": "Люди",
        "fullName": "Люди"
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
        "name": "FIRSTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Имя",
            "fullName": "Имя"
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
            "name": "Фамилия",
            "fullName": "Фамилия"
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
            "name": "Коротко",
            "fullName": "Коротко"
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
            "name": "Должность",
            "fullName": "Должность"
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
            "name": "Адрес",
            "fullName": "Адрес"
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
            "name": "Дом. адрес",
            "fullName": "Дом. адрес"
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
            "name": "Город (домашний)",
            "fullName": "Город (домашний)"
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
            "name": "Область (проживания)",
            "fullName": "Область (проживания)"
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
            "name": "Индекс (проживания)",
            "fullName": "Индекс (проживания)"
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
            "name": "Страна (прожив)",
            "fullName": "Страна (прожив)"
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
            "name": "Район (проживания)",
            "fullName": "Район (проживания)"
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
            "name": "Дом. телефон",
            "fullName": "Дом. телефон"
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
          "GD_CONTACT",
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
            "name": "Рабочая компания",
            "fullName": "Рабочая компания"
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
            "name": "Должность",
            "fullName": "Должность"
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
            "name": "Супруг(а)",
            "fullName": "SPOUSE"
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
            "name": "Дети",
            "fullName": "Дети"
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
            "name": "Пол",
            "fullName": "Пол"
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
            "name": "Дата рождения",
            "fullName": "Дата рождения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "PASSPORTNUMBER",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Номер паспорта",
            "fullName": "Номер паспорта"
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
            "name": "Дата действия пасп",
            "fullName": "Дата действия пасп"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "PASSPORTISSDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата выдачи",
            "fullName": "Дата выдачи"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "PASSPORTISSUER",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Кто выдал",
            "fullName": "Кто выдал"
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
            "name": "Город выдачи",
            "fullName": "Город выдачи"
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
            "name": "Персональный номер",
            "fullName": "PERSONALNUMBER"
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
            "name": "Визитная карточка",
            "fullName": "Визитная карточка"
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
            "name": "Фотография",
            "fullName": "Фотография"
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
          "GD_CONTACT",
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
            "name": "Разряд из ЗА",
            "fullName": "Разряд из ЗА"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
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
            "name": "Счет IBAN",
            "fullName": "Счет IBAN"
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
    "name": "GD_CONTACTLIST",
    "lName": {
      "ru": {
        "name": "Список контактов",
        "fullName": "Список контактов"
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
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "GD_COMPANYCODE",
    "lName": {
      "ru": {
        "name": "Коды компании",
        "fullName": "Коды компании"
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
        "name": "LEGALNUMBER",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Регистрационный номер",
            "fullName": "LEGALNUMBER"
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
            "name": "УНН",
            "fullName": "TAXID"
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
            "name": "ОКПО",
            "fullName": "OKPO"
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
            "name": "ОКНХ",
            "fullName": "OKNH"
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
            "name": "СОАТО",
            "fullName": "SOATO"
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
            "name": "СООУ",
            "fullName": "SOOU"
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
            "name": "Лицензия",
            "fullName": "LICENCE"
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
            "name": "OKULP",
            "fullName": "OKULP"
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
    "name": "GD_HOLDING",
    "lName": {
      "ru": {
        "name": "Холдинг",
        "fullName": "Холдинг"
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
      }
    ]
  },
  {
    "name": "GD_COMPACCTYPE",
    "lName": {
      "ru": {
        "name": "Типы банковских счетов",
        "fullName": "Типы счетов организаций"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Тип банковского счета",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "GD_COMPANYACCOUNT",
    "lName": {
      "ru": {
        "name": "GD_COMPANYACCOUNT",
        "fullName": "GD_COMPANYACCOUNT"
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
            "name": "Организация",
            "fullName": "COMPANYKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANY",
          "Company"
        ]
      },
      {
        "name": "BANKKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Банк",
            "fullName": "BANKKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_BANK",
          "Bank"
        ]
      },
      {
        "name": "PAYERNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Плательщик",
            "fullName": "Плательщик"
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
            "name": "Счет",
            "fullName": "Счет"
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
            "name": "Валюта",
            "fullName": "CURRKEY"
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
            "name": "Тип счета",
            "fullName": "ACCOUNTTYPEKEY"
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
            "name": "Тип счета (текст)",
            "fullName": "Тип счета (текст)"
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
            "name": "Статья затрат",
            "fullName": "Статья затрат"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "OLDACCOUNT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "OLDACCOUNT",
            "fullName": "OLDACCOUNT"
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
            "name": "IBAN",
            "fullName": "IBAN"
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
    "name": "AT_RELATIONS",
    "lName": {
      "ru": {
        "name": "Таблицы",
        "fullName": "Таблицы"
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
        "name": "RELATIONNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица",
            "fullName": "Наименование таблицы"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "RELATIONTYPE",
        "type": "EnumAttribute",
        "lName": {
          "ru": {
            "name": "Тип таблицы",
            "fullName": "Тип таблицы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "values": [
          {
            "value": "T"
          },
          {
            "value": "V"
          }
        ]
      },
      {
        "name": "LNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное наименование",
            "fullName": "LNAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "LSHORTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное краткое наименование",
            "fullName": "LSHORTNAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "REFERENCEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Ветка справочника",
            "fullName": "Ветка справочника"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "BRANCHKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Ветка вызова",
            "fullName": "Ветка вызова"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMMAND"
        ]
      },
      {
        "name": "LISTFIELD",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "LISTFIELD",
            "fullName": "LISTFIELD"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "EXTENDEDFIELDS",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Расширенное отображение",
            "fullName": "EXTENDEDFIELDS"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 254,
        "autoTrim": true
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "SEMCATEGORY",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "SEMCATEGORY",
            "fullName": "SEMCATEGORY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      }
    ]
  },
  {
    "name": "GD_V_CONTACTLIST",
    "lName": {
      "ru": {
        "name": "GD_V_CONTACTLIST",
        "fullName": "GD_V_CONTACTLIST"
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
      }
    ]
  },
  {
    "name": "GD_V_COMPANY",
    "lName": {
      "ru": {
        "name": "GD_V_COMPANY",
        "fullName": "GD_V_COMPANY"
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
      }
    ]
  },
  {
    "name": "GD_BANK",
    "lName": {
      "ru": {
        "name": "Банк",
        "fullName": "Банк"
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
        "name": "BANKCODE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код банка",
            "fullName": "BANKCODE"
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
            "name": "BANKBRANCH",
            "fullName": "BANKBRANCH"
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
            "name": "МФО банка",
            "fullName": "BANKMFO"
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
            "name": "SWIFT",
            "fullName": "SWIFT"
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
            "name": "БИК",
            "fullName": "БИК"
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
            "name": "OLDBANKCODE",
            "fullName": "OLDBANKCODE"
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
            "name": "OLDBANKMFO",
            "fullName": "OLDBANKMFO"
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
    "name": "AC_AUTOTRRECORD",
    "lName": {
      "ru": {
        "name": "AC_AUTOTRRECORD",
        "fullName": "AC_AUTOTRRECORD"
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
        "name": "SHOWINEXPLORER",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "SHOWINEXPLORER",
            "fullName": "SHOWINEXPLORER"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "IMAGEINDEX",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "IMAGEINDEX",
            "fullName": "IMAGEINDEX"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "FOLDERKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "FOLDERKEY",
            "fullName": "FOLDERKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMMAND"
        ]
      }
    ]
  },
  {
    "name": "GD_OURCOMPANY",
    "lName": {
      "ru": {
        "name": "Рабочие компании",
        "fullName": "Рабочие компании"
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
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "AC_COMPANYACCOUNT",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "План счетов для организации",
            "fullName": "План счетов для организации"
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
                "name": "Активен",
                "fullName": "ISACTIVE"
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
                "name": "Зарезервировано",
                "fullName": "RESERVED"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "BN_BANKCATALOGUE",
    "lName": {
      "ru": {
        "name": "Картотека",
        "fullName": "Картотека"
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
            "name": "Счет",
            "fullName": "ACCOUNTKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANYACCOUNT"
        ]
      },
      {
        "name": "CATALOGUETYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Тип картотеки",
            "fullName": "Тип картотеки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 8,
        "autoTrim": true
      },
      {
        "name": "SUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в НДЕ",
            "fullName": "SUMNCU"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "defaultValue": 0,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "SUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в валюте",
            "fullName": "SUMCURR"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "defaultValue": 0,
        "precision": 15,
        "scale": 4
      }
    ]
  },
  {
    "name": "GD_V_OURCOMPANY",
    "lName": {
      "ru": {
        "name": "GD_V_OURCOMPANY",
        "fullName": "GD_V_OURCOMPANY"
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
      }
    ]
  },
  {
    "name": "GD_RUID",
    "lName": {
      "ru": {
        "name": "GD_RUID",
        "fullName": "GD_RUID"
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
        "name": "XID",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "XID",
            "fullName": "XID"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "DBID",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "DBID",
            "fullName": "DBID"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "MODIFIED",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "MODIFIED",
            "fullName": "MODIFIED"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "RPL_RECORD",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "RPL_RECORD",
            "fullName": "RPL_RECORD"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "RPL_DATABASE"
        ],
        "attributes": [
          {
            "name": "EDITIONDATE",
            "type": "TimeStampAttribute",
            "lName": {
              "ru": {
                "name": "EDITIONDATE",
                "fullName": "EDITIONDATE"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": "1900-01-01T00:00:00.000Z",
            "maxValue": "9999-12-31T23:59:59.999Z"
          },
          {
            "name": "STATE",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "STATE",
                "fullName": "STATE"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -32768,
            "maxValue": 32767
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "AT_FIELDS",
    "lName": {
      "ru": {
        "name": "Домены",
        "fullName": "Домены"
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
        "name": "FIELDNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Домен",
            "fullName": "Поле"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "LNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное наименование",
            "fullName": "Локализованное наименование"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "REFTABLE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица справочник",
            "fullName": "Таблица ссылка"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "REFLISTFIELD",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Поле для отображения",
            "fullName": "Поле для отображения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "REFCONDITION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Условие отбора записей",
            "fullName": "Условие"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 255,
        "autoTrim": true
      },
      {
        "name": "REFTABLEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица справочник (ссылка)",
            "fullName": "Ссылка на таблицу"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "REFLISTFIELDKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Поле для отображения (ссылка)",
            "fullName": "Ссылка на поле отображения"
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
        "name": "SETTABLE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица элементов множества",
            "fullName": "Таблица множества"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "SETLISTFIELD",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Поле для отобр. множ",
            "fullName": "Поле для отобр. множ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "SETCONDITION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Условие для отбора множества",
            "fullName": "Условие для множества"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 255,
        "autoTrim": true
      },
      {
        "name": "SETTABLEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица элементов множества (ссылка)",
            "fullName": "Ссылка на таб множ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "SETLISTFIELDKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Поле для отобр. множ (ссылка)",
            "fullName": "Ссылка на поле множ"
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
        "name": "ALIGNMENT",
        "type": "EnumAttribute",
        "lName": {
          "ru": {
            "name": "Выравнивание",
            "fullName": "Выраввнивание"
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
            "value": "R"
          },
          {
            "value": "C"
          },
          {
            "value": "J"
          }
        ],
        "defaultValue": "L"
      },
      {
        "name": "FORMAT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Формат отображения",
            "fullName": "Формат"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "VISIBLE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Видимость",
            "fullName": "Поле видимое"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "COLWIDTH",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Ширина колонки",
            "fullName": "Ширина колонки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 32767,
        "defaultValue": 20
      },
      {
        "name": "READONLY",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Только для чтения",
            "fullName": "Только для чтения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "GDCLASSNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Бизнес класс",
            "fullName": "Бизнес объект"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "GDSUBTYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Подтип",
            "fullName": "Под тип"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "NUMERATION",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Значения перечисления",
            "fullName": "Значения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "AT_RELATION_FIELDS",
    "lName": {
      "ru": {
        "name": "Поля таблиц",
        "fullName": "Поля таблиц"
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
        "name": "FIELDNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Поле",
            "fullName": "FIELDNAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "RELATIONNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица",
            "fullName": "Таблица"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "FIELDSOURCE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Домен",
            "fullName": "Тип поля"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "CROSSTABLE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица для ссылок на элементы множества",
            "fullName": "Таблица множества"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "CROSSFIELD",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Поле таблицы множества",
            "fullName": "Поле таблицы множества"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "RELATIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица (ссылка)",
            "fullName": "Ссылка на таблицу"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "FIELDSOURCEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Домен (ссылка)",
            "fullName": "Ссылка на тип"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_FIELDS"
        ]
      },
      {
        "name": "CROSSTABLEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица для ссылок на элементы множества (ссылка)",
            "fullName": "Ссылка на табл.множ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "CROSSFIELDKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Поле таблицы множества (ссылка)",
            "fullName": "Ссылка на поле множ"
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
        "name": "LNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное наименование",
            "fullName": "LNAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "LSHORTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное краткое наименование",
            "fullName": "LSHORTNAME"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "VISIBLE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Видимость",
            "fullName": "Видимое поле"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "FORMAT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Формат отображения",
            "fullName": "FORMAT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "ALIGNMENT",
        "type": "EnumAttribute",
        "lName": {
          "ru": {
            "name": "Выравнивание",
            "fullName": "ALIGNMENT"
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
            "value": "R"
          },
          {
            "value": "C"
          },
          {
            "value": "J"
          }
        ],
        "defaultValue": "L"
      },
      {
        "name": "COLWIDTH",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Ширина колонки",
            "fullName": "Ширина колонки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "READONLY",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Только для чтения",
            "fullName": "Только для чтения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "GDCLASSNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Бизнес класс",
            "fullName": "Бизнес объект"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "GDSUBTYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Подтип",
            "fullName": "Под тип"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "OBJECTS",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Для использования в классах",
            "fullName": "Для использвания в классах"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "DELETERULE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Правило при удалении",
            "fullName": "Правило при удалении"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 11,
        "autoTrim": true
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "SEMCATEGORY",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "SEMCATEGORY",
            "fullName": "SEMCATEGORY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "ATTRNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование поля",
            "fullName": "Наименование поля"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      }
    ]
  },
  {
    "name": "AT_TRANSACTION",
    "lName": {
      "ru": {
        "name": "Операции  (для исполнения перед загрузкой)",
        "fullName": "Операции  (для исполнения перед загрузкой)"
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
        "name": "SCRIPT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Скрипт",
            "fullName": "SCRIPT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "SUCCESSFULL",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Завершена успешно",
            "fullName": "SUCCESSFULL"
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
    "name": "FLT_PROCEDUREFILTER",
    "lName": {
      "ru": {
        "name": "Процедуры для фильтров",
        "fullName": "Процедуры для фильтров"
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
        "name": "COMPONENTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Компонент",
            "fullName": "Ключ компоненты"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "FLT_COMPONENTFILTER"
        ]
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "GD_USERCOMPANY",
    "lName": {
      "ru": {
        "name": "Компания для пользователя",
        "fullName": "Компания для пользователя"
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
            "name": "Организация",
            "fullName": "COMPANYKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_OURCOMPANY",
          "OurCompany"
        ]
      }
    ]
  },
  {
    "name": "FLT_LASTFILTER",
    "lName": {
      "ru": {
        "name": "Последний фильтр",
        "fullName": "Последний фильтр"
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
        "name": "LASTFILTER",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Последний фильтр",
            "fullName": "Последний фильтр"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "FLT_SAVEDFILTER"
        ]
      },
      {
        "name": "CRC32",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "CRC32",
            "fullName": "CRC32"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "DBVERSION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Версия INTERBASE",
            "fullName": "Версия INTERBASE"
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
    "name": "AT_EXCEPTIONS",
    "lName": {
      "ru": {
        "name": "Исключения",
        "fullName": "Исключения"
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
        "name": "EXCEPTIONNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Исключение",
            "fullName": "EXCEPTIONNAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "LMESSAGE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное сообщение",
            "fullName": "LMESSAGE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 80,
        "autoTrim": true
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "AT_TRIGGERS",
    "lName": {
      "ru": {
        "name": "Триггеры",
        "fullName": "Триггеры"
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
        "name": "TRIGGERNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Триггер",
            "fullName": "Наименование триггера"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "RELATIONNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица",
            "fullName": "Наименование таблицы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "RELATIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица (ссылка)",
            "fullName": "Ссылка на таблицу"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "TRIGGER_INACTIVE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Триггер активен",
            "fullName": "Активен триггер"
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
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      }
    ]
  },
  {
    "name": "AT_PROCEDURES",
    "lName": {
      "ru": {
        "name": "Процедуры",
        "fullName": "Процедуры"
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
        "name": "PROCEDURENAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Процедура",
            "fullName": "Процедура"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "PROCEDURESOURCE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Текст процедуры",
            "fullName": "Текст процедуры"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      }
    ]
  },
  {
    "name": "AT_INDICES",
    "lName": {
      "ru": {
        "name": "Индексы",
        "fullName": "Индексы"
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
        "name": "INDEXNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Индекс",
            "fullName": "Индекс"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "RELATIONNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Таблица",
            "fullName": "Наименование таблицы"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minLength": 1,
        "maxLength": 31,
        "autoTrim": true
      },
      {
        "name": "FIELDSLIST",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Список полей",
            "fullName": "Список полей"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 255,
        "autoTrim": true
      },
      {
        "name": "RELATIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица (ссылка)",
            "fullName": "Ссылка на таблицу"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "UNIQUE_FLAG",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Уникальный индекс",
            "fullName": "Уникальный индекс"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "INDEX_INACTIVE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Активный индекс",
            "fullName": "Активность индекса"
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
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      }
    ]
  },
  {
    "name": "GD_CONSTVALUE",
    "lName": {
      "ru": {
        "name": "Значение константы",
        "fullName": "Значения констант"
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
        "name": "USERKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Пользователь",
            "fullName": "USERKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Folder",
          "Company",
          "Department",
          "Person",
          "Group"
        ]
      },
      {
        "name": "COMPANYKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Организация",
            "fullName": "COMPANYKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_OURCOMPANY",
          "OurCompany"
        ]
      },
      {
        "name": "CONSTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Ключ константы",
            "fullName": "CONSTKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONST"
        ]
      },
      {
        "name": "CONSTDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "CONSTDATE",
            "fullName": "CONSTDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "CONSTVALUE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Значение константы",
            "fullName": "CONSTVALUE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 120,
        "autoTrim": true
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто изменил",
            "fullName": "Кто изменил"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "GD_LASTNUMBER",
    "lName": {
      "ru": {
        "name": "Последний номер документа",
        "fullName": "Последний номер документа"
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
        "name": "LASTNUMBER",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Последний номер",
            "fullName": "Последний номер"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "ADDNUMBER",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Инкремент",
            "fullName": "Приращение"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "MASK",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Маска номера",
            "fullName": "Маска номера"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 80,
        "autoTrim": true
      },
      {
        "name": "FIXLENGTH",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "FIXLENGTH",
            "fullName": "FIXLENGTH"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
    "name": "GD_FUNCTION",
    "lName": {
      "ru": {
        "name": "Функции",
        "fullName": "Функции"
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
        "name": "MODULE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Модуль",
            "fullName": "Модуль"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "LANGUAGE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Язык скрипта",
            "fullName": "Язык"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 10,
        "autoTrim": true
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Функция",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 80,
        "autoTrim": true
      },
      {
        "name": "COMMENT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Комментарий",
            "fullName": "COMMENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "SCRIPT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Текст функции",
            "fullName": "Текст функции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "DISPLAYSCRIPT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Текст для отображения",
            "fullName": "Текст для отображения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "MODIFYDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "MODIFYDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "TESTRESULT",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Результат выполнения",
            "fullName": "Результат выполнения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "OWNERNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Владелец",
            "fullName": "Владелец"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "FUNCTIONTYPE",
        "type": "EnumAttribute",
        "lName": {
          "ru": {
            "name": "Тип функции",
            "fullName": "Тип функции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "values": [
          {
            "value": "E"
          },
          {
            "value": "M"
          }
        ]
      },
      {
        "name": "EVENT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Событие",
            "fullName": "Событие"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "LOCALNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Локализованное наименование",
            "fullName": "Локализованное наименование"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "PUBLICFUNCTION",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Глобальная фукнция",
            "fullName": "Глобальная фукнция"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "SHORTCUT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Горячая клавиша",
            "fullName": "Горячая клавиша"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 10,
        "autoTrim": true
      },
      {
        "name": "GROUPNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Группа",
            "fullName": "Группа"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "MODULECODE",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Код модуля",
            "fullName": "Код модуля"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "EVT_OBJECT"
        ]
      },
      {
        "name": "ENTEREDPARAMS",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Параметры отчета",
            "fullName": "Параметры отчета"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "INHERITEDRULE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Правила включения",
            "fullName": "Правила включения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "BREAKPOINTS",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Точки прерывания",
            "fullName": "Точки прерывания"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "USEDEBUGINFO",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Использовать отладку",
            "fullName": "Использовать отладку"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "EDITORSTATE",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Состояние редактора",
            "fullName": "Состояние редактора"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "RP_ADDITIONALFUNCTION",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "Изпользуемые функции",
            "fullName": "Изпользуемые функции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ],
        "attributes": [
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано",
                "fullName": "RESERVED"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "GD_FUNCTION_LOG",
    "lName": {
      "ru": {
        "name": "GD_FUNCTION_LOG",
        "fullName": "GD_FUNCTION_LOG"
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
        "name": "FUNCTIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "FUNCTIONKEY",
            "fullName": "FUNCTIONKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ]
      },
      {
        "name": "REVISION",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "REVISION",
            "fullName": "REVISION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "SCRIPT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "SCRIPT",
            "fullName": "SCRIPT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "EDITORKEY",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "USR$WB_CARADDNORM",
    "lName": {
      "ru": {
        "name": "Доп. нормы для автомобиля",
        "fullName": "Доп. нормы для автомобиля"
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
        "name": "USR$ADDNORMKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Дополнительные нормы списания топлива"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$WB_ADDNORM"
        ]
      },
      {
        "name": "USR$CARKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Автомобиль"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$WB_CAR"
        ]
      },
      {
        "name": "USR$TEMPPERC",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Темп. % повышения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -21474836480000,
        "maxValue": 21474836470000,
        "precision": 7,
        "scale": 4
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "USR$MOG_DEBTACC",
    "lName": {
      "ru": {
        "name": "Взаимозачет",
        "fullName": "Взаимозачет"
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
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "Зарезервировано"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$SUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в руб",
            "fullName": "Сумма в руб"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$CONTACTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Организация",
            "fullName": "Организация"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Folder",
          "Company",
          "Department",
          "Person",
          "Group"
        ]
      },
      {
        "name": "USR$CREDITKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кредит",
            "fullName": "Кредит"
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
        "name": "USR$DEBITKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Дебет",
            "fullName": "Дебет"
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
        "name": "USR$VBPF_DEBITEXPKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Статья затрат дебетовая",
            "fullName": "Статья затрат дебетовая"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_CREDITEXPKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Статья затрат кредитовая",
            "fullName": "Статья затрат кредитовая"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_CREDITCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в вал.кредит",
            "fullName": "Сумма в вал.кредит"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$VBPF_DEBITCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в вал.дебет",
            "fullName": "Сумма в вал.дебет"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$VBPF_CREDITCURRKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Валюта кредит",
            "fullName": "Валюта кредит"
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
        "name": "USR$VBPF_DEBITCURRKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Валюта дебет",
            "fullName": "Валюта дебет"
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
        "name": "USR$VBPF_CONTRACTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Договор",
            "fullName": "Договор"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$INV_CONTRACT",
          "DOC_147036946_254899659_USR$INV_CONTRACT",
          "DOC_147004989_45137928_USR$INV_CONTRACT"
        ]
      }
    ]
  },
  {
    "name": "USR$MN_ACCUMULATOR",
    "lName": {
      "ru": {
        "name": "Накопитель",
        "fullName": "Накопитель"
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
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Не активно",
            "fullName": "Не активно"
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
            "name": "Дата модификации",
            "fullName": "Дата модификации"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто модифицировал",
            "fullName": "Кто модифицировал"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "USR$QUANTITY",
        "type": "FloatAttribute",
        "lName": {
          "ru": {
            "name": "Количество",
            "fullName": "Количество"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "USR$DEPOTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Подразделение",
            "fullName": "Подразделение"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Department"
        ]
      },
      {
        "name": "USR$GOODKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Товар",
            "fullName": "Товар"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_GOOD"
        ]
      },
      {
        "name": "USR$DATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата",
            "fullName": "Дата"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      }
    ]
  },
  {
    "name": "USR$WG_DEDREMAINS",
    "lName": {
      "ru": {
        "name": "Остаток вычета",
        "fullName": "Остаток вычета"
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
        "name": "USR$SUMMA",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$INCTAXDEDTYPEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Вид вычета"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$WG_TAXINCOMDEDEDUCTTYPE"
        ]
      },
      {
        "name": "USR$EMPLKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Сотрудник"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Person"
        ]
      },
      {
        "name": "USR$TOTALDOCKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "99. Начисление"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "USR$INCDOCKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Месяц зачисления",
            "fullName": "Месяц зачисления"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      }
    ]
  },
  {
    "name": "GD_DOCUMENTTYPE",
    "lName": {
      "ru": {
        "name": "Типы документов",
        "fullName": "Типы документов"
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
            "name": "Родитель",
            "fullName": "PARENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENTTYPE"
        ]
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Тип документа",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "CLASSNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Класс",
            "fullName": "CLASSNAME"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "DOCUMENTTYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Тип документа",
            "fullName": "DOCUMENTTYPE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 1,
        "defaultValue": " 'D'",
        "autoTrim": true
      },
      {
        "name": "OPTIONS",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Настройки",
            "fullName": "Настройки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "HEADERRELKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица-шапка",
            "fullName": "Ключ таблицы шапки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "LINERELKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Таблица-позиция",
            "fullName": "Ключ таблицы позиции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AT_RELATIONS"
        ]
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "RUID",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "РУИД",
            "fullName": "РУИД"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 21,
        "autoTrim": true
      },
      {
        "name": "BRANCHKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Ветка вызова",
            "fullName": "Ключ ветки вызова"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMMAND"
        ]
      },
      {
        "name": "REPORTGROUPKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Группа отчетов",
            "fullName": "Ключ группы отчетов"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "RP_REPORTGROUP"
        ]
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "ISCOMMON",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Общий документ",
            "fullName": "Общий документ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "ISCHECKNUMBER",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Контроль номера",
            "fullName": "Контроль номера"
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
        "name": "HEADERFUNCTIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "HEADERFUNCTIONKEY",
            "fullName": "HEADERFUNCTIONKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ]
      },
      {
        "name": "HEADERFUNCTIONTEMPLATE",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "HEADERFUNCTIONTEMPLATE",
            "fullName": "HEADERFUNCTIONTEMPLATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "LINEFUNCTIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "LINEFUNCTIONKEY",
            "fullName": "LINEFUNCTIONKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ]
      },
      {
        "name": "LINEFUNCTIONTEMPLATE",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "LINEFUNCTIONTEMPLATE",
            "fullName": "LINEFUNCTIONTEMPLATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "USR$SHORTNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Краткое наименование",
            "fullName": "Краткое наименование"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "GD_LASTNUMBER",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "Последний номер документа",
            "fullName": "Последний номер документа"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_OURCOMPANY",
          "OurCompany"
        ],
        "attributes": [
          {
            "name": "LASTNUMBER",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Последний номер",
                "fullName": "Последний номер"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          },
          {
            "name": "ADDNUMBER",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Инкремент",
                "fullName": "Приращение"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          },
          {
            "name": "MASK",
            "type": "StringAttribute",
            "lName": {
              "ru": {
                "name": "Маска номера",
                "fullName": "Маска номера"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "maxLength": 80,
            "autoTrim": true
          },
          {
            "name": "FIXLENGTH",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "FIXLENGTH",
                "fullName": "FIXLENGTH"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          },
          {
            "name": "DISABLED",
            "type": "BooleanAttribute",
            "lName": {
              "ru": {
                "name": "Отключено",
                "fullName": "DISABLED"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "defaultValue": false
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "GD_DOCUMENT",
    "lName": {
      "ru": {
        "name": "Документы",
        "fullName": "Документы"
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
            "name": "Родитель",
            "fullName": "PARENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      },
      {
        "name": "DOCUMENTTYPEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Тип документа",
            "fullName": "DOCUMENTTYPEKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENTTYPE"
        ]
      },
      {
        "name": "TRTYPEKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип транзакции",
            "fullName": "TRTYPEKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "TRANSACTIONKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Транзакция",
            "fullName": "TRANSACTIONKEY"
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
        "name": "NUMBER",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Номер",
            "fullName": "NUMBER"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "DOCUMENTDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата",
            "fullName": "DOCUMENTDATE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "2099-12-31T00:00:00.000Z"
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "SUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в НДЕ",
            "fullName": "SUMNCU"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "SUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в валюте",
            "fullName": "SUMCURR"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "SUMEQ",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в эквиваленте",
            "fullName": "SUMEQ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "DELAYED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отложенный",
            "fullName": "DELAYED"
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
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "CURRKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Валюта",
            "fullName": "CURRKEY"
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
        "name": "COMPANYKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Компания",
            "fullName": "COMPANYKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_OURCOMPANY",
          "OurCompany"
        ]
      },
      {
        "name": "CREATORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто создал",
            "fullName": "CREATORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "CREATIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата создания",
            "fullName": "CREATIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "PRINTDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата печати",
            "fullName": "PRINTDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$SORTNUMBER",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Номер для сортировки",
            "fullName": "Номер для сортировки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$EQRATE",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Курс эквивалента",
            "fullName": "Курс эквивалента"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$EVAT_OUT",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Статус исх. ЭСЧФ",
            "fullName": "Статус исх. ЭСЧФ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$EVAT_STATUS"
        ]
      },
      {
        "name": "USR$EVAT_SUM",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Подтвержденная сумма по ЭСЧФ",
            "fullName": "Подтвержденная сумма по ЭСЧФ"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$TYPEOPER",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип операции",
            "fullName": "Тип операции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -32768,
        "maxValue": 32767
      },
      {
        "name": "USR$PFS_CANNOTBEDELETED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Нельзя удалять",
            "fullName": "Нельзя удалять"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$VMK_PREPARED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Подготовлен",
            "fullName": "Подготовлен"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$VBPF_STORNO",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Сторно",
            "fullName": "Сторно"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$VBPF_CHECKED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Проверен",
            "fullName": "Проверен"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$VBPF_WITHOUTENTRY",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Без проводок",
            "fullName": "Без проводок"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$GS_WITHOUTEVAT",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "К зачету без счет-фактуры",
            "fullName": "К зачету без счет-фактуры"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "GD_DOCUMENTLINK",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "Связанные документы",
            "fullName": "Связанные документы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ],
        "attributes": [
          {
            "name": "SUMNCU",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Сумма в НДЕ",
                "fullName": "SUMNCU"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -9.223372036854776e+22,
            "maxValue": 9.223372036854776e+22,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "SUMCURR",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Сумма в валюте",
                "fullName": "SUMCURR"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -9.223372036854776e+22,
            "maxValue": 9.223372036854776e+22,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "SUMEQ",
            "type": "NumericAttribute",
            "lName": {
              "ru": {
                "name": "Сумма в эквиваленте",
                "fullName": "SUMEQ"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -9.223372036854776e+22,
            "maxValue": 9.223372036854776e+22,
            "precision": 15,
            "scale": 4
          },
          {
            "name": "RESERVED",
            "type": "IntegerAttribute",
            "lName": {
              "ru": {
                "name": "Зарезервировано",
                "fullName": "RESERVED"
              }
            },
            "required": false,
            "semCategories": "",
            "calculated": false,
            "minValue": -2147483648,
            "maxValue": 2147483647
          }
        ],
        "presLen": 0
      }
    ]
  },
  {
    "name": "FLT_SAVEDFILTER",
    "lName": {
      "ru": {
        "name": "Сохраненные фильтры",
        "fullName": "Сохраненные фильтры"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Фильтр",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "USERKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Пользователь",
            "fullName": "USERKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_USER"
        ]
      },
      {
        "name": "COMPONENTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Компонент",
            "fullName": "Ключ компоненты"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "FLT_COMPONENTFILTER"
        ]
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "LASTEXTIME",
        "type": "TimeAttribute",
        "lName": {
          "ru": {
            "name": "Время выполнения",
            "fullName": "Время выполнения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "READCOUNT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Кол-во запусков",
            "fullName": "Кол-во запусков"
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
        "name": "DATA",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Данные",
            "fullName": "DATA"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      }
    ]
  },
  {
    "name": "USR$INV_CARDPRMET",
    "lName": {
      "ru": {
        "name": "Карточка ТМЦ по драг.металлам",
        "fullName": "Карточка ТМЦ по драг.металлам"
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
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "Зарезервировано"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$GOODKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Товар",
            "fullName": "Товар"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_GOOD"
        ]
      },
      {
        "name": "USR$VBPF_TYPEMETHOD",
        "type": "EnumAttribute",
        "lName": {
          "ru": {
            "name": "Тип определения",
            "fullName": "Тип определения"
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
          }
        ]
      },
      {
        "name": "USR$GOMOBOI_TYPE",
        "type": "EnumAttribute",
        "lName": {
          "ru": {
            "name": "Тип определения",
            "fullName": "Тип определения"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "values": [
          {
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          }
        ]
      }
    ]
  },
  {
    "name": "GD_GLOBALSTORAGE",
    "lName": {
      "ru": {
        "name": "Общее хранилище",
        "fullName": "Общее хранилище"
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
        "name": "DATA",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Данные",
            "fullName": "DATA"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "MODIFIED",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "MODIFIED"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      }
    ]
  },
  {
    "name": "BN_BANKSTATEMENT",
    "lName": {
      "ru": {
        "name": "Банковская выписка",
        "fullName": "Банковская выписка"
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
            "name": "Счет",
            "fullName": "ACCOUNTKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANYACCOUNT"
        ]
      },
      {
        "name": "DSUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по дебету в НДЕ",
            "fullName": "DSUMNCU"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "defaultValue": 0,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "CSUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по кредиту в НДЕ",
            "fullName": "CSUMNCU"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "defaultValue": 0,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "DSUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по дебету в валюте",
            "fullName": "DSUMCURR"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "defaultValue": 0,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "CSUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по кредиту в валюте",
            "fullName": "CSUMCURR"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "defaultValue": 0,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "LINECOUNT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Кол-во позиций",
            "fullName": "Кол-во позиций"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": 0
      },
      {
        "name": "RATE",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Курс",
            "fullName": "Курс"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": 0,
        "maxValue": 9.223372036854776e+28,
        "precision": 15,
        "scale": 10
      },
      {
        "name": "USR$GOMOBOI_DATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата",
            "fullName": "Дата"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      }
    ]
  },
  {
    "name": "RP_REPORTGROUP",
    "lName": {
      "ru": {
        "name": "Группа отчетов",
        "fullName": "Группа отчетов"
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
            "name": "Родитель",
            "fullName": "PARENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "RP_REPORTGROUP"
        ]
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Группа отчетов",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "USERGROUPNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Наименование группы",
            "fullName": "Наименование группы"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "defaultValue": " ''",
        "autoTrim": true
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "BN_BANKSTATEMENTLINE",
    "lName": {
      "ru": {
        "name": "Позиция банковской выписки",
        "fullName": "Позиция банковской выписки"
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
        "name": "DOCUMENTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Документ",
            "fullName": "DOCUMENTKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      },
      {
        "name": "BANKSTATEMENTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Выписка",
            "fullName": "Ссылка на выписку"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "BN_BANKSTATEMENT",
          "DOC_800300_17_BN_BANKSTATEMENT"
        ]
      },
      {
        "name": "TRTYPEKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип транзакции",
            "fullName": "TRTYPEKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "COMPANYKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Организация",
            "fullName": "COMPANYKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANY",
          "Company"
        ]
      },
      {
        "name": "DSUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по дебету в НДЕ",
            "fullName": "DSUMNCU"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "DSUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по дебету в валюте",
            "fullName": "DSUMCURR"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "CSUMNCU",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по кредиту в НДЕ",
            "fullName": "CSUMNCU"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "CSUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма по кредиту в валюте",
            "fullName": "CSUMCURR"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "PAYMENTMODE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Вид платежа",
            "fullName": "Вид платежа"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 8,
        "autoTrim": true
      },
      {
        "name": "OPERATIONTYPE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Тип операции",
            "fullName": "Тип операции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 8,
        "autoTrim": true
      },
      {
        "name": "ACCOUNT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Счет",
            "fullName": "ACCOUNT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "BANKCODE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код банка",
            "fullName": "BANKCODE"
          }
        },
        "required": false,
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
            "name": "BANKBRANCH",
            "fullName": "BANKBRANCH"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "DOCNUMBER",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Номер док.",
            "fullName": "Номер док."
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 20,
        "autoTrim": true
      },
      {
        "name": "USR$BN_CONTRACTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Договор"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      },
      {
        "name": "ACCOUNTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Счет",
            "fullName": "Счет"
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
        "name": "USR$GS_EXPENSESKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Сатьи затрат"
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
        "name": "USR$GOMOBOI_SUMCURR",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Сумма в валюте (продажа)",
            "fullName": "Сумма в валюте (продажа)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$GOMOBOI_TYPELINE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип строки",
            "fullName": "Тип строки"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$GOMOBOI_CURRKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Валюта",
            "fullName": "Валюта"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_COMMIS",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Комиссия за продажу",
            "fullName": "Комиссия за продажу"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "COMMENT",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Комментарий",
            "fullName": "COMMENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "USR$VBPF_OBJECTKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Объект",
            "fullName": "Объект"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_EMPLOYEE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Сотрудник",
            "fullName": "Сотрудник"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_VAT",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Ставка НДС",
            "fullName": "Ставка НДС"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -21474836480000,
        "maxValue": 21474836470000,
        "precision": 7,
        "scale": 4
      },
      {
        "name": "USR$VBPF_DEPARTMENT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Подразделление",
            "fullName": "Подразделление"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$VBPF_SHPZ",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Шифр производственных затрат",
            "fullName": "Шифр производственных затрат"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$SXP_004_ANALITIC"
        ]
      },
      {
        "name": "USR$VBPF_VATKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Тип НДС",
            "fullName": "Тип НДС"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$BN_LOANKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кредитный договор",
            "fullName": "Кредитный договор"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      },
      {
        "name": "USR$VBPF_EXPENSES_NEW",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Статья затрат",
            "fullName": "Статья затрат"
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
        "name": "CONTRACTORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "CONTRACTORKEY",
            "fullName": "CONTRACTORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMPANY",
          "Company"
        ]
      },
      {
        "name": "USR$VBPF_DATECURR",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "Дата продажи валюты",
            "fullName": "Дата продажи валюты"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "USR$VBPF_PAYONFA",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Оплата за ОС",
            "fullName": "Оплата за ОС"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$VBPF_FA_CONTRACT",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Договор по ОС",
            "fullName": "Договор по ОС"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_DOCUMENT",
          "TgdcDocument"
        ]
      },
      {
        "name": "USR$VBPF_SUMMCREDIT",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Вид суммы по кредиту",
            "fullName": "Вид суммы по кредиту"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$VBPF_TYPECREDITSUM"
        ]
      },
      {
        "name": "USR$VBPF_ACCOUNTPEOPLE",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Лицевой счет",
            "fullName": "Лицевой счет"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$VBPF_CONTRACT",
          "DOC_985600903_76642254_USR$VBPF_CONTRACT"
        ]
      }
    ]
  },
  {
    "name": "GD_V_USER_GENERATORS",
    "lName": {
      "ru": {
        "name": "GD_V_USER_GENERATORS",
        "fullName": "GD_V_USER_GENERATORS"
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
      }
    ]
  },
  {
    "name": "GD_USERSTORAGE",
    "lName": {
      "ru": {
        "name": "Хранилище для пользователей",
        "fullName": "Хранилище для пользователей"
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
        "name": "DATA",
        "type": "BlobAttribute",
        "lName": {
          "ru": {
            "name": "Данные",
            "fullName": "DATA"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false
      },
      {
        "name": "MODIFIED",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "MODIFIED"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      }
    ]
  },
  {
    "name": "GD_GOODGROUP",
    "lName": {
      "ru": {
        "name": "Группы ТМЦ",
        "fullName": "Группы ТМЦ"
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
            "name": "Родитель",
            "fullName": "PARENT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_GOODGROUP"
        ]
      },
      {
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Группа ТМЦ",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "ALIAS",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Шифр группы",
            "fullName": "Шифр группы"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 16,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minLength": 0,
        "autoTrim": false
      },
      {
        "name": "DISABLED",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отключено",
            "fullName": "DISABLED"
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
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "AFULL",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "USR$INV_ACCOUNTKEY",
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
        "name": "USR$INV_PERCKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Наценочная группа",
            "fullName": "Наценочная группа"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$INV_GROUPPERC"
        ]
      },
      {
        "name": "USR$INV_OPTPERC",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Оптовая надбавка",
            "fullName": "Оптовая надбавка"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$PD_TNP",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Товар народного потребления"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "USR$GLOBALGROUPKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Склад ТМЦ",
            "fullName": "Склад ТМЦ"
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
        "name": "USR$NSBYT",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Номер для сбыта",
            "fullName": "Номер для сбыта"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "USR$GP_CODE",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Код продукции",
            "fullName": "Код продукции"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 16,
        "autoTrim": true
      },
      {
        "name": "USR$OT_CALORIEEND",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Калорийность(до)",
            "fullName": "Калорийность(до)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$OT_CALORIEBEGIN",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Калорийность(от)",
            "fullName": "Калорийность(от)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$OT_UGLEVODEND",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Углеводы(до)",
            "fullName": "Углеводы(до)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$PERC_WATER",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "% воды"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -21474836480000,
        "maxValue": 21474836470000,
        "precision": 7,
        "scale": 4
      },
      {
        "name": "USR$OT_UGLEVODBEGIN",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Углеводы(от)",
            "fullName": "Углеводы(от)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$OT_PROTEINEND",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Белки(до)",
            "fullName": "Белки(до)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$OT_PROTEINBEGIN",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Белки (от)",
            "fullName": "Белки (от)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$PERC_HOLOD",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "% холод."
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -21474836480000,
        "maxValue": 21474836470000,
        "precision": 7,
        "scale": 4
      },
      {
        "name": "USR$OT_FATEND",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Жиры(до)",
            "fullName": "Жиры(до)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$OT_FATBEGIN",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Жиры(от)",
            "fullName": "Жиры(от)"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      },
      {
        "name": "USR$VMK_GLOBALGOOD",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Укрупненная группа",
            "fullName": "Укрупненная группа"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "USR$VMK_GLOBALGOOD"
        ]
      },
      {
        "name": "USR$VBPF_DESC",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Краткое описание",
            "fullName": "Краткое описание"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 40,
        "autoTrim": true
      },
      {
        "name": "USR$VBPF_DEPARTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Подразделение",
            "fullName": "Подразделение"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Department"
        ]
      },
      {
        "name": "CREATORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "CREATORKEY",
            "fullName": "CREATORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
          "Folder",
          "Company",
          "Department",
          "Person",
          "Group"
        ]
      },
      {
        "name": "USR$FR_DIFFCONDITION",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Имеет различные состояния"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "CREATIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "CREATIONDATE",
            "fullName": "CREATIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "EDITORKEY",
            "fullName": "EDITORKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_CONTACT",
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
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "USR$VBPF_SPECNAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Специальное наименование",
            "fullName": "Специальное наименование"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "USR$VBPF_ROUNDED",
        "type": "NumericAttribute",
        "lName": {
          "ru": {
            "name": "Округлять до",
            "fullName": "Округлять до"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -9.223372036854776e+22,
        "maxValue": 9.223372036854776e+22,
        "precision": 15,
        "scale": 4
      }
    ]
  },
  {
    "name": "AC_AUTOENTRY",
    "lName": {
      "ru": {
        "name": "AC_AUTOENTRY",
        "fullName": "AC_AUTOENTRY"
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
        "name": "ENTRYKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "ENTRYKEY",
            "fullName": "ENTRYKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AC_ENTRY"
        ]
      },
      {
        "name": "TRRECORDKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "TRRECORDKEY",
            "fullName": "TRRECORDKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AC_TRRECORD"
        ]
      },
      {
        "name": "BEGINDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "BEGINDATE",
            "fullName": "BEGINDATE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "ENDDATE",
        "type": "DateAttribute",
        "lName": {
          "ru": {
            "name": "ENDDATE",
            "fullName": "ENDDATE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z"
      },
      {
        "name": "CREDITACCOUNT",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "CREDITACCOUNT",
            "fullName": "CREDITACCOUNT"
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
        "name": "DEBITACCOUNT",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "DEBITACCOUNT",
            "fullName": "DEBITACCOUNT"
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
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "name": "AC_GENERALLEDGER",
    "lName": {
      "ru": {
        "name": "AC_GENERALLEDGER",
        "fullName": "AC_GENERALLEDGER"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "NAME",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "DEFAULTUSE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "DEFAULTUSE",
            "fullName": "DEFAULTUSE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "INNCU",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "INNCU",
            "fullName": "INNCU"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "INCURR",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "INCURR",
            "fullName": "INCURR"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "NCUDECDIGITS",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "NCUDECDIGITS",
            "fullName": "NCUDECDIGITS"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "NCUSCALE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "NCUSCALE",
            "fullName": "NCUSCALE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "CURRDECDIGITS",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "CURRDECDIGITS",
            "fullName": "CURRDECDIGITS"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "CURRSCALE",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "CURRSCALE",
            "fullName": "CURRSCALE"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "CURRKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "CURRKEY",
            "fullName": "CURRKEY"
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
        "name": "ACCOUNTKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "ACCOUNTKEY",
            "fullName": "ACCOUNTKEY"
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
        "name": "ENHANCEDSALDO",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "ENHANCEDSALDO",
            "fullName": "ENHANCEDSALDO"
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
            "name": "EDITIONDATE",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "AC_G_LEDGERACCOUNT",
        "type": "SetAttribute",
        "lName": {
          "ru": {
            "name": "AC_G_LEDGERACCOUNT",
            "fullName": "AC_G_LEDGERACCOUNT"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "AC_ACCOUNT"
        ],
        "attributes": [],
        "presLen": 0
      }
    ]
  },
  {
    "name": "AC_ACCVALUE",
    "lName": {
      "ru": {
        "name": "AC_ACCVALUE",
        "fullName": "AC_ACCVALUE"
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
            "name": "ACCOUNTKEY",
            "fullName": "ACCOUNTKEY"
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
            "name": "VALUEKEY",
            "fullName": "VALUEKEY"
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
  },
  {
    "name": "RP_REPORTLIST",
    "lName": {
      "ru": {
        "name": "Список отчетов",
        "fullName": "Список отчетов"
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
        "name": "NAME",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Отчет",
            "fullName": "NAME"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "maxLength": 60,
        "autoTrim": true
      },
      {
        "name": "DESCRIPTION",
        "type": "StringAttribute",
        "lName": {
          "ru": {
            "name": "Описание",
            "fullName": "DESCRIPTION"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "maxLength": 180,
        "autoTrim": true
      },
      {
        "name": "FRQREFRESH",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Частота обновления",
            "fullName": "Обновление"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": 1
      },
      {
        "name": "REPORTGROUPKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Группа",
            "fullName": "Ключ группы"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "RP_REPORTGROUP"
        ]
      },
      {
        "name": "PARAMFORMULAKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Формула параметров",
            "fullName": "Ключ формулы параметров"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ]
      },
      {
        "name": "MAINFORMULAKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Основная функция",
            "fullName": "Ключ основной функции"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ]
      },
      {
        "name": "EVENTFORMULAKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Функция события",
            "fullName": "Ключ функции события"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_FUNCTION"
        ]
      },
      {
        "name": "TEMPLATEKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Шаблон",
            "fullName": "Ключ шаблона"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "RP_REPORTTEMPLATE"
        ]
      },
      {
        "name": "ISREBUILD",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Перестраивать отчет",
            "fullName": "Перестраивать отчет"
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
            "name": "Полный доступ",
            "fullName": "AFULL"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "ACHAG",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Просмотр и редактирование",
            "fullName": "ACHAG"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "AVIEW",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Только просмотр",
            "fullName": "AVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647,
        "defaultValue": -1
      },
      {
        "name": "SERVERKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Сервер",
            "fullName": "Ключ сервера"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "RP_REPORTSERVER"
        ]
      },
      {
        "name": "ISLOCALEXECUTE",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Выполнять локально",
            "fullName": "Выполнять локально"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      },
      {
        "name": "PREVIEW",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Показывать перед печатью",
            "fullName": "Показывать перед печатью"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "GLOBALREPORTKEY",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Глобальный ключ отчета",
            "fullName": "Глобальный ключ отчета"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "EDITIONDATE",
        "type": "TimeStampAttribute",
        "lName": {
          "ru": {
            "name": "Дата изменения",
            "fullName": "EDITIONDATE"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": "1900-01-01T00:00:00.000Z",
        "maxValue": "9999-12-31T23:59:59.999Z",
        "defaultValue": "CURRENT_TIMESTAMP"
      },
      {
        "name": "EDITORKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "Кто исправил",
            "fullName": "EDITORKEY"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_PEOPLE",
          "Person"
        ]
      },
      {
        "name": "DISPLAYINMENU",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "Отображать в меню",
            "fullName": "Отображать в меню"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "defaultValue": true
      },
      {
        "name": "RESERVED",
        "type": "IntegerAttribute",
        "lName": {
          "ru": {
            "name": "Зарезервировано",
            "fullName": "RESERVED"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "minValue": -2147483648,
        "maxValue": 2147483647
      },
      {
        "name": "FOLDERKEY",
        "type": "EntityAttribute",
        "lName": {
          "ru": {
            "name": "FOLDERKEY",
            "fullName": "FOLDERKEY"
          }
        },
        "required": false,
        "semCategories": "",
        "calculated": false,
        "references": [
          "GD_COMMAND"
        ]
      },
      {
        "name": "MODALPREVIEW",
        "type": "BooleanAttribute",
        "lName": {
          "ru": {
            "name": "MODALPREVIEW",
            "fullName": "MODALPREVIEW"
          }
        },
        "required": true,
        "semCategories": "",
        "calculated": false,
        "defaultValue": false
      }
    ]
  }
];
