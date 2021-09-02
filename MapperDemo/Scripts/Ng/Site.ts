declare var bootbox: any;
declare var _dateFormat: string;
declare var _sizeLimit: string;
declare var _loginEmployeeID: number;
declare var _logInAccessId: number;
declare var _twelveHourFormat: string;
declare var centralizedUppDateFormat: string;

namespace Workpulse.Site {

    export const enum DefaultData {
        UnOpenedComplaintNotifyHours = 24,
        QuizExpriyNotificationDays = 1,
        TaskExpiryNotificationHours = 15,
        VideoUploadSizeLimit = 25, // 25MB
        PdfUploadSizeLimit = 5, // 5MB
        ImageUploadSizeLimit = 4, // 4MB
        Prep_ForecastWeeks = 4,
        Prep_ForecastThawTimeHours = 48,
        AuditExpiryDays = 7,
        AuditDataViewDaysLimit = 0,
        BookDataViewDaysLimit = 0,
        TimeZoneId = 16, // Eastern Standard
        MessageRetentionMonths = 12,
        NumberOfCustomAuditForms = 3,
        NumberOfAuditSchedules = 3,
        NormalTaskDueDays = 15,
        LowTaskDueDays = 30,
        HighTaskDueDays = 7
    }

    export const enum UploadType {
        None = 0,
        Image = 1,
        PDF = 2,
        Video = 3
    }

    export const enum FrequencyType {
        EveryDay = 1,
        EverySecondDay = 2
    }

    export const enum PriorityType {
        Normal = 1,
        Low = 2,
        High = 3,
        NormalNetwork = 4,
        LowNetwork = 5,
        HighNetwork = 6
    }

    export const enum TaskVerificationType {
        All = 0,
        Pending = 1,
        Approve = 2,
        Reopen = 3
    }

    export const enum RequestStatus {
        Pending = 1,
        Accepted = 2,
        Rejected = 3
    }

    export const enum HeirarchyLevel {
        All = 0,
        Up = 1,
        Down = 2
    }

    export const enum PermissionTypeId {
        PeopleAssessment = 1,
        PeopleEvalutor = 2,
        PeopleReview = 3,
        PeopleAddAdHocDevelopmentPlan = 4
    }




    // Error detail codes as defined in Workpulse.Service/Enums.cs
    export const enum DetailCode {
        None = 0,
        UniqueViolation = 1,
        ForeignKeyInUse = 2,
        LimitReached = 3,
        NotEmployee = 100
    }

    // Not const so that it can be used by .js files.
    export enum NoteTypeId {
        Forms = 1,
        MatrixForms = 3,
        Feedback = 4,
        ActionPlan = 5,
        DevelopmentPlan = 6,
        CorrectiveAction = 7,
        EmployeeAction = 8,
        GuestComplaint = 9,
        GuestFeedback = 10,
        Task = 11,
        Wow = 12,
        HelpTicket = 13,
        ActionStep = 14,
        DepositTracker = 15,
    }

    // MstApplication Ids
    export const enum AppId {
        Complaint = 1,
        Audit = 2,
        Task = 3,
        Wow = 4,
        Remind = 5,
        Book = 6,
        People = 7,
        Inbox = 8,
        Survey = 9,
        Time = 10,
        Reports = 11,
        HelpTicket = 12,
        Message = 13,
        Quiz = 14,
        Insight = 15,
        JournalNote = 16,
        Knowledge = 17,
        Inventory = 18,
        Sales = 19,
        Prep = 20,
        Production = 21,
        Purchasing = 22,
        RMS = 23,
        Integration = 24,
        ActionPlan = 25,
        Global = 26,
        Picking = 27,
        News = 28,
        Admin = 29,
        Desk = 31
    }

    export const enum ScheduleTypeId {
        Daily = 301,
        Weekly = 302,
        BiWeekly = 303,
        Monthly = 304,
        Quarterly = 305,
        Yearly = 306,
        Days = 307,
        NHours = 308,
        HalfYearly = 309,
    }
    export const enum ScheduleUIName {
        Book = 1,
        Audit = 2,
        SmartAudit = 3,
        Task = 4,
        People = 5,
    }
    export const enum ScheduleType {
        Location = 1,
        User = 2,
        SmartAudit = 3
    }

    export const enum MstFormType {
        All = 0,
        Audit = 1,
        LogForm = 2,
        Quiz = 3,
        PeopleApp = 4
    }

