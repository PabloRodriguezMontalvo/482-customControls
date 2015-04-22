(function() {
    WinJS.Namespace.define("Controles", {
        PasswordSeguro:WinJS.Class.define(function(element, options) {
                if (!element || element.tagName.toLowerCase() !== "input") {
                    throw "El control debe ser un input";
                }
                this._element = element;
                this._element.winControl = this;
                this._element.addEventListener("keyup",
                    this._valueChanged.bind(this), false);
                this._valueChanged();

            },
            {
                _element: null,
                _valueChanged: function() {
                    var lon = this._element.value.length;
                    if (lon <= 6) {
                        this._element.style.border = "4px solid red";
                    }
                    else {
                        this._element.style.border = "4px solid blue";
                    }

                }

            },
            {
                //Miembros estaticos
            }
        ),
        Opciones: WinJS.Class.define(function(element, options) {
            if (!element || element.tagName.toLowerCase() !== "input") {
                throw "El control debe ser un input";
            }
            options = options || {};
            this._setOpciones(options.optionList);
            WinJS.UI.setOptions(this, options);
            this._element = element;
            this._element.winControl = this;
            //this._element.addEventListener("keyup",
            //    this._valueChanged.bind(this), false);
            this._crearListaDatos();

        },
            {
                _element: null,
                _optionList: null,
                _setOpciones: function(lista) {
                    lista = lista || [];
                    this._optionList = lista;
                },
                _crearListaDatos: function() {
                   
                    var lon = this._optionList.length;
                    var dl = document.createElement("datalist");
                    dl.id = 'dl' + this._element.id;

                    this._element.setAttribute("list", dl.id);
                    for (var i=0; i < lon; i++) {
                        var opc = document.createElement("option");
                        opc.value = this._optionList[i];
                        dl.appendChild(opc);

                    }
                    document.body.appendChild(dl);

                },
                element: {
                    get: function() {
                        return this._element;
                    }
                }


            },
            {}
        )

    
    });


})();    
