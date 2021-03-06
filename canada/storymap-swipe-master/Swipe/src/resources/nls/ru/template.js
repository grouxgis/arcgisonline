define({
  "viewer": {
    "loading": {
      "step1": "ЗАГРУЗКА ИСТОРИИ",
      "step2": "ЗАГРУЗКА ДАННЫХ",
      "step3": "ИНИЦИАЛИЗАЦИЯ",
      "fail": "Загрузка Swipe не удалась",
      "loadBuilder": "ПЕРЕКЛЮЧИТЬСЯ В РЕЖИМ КОНСТРУКТОРА",
      "redirectSignIn": "ПЕРЕНАПРАВЛЕНИЕ НА СТРАНИЦУ ВХОДА",
      "redirectSignIn2": "(после входа вы будете перенаправлены сюда)",
      "failButton": "Повторить"
    },
    "errors": {
      "boxTitle": "Произошла ошибка",
      "portalSelf": "Критическая ошибка: не удалось получить конфигурацию портала",
      "invalidConfig": "Критическая ошибка: недопустимая конфигурация",
      "invalidConfigNoWebmap": "Критическая ошибка: недопустимая конфигурация (идентификатор веб-карты или приложения не указаны в index.html)",
      "invalidConfigNoAppDev": "Нет идентификатора или веб-карты Web Mapping Application, указанных в параметрах URL (?appid= или ?webmap=). В режиме разработки appid и конфигурация веб-карты игнорируются.",
      "createMap": "Не удалось создать карту",
      "invalidApp": "Критическая ошибка: не удается загрузить историю",
      "initMobile": "Добро пожаловать в веб-приложение Swipe. Приложение не настроено. Интерактивный конструктор не поддерживается на мобильных устройствах.",
      "initMobile2": "Конструктор Swipe не поддерживается на экранах такого размера. Если можете, измените размер браузера, чтобы получить доступ к конструктору, либо создайте свою историю на другом устройстве с большим монитором.",
      "initMobile3": "Чтобы использовать конструктор Swipe, поверните своё устройство в альбомную ориентацию.",
      "noBuilderIE8": "Интерактивный конструктор Swipe не поддерживается в браузере Internet Explorer в версиях ранее 9.",
      "noViewerIE2": "Вы пытаетесь просмотреть эту историю, используя устаревший, неподдерживаемый браузер. Некоторые элементы могут не работать, также возможны неожиданные ошибки. Воспользуйтесь Internet Explorer 11 или другим браузером, таким как Chrome.",
      "noViewerIE3": "В конце 2017 эта история перестанет загружаться в этот браузер. С этого момента для просмотра данной истории следует воспользоваться поддерживаемым браузером.",
      "attention": "Внимание!",
      "noLayerView": "Добро пожаловать в веб-приложение Swipe.<br />Приложение еще не настроено.",
      "appSave": "Ошибка при сохранении истории",
      "mapSave": "Ошибка при сохранении веб-карты",
      "notAuthorized": "Вы не авторизованы для доступа к истории.",
      "notAuthorizedBuilder": "Вы не авторизованы для использования конструктора Swipe and Spyglass.",
      "conflictingProjectionsTitle": "Конфликтующие проекции",
      "conflictingProjections": "Swipe не поддерживает использование двух веб-карт с различными проекциями. Откройте настройки и используйте веб-карту с той же проекцией, что и первая веб-карта.",
      "cpButton": "Закрыть",
      "unspecifiedConfigOwner": "Авторизованный владелец не настроен.",
      "invalidConfigOwner": "Владелец истории не авторизован."
    },
    "mobileView": {
      "hideIntro": "СКРЫТЬ ВВЕДЕНИЕ",
      "navLeft": "Легенда",
      "navMap": "Карта",
      "navRight": "Данные"
    },
    "desktopView": {
      "storymapsText": "Карта-история",
      "builderButton": "Переключиться в режим конструктора",
      "facebookTooltip": "Разместить в Facebook",
      "twitterTooltip": "Разместить в Twitter",
      "bitlyTooltip": "Получить краткую ссылку",
      "tooltipAutoplayDisabled": "Недоступно в режиме автовоспроизведения",
      "autoplayLabel": "Режим автовоспроизведения",
      "autoplayExplain1": "Режим автовоспроизведения будет проходить в вашей истории на указанном интервале. Это идеально подходит для информационных киосков или мониторов для публичного обозрения, но имейте в виду, что в некоторых случаях вашу историю будет тяжело читать. Эта возможность не поддерживается на маленьких мониторах.",
      "autoplayExplain2": "Когда активен данный режим, там есть элементы управления для включения/остановки воспроизведения истории и установки скорости перемещения."
    },
    "bannerNotification": {
      "learnMore": "Подробнее",
      "close": "Закрыть",
      "dontShowAgain": "Не показывать это сообщение снова"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Важное сообщение о веб-безопасности и картах-историях.",
      "s1h1": "Esri улучшил защищенность карт-историй.",
      "s1p1": "Ваши карты-истории находятся в сети, и веб-сообщество постоянно работает над увеличением их защищенности. HTTPS, обеспечивающий защищенное подключение к размещаемым в интернете ресурсам, предоставляет соответствующий доступ к ресурсам. Большинство современных браузеров в настоящий момент отображают сообщения с предупреждением при использовании HTTP вместо HTTPS. В связи с этим новым стандартом начиная с обновлений ArcGIS Online июня 2018 года картам-историям потребуется использование протокола HTTPS.",
      "s1p2": "На практике это означает, что карта-история и все ее ресурсы (в том числе изображения, слои, встроенные приложения и веб-сайты) должны использовать ссылки с HTTPS вместо HTTP. Это обеспечит максимальное удобство для пользователей карт, так как большинство веб-браузеров определит, что они являются защищенными.",
      "s2h1": "Что еще нужно сделать?",
      "s2p1": "Esri работает над максимальным упрощением взаимодействия между авторами и читателями карт-историй. В конструкторах карт-историй и Моих историях есть инструменты, которые помогут вам найти незащищенные ресурсы (HTTP) историй и содержат рекомендации о том, как решить эту проблему. Пожалуйста, проверьте свои истории на предмет наличия незащищенных ресурсов и обновите протокол на HTTPS до июня 2018.",
      "action1": "Закрыть",
      "action2": "Проверить мои истории сейчас",
      "action3": "Более подробно"
    },
    "licenseChange2018": {
      "noAccess": "Ваша учетная запись (%USER_NAME%) не лицензирована на открытие не публичной Story Map. Обратитесь к администратору организации, чтобы получить тип пользователя, в который входит Story Map или лицензия дополнительного модуля Essential Apps."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "НАСТРОЙКА ИСТОРИИ",
      "buttonSave": "СОХРАНИТЬ",
      "buttonHelp": "Справка",
      "buttonShare": "Доступ",
      "buttonDiscard": "ОТМЕНА",
      "buttonSettings": "Настройки",
      "buttonView": "Режим просмотра",
      "buttonItem": "Открыть элемент Веб-приложение",
      "noPendingChange": "Нет предполагаемых изменений",
      "unSavedChangeSingular": "1 несохраненное изменение",
      "unSavedChangePlural": "несохраненных изменений",
      "popoverDiscard": "Вы действительно хотите отказаться от несохраненных изменений?",
      "yes": "Да",
      "no": "Нет",
      "popoverOpenViewExplain": "При открытии вьюера вы потеряете все несохраненные изменения",
      "popoverOpenViewOk": "Ok",
      "popoverOpenViewCancel": "Отмена",
      "popoverSaveWhenDone": "Не забудьте сохранить изменения, когда закончите",
      "closeWithPendingChange": "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
      "gotIt": "Ok",
      "savingApplication": "Сохранение истории",
      "saveSuccess": "История сохранена",
      "saveError": "Сохранение не удалось, попробуйте еще раз",
      "saveError2": "Ошибка при сохранении из-за недопустимого html-тега в имени или описании",
      "saveError3": "Заголовок не может быть пустым",
      "signIn": "Войдите с помощью учетной записи в",
      "signInTwo": "чтобы сохранить историю."
    },
    "header": {
      "editMe": "Отредактируйте меня!",
      "templateTitle": "Ввести заголовок шаблона",
      "templateSubtitle": "Ввести подзаголовок шаблона"
    },
    "settings": {
      "settingsHeader": "Настройки истории",
      "modalCancel": "Отмена",
      "modalApply": "Применить"
    },
    "settingsColors": {
      "settingsTabColor": "Тема",
      "settingsColorExplain": "Выберите тему приложения либо укажите собственные цвета.",
      "settingsLabelColor": "Фоновые цвета заголовка и боковой панели"
    },
    "settingsHeader": {
      "settingsTabLogo": "Заголовок",
      "settingsLogoExplain": "Настройка логотипа заголовка (максимум 250 x 50 пикс.)",
      "settingsLogoEsri": "Логотип Esri",
      "settingsLogoNone": "Без логотипа",
      "settingsLogoCustom": "Собственный логотип",
      "settingsLogoCustomPlaceholder": "URL-адрес изображения",
      "settingsLogoCustomTargetPlaceholder": "Переход по ссылке",
      "settingsLogoSocialExplain": "Настроить верхнюю правую ссылку заголовка.",
      "settingsLogoSocialText": "Текст",
      "settingsLogoSocialLink": "Ссылка",
      "settingsLogoSocialDisabled": "Функция была отключена администратором"
    },
    "settingsExtent": {
      "settingsTabExtent": "Экстент",
      "settingsExtentExplain": "Выберите начальный экстент через интерактивную карту, показанную ниже.",
      "settingsExtentExplainBottom": "Указанный вами экстент обновит исходный экстент веб-карты. Если вы создаете серию шторок, этот экстент использоваться не будет.",
      "settingsExtentDateLineError": "Экстент не может продолжаться за меридиан 180ï¿½",
      "settingsExtentDateLineError2": "Ошибка вычисления экстента",
      "settingsExtentDrawBtn": "Нарисовать новый экстент",
      "settingsExtentModifyBtn": "Изменить текущий экстент",
      "settingsExtentApplyBtn": "Применить на главной карте",
      "settingsExtentUseMainMap": "Использовать экстент основной карты"
    },
    "storyTellerUserType": {
      "notCreatorError": "Лицензия вашей учетной записи (%USER_NAME%) не позволяет использовать классический конструктор карт-историй. Попросите администратора вашей организации назначить вам тип лицензии Creator."
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Нет данных для отображения!",
      "noDataExplain": "Коснитесь карты, чтобы выбрать объект и вернуться обратно",
      "noDataMap": "Нет данных для этой карты",
      "noPopup": "Нет всплывающей информации для этого объекта"
    },
    "mobileLegend": {
      "noLegend": "Нет легенды для отображения."
    },
    "swipeSidePanel": {
      "editTooltip": "Укажите описание боковой панели",
      "editMe": "Отредактируйте меня!",
      "legendTitle": "Легенда"
    },
    "infoWindow": {
      "noFeature": "Нет данных для отображения",
      "noFeatureExplain": "Коснитесь карты для выбора объекта"
    },
    "settingsLayout": {
      "settingsTabLayout": "Стиль шторки",
      "settingsLayoutExplain": "Выберите стиль для инструмента Шторка.",
      "settingsLayoutSwipe": "Вертикальная черта",
      "settingsLayoutSpyGlass": "Spyglass",
      "settingsLayoutSelected": "Выбранная компоновка",
      "settingsLayoutSelect": "Выбрать эту компоновку",
      "settingsSaveConfirm": "Некоторые внесенные изменения требуют сохранения и перезагрузки истории"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Тип шторки",
      "settingsDataModelExplainSwipe": "Что пользователи должны сдвигать?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Выберите слой или веб-карту, которые появятся в подзорной трубе.",
      "settingsDataModelOneMap": "Слой на веб-карте",
      "settingsDataModel1Explain": "Выберите слой, который будет управляться инструментом Шторка.",
      "settingsDataModel1Warning": "Если слой скрыт под другими слоями, использование шторки не даст никакого результата.",
      "settingsDataModel1SpyGlassExplain": "Выберите слой, появляющийся в подзорной трубе.",
      "settingsDataModelTwoMaps": "Две веб-карты",
      "settingsDataModelLayerIds": "ID слоя веб-карты",
      "settingsDataModelSelected": "Выбранный тип",
      "settingsDataModelWebmapSwipeId1": "ID правой веб-карты",
      "settingsDataModelWebmapSwipeId2": "ID левой веб-карты",
      "settingsDataModelWebmapGlassId1": "ID основной веб-карты",
      "settingsDataModelWebmapGlassId2": "ID веб-карты Spyglass",
      "settingsDataModelSelect": "Выбрать этот тип",
      "settingsDataModel2Explain": "Спрятать под другой веб-картой.",
      "settingsDataModel2SpyGlassExplain": "Показать другую веб-карту.",
      "settingsDataModel2HelpTitle": "Как найти ID веб-карты?",
      "settingsDataModel2HelpContent": "Скопируйте и вставьте цифры, расположенные после знака '=' в URL веб-карты",
      "switchMaps": "Переключить карты",
      "browseWebMaps": "Обзор веб-карт"
    },
    "settingsLegend": {
      "settingsTabLegend": "Компоновка приложения",
      "settingsLegendExplain": "Выберите настройки компоновки.",
      "settingsLegendEnable": "Включить легенду",
      "settingsDescriptionEnable": "Включить описание",
      "settingsBookmarksEnable": "Включить серии шторок",
      "settingsPopupDisable": "Включить всплывающее окно",
      "settingsLocationSearchEnable": "Включить поиск локатора",
      "settingsGeolocatorEnable": "Включить геолокатор",
      "settingsLegendHelpContent": "Для настройки содержания легенды используйте таблицу содержания вьюера веб-карт ArcGIS (Скрыть в легенде)",
      "settingsSeriesHelpContent": "Серии шторок - это опция навигации, позволяющая пользователю переходить к определенному экстенту и отображать текст заголовка и описания на боковой панели.  При первоначальном включении закладки с веб-карт будут импортированы и использованы для создания серий.  Отключение опции работы с сериями приводит к отключению панели серий, но настройки серий остаются для использования в будущем.",
      "settingsSeriesHelpContent2": "Серии шторок позволяют создавать и редактировать выбранные местоположения, а также их заголовки и текст. Если ваша веб-карта содержит закладки, то они будут отображаться. Вы можете отменить отображение серии шторок, но их настройки сохранятся для будущей работы.",
      "settingsSeriesHelpLink": "См. пример приложения с серией шторок здесь",
      "preview": "Просмотр UI",
      "settingsLocateButtonExplain": "Поддерживается в большинстве браузеров. Появляется, только когда доступ к карте-истории осуществляется по HTTPS. Если история встроенная - не появляется.",
      "settingsLocateButton": "Включить в поддерживаемых браузерах кнопку Размещение",
      "settingsAddressSearch": "Включить инструмент поиска адреса"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Всплывающая информация",
      "settingsSwipePopupExplain": "Настройте внешний вид всплывающего заголовка, чтобы помочь пользователю связать всплывающую информацию со слоями карт.",
      "settingsSwipePopupSwipe1": "Левая карта",
      "settingsSwipePopupSwipe2": "Правая карта",
      "settingsSwipePopupGlass1": "Основная карта",
      "settingsSwipePopupGlass2": "Карта Spyglass",
      "settingsSwipePopupTitle": "Название заголовка",
      "settingsSwipePopupColor": "Цвет заголовка"
    },
    "initPopup": {
      "initHeader": "Добро пожаловать в конструктор Swipe/Spyglass",
      "modalNext": "Далее",
      "modalPrev": "Предыдущий",
      "modalApply": "Открыть приложение"
    },
    "seriesPanel": {
      "title": "Название",
      "descr": "Описание",
      "discard": "Сброс закладки",
      "saveExtent": "Задать экстент закладки",
      "discardDisabled": "Вы не можете удалить эту закладку. Серию шторок можно отключить в Настройках."
    },
    "helpPopup": {
      "title": "Справка",
      "close": "Закрыть",
      "tab1": {
        "div1": "Шаблон Swipe/Spyglass предназначен для сравнения двух отдельных веб-карт или двух слоев одной веб-карты в удобном и простом в использовании приложении, которое может применяться в любом браузере на любом устройстве, включая смартфоны и планшеты.",
        "div2": "Для получения дополнительной информации по шаблону Swipe/Spyglass, включая примеры, созданные пользователями, <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'> посетите веб-сайт Story Maps</a>. Вы также можете следовать за нами в Twitter на <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Мы будем рады вам! Если у вас есть вопросы, вы желаете предложить новую функцию, или вы нашли ошибку, пожалуйста, посетите <a href='http://links.esri.com/storymaps/forum' target='_blank'>Форум пользователей Story Maps</a>."
      }
    },
    "share": {
      "firstSaveTitle": "История сохранена",
      "manageStory": "Управление историей",
      "manageStoryA1": "Совет: можно использовать %LINK1% для проверки истории на наличие ошибок и изменить настройки доступа к компонентам. Мои истории также помогают обеспечить хороший внешний вид истории при публикации через социальные сети. Более подробно о полезных функциях Моих историй см. %LINK2%.",
      "manageStoryA1V1": "Мои истории",
      "manageStoryA1V2": "сообщения в блоге",
      "shareTitle": "Откройте доступ к истории",
      "sharePrivateHeader": "Нет общего доступа к истории, хотите сделать это?",
      "sharePrivateBtn1": "Публикация в общий доступ",
      "sharePrivateBtn2": "Доступ только для моей организации",
      "sharePrivateProgress": "Публикация...",
      "sharePrivateErr": "Публикация не удалась, повторите попытку или",
      "sharePrivateOk": "Тип публикации изменен, загрузка...",
      "shareStatus1": "История не сохранена",
      "shareStatus2": "История в общем доступе",
      "shareStatus3": "История доступна только участникам организации",
      "shareStatus4": "История не в общем доступе",
      "sharePreviewAsUser": "Просмотр",
      "shareHeader1": "История <strong>общедоступна</strong>.",
      "shareHeader2": "История доступна для сотрудников вашей организации (требуется учетная запись).",
      "shareLinkHeader": "Откройте доступ к истории",
      "shareLinkOpen": "ОТКРЫТЬ",
      "learnMore": "Более подробно",
      "shareA1": "Используйте %SHAREIMG% на <a href='%LINK1%' target='_blank'>странице элемента приложения</a>. Если вы хотите закрыть общий доступ к веб-карте, перейдите на <a href='%LINK2%' target='_blank'>страницу элемента веб-карты</a>.",
      "shareWarning": "Доступ к %WITH%  был отключен, потому что вы не являетесь владельцем <a href='%LINK%' target='_blank'>webmap</a>.",
      "shareWarningWith1": "публично",
      "shareWarningWith2": "публично и с Организацией"
    },
    "directCreation": {
      "header": "Добро пожаловать в  конструктор Swipe/Spyglass",
      "mapPickHeader": "Сначала введите id веб-карты или выберите ее с помощью обзора веб-карт.",
      "launchBuilder": "Запустить конструктор",
      "chooseWebmapLbl": "Выберите веб-карту...",
      "explain2": "Чтобы создать карту-историю Swipe/Spyglass, используйте кнопку ниже, чтобы выбрать существующую веб-карту, которую хотите использовать. Кроме того, вы можете вставить идентификатор ID веб-карты в поле ниже.",
      "explain3": "Если вы хотите использовать две веб-карты в вашей карте-истории, то вы будете запрошены о второй веб-карте позже, когда выберете эту опцию.",
      "webmapPlaceholder": "Введите id веб-карты..."
    },
    "saveErrorSocial": {
      "title": "Обновление общего доступа через социальные сети",
      "panel1": "Отображение вашей истории в социальных сетях улучшилось, но название элемента вашего веб-приложения ArcGIS не совпадает с заголовком истории.",
      "panel1tooltip": "Если указать название, краткую информацию и образец изображения, ваша история будет выглядеть приблизительно так:",
      "panel2": "Какое название вы хотите использовать в социальных сетях:",
      "panel2q1": "Заголовок истории (рекомендуется)",
      "panel2q1tooltip": "Если выбрать эту опцию, заголовок элемента будет изменён соответственно заголовку истории, а дельнейшие изменения в конструкторе будут синхронизированы.",
      "panel2q2": "Название элемента",
      "panel3": "Для дальнейшего улучшения отображения своей истории в социальных сетях используйте ${MYSTORIES}, чтобы добавить краткую информацию и изображение образца.",
      "panel4": "Больше не уведомлять меня об этой истории",
      "mystories": "Мои истории",
      "btnSave": "Сохранить"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Моя организация",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Мои ресурсы",
        "favoritesLabel": "Мое избранное"
      },
      "title": "Выбрать веб-карту",
      "searchTitle": "Поиск",
      "ok": "Ok",
      "cancel": "Отмена",
      "placeholder": "Введите текст поиска"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Esri улучшил защищенность карт-историй.",
    "s1p1": "Story Maps существуют в Интернете, поэтому веб-сообщество всегда работает над обеспечением безопасности. HTTPS, который предлагает защищенное подключение к ресурсам, передаваемым через Интернет, рассматривается как основной способ доступа к веб-ресурсам. Большинство современных браузеров могут отображать предупреждения при использовании HTTP вместо HTTPS. В соответствии со стандартами безопасности, мы рекомендуем использовать ссылки HTTPS для создания и публикации Story Maps, использовать только  HTTPS URL при встраивании веб-ресурса или ссылке на изображения в Story Map.",
    "s1p2": "Фактически это означает, что Story Map и все ее содержание (включая изображения, слои, встроенные приложения и веб-сайты) должны быть доступны при помощи ссылок, начинающихся на HTTPS, а не на HTTP. Это гарантирует наибольшее удобство для ваших пользователей, поскольку большинство веб-браузеров показывают, что ваши истории защищены.",
    "s2h1": "Что еще нужно сделать?",
    "s2p1": "Esri работает над тем, чтобы переход для авторов и читателей Story Map был простым. В конструкторах Story Map и Моих историях имеются инструменты, которые помогают найти в ваших историях незащищенные ресурсы (HTTP) и предлагают рекомендации по исправлению этой ситуации. Проверьте ваши истории на небезопасные ресурсы и как можно скорее обновите до HTTPS.",
    "action1": "Закрыть",
    "action2": "Проверить мои истории сейчас",
    "action3": "Более подробно"
  },
  "embedBar": {
    "share": "Общий доступ",
    "fullScreen": "Во весь экран",
    "enlarge": "Увеличить",
    "newTab": "Открыть в новой вкладке",
    "tagline": "Карта-история",
    "exitFullScreen": "Выйти из полноэкранного режима"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "Можно ли задать вам вопрос? Это поможет сформировать будущее Story Maps.",
    "s1h1": "Делитесь мыслями, формируйте будущее",
    "s1p1": "Ваш вклад является нашим самым важным источником обратной связи, и чем больше мы узнаем о вас, тем лучше будут карты-истории. Мы будем признательны, если вы примите участие в этом трехминутном опросе.",
    "s2p1": "Как всегда, спасибо за использование Esri Story Maps!",
    "action1": "Закрыть",
    "action2": "Принять участие в опросе"
  }
});