    //// These enums must match the ScheduleTimeRange enum values in BookTaskViewModel.cs
    export const enum ScheduleTimeRange {
        FullDay = 1,
        LocationHours = 2,
        Custom = 3,
    }

    // Not const so that it can be used by .js files.
    export enum IconId {
        UserNote = 1,
        ChangeStatus = 2,
        Reply = 3,
        Call = 4,
        Assign = 5,
        Pickup = 6,
        Escalation = 7,
        Mail = 8
    }

    // Well-known fixed string values used in the InputType column of MstBookInputType
    export const InputType = {
        Numeric: 'Numeric',
        Image: 'Image',
        YesNo: 'YesNo',
        Checkbox: 'Checkbox',
        Timer: 'Timer'
    }

    // for get non numberic input type values
    export const BookInputTypeIds = {
        Image: 10,
        YesNo: 9,
        Checkbox: 14
    }

    export const OrderMethods = [
        {
            text: 'Regular',
            value: OrderMethodId.Regular
        },
        {
            text: 'Forecast',
            value: OrderMethodId.Forecast
        },
        {
            text: 'Clone',
            value: OrderMethodId.Clone
        },
        {
            text: 'ParLevel',
            value: OrderMethodId.ParLevel
        },
        {
            text: 'SameDayLastWeek',
            value: OrderMethodId.SameDayLastWeek
        },
        {
            text: 'Special',
            value: OrderMethodId.Special
        }
    ] as ISelectItem[];

    export const SourceOfDonuts = [
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
    ] as ISelectItem[];

    export const SourceOfBakeries = [
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
    ] as ISelectItem[];

    export const ChangeTypes = [
        {
            text: 'Increase',
            value: ChangeTypeId.Increase
        },
        {
            text: 'Decrease',
            value: ChangeTypeId.Decrease
        }
    ] as ISelectItem[];

    export const ValueTypes = [
        {
            text: 'Value',
            value: ValueTypeId.Value
        },
        {
            text: 'Percentage',
            value: ValueTypeId.Percentage
        }
    ] as ISelectItem[];

    export const enum BookReadingTypeId {
        Manual = 101,
        Device = 102
    }

    export const enum BookMultipleReadingOptionId {
        SingleValue = 1,
        MiddleValue = 2,
        ThreeValue = 3
    }

    export const enum PlanStatusId {
        Open = 1,
        InProgress = 2,
        Closed = 3
    }
    export const enum TaskStatusId {
        Open = 1,
        InProgress = 2,
        Closed = 3,
        Expired = 4
    }

    export const enum AppStatusId {
        AuditPlanOpen = 1,
        AuditPlanInProgress = 2,
        AuditPlanClosed = 3,
        ActionStepOpen = 4,
        ActionStepClosed = 5,
    }

    export const enum PlanTypeId {
        ActionPlan = 1,
        DevelopmentPlan = 2,
        CorrectiveAction = 3,
        GuestComplaint = 4
    }
    export const enum ActivityTypeId {
        Workfeed = 101,
        Activity = 102,
        Feedback = 103,
        ActionPlan = 104,
        DevelopmentPlan = 105,
        CorrectiveAction = 106,
        AllInboxes = 107,
        Flagged = 108,
        GuestComplaint = 109
    }
    export enum PeopleAssessmentType {
        Advance = 0,
        Assessment = 1,
        Evaluation = 2,
        Review = 3,
    }

    export enum PeopleStageEnum {
        ReadyForAssessment = 1,
        AssessmentInProgress = 2,
        AssessmentInEdit = 3,
        ReadyForEvaluation = 4,
        EvaluationInProgress = 5,
        EvaluationInEdit = 6,
        ReadyForReview = 7,
        ReadyForFinalEvaluation = 8,
        ReadyForAcceptance = 9,
        AssessmentCompleted = 10
    }
    export enum AuditScheudleActionType {
        Assign = 1,
        SelfAssign = 2,
        Discard = 3,
        StartEdit = 4,
        StartSubmit = 5, //Start Assesment, Start Evaluation
        SubmitReview = 6,

        AssessmentReport = 7,
        EvaluationReport = 8,

        EditSubmitReview = 9,
        Submit = 10,
    }

    export const enum PosTypeId {
        Simphony = 1,
        Radiant = 2,
    }

    export const enum ProductTypeId {
        Finished = 1,
        Unfinished = 2,
        Ingredient = 3,
        RetailFinished = 4,
        RetailUnfinished = 5,
        RetailIngredient = 6
    }

    export const enum OrderMethodId {
        Regular = 1,
        Forecast = 2,
        Clone = 3,
        ParLevel = 4,
        Auto = 5,
        Special = 6,
        SameDayLastWeek = 7
    }

    export const enum RoundingMethodId {
        Up = 1,
        Down = 2
    }

    export const enum ReferenceType {
        Purchasing = 1,
        Sales = 2,
        Production = 3,
        Inventory = 4,
        Prep = 5,
        POS = 6
    }

    export const enum ProductLevel {
        RawMaterial = 1,
        Dough = 2,
        Unfinished = 3,
        Finished = 4,
    }

    export const enum InvtTranType {
        PO = 1,
        SO = 2,
        IngredientPhysical = 3,
        Adjustment = 4,
        DonutBakeryWaste = 5,
        CarryOver = 6,
        Depletion = 7,
        IngredientWaste = 8,
        TransferIn = 9,
        TransferOut = 10,
        DonutBakeryAdjustment = 11,
        DonutBakeryTransferIn = 12,
        DonutBakeryTransferOut = 13,
        IcedBeverageWaste = 14,
        HotBeverageWaste = 15,
        MeatAndEggsWaste = 16,
        DonutBakeryPO = 17,
        IcedBeveragePO = 18,
        HotBeveragePO = 19,
        MeatAndEggsPO = 20,
        IcedBeveragePhysical = 21,
        MeatAndEggsPhysical = 22
    }
    export const enum StoredProcedureJobs {
        BookTasksPushData = 1,
        ProductsPushData = 2,
        FinancialPushData = 3,
        DashboardsPushData = 4,
        ReportsPushData = 5,
        ComplaintsPushData = 6,
        SalesPushData = 7,
        PermissionsPushData = 8,
        VendorsPushData = 9,
        KnowledgePushData = 10,
        AppendicesPushData = 11,
    }

    export const enum ProductDemandType {
        HotHoldingDemand = 1,
        IcedBeverageDemand = 2,
        HotBeverageDemand = 3
    }

    export const enum TemplateTypeRMS {
        MeatEggs = 1,
        Bakery = 2,
        PhysicalInventory = 3,
        PurchaseOrder = 4,
        Waste = 5,
        IcedBeverage = 6,
        HotBeverage = 7,
        MeatAndEggs = 8
    }

    export const enum HelpPageId {
        PhysicalInventory = 9
    }

    export const enum SubscriptionType {
        Monthly = 1,
        Quarterly = 2,
        Yearly = 3
    }

    export enum WeekDayId {
        Sunday = 1,
        Monday = 2,
        Tuesday = 3,
        Wednesday = 4,
        Thursday = 5,
        Friday = 6,
        Saturday = 7
    }

    export enum ReportLayoutId {
        Book_CorrectiveAction = 1,
        Book_CompletionReport = 2,

        Audit_Completion = 3,
        Audit_Score = 4,
    }

    export enum ServiceTypeId {
        Subscribe = 1,
        Unsubscribe = 2,
        Request = 3
    }
    export enum ServiceBoardTypeId {
        Internal = 1,
        External = 2,
        Network = 3,
    }
    export enum ScopeFilter {
        All = 0,
        Me = 1,
        Other = 2
    }

    export const enum ChangeTypeId {
        Increase = 1,
        Decrease = 2
    }

    export const enum ValueTypeId {
        Value = 1,
        Percentage = 2
    }

    export interface IHelpItem {
        pageName: string;
        uploadedPath: string;
        htmlContent: string;
    }

    export interface ITrnNote {
        id: number;
        noteId: NoteTypeId;
        noteActivityId: number;
        notes: string;
        notesDate: string;
        iconUrl: string;
        empId: number;
        empImageUrl: string;
        empName: string;
        hasImage: boolean;
    }

    export interface INote {
        noteId: NoteTypeId;
        noteActivityId: number;
        notes: string;
        empId: number;
    }

    export interface ISelectItem {
        value: number;
        text: string;
    }
    export interface ISelectStatusItem {
        value: number;
        text: string;
        status: boolean;
    }

    export interface ISelectTemplateLocationItem {
        value: number;
        text: string;
        locationId: number;
    }

    export interface ISelectLocationtem {
        value: number;
        text: string;
        status: boolean;
        name: string;
        pcNumber: string;
    }

    export interface IPermissionDetail {
        permissionId: number;
        addPermission: boolean;
        updatePermission: boolean;
        deletePermission: boolean;
        postPermission: boolean;
    }

    export interface IProductQuantityRules {
        productId: number;
        minQty: number;
        maxQty: number;
        roundingMethod: number;
        roundingQty: number;
    }

    export interface IPendingOrder {
        id: number;
        vendorId: number;
        deliveryId: number;
        deliveryDate: string;
        vendorName: string;
        deliveryName: string;
        cutoffTime: string;
    }

    export interface IPermissionDetail {
        permissionId: number;
        addPermission: boolean;
        updatePermission: boolean;
        deletePermission: boolean;
        postPermission: boolean;
    }

    export const enum PermissionOption {
        //Sales Permissions
        Dashboard = 26,
        DailySales = 27,
        ProductMix = 28,
        EnterCashCount = 29,
        ShiftCashReconciliation = 30,
        SafeReconciliation = 31,
        BankDeposits = 32,
        PaidInOut = 33,
        DailySalesSummaryReport = 34,
        SalesbyDestinationCenter = 35,
        SalesbyDaypart = 36,
        ProductMixReport = 37,
        POSTransactionViewer = 38,
        SalesbyEmployee = 39,
        SalesbyTenderType = 40,
        MenuAnalysis = 41,
        CashShortOver = 42,
        SalesByTerminal = 43,
        SalesbyTime = 44,
        SalesSummaryConsolidatedReport = 45,
        SalesbyRevenueCenterConsolidatedReport = 46,
        SalesTrends = 47,
        LaborTrends = 48,
        ProfitabilityTrends = 49,
        LossPreventionTrends = 50,
        Items = 51,
        SalesEmployee = 52,
        SalesPayment = 53,
        POSTransactionViewerDetail = 54,
        DailySalesDetail = 55,
        Reports = 56,
        HourlySales = 57,
        ProductMixDetail = 58,
        WebBasedCashManagement = 76,
        DailySalesSummaryReportDetail = 77,
        EditItemSalesRecipe = 110,
        SalesUpload = 85,
        SalesDataEdit = 124,
        SalesOrders = 156,
        VendorBlackoutDates = 239,
        MassOrdersModify = 241,
        MissingOrders = 242,

        //App Management Permissions
        OrgAdmin = 1,
        WowAdmin = 3,
        AD0003SecuredInformation = 83,
        RMSManagement = 100,
        //WowManagement = 99,
        AuditManagement = 98,
        QuizManagement = 97,
        ComplaintManagement = 96,
        TaskManagement = 95,
        BookManagement = 94,
        LocationManagement = 93,
        AdvanceUserAdmin = 92,
        ImportEmployees = 229,

        //Audit Permission
        AuditAdmin = 5,
        AuditAdvance = 135,

        //People Permission
        PeopleAdmin = 196,
        PeopleAdvance = 197,

        //Task
        TaskExpiry = 172,
        ClosedTaskVerification = 187,

        //Desk
        DeskSettingManagement = 211,
        DeskReports = 212,
        DeskTicketExpiry = 213,
        DeskTicketVerification = 214,
        //Production
        ProductionManage = 235,
        //Inventory
        PhysicalInventory = 7,
        DonutBakeryWaste = 10,
        MeatAndEggsWaste = 108,
        //Purchasing
        PurchaseOrder = 65,
        CreditRequst = 66,
        OrderHistory = 171,
        CustomerStatement = 182,
        TaskPurchaseInvoice = 184,
        //Prep
        MeatAndEggsPrep = 58,
    }

    export const enum SystemPermissionId {
        MasterProduct = 2,
        Permissions = 3,
        Insight = 4,
        AppFeedback = 5,
        MasterFinancial = 6,
        Dashboards = 7,
        ProductsPushData = 8,
        Reports = 9,
        Complaints = 10,
        Sales = 11,
        FinancialPushData = 12,
        DashboardsPushData = 13,
        ReportsPushData = 14,
        ComplaintsPushData = 15,
        SalesPushData = 16,
        PermissionsPushData = 17,
        BookTasks = 18,
        BookTasksPushData = 19,
        Knowledge = 20,
        KnowledgePushData = 21,
        MasterPushData = 22,
        AppendicesPushData = 23
    }

    export const  enum OrderStatusId {
        Open = 1,
        Submitted = 2,
        Processed = 3,
        Received = 4,
        Posted = 5,
        Accepted = 6,
        Rejected = 7,
        PartiallyAccepted = 8,
        Deleted = 9,
        Unprocessed = 10
    }

    export const enum OperatorId {
        Equal = 1,
        LessThan = 2,
        LessThanOrEqualTo = 3,
        GreaterThan = 4,
        GreaterThanOrEqualTo = 5
    }

    export const enum DateRangeOptionType {
        Custom = 0,
        Last7Days = 1,
        CurrentWeek = 2,
        PreviousWeek = 3,
        Last30Days = 4,
        CurrentMonth = 5,
        PreviousMonth = 6,
    }

    export const enum PathwayContentType {
        Video = 1,
        Quiz = 2,
        CheckList = 3,
        Notification = 4,
        Skill = 5,
        Knowledge = 6,
    }

    export const enum SkillType {
        Skill = 1,
        Competency = 2
    }
    export interface IImage {
        imageBase64: string;
        contentType: string;
    }

    // Date range data as received from the API
    export interface IDateRange {
        startDate: string;
        startDateCustom: string;
        endDate: string;
        endDateCustom: string;
    }

    export class DateRange {
        constructor(private _dateRange: IDateRange) { }

        getStart() {
            if (this._dateRange.startDate) {
                return moment(this._dateRange.startDate).format('l');
            }
            else {
                return this._dateRange.startDateCustom;
            }
        }

        getEnd() {
            if (this._dateRange.endDate) {
                return moment(this._dateRange.endDate).format('l');
            }
            else {
                return this._dateRange.endDateCustom;
            }
        }

        toString() {
            return `${this.getStart()} - ${this.getEnd()}`;
        }

        toFormatedString(dateFormat) {
            return `${moment(this.getStart()).format(dateFormat)} - ${moment(this.getEnd()).format(dateFormat)}`;
        }
    }
    // String to string dictionary of URLs by key.
    const _urls: { [index: string]: string } = {};

    export function GetVersion() {
        // Returns the current version of the Web app
        // This needs to be updated with each release
        return '2.5.2';
    }

    export function GetTaskAppVersion() {
        // Returns the current version of the Web app
        // This needs to be updated with each release
        return '1.0.0';
    }

    export function GetHelpTicketAppVersion() {
        // Returns the current version of the Web app
        // This needs to be updated with each release
        return '1.0.0';
    }

    interface IUserInfo {
        firstName: string;
        fullName: string;
    }
    let _userInfo: IUserInfo;

    export function SetUserInfo(userInfo: IUserInfo) {
        _userInfo = userInfo;
    }

    export function GetUserInfo() {
        return _userInfo;
    }

    let _userFirstName: string;
    export function SetUserFirstName(firstName: string) {
        _userFirstName = firstName;
    }
    export function GetUserFirstName() {
        return _userFirstName;
    }

    let _userFullName: string;
    export function SetUserFullName(fullName: string) {
        _userFullName = fullName;
    }
    export function GetUserFullName() {
        return _userFullName;
    }

    /**
    * Get the deviceId from mobile device, in case of registered device validate the web view data based on registered location.
    * can be used in requests. See _LayoutWebView.cshtml.
    */
    let _deviceId: string;
    export function SetDeviceId(deviceId: string) {
        if (deviceId) {
            _deviceId = deviceId;
        }
        else {
            _deviceId = undefined;
        }
    }
    /**
    * Get the deviceId of web view.
    */
    export function GetDeviceId() {
        return _deviceId;
    }

    /**
   * Get the appVersion from mobile device,
   * can be used in requests. See _LayoutWebView.cshtml.
   */
    let _appVersion: string;
    export function SetAppVersion(appVersion: string) {
        if (appVersion) {
            _appVersion = appVersion;
        }
        else {
            _appVersion = undefined;
        }
    }
    /**
    * Get the deviceId of web view.
    */
    export function GetAppVersion() {
        return _appVersion;
    }


    /**
     * Webviews (pages designed to be hosted within a Workpulse app) must call this
     * method to share their OAuth bearer token with page's JavaScript so that it
     * can be used for authenticated API requests. See _LayoutWebView.cshtml.
     */
    export function SetAuthToken(apiToken: string) {
        if (apiToken) {
            _apiToken = apiToken;
        }
        else {
            _apiToken = undefined;
        }
    }
    let _apiToken: string;

    // The version of the API the web client is written to.
    const apiVersion = '2.0';

    /**
     * Get the AJAX HTTP headers for an API request that requires authentication
     * that may be from an app webview. The webviews' controller actions store the
     * bearer token from their page request.
     */
    export function GetAuthHeaders() {
        let ajaxHeaders: { Authorization?: string, 'x-wp-version': string, DeviceId?: string } = { 'x-wp-version': apiVersion };
        if (_apiToken) {
            ajaxHeaders.Authorization = _apiToken;
        }
        if (_deviceId) {
            ajaxHeaders.DeviceId = _deviceId;
        }
        return ajaxHeaders;
    }

    /**
     * Get the authentication access token (bearer token)
     */
    export function GetAuthToken() {
        return _apiToken;
    }

    /**
     * Set the defaults for an AngularJS $http service
     * @param defaults
     */
    export function SetHttpServiceDefaults(defaults: ng.IHttpProviderDefaults) {
        defaults.headers.common = GetAuthHeaders();
        // Return server-set cookies like ARRAffinity in requests
        defaults.withCredentials = true;
    }

    /**
     * $.ajax API request that includes the access token in the authentication header.
     * @param settings same as $.ajax url or settings parameter
     */
    export function AjaxApi(settings: JQueryAjaxSettings | string): JQueryXHR {
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

    /**
     * Set the base API URL for use by GetUrl.
     */
    export function SetApiUrl(apiUrl: string) {
        _apiUrl = apiUrl;
    }
    let _apiUrl: string;

    /**
     * Add a set of URLs to the lookup. urls is an object where the properties
     * are the URL keys and the values are their corresponding url paths (e.g. 'api/employee').
     * @param urls An object containing key:url properties
     */
    export function AddUrls(urls) {
        $.extend(_urls, urls);
    }

    /**
     * Get a URL by its key.  Returns undefined if the key isn't recognized.
     * 
     * @param key The name of the URL
     * @param idOrParams Optional; can be either a single Id value, or an object of query params to be appended. If its an Id it's included as another path segment.
     */
    export function GetUrl(key: string, idOrParams?: number | string | Object): string {
        let url = _urls[key];
        if (url && idOrParams !== undefined) {
            if (typeof idOrParams === 'object') {
                url = url + '?' + toUrlParams(idOrParams);
            } else {
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

    /**
     * Get a query parameter value from the current URL by its key.  Returns undefined if the key isn't recognized.
     * 
     * @param key The name of the parameter
     */
    export function GetUrlQueryString(key: string): string {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars[key];
    }

    function toUrlParams(params: Object) {
        // Remove any null or undefined fields as they get generated as "field=" by
        // $.param which Web API doesn't like.
        for (let key in params) {
            let value = params[key];
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
    export function UrlParam(name: string, url?: string) {
        if (!url) {
            url = window.location.href;
        }
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)', 'i').exec(url);
        if (!results) {
            return undefined;
        }
        return results[1] || undefined;
    }

    /**
     * Get the query parameters from a URL as an object
     * Example: '?a=1&b=2&c=3' => {a: '1', b: '2', c: '3'}
     * @param url
     */
    export function GetUrlParams(url: string) {
        var regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match: RegExpExecArray;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2];
        }
        return params;
    }

    /**
     * Get the best-available error message from the jQuery-wrapped XMLHttpRequest object
     * that's passed as the parameter to the error callback for $ajax.
     * @param jqXHR
     */
    export function XhrMessage(jqXHR: JQueryXHR): string {
        return (jqXHR.responseJSON && (jqXHR.responseJSON.exceptionMessage || jqXHR.responseJSON.message)) || jqXHR.statusText;
    }

    /**
     * Display a styled alert message box.
     * @param message The message to display or a jqXHR object to extract an error message from.
     * @param title Optional title for the box (defaults to 'Alert')
     * @param callback Optional callback that's called when the user clicks OK.
     */
    export function Alert(message: string | JQueryXHR, title = 'Alert', callback?: () => void) {
        if (typeof message !== 'string') {
            message = XhrMessage(message as JQueryXHR);
        }
        bootbox.alert({
            animate: false,
            title: title,
            message: message,
            callback: callback
        });
    }

    /**
    * Display a alert message box.
    * @param message The message to display or a jqXHR object to extract an error message from.
    */
    export function AlertJS(message: string | JQueryXHR) {
        if (typeof message !== 'string') {
            message = XhrMessage(message as JQueryXHR);
        }
        alert(message);
    }

    /**
     * Display a styled alert message box for an Angular IHttpPromise catch reason.
     * @param reason The parameter passed to the IHttpPromise catch handler.
     * @param title Optional title for the box (defaults to 'Alert')
     * @param callback Optional callback that's called when the user clicks OK.
     */
    export function AlertHttp(reason: any, title = 'Alert', callback?: () => void) {
        const message = reason.data ? reason.data.message : reason.xhrStatus;
        Alert(message, title, callback);
    }

    /**
     * Display a styled confirmation box.
     * @param message The confirmation message to display.
     * @param callback The callback to deliver the user's choice to.
     */
    export function Confirm(message: string, callback: (ok: boolean) => void) {
        bootbox.confirm({
            title: 'Confirm',
            message: message,
            callback: callback
        });
    }

    /**
     * Is the host a mobile browser?
     */
    export function IsMobileBrowser() {
        return navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh|Android/i) !== null
    }

    /**
     * Is the host a iOS browser?
     */
    export function IsiOSBrowser() {
        return navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh/i) !== null
    }

    /**
  * Is the host a Edge browser?
  */
    export function IsEdgeBrowser() {
        return navigator.userAgent.indexOf("Edge") > -1;
    }

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
    export function FormatCurrency(amount: string | number) {
        var currency = "$";
        if (amount == null) amount = "0.00";
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

    // Parse a currency string into a number.
    // e.g. '$1,234.56' => 1234.56
    export function ParseCurrency(amount: string) {
        if (!amount) {
            amount = '';
        }
        return Number(amount.replace(/,/g, '').replace('$', ''));
    }

    export function SetCookie(name: string, value: any) {
        document.cookie = `${name}=${value};path=/;secure;`;
    }

    export function GetCookieValue(name: string) {
        const match = document.cookie.match(RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
        return match ? match[1] : null;
    }

    /**
     * Initialize the location header selection
     */
    export function InitHeaderLocation() {
        // Do nothing if the location selector isn't present.
        if (!$("#HeaderSelectedLocationId").length) return;

        let locationId: string;
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
            if (locationId && $(`#HeaderSelectedLocationId option[value="${locationId}"]`).length) {
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
        $('#HeaderSelectedLocationId').on('change', function (this: { value: string }) {
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

    export function SetHeaderLocationId(locationId: number | string) {
        SetCookie('locationId', locationId);
    }

    export function GetHeaderLocationId() {
        const locationId = GetCookieValue('locationId');
        console.log('GetHeaderLocationId', locationId);
        return locationId;
    }

    export function GetHeaderPosTypeId() {
        const locationId = GetHeaderLocationId();
        let posTypeId = $(".pos-type-info select #loc" + locationId).attr("data-posTypeId");
        return posTypeId ? posTypeId : "0";
    }

    // Validate a product quantity against the quantity rules from the product catalog.
    // Returns null if the quantity is valid, otherwise an error message is returned.
    export function ValidateProductQuantities(qty: number, unitName: string, minQty: number, maxQty: number, roundingMethod: number, roundingQty: number, allowMinMax: boolean = true, allowRounding: boolean = true): string {
        if (qty == 0 || qty == null) {
            return null;
        } else if (qty < 0) {
            return "Quantity cannot be negative";
        } else if (unitName == 'EA' && qty % 1 != 0) {
            return "Quantity for unit " + unitName + " has to be integer";
        } else if (qty % 1 != 0 && qty % 1 != 0.25 && qty % 1 != 0.5 && qty % 1 != 0.75) {
            return "Quantity is allowed to be in only the following decimal options: 0.25, 0.5, 0.75";
        } else if (allowMinMax && minQty != null && minQty > 0 && qty < minQty) {
            return "Quantity cannot be less than minimum of " + minQty;
        } else if (allowMinMax && maxQty != null && maxQty > 0 && qty > maxQty) {
            return "Quantity cannot be greater than maximum of " + maxQty;
        } else if (allowRounding && (roundingMethod == 1 && roundingQty > 0) && (Number(qty) % roundingQty != 0)) {
            // Round up
            var quotient = Math.floor(Number(qty) / roundingQty);
            var newValue = (quotient + 1) * roundingQty;
            return "Rounding up has to be applied. Please change value to " + newValue.toString();
        } else if (allowRounding && (roundingMethod == 2 && roundingQty > 0) && (Number(qty) % roundingQty != 0)) {
            // Round down
            var quotient = Math.floor(Number(qty) / roundingQty)
            var newValue = quotient * roundingQty;
            return "Rounding down has to be applied. Please change value to " + newValue.toString();
        } else {
            return null;
        }
    }


    export function IsFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    export function NumberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    export function IsExactMatchSearch(text: string) {
        return text ? text.charAt(0) === '"' && text.charAt(text.length - 1) === '"' : false;
    }

    export function GetExactSearchText(text: string) {
        return text ? text.slice(1, -1).toLowerCase() : "";
    }

    export function FilterGrid(text: string, grid: any, parameters: Array<string>) {
        if (text != undefined && grid != null) {
            const useExactMatch = IsExactMatchSearch(text);
            if (useExactMatch) {
                text = GetExactSearchText(text);
            }
            if (text.length) {
                let operator = useExactMatch ? '=' : 'contains';
                let filterArray = [];

                parameters.forEach(p => {
                    filterArray.push([p, operator, text]);
                    filterArray.push("or");
                });

                grid.filter(filterArray);
            }
            else {
                grid.filter('');
            }
        }
    }

    export function TransformHtmlContent(html: string, isEdit: boolean = false) {
        const count = (html.match(/<iframe/g) || []).length;  //number of iframe tags       

        for (let i = 1; i <= count; i++) {
            const a = html.split('<iframe', i).join('<iframe').length;  //index of i'th occurance of <iframe
            const b = html.indexOf('src="', a);                      //index of i'th occurance of src
            const c = html.indexOf('type="application/pdf', b);
            const endOfIframe = html.indexOf('</iframe>', a);

            const tempIframePart = html.substring(a, endOfIframe);
            const isLink = tempIframePart.indexOf('class="link') > 0;
            const isYoutube = tempIframePart.indexOf('class="youtube') > 0;
            const isVimeo = tempIframePart.indexOf('class="vimeo') > 0;
            const isGooglemap = tempIframePart.indexOf('class="googlemap') > 0;

            const idPdfIFrame = !isLink && !isYoutube && !isVimeo && !isGooglemap;

            if (idPdfIFrame) {
                const src = html.substring(b + 5, c - 2);
                const blob = Base64ToBlob(src, "octet/stream", null);
                const blobUrl = URL.createObjectURL(blob);
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

    export function Base64ToBlob(b64Data: any, contentType: string, sliceSize: number) {
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

    export function FormatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }

        return null;
    }

    export function timeConvertor(time) {
        var PM = time.match('PM') ? true : false

        time = time.split(':')
        var min = 0;
        var hour = 0;

        if (PM) {
            if (time[0] < 12) {
                hour = 12 + parseInt(time[0], 10);
            }
            else {
                hour = time[0];
            }

            min = time[1].replace('PM', '')
        } else {
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

    export function timeConvertorWithSS(time) {
        var PM = time.match('PM') ? true : false

        time = time.split(':')
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
        } else {
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

    export function GetOrderStatusLabel(status: OrderStatusId) {
        switch (status) {
            case OrderStatusId.Open:
                return "Open";
            case OrderStatusId.Submitted:
                return "Submitted";
            case OrderStatusId.Processed:
                return "Processed";
            case OrderStatusId.Received:
                return "Received";
            case OrderStatusId.Posted:
                return "Posted";
            case OrderStatusId.Accepted:
                return "Accepted";
            case OrderStatusId.Rejected:
                return "Rejected";
            case OrderStatusId.PartiallyAccepted:
                return "Partially Accepted";
            case OrderStatusId.Deleted:
                return "Deleted";
            case OrderStatusId.Unprocessed:
                return "Unprocessed";
            default:
                return "";
        }
    }

    export function enableSaveButton() {
        $("#hdnchange").val("Y");
        $('.enablebtn').prop('disabled', false);
    }

    export function disableSaveButton() {
        $("#hdnchange").val("N");
        $('.enablebtn').prop('disabled', true);
    }

    export function unSavedModalPopUpData() {
        var isLost = false;
        if ($("#hdnchange").val() == "Y") {
            isLost = true;
            Workpulse.Site.Confirm('You have unsaved changes that will be lost.', (ok) => {
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

    export function getLegendColor(color: string) {
        switch (color) {
            case 'green': return '#00C000';
            case 'yellow': return '#FCFC00';
            case 'orange': return '#FFA500';
            case 'red': return '#F00000';
            default: return color;
        }
    }

    export function TrimLeandingTrailingCommas(str: string) {
        return str.replace(/(^,)|(,$)/g, "");
    }

    export function CheckSessionStorage() {
        const test = 'test';

        try {
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    export function CheckLocalStorage() {
        const test = 'test';

        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }
}
