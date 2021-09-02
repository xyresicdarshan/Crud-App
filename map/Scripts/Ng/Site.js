var Workpulse;
(function (Workpulse) {
    var Site;
    (function (Site) {
        // Not const so that it can be used by .js files.
        var NoteTypeId;
        (function (NoteTypeId) {
            NoteTypeId[NoteTypeId["Forms"] = 1] = "Forms";
            NoteTypeId[NoteTypeId["MatrixForms"] = 3] = "MatrixForms";
            NoteTypeId[NoteTypeId["Feedback"] = 4] = "Feedback";
            NoteTypeId[NoteTypeId["ActionPlan"] = 5] = "ActionPlan";
            NoteTypeId[NoteTypeId["DevelopmentPlan"] = 6] = "DevelopmentPlan";
            NoteTypeId[NoteTypeId["CorrectiveAction"] = 7] = "CorrectiveAction";
            NoteTypeId[NoteTypeId["EmployeeAction"] = 8] = "EmployeeAction";
            NoteTypeId[NoteTypeId["GuestComplaint"] = 9] = "GuestComplaint";
            NoteTypeId[NoteTypeId["GuestFeedback"] = 10] = "GuestFeedback";
            NoteTypeId[NoteTypeId["Task"] = 11] = "Task";
            NoteTypeId[NoteTypeId["Wow"] = 12] = "Wow";
            NoteTypeId[NoteTypeId["HelpTicket"] = 13] = "HelpTicket";
            NoteTypeId[NoteTypeId["ActionStep"] = 14] = "ActionStep";
            NoteTypeId[NoteTypeId["DepositTracker"] = 15] = "DepositTracker";
        })(NoteTypeId = Site.NoteTypeId || (Site.NoteTypeId = {}));
        // Not const so that it can be used by .js files.
        var IconId;
        (function (IconId) {
            IconId[IconId["UserNote"] = 1] = "UserNote";
            IconId[IconId["ChangeStatus"] = 2] = "ChangeStatus";
            IconId[IconId["Reply"] = 3] = "Reply";
            IconId[IconId["Call"] = 4] = "Call";
            IconId[IconId["Assign"] = 5] = "Assign";
            IconId[IconId["Pickup"] = 6] = "Pickup";
            IconId[IconId["Escalation"] = 7] = "Escalation";
            IconId[IconId["Mail"] = 8] = "Mail";
        })(IconId = Site.IconId || (Site.IconId = {}));
        // Well-known fixed string values used in the InputType column of MstBookInputType
        Site.InputType = {
            Numeric: 'Numeric',
            Image: 'Image',
            YesNo: 'YesNo',
            Checkbox: 'Checkbox',
            Timer: 'Timer'
        };
        // for get non numberic input type values
        Site.BookInputTypeIds = {
            Image: 10,
            YesNo: 9,
            Checkbox: 14
        };
        Site.OrderMethods = [
            {
                text: 'Regular',
                value: 1 /* Regular */
            },
            {
                text: 'Forecast',
                value: 2 /* Forecast */
            },
            {
                text: 'Clone',
                value: 3 /* Clone */
            },
            {
                text: 'ParLevel',
                value: 4 /* ParLevel */
            },
            {
                text: 'SameDayLastWeek',
                value: 7 /* SameDayLastWeek */
            },
            {
                text: 'Special',
                value: 6 /* Special */
            }
        ];
        Site.SourceOfDonuts = [
            {
                value: null,
                text: "Select..."
            },
            {
                text: 'CMLOnly',
                value: 1,
            },
            {
                text: 'JBODOnly',
                value: 2,
            },
            {
                text: 'CMLInstore',
                value: 3
            },
            {
                text: 'Hybrid',
                value: 4
            }
        ];
        Site.SourceOfBakeries = [
            { value: null, text: "Select..." },
            {
                text: 'CMLOnly',
                value: 1,
            },
            {
                text: 'Instore',
                value: 2,
            },
            {
                text: 'CMLInstore',
                value: 3
            }
        ];
        Site.ChangeTypes = [
            {
                text: 'Increase',
                value: 1 /* Increase */
            },
            {
                text: 'Decrease',
                value: 2 /* Decrease */
            }
        ];
        Site.ValueTypes = [
            {
                text: 'Value',
                value: 1 /* Value */
            },
            {
                text: 'Percentage',
                value: 2 /* Percentage */
            }
        ];
        var PeopleAssessmentType;
        (function (PeopleAssessmentType) {
            PeopleAssessmentType[PeopleAssessmentType["Advance"] = 0] = "Advance";
            PeopleAssessmentType[PeopleAssessmentType["Assessment"] = 1] = "Assessment";
            PeopleAssessmentType[PeopleAssessmentType["Evaluation"] = 2] = "Evaluation";
            PeopleAssessmentType[PeopleAssessmentType["Review"] = 3] = "Review";
        })(PeopleAssessmentType = Site.PeopleAssessmentType || (Site.PeopleAssessmentType = {}));
        var PeopleStageEnum;
        (function (PeopleStageEnum) {
            PeopleStageEnum[PeopleStageEnum["ReadyForAssessment"] = 1] = "ReadyForAssessment";
            PeopleStageEnum[PeopleStageEnum["AssessmentInProgress"] = 2] = "AssessmentInProgress";
            PeopleStageEnum[PeopleStageEnum["AssessmentInEdit"] = 3] = "AssessmentInEdit";
            PeopleStageEnum[PeopleStageEnum["ReadyForEvaluation"] = 4] = "ReadyForEvaluation";
            PeopleStageEnum[PeopleStageEnum["EvaluationInProgress"] = 5] = "EvaluationInProgress";
            PeopleStageEnum[PeopleStageEnum["EvaluationInEdit"] = 6] = "EvaluationInEdit";
            PeopleStageEnum[PeopleStageEnum["ReadyForReview"] = 7] = "ReadyForReview";
            PeopleStageEnum[PeopleStageEnum["ReadyForFinalEvaluation"] = 8] = "ReadyForFinalEvaluation";
            PeopleStageEnum[PeopleStageEnum["ReadyForAcceptance"] = 9] = "ReadyForAcceptance";
            PeopleStageEnum[PeopleStageEnum["AssessmentCompleted"] = 10] = "AssessmentCompleted";
        })(PeopleStageEnum = Site.PeopleStageEnum || (Site.PeopleStageEnum = {}));
        var AuditScheudleActionType;
        (function (AuditScheudleActionType) {
            AuditScheudleActionType[AuditScheudleActionType["Assign"] = 1] = "Assign";
            AuditScheudleActionType[AuditScheudleActionType["SelfAssign"] = 2] = "SelfAssign";
            AuditScheudleActionType[AuditScheudleActionType["Discard"] = 3] = "Discard";
            AuditScheudleActionType[AuditScheudleActionType["StartEdit"] = 4] = "StartEdit";
            AuditScheudleActionType[AuditScheudleActionType["StartSubmit"] = 5] = "StartSubmit";
            AuditScheudleActionType[AuditScheudleActionType["SubmitReview"] = 6] = "SubmitReview";
            AuditScheudleActionType[AuditScheudleActionType["AssessmentReport"] = 7] = "AssessmentReport";
            AuditScheudleActionType[AuditScheudleActionType["EvaluationReport"] = 8] = "EvaluationReport";
            AuditScheudleActionType[AuditScheudleActionType["EditSubmitReview"] = 9] = "EditSubmitReview";
            AuditScheudleActionType[AuditScheudleActionType["Submit"] = 10] = "Submit";
        })(AuditScheudleActionType = Site.AuditScheudleActionType || (Site.AuditScheudleActionType = {}));
        var WeekDayId;
        (function (WeekDayId) {
            WeekDayId[WeekDayId["Sunday"] = 1] = "Sunday";
            WeekDayId[WeekDayId["Monday"] = 2] = "Monday";
            WeekDayId[WeekDayId["Tuesday"] = 3] = "Tuesday";
            WeekDayId[WeekDayId["Wednesday"] = 4] = "Wednesday";
            WeekDayId[WeekDayId["Thursday"] = 5] = "Thursday";
            WeekDayId[WeekDayId["Friday"] = 6] = "Friday";
            WeekDayId[WeekDayId["Saturday"] = 7] = "Saturday";
        })(WeekDayId = Site.WeekDayId || (Site.WeekDayId = {}));
        var ReportLayoutId;
        (function (ReportLayoutId) {
            ReportLayoutId[ReportLayoutId["Book_CorrectiveAction"] = 1] = "Book_CorrectiveAction";
            ReportLayoutId[ReportLayoutId["Book_CompletionReport"] = 2] = "Book_CompletionReport";
            ReportLayoutId[ReportLayoutId["Audit_Completion"] = 3] = "Audit_Completion";
            ReportLayoutId[ReportLayoutId["Audit_Score"] = 4] = "Audit_Score";
        })(ReportLayoutId = Site.ReportLayoutId || (Site.ReportLayoutId = {}));
        var ServiceTypeId;
        (function (ServiceTypeId) {
            ServiceTypeId[ServiceTypeId["Subscribe"] = 1] = "Subscribe";
            ServiceTypeId[ServiceTypeId["Unsubscribe"] = 2] = "Unsubscribe";
            ServiceTypeId[ServiceTypeId["Request"] = 3] = "Request";
        })(ServiceTypeId = Site.ServiceTypeId || (Site.ServiceTypeId = {}));
        var ServiceBoardTypeId;
        (function (ServiceBoardTypeId) {
            ServiceBoardTypeId[ServiceBoardTypeId["Internal"] = 1] = "Internal";
            ServiceBoardTypeId[ServiceBoardTypeId["External"] = 2] = "External";
            ServiceBoardTypeId[ServiceBoardTypeId["Network"] = 3] = "Network";
        })(ServiceBoardTypeId = Site.ServiceBoardTypeId || (Site.ServiceBoardTypeId = {}));
        var ScopeFilter;
        (function (ScopeFilter) {
            ScopeFilter[ScopeFilter["All"] = 0] = "All";
            ScopeFilter[ScopeFilter["Me"] = 1] = "Me";
            ScopeFilter[ScopeFilter["Other"] = 2] = "Other";
        })(ScopeFilter = Site.ScopeFilter || (Site.ScopeFilter = {}));
        var DateRange = /** @class */ (function () {
            function DateRange(_dateRange) {
                this._dateRange = _dateRange;
            }
            DateRange.prototype.getStart = function () {
                if (this._dateRange.startDate) {
                    return moment(this._dateRange.startDate).format('l');
                }
                else {
                    return this._dateRange.startDateCustom;
                }
            };
            DateRange.prototype.getEnd = function () {
                if (this._dateRange.endDate) {
                    return moment(this._dateRange.endDate).format('l');
                }
                else {
                    return this._dateRange.endDateCustom;
                }
            };
            DateRange.prototype.toString = function () {
                return this.getStart() + " - " + this.getEnd();
            };
            DateRange.prototype.toFormatedString = function (dateFormat) {
                return moment(this.getStart()).format(dateFormat) + " - " + moment(this.getEnd()).format(dateFormat);
            };
            return DateRange;
        }());
        Site.DateRange = DateRange;
        // String to string dictionary of URLs by key.
        var _urls = {};
        function GetVersion() {
            // Returns the current version of the Web app
            // This needs to be updated with each release
            return '2.5.2';
        }
        Site.GetVersion = GetVersion;
        function GetTaskAppVersion() {
            // Returns the current version of the Web app
            // This needs to be updated with each release
            return '1.0.0';
        }
        Site.GetTaskAppVersion = GetTaskAppVersion;
        function GetHelpTicketAppVersion() {
            // Returns the current version of the Web app
            // This needs to be updated with each release
            return '1.0.0';
        }
        Site.GetHelpTicketAppVersion = GetHelpTicketAppVersion;
        var _userInfo;
        function SetUserInfo(userInfo) {
            _userInfo = userInfo;
        }
        Site.SetUserInfo = SetUserInfo;
        function GetUserInfo() {
            return _userInfo;
        }
        Site.GetUserInfo = GetUserInfo;
        var _userFirstName;
        function SetUserFirstName(firstName) {
            _userFirstName = firstName;
        }
        Site.SetUserFirstName = SetUserFirstName;
        function GetUserFirstName() {
            return _userFirstName;
        }
        Site.GetUserFirstName = GetUserFirstName;
        var _userFullName;
        function SetUserFullName(fullName) {
            _userFullName = fullName;
        }
        Site.SetUserFullName = SetUserFullName;
        function GetUserFullName() {
            return _userFullName;
        }
        Site.GetUserFullName = GetUserFullName;
        /**
        * Get the deviceId from mobile device, in case of registered device validate the web view data based on registered location.
        * can be used in requests. See _LayoutWebView.cshtml.
        */
        var _deviceId;
        function SetDeviceId(deviceId) {
            if (deviceId) {
                _deviceId = deviceId;
            }
            else {
                _deviceId = undefined;
            }
        }
        Site.SetDeviceId = SetDeviceId;
        /**
        * Get the deviceId of web view.
        */
        function GetDeviceId() {
            return _deviceId;
        }
        Site.GetDeviceId = GetDeviceId;
        /**
       * Get the appVersion from mobile device,
       * can be used in requests. See _LayoutWebView.cshtml.
       */
        var _appVersion;
        function SetAppVersion(appVersion) {
            if (appVersion) {
                _appVersion = appVersion;
            }
            else {
                _appVersion = undefined;
            }
        }
        Site.SetAppVersion = SetAppVersion;
        /**
        * Get the deviceId of web view.
        */
        function GetAppVersion() {
            return _appVersion;
        }
        Site.GetAppVersion = GetAppVersion;
        /**
         * Webviews (pages designed to be hosted within a Workpulse app) must call this
         * method to share their OAuth bearer token with page's JavaScript so that it
         * can be used for authenticated API requests. See _LayoutWebView.cshtml.
         */
        function SetAuthToken(apiToken) {
            if (apiToken) {
                _apiToken = apiToken;
            }
            else {
                _apiToken = undefined;
            }
        }
        Site.SetAuthToken = SetAuthToken;
        var _apiToken;
        // The version of the API the web client is written to.
        var apiVersion = '2.0';
        /**
         * Get the AJAX HTTP headers for an API request that requires authentication
         * that may be from an app webview. The webviews' controller actions store the
         * bearer token from their page request.
         */
        function GetAuthHeaders() {
            var ajaxHeaders = { 'x-wp-version': apiVersion };
            if (_apiToken) {
                ajaxHeaders.Authorization = _apiToken;
            }
            if (_deviceId) {
                ajaxHeaders.DeviceId = _deviceId;
            }
            return ajaxHeaders;
        }
        Site.GetAuthHeaders = GetAuthHeaders;
        /**
         * Get the authentication access token (bearer token)
         */
        function GetAuthToken() {
            return _apiToken;
        }
        Site.GetAuthToken = GetAuthToken;
        /**
         * Set the defaults for an AngularJS $http service
         * @param defaults
         */
        function SetHttpServiceDefaults(defaults) {
            defaults.headers.common = GetAuthHeaders();
            // Return server-set cookies like ARRAffinity in requests
            defaults.withCredentials = true;
        }
        Site.SetHttpServiceDefaults = SetHttpServiceDefaults;
        /**
         * $.ajax API request that includes the access token in the authentication header.
         * @param settings same as $.ajax url or settings parameter
         */
        function AjaxApi(settings) {
            if (typeof settings == 'string') {
                settings = { url: settings };
            }
            // Add the access token to the header.
            settings.headers = settings.headers || {};
            settings.headers.Authorization = _apiToken;
            settings.headers.DeviceId = _deviceId;
            settings.headers['x-wp-version'] = apiVersion;
            settings.xhrFields = {
                // Return server-set cookies like ARRAffinity in requests
                withCredentials: true
            };
            //settings.crossDomain = true;
            return $.ajax(settings);
        }
        Site.AjaxApi = AjaxApi;
        /**
         * Set the base API URL for use by GetUrl.
         */
        function SetApiUrl(apiUrl) {
            _apiUrl = apiUrl;
        }
        Site.SetApiUrl = SetApiUrl;
        var _apiUrl;
        /**
         * Add a set of URLs to the lookup. urls is an object where the properties
         * are the URL keys and the values are their corresponding url paths (e.g. 'api/employee').
         * @param urls An object containing key:url properties
         */
        function AddUrls(urls) {
            $.extend(_urls, urls);
        }
        Site.AddUrls = AddUrls;
        /**
         * Get a URL by its key.  Returns undefined if the key isn't recognized.
         *
         * @param key The name of the URL
         * @param idOrParams Optional; can be either a single Id value, or an object of query params to be appended. If its an Id it's included as another path segment.
         */
        function GetUrl(key, idOrParams) {
            var url = _urls[key];
            if (url && idOrParams !== undefined) {
                if (typeof idOrParams === 'object') {
                    url = url + '?' + toUrlParams(idOrParams);
                }
                else {
                    url = url + '/' + idOrParams;
                }
            }
            if (url && url.substring(0, 3) === 'api') {
                return new URL(url, _apiUrl).toString();
            }
            else {
                return url;
            }
        }
        Site.GetUrl = GetUrl;
        /**
         * Get a query parameter value from the current URL by its key.  Returns undefined if the key isn't recognized.
         *
         * @param key The name of the parameter
         */
        function GetUrlQueryString(key) {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars[key];
        }
        Site.GetUrlQueryString = GetUrlQueryString;
        function toUrlParams(params) {
            // Remove any null or undefined fields as they get generated as "field=" by
            // $.param which Web API doesn't like.
            for (var key in params) {
                var value = params[key];
                if (value === null || value === undefined) {
                    delete params[key];
                }
            }
            return $.param(params);
        }
        /**
         * Get a url parameter by name
         * @param name The parameter name
         * @param url The URL to parse; if not provided, the current location is used
         */
        function UrlParam(name, url) {
            if (!url) {
                url = window.location.href;
            }
            var results = new RegExp('[\\?&]' + name + '=([^&#]*)', 'i').exec(url);
            if (!results) {
                return undefined;
            }
            return results[1] || undefined;
        }
        Site.UrlParam = UrlParam;
        /**
         * Get the query parameters from a URL as an object
         * Example: '?a=1&b=2&c=3' => {a: '1', b: '2', c: '3'}
         * @param url
         */
        function GetUrlParams(url) {
            var regex = /[?&]([^=#]+)=([^&#]*)/g, params = {}, match;
            while (match = regex.exec(url)) {
                params[match[1]] = match[2];
            }
            return params;
        }
        Site.GetUrlParams = GetUrlParams;
        /**
         * Get the best-available error message from the jQuery-wrapped XMLHttpRequest object
         * that's passed as the parameter to the error callback for $ajax.
         * @param jqXHR
         */
        function XhrMessage(jqXHR) {
            return (jqXHR.responseJSON && (jqXHR.responseJSON.exceptionMessage || jqXHR.responseJSON.message)) || jqXHR.statusText;
        }
        Site.XhrMessage = XhrMessage;
        /**
         * Display a styled alert message box.
         * @param message The message to display or a jqXHR object to extract an error message from.
         * @param title Optional title for the box (defaults to 'Alert')
         * @param callback Optional callback that's called when the user clicks OK.
         */
        function Alert(message, title, callback) {
            if (title === void 0) { title = 'Alert'; }
            if (typeof message !== 'string') {
                message = XhrMessage(message);
            }
            bootbox.alert({
                animate: false,
                title: title,
                message: message,
                callback: callback
            });
        }
        Site.Alert = Alert;
        /**
        * Display a alert message box.
        * @param message The message to display or a jqXHR object to extract an error message from.
        */
        function AlertJS(message) {
            if (typeof message !== 'string') {
                message = XhrMessage(message);
            }
            alert(message);
        }
        Site.AlertJS = AlertJS;
        /**
         * Display a styled alert message box for an Angular IHttpPromise catch reason.
         * @param reason The parameter passed to the IHttpPromise catch handler.
         * @param title Optional title for the box (defaults to 'Alert')
         * @param callback Optional callback that's called when the user clicks OK.
         */
        function AlertHttp(reason, title, callback) {
            if (title === void 0) { title = 'Alert'; }
            var message = reason.data ? reason.data.message : reason.xhrStatus;
            Alert(message, title, callback);
        }
        Site.AlertHttp = AlertHttp;
        /**
         * Display a styled confirmation box.
         * @param message The confirmation message to display.
         * @param callback The callback to deliver the user's choice to.
         */
        function Confirm(message, callback) {
            bootbox.confirm({
                title: 'Confirm',
                message: message,
                callback: callback
            });
        }
        Site.Confirm = Confirm;
        /**
         * Is the host a mobile browser?
         */
        function IsMobileBrowser() {
            return navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh|Android/i) !== null;
        }
        Site.IsMobileBrowser = IsMobileBrowser;
        /**
         * Is the host a iOS browser?
         */
        function IsiOSBrowser() {
            return navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh/i) !== null;
        }
        Site.IsiOSBrowser = IsiOSBrowser;
        /**
      * Is the host a Edge browser?
      */
        function IsEdgeBrowser() {
            return navigator.userAgent.indexOf("Edge") > -1;
        }
        Site.IsEdgeBrowser = IsEdgeBrowser;
        /**
        * Format Amount
        */
        var settings = {
            // These are the defaults.
            decimal_separator: ",",
            number_separator: ",",
            currency: "$",
            to_fixed: 2
        };
        function FormatCurrency(amount) {
            var currency = "$";
            if (amount == null)
                amount = "0.00";
            amount = amount.toString();
            amount = amount.replace(currency, '');
            amount = amount.replace(settings.decimal_separator, "");
            amount = amount.replace(settings.number_separator, settings.decimal_separator);
            var num = ParseCurrency(amount.trim());
            if (num.toString() == "NaN") {
                num = 0;
            }
            var money = currency + '' + num.toFixed(settings.to_fixed).replace(/(\d)(?=(\d{3})+\.)/g, '$1' + settings.number_separator).replace(settings.decimal_separator, settings.number_separator).replace(settings.number_separator, settings.decimal_separator);
            //If negative value, then place - sign before $.
            if (money.search('-') > 0) {
                money = "-" + money.replace('-', '');
            }
            return money;
        }
        Site.FormatCurrency = FormatCurrency;
        // Parse a currency string into a number.
        // e.g. '$1,234.56' => 1234.56
        function ParseCurrency(amount) {
            if (!amount) {
                amount = '';
            }
            return Number(amount.replace(/,/g, '').replace('$', ''));
        }
        Site.ParseCurrency = ParseCurrency;
        function SetCookie(name, value) {
            document.cookie = name + "=" + value + ";path=/;secure;";
        }
        Site.SetCookie = SetCookie;
        function GetCookieValue(name) {
            var match = document.cookie.match(RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
            return match ? match[1] : null;
        }
        Site.GetCookieValue = GetCookieValue;
        /**
         * Initialize the location header selection
         */
        function InitHeaderLocation() {
            // Do nothing if the location selector isn't present.
            if (!$("#HeaderSelectedLocationId").length)
                return;
            var locationId;
            if ($("#HeaderSelectedLocationId option").length == 1) {
                // The location selector only contains a single option; ensure the
                // locationId cookie references that location.
                locationId = $("#HeaderSelectedLocationId option").val();
                if (locationId && Workpulse.Site.GetHeaderLocationId() != locationId) {
                    Workpulse.Site.SetHeaderLocationId(locationId);
                    // The NavbarPartial home controller method uses the locationId cookie to
                    // determine what to include, so refresh if that changed.
                    console.log('Refresh cookie to', locationId);
                    location.reload();
                }
            }
            else {
                locationId = Workpulse.Site.GetHeaderLocationId();
                if (locationId && $("#HeaderSelectedLocationId option[value=\"" + locationId + "\"]").length) {
                    // Select the previous location
                    $("#HeaderSelectedLocationId").val(locationId);
                    console.log('Setting to previous location', locationId);
                }
                else {
                    // Initialize the setting to the currently selected location.
                    locationId = $("#HeaderSelectedLocationId").val();
                    Workpulse.Site.SetHeaderLocationId(locationId);
                    console.log('Initializing saved locationId', locationId);
                }
            }
            $('#HeaderSelectedLocationId').on('change', function () {
                if (Workpulse.Site.GetHeaderLocationId() != this.value) {
                    // Update the locationId cookie to make the selection available to the server.
                    Workpulse.Site.SetHeaderLocationId(this.value);
                    console.log('Change to new locationId', this.value);
                    if (window.location.href.toLowerCase().indexOf('sales') != -1) {
                        sessionStorage.removeItem("sales.view");
                        window.location.replace(window.location.origin + "/sales");
                    }
                    else {
                        location.reload();
                    }
                }
            });
        }
        Site.InitHeaderLocation = InitHeaderLocation;
        function SetHeaderLocationId(locationId) {
            SetCookie('locationId', locationId);
        }
        Site.SetHeaderLocationId = SetHeaderLocationId;
        function GetHeaderLocationId() {
            var locationId = GetCookieValue('locationId');
            console.log('GetHeaderLocationId', locationId);
            return locationId;
        }
        Site.GetHeaderLocationId = GetHeaderLocationId;
        function GetHeaderPosTypeId() {
            var locationId = GetHeaderLocationId();
            var posTypeId = $(".pos-type-info select #loc" + locationId).attr("data-posTypeId");
            return posTypeId ? posTypeId : "0";
        }
        Site.GetHeaderPosTypeId = GetHeaderPosTypeId;
        // Validate a product quantity against the quantity rules from the product catalog.
        // Returns null if the quantity is valid, otherwise an error message is returned.
        function ValidateProductQuantities(qty, unitName, minQty, maxQty, roundingMethod, roundingQty, allowMinMax, allowRounding) {
            if (allowMinMax === void 0) { allowMinMax = true; }
            if (allowRounding === void 0) { allowRounding = true; }
            if (qty == 0 || qty == null) {
                return null;
            }
            else if (qty < 0) {
                return "Quantity cannot be negative";
            }
            else if (unitName == 'EA' && qty % 1 != 0) {
                return "Quantity for unit " + unitName + " has to be integer";
            }
            else if (qty % 1 != 0 && qty % 1 != 0.25 && qty % 1 != 0.5 && qty % 1 != 0.75) {
                return "Quantity is allowed to be in only the following decimal options: 0.25, 0.5, 0.75";
            }
            else if (allowMinMax && minQty != null && minQty > 0 && qty < minQty) {
                return "Quantity cannot be less than minimum of " + minQty;
            }
            else if (allowMinMax && maxQty != null && maxQty > 0 && qty > maxQty) {
                return "Quantity cannot be greater than maximum of " + maxQty;
            }
            else if (allowRounding && (roundingMethod == 1 && roundingQty > 0) && (Number(qty) % roundingQty != 0)) {
                // Round up
                var quotient = Math.floor(Number(qty) / roundingQty);
                var newValue = (quotient + 1) * roundingQty;
                return "Rounding up has to be applied. Please change value to " + newValue.toString();
            }
            else if (allowRounding && (roundingMethod == 2 && roundingQty > 0) && (Number(qty) % roundingQty != 0)) {
                // Round down
                var quotient = Math.floor(Number(qty) / roundingQty);
                var newValue = quotient * roundingQty;
                return "Rounding down has to be applied. Please change value to " + newValue.toString();
            }
            else {
                return null;
            }
        }
        Site.ValidateProductQuantities = ValidateProductQuantities;
        function IsFloat(n) {
            return Number(n) === n && n % 1 !== 0;
        }
        Site.IsFloat = IsFloat;
        function NumberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
        Site.NumberWithCommas = NumberWithCommas;
        function IsExactMatchSearch(text) {
            return text ? text.charAt(0) === '"' && text.charAt(text.length - 1) === '"' : false;
        }
        Site.IsExactMatchSearch = IsExactMatchSearch;
        function GetExactSearchText(text) {
            return text ? text.slice(1, -1).toLowerCase() : "";
        }
        Site.GetExactSearchText = GetExactSearchText;
        function FilterGrid(text, grid, parameters) {
            if (text != undefined && grid != null) {
                var useExactMatch = IsExactMatchSearch(text);
                if (useExactMatch) {
                    text = GetExactSearchText(text);
                }
                if (text.length) {
                    var operator_1 = useExactMatch ? '=' : 'contains';
                    var filterArray_1 = [];
                    parameters.forEach(function (p) {
                        filterArray_1.push([p, operator_1, text]);
                        filterArray_1.push("or");
                    });
                    grid.filter(filterArray_1);
                }
                else {
                    grid.filter('');
                }
            }
        }
        Site.FilterGrid = FilterGrid;
        function TransformHtmlContent(html, isEdit) {
            if (isEdit === void 0) { isEdit = false; }
            var count = (html.match(/<iframe/g) || []).length; //number of iframe tags       
            for (var i = 1; i <= count; i++) {
                var a = html.split('<iframe', i).join('<iframe').length; //index of i'th occurance of <iframe
                var b = html.indexOf('src="', a); //index of i'th occurance of src
                var c = html.indexOf('type="application/pdf', b);
                var endOfIframe = html.indexOf('</iframe>', a);
                var tempIframePart = html.substring(a, endOfIframe);
                var isLink = tempIframePart.indexOf('class="link') > 0;
                var isYoutube = tempIframePart.indexOf('class="youtube') > 0;
                var isVimeo = tempIframePart.indexOf('class="vimeo') > 0;
                var isGooglemap = tempIframePart.indexOf('class="googlemap') > 0;
                var idPdfIFrame = !isLink && !isYoutube && !isVimeo && !isGooglemap;
                if (idPdfIFrame) {
                    var src = html.substring(b + 5, c - 2);
                    var blob = Base64ToBlob(src, "octet/stream", null);
                    var blobUrl = URL.createObjectURL(blob);
                    html = html.replace(src, "/Scripts/pdfjs/web/viewer.html?file=" + blobUrl);
                }
            }
            localStorage.removeItem("pdfjs.history");
            //this will probably be problematic in a composite page that we have more than pdfs
            if (count > 0) {
                html.substring(html.indexOf('>') + 1, html.lastIndexOf('<'));
            }
            if (!isEdit) {
                html = html.replace(/contenteditable="true"/g, "");
            }
            return html;
        }
        Site.TransformHtmlContent = TransformHtmlContent;
        function Base64ToBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        }
        Site.Base64ToBlob = Base64ToBlob;
        function FormatPhoneNumber(phoneNumberString) {
            var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
            var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            return null;
        }
        Site.FormatPhoneNumber = FormatPhoneNumber;
        function timeConvertor(time) {
            var PM = time.match('PM') ? true : false;
            time = time.split(':');
            var min = 0;
            var hour = 0;
            if (PM) {
                if (time[0] < 12) {
                    hour = 12 + parseInt(time[0], 10);
                }
                else {
                    hour = time[0];
                }
                min = time[1].replace('PM', '');
            }
            else {
                if (time[0] == 12) {
                    hour = parseInt(time[0], 10) - 12;
                }
                else {
                    hour = time[0];
                }
                min = time[1].replace('AM', '');
            }
            return (hour + ':' + min);
        }
        Site.timeConvertor = timeConvertor;
        function timeConvertorWithSS(time) {
            var PM = time.match('PM') ? true : false;
            time = time.split(':');
            var min = 0;
            var hour = 0;
            var ss = 0;
            if (PM) {
                if (time[0] < 12) {
                    hour = 12 + parseInt(time[0], 10);
                }
                else {
                    hour = time[0];
                }
                min = time[1];
                ss = time[2].replace('PM', '');
            }
            else {
                if (time[0] == 12) {
                    hour = parseInt(time[0], 10) - 12;
                }
                else {
                    hour = time[0];
                }
                min = time[1];
                ss = time[2].replace('AM', '');
            }
            return (hour + ':' + min + ':' + ss);
        }
        Site.timeConvertorWithSS = timeConvertorWithSS;
        function GetOrderStatusLabel(status) {
            switch (status) {
                case 1 /* Open */:
                    return "Open";
                case 2 /* Submitted */:
                    return "Submitted";
                case 3 /* Processed */:
                    return "Processed";
                case 4 /* Received */:
                    return "Received";
                case 5 /* Posted */:
                    return "Posted";
                case 6 /* Accepted */:
                    return "Accepted";
                case 7 /* Rejected */:
                    return "Rejected";
                case 8 /* PartiallyAccepted */:
                    return "Partially Accepted";
                case 9 /* Deleted */:
                    return "Deleted";
                case 10 /* Unprocessed */:
                    return "Unprocessed";
                default:
                    return "";
            }
        }
        Site.GetOrderStatusLabel = GetOrderStatusLabel;
        function enableSaveButton() {
            $("#hdnchange").val("Y");
            $('.enablebtn').prop('disabled', false);
        }
        Site.enableSaveButton = enableSaveButton;
        function disableSaveButton() {
            $("#hdnchange").val("N");
            $('.enablebtn').prop('disabled', true);
        }
        Site.disableSaveButton = disableSaveButton;
        function unSavedModalPopUpData() {
            var isLost = false;
            if ($("#hdnchange").val() == "Y") {
                isLost = true;
                Workpulse.Site.Confirm('You have unsaved changes that will be lost.', function (ok) {
                    if (ok) {
                        disableSaveButton();
                        $(".showUnSavedModalChange").modal('hide');
                    }
                    else {
                        $(".showUnSavedModalChange").modal('show');
                    }
                });
            }
            return isLost;
        }
        Site.unSavedModalPopUpData = unSavedModalPopUpData;
        function getLegendColor(color) {
            switch (color) {
                case 'green': return '#00C000';
                case 'yellow': return '#FCFC00';
                case 'orange': return '#FFA500';
                case 'red': return '#F00000';
                default: return color;
            }
        }
        Site.getLegendColor = getLegendColor;
        function TrimLeandingTrailingCommas(str) {
            return str.replace(/(^,)|(,$)/g, "");
        }
        Site.TrimLeandingTrailingCommas = TrimLeandingTrailingCommas;
        function CheckSessionStorage() {
            var test = 'test';
            try {
                sessionStorage.setItem(test, test);
                sessionStorage.removeItem(test);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        Site.CheckSessionStorage = CheckSessionStorage;
        function CheckLocalStorage() {
            var test = 'test';
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        Site.CheckLocalStorage = CheckLocalStorage;
    })(Site = Workpulse.Site || (Workpulse.Site = {}));
})(Workpulse || (Workpulse = {}));
//# sourceMappingURL=Site.js.map