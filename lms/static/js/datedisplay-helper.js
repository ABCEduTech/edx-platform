
/**
 *
 * A helper function to utilize DateUtils quickly in iterative display templates
 *
 * @param: {string} data-datetime pre-localized date, in UTC
 * @param: {string} data-time_zone (optional) user-set timezone preference.
 * @param: {string} lang The user's preferred language.
 * @param: {object} data-format (optional) a format constant as defined in DataUtil.dateFormatEnum.
 *
 * @param: {string} data-string (optional) ugettext-able string
 *
 * Localized according to preferences first, local data second.
 * Default to UTC/en-US Display if error/unknown.
 *
 * @return: {string} a user-time, localized, formatted datetime string
 *
 */

(function(define) {
    'use strict';

    define([
        'jquery',
        'edx-ui-toolkit/js/utils/date-utils'
    ], function(
        $,
        DateUtils
        ) {
        return function() {
            var displayTime;
            var displayString;
            $('.localized-datetime').each(function() {
                if ($(this).data('datetime') !== 'None' && $(this).data('datetime') !== undefined) {
                    // var context = {
                    //     datetime: $(this).data('datetime'),
                    //     // timezone: String($(this).data('datetime')),
                    //     // language: $(this).attr('lang'),
                    //     // format: $(this).data('format')
                    // }
                    // console.log(context)
                    // console.log($(this).data('datetime'))
                    // console.log(moment($(this).data('datetime')).tz($(this).data('timezone')))
                    displayTime = DateUtils.stringToMoment($(this).data('datetime'));
                    var d2 = DateUtils.localizeTime(displayTime)
                    console.log(d2)
                }

                // // console.log('HERE')
                // console.log($(this).data('timezone'))
                // console.log($(this).attr('lang'))
                // console.log($(this).data('format'))
                // // console.log()
                //
                //     console.log('HERE')
                // var context = {
                //     datetime: String($(this).data('timezone')),
                //     timezone: String($(this).data('datetime')),
                //     language: $(this).attr('lang'),
                //     format: $(this).data('format')
                // };
                // displayTime = DateUtils.localize(context);
                // console.log(displayTime)
                // }

                // LOAD DATA
            // if ($(this).data('string') !== undefined && $(this).data('string').length > 0) {
            //     displayString = StringUtils.interpolate(
            //         $(this).data('string'), {date: displayTime}
            //     );
            // } else {

 //                 * var context = {
 // *    datetime: '2016-10-14 08:00:00+00:00',
 // *    timezone: 'Pacific/Kiritimati',
 // *    language: 'ar',
 // *    format: DateUtils.dateFormats.shortDate
 // * };




                displayString = displayTime;
            // }
                 $(this).text(displayString);
            });
        };
    });
}).call(this, define || RequireJS.define);

