(function($) {

    /*
     * Spawn optionlift api client
     * olApi(apiUrl, tradingPlatformUrl)
     */
    var olSdkClient = new olSdk('//office.binaring.com/api/', 'https://binaring.com/trading');
    
    olSdkClient.connectRegistrationForm({
        '$form'            : $('#open-account-form'),
        '$phone_prefix'    : $('#open-account-form input[name="phone_prefix"]'),
        '$country'         : $('#open-account-form select[name=country]'),
        'appendCountries'  : true,
        'detectCountry'    : true
    });

})(jQuery